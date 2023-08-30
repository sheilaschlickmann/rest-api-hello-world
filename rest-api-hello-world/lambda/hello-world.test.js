const { handler } = require('./hello-world.js');

test('test lambda handler', async () => {
  const event = {};  
  const context = {}; 
  const response = await handler(event, context);

  expect(response.statusCode).toBe(200);
  expect(response.headers["Content-Type"]).toBe("application/json");
  expect(response.body).toBe(JSON.stringify({ message: "Hello world!!" }));
});
