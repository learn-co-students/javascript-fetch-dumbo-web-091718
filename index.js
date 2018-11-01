const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${c0d201216de7a5c2ff8e2a7d5d3c6b2f38020be4}`
  }
}).then(res => res.json()).then(json => console.log(json));
