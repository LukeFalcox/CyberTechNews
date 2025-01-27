import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum");
  console.log(result.rows);
  return response.status(200).json({ teste: "TESTE TABNEWS OLÁ A TODOS" });
}

export default status;
