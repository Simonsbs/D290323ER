let logRoot = document.getElementById("log");

function log(message, title = "Log Output:", tag = "h3") {
  logRoot.innerHTML += `<fieldset><legend>${title}</legend><${tag}>${message}</${tag}></fieldset>`;
  console.log(`Log: ${message}`);
}