import request from 'supertest';
import {app} from "../../../../server";

describe('List My Friends Controller', () => {
  let token: string;
  let userId: string;

  beforeAll(async () => {
    const login = await request(app)
      .post('/user/login')
      .send({
        email: 'a@gmail.com',
        password: '123123123'
      });

    const user = JSON.parse(login.text).msg;
    token = user.token;
    userId = user._id;
  });

  it('should not be able to list my friends -> Unauthorized', async() => {
    const list = await request(app)
      .get(`/friends/${userId}`)

    const message = JSON.parse(list.text).msg;

    expect(list.status).toEqual(400);
    expect(message).toEqual('Unauthorized');
  });

  it('should not be able to list my friends -> Unauthorized', async() => {
    const list = await request(app)
      .get(`/friends/123`)
      .set('authorization', token)

    const message = JSON.parse(list.text).msg;

    expect(list.status).toEqual(400);
    expect(message).toEqual('Unauthorized');
  });

  it('should be able to list my friends', async() => {
    const list = await request(app)
      .get(`/friends/${userId}`)
      .set('authorization', token)

    const message = JSON.parse(list.text).msg;

    expect(list.status).toEqual(200);
    expect(message.length >= 0 ).toEqual(true);
  });
})