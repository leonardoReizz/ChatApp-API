
// @ts-ignore
import md5 from 'md5';
import request from 'supertest';
import { app } from '../../../../server';
import { DBUSER } from '../../Model/User';


describe('Login User Controller', () => {
  let userId: string;
  
  beforeAll(async () => {
     await new DBUSER({
      email: 'teste@gmail.com',
      password: md5('teste@123')
    })
    .save()
    .then((result) => {
      userId = result._id.toString();
    })
  });

  afterAll(async() => {
    console.log(userId, ' delete')
    await DBUSER.findByIdAndDelete({_id: userId});
  });

  it('should not be able to login -> Invalid email or password', async () => {
    const login = await request(app)
      .post('/user/login')
      .send({
        email: 'teste@gmail.com',
        password: '321@teste'
      });
    
    expect(login.status).toEqual(400);
    expect(JSON.parse(login.text).msg).toEqual('Invalid email or password');
  });

  it('should be able to login', async () => {
    const login = await request(app)
      .post('/user/login')
      .send({
        email: 'teste@gmail.com',
        password: 'teste@123'
      })

    expect(login.status).toEqual(200);
    expect(JSON.parse(login.text).msg.token).toBeDefined();
    expect(JSON.parse(login.text).msg.password).not.toBeDefined();

  });
});