const app = "I don't do much.";
const token = "556c20ed2cb9089777a93ee113af1bf0ca510fc3"

fetch('https://api.github.com/user/repos',{
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
