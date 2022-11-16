
import request from 'supertest';
import { app } from '../../../../server';
import { DBUSER } from '../../Model/User';

describe('Register User Controller', () => {
  let userId: string;
  
  afterAll(async () => {
    await DBUSER.findByIdAndDelete({_id: userId})
  });

  it('should be able to register user' , async() => {
    const register = await request(app)
      .post('/user/register')
      .send({
        fullName: 'User test',
        email: 'usertest@gmail.com',
        password: 'user@123'
      })

    expect(register.status).toEqual(200)
    expect(JSON.parse(register.text).msg).toHaveProperty('_id');

    userId = JSON.parse(register.text).msg._id;
  });
});