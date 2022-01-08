const http = require("http");

const allomasNev = "127.0.0.1";
const port = 3568;

const szerver = http.createServer((keres, valasz) => {
  valasz.statusCode = 200;
  valasz.setHeader("Content-Type", "text/plain");
  valasz.end("Sziasztok Skacok!");
});

szerver.listen(port, allomasNev, () => {
  console.log(`A szerver a http://${allomasNev}:${port}/ -n fut.`);
});
