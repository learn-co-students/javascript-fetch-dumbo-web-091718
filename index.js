const app = "I don't do much.";
const token = "720f1d97e33a33ea9bb5529065d6d71124a5c6db";

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
