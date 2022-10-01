/*
$ sudo apt update
$ sudo apt install npm -y
$ sudo npm install n -g
$ sudo n stable
$ npm install simple-git
*/
/*
$ node ~/git.js
*/
//const fs = require("fs").promises;
const git = require("simple-git");
const user = "ixyzxyz";
const email = "";
const token = "";
const repository = "data";
const directory = `${__dirname}/${repository}`;
clone();
//pull();
//push();
//reset();
function clone() {
  git().addConfig("user.email", email, false, "global");
  git().clone(`https://${user}:${token}@github.com/${user}/${repository}.git`, directory);
}
function pull() {
  git(directory).pull();
}
function push() {
  git(directory).add("futures.csv").commit("commit").push(["--force"]);
}
function reset() {
  git(directory).fetch(["--all"]);
  git(directory).reset("hard", ["origin"]);
}