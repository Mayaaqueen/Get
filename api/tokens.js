export default async function handler(req, res) {
  const response = await fetch("http://68.183.229.2:3000/tokens.json");
  const data = await response.json();
  res.status(200).json(data);
}
