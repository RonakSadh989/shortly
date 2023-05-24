async function getData() {
  const div = document.getElementsByClassName("links-div")[0];
  const url = document.getElementById("input").value;
  console.log(url);
  let apiURL = `https://api.shrtco.de/v2/shorten?url=${url}`;

  const response = await fetch(apiURL);
  var data = await response.json();
  console.log(data);
  localStorage.setItem("url",data.result.full_short_link)

  let link = `<div class="links">
    <p>${url}</p>
    <div>
    <p>${data.result.full_short_link}</p>
      <button onClick="copy()">Copy</button>
    </div>
  </div>`;
  div.innerHTML = link;


  document.getElementById("input").value = "";
}
// getData();
function copy() {
    navigator.clipboard.writeText(localStorage.getItem("url"));
    alert("Copied to Clipboard");
}

// const button = document.getElementById("short-button");
// if(document.getElementById("input").value == ""){
//     button.setAttribute("disabled", true);
// }
// else{
    
//     button.setAttribute("disabled", false);
// }