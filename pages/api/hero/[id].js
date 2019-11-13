import fetch from "isomorphic-unfetch";

export default async function(req, res) {
  const { query: { id } } = req;

  const result = await fetch(
    `https://superheroapi.com/api.php/${process.env.SUPERHEROAPI_KEY}/${id}`
  );
  const data = await result.json();

  res.send(data);
}
