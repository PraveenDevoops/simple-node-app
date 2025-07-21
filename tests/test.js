const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/');
    assert.equal(response.statusCode, 200);
  });
});
