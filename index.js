// const app = "I don't do much.";

const token = getToken()

const request = function(){
  fetch('https://api.github.com/user/repos', {
      method: "GET",
      headers:{ Authorization: `token ${token}`}
      // body: JSON.stringify( ? k&&v :k)
  })
  .then(res => res.json())
  .then(json => console.log(json)); //(30) [{…}, {…}, {…}
}

function getToken(){
  const token = ""
  return token
}

request()
