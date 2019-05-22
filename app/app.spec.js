import server, { close } from './app';

describe('app.js', () => {
  
  /** Closes the server. */
  afterAll(close);

  test('should ', () => {
    expect(true).toBe(true);
  });
});
