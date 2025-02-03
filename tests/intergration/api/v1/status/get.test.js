test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responsebody = await response.json();

  console.log(responsebody);

  const parseUpdatedAt = new Date(responsebody.updated_at).toISOString();

  expect(responsebody.updated_at).toEqual(parseUpdatedAt);

  expect(responsebody.dependencies.database.version).toEqual("16.0");
  expect(responsebody.dependencies.database.max_connections).toEqual(100);
  expect(responsebody.dependencies.database.opened_connections).toEqual(1);
});
