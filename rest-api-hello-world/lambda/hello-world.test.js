const { handler } = require('.lambda/hello-world.js');

test('test lambda handler', async () => {
  const event = {};  // você pode colocar aqui um evento de exemplo
  const context = {}; // e aqui um contexto de exemplo
  
  const response = await handler(event, context);

  expect(response.statusCode).toBe(200);
  expect(response.headers["Content-Type"]).toBe("application/json");
  expect(response.body).toBe(JSON.stringify({ message: "Hello world!!!!!!" }));
});
