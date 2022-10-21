/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function searchFlora() {

    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("searchInput").classList.toggle("show");

    if(smallWindow)
      document.getElementById("myDropdown").classList.toggle("dropUp");

    loadButtons();
  }
  var searchButton = document.getElementById("searchButton");
  if(searchButton != null)
  {
    searchButton.addEventListener('click', searchFlora);
  }
  
  function filterFunction() {
    var input, filter, ul, li, button, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    button = div.getElementsByClassName("searchButton");
    console.log(button.length);
    for (i = 0; i < button.length; i++) {
      txtValue = button[i].textContent || button[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        button[i].style.display = "";
      } else {
        button[i].style.display = "none";
      }
    }
  }

function loadButtons()
{
    grimoireRaw.forEach(element => createButton(element));
}

function createButton(flora)
{
    var tag = document.createElement("button");
    tag.className = "searchButton";
    var text = document.createTextNode(flora.name);
    tag.appendChild(text);
    var element = document.getElementById("myDropdown");
    element.appendChild(tag);
    tag.item = flora;
    tag.addEventListener('click', floraSelect);
}

function floraSelect(evt)
{
    selectedFlora = evt.currentTarget.item;
    console.log(selectedFlora.name);
    startExperience();
    updateInfo("Foraging for " + selectedFlora.name);
}

var randomButton = document.getElementById("randomButton");
if(randomButton != null)
{
  randomButton.addEventListener('click', randomFlora);
}

function randomFlora()
{
    startExperience();
    updateInfo("Foraging for random flora.");
}

document.getElementById("refresh").addEventListener("click", restart)

function restart()
{
  location.reload();
}

const info = document.getElementById("info");

function updateInfo(text)
{
  info.textContent = text;
}

document.getElementById("infoButton").addEventListener("click", infoWindow)

function infoWindow()
{
  window.open("info.html", "_blank");
}