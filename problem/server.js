const server = require("http").createServer();

function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  return sum;
}

// async function longComputation() {
//   return new Promise((resolve, reject) => {
//     try {
//       let sum = 0;
//       for (let i = 0; i < 1e10; i++) {
//         sum += i;
//       }
//       resolve(sum);
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    const sum = longComputation();
    res.end(`sum is ${sum}\n`);
  } else {
    res.end("ok brah!\n");
  }
});
server.listen(8000);
