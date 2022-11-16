import getError from "../../../../utils/Erros/getError";
import ListFriendsUseCase from "./ListMyFriendsUseCase";
import FriendRepositoryInMemory from "../../Repositories/in-memory/FriendRepositoryInMemory";

describe('List Friends Use Case' , () => {
  let friendRepository: FriendRepositoryInMemory;
  let listFriendsUseCase: ListFriendsUseCase;

  beforeAll(() => {
    friendRepository = new FriendRepositoryInMemory();
    listFriendsUseCase = new ListFriendsUseCase(friendRepository);
  });
  
  it('should not be able to list friends -> Invalid idUser', async () => {
    const list: Error = await getError(async () => {
      await listFriendsUseCase.execute({userId: '', authorization: ''});
    })
    
    expect(list).toBeInstanceOf(Error);
    expect(list.message).toEqual('Invalid idUser');
  });

  it('should be able to list friends', async () => {
    const list = await listFriendsUseCase.execute({userId: '123', authorization: ''});
    
    expect(list.status).toEqual(200);
  });

})