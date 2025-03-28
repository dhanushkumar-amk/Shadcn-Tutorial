
const app = require("express")();

const PORT = 3000;

if (!PORT) throw new Error("Port not defined");

app.get("/app", (req, res) => {
  console.log(`App on port ${PORT} serving...`);

  res.status(200).send(`<h1>App Served by app on ${PORT} </h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
    });


app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
