const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndResponse(handle) {
  const user = await fetchFromGitHub(`/users/${handle}`);
  const repos = await fetchFromGitHub(`/users/${handle}/repos`);
  console.log(user.name);
  console.log(`${repos.length} repos`)
}



const BlueBird = require("bluebird");

async function main() {
  console.log("Working ...");
  await BlueBird.delay(2000);
  console.log("Done..");
}
main();
showUserAndResponse("serendipitist");

function someGen() {
  yield 1;
  yield 2;
  yield 3;
}