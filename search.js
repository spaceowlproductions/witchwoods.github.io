/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function searchFlora() {
    document.getElementById("myDropdown").classList.toggle("show");
    loadButtons();
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
    tag.addEventListener("click", floraSelect);
}

function floraSelect(evt)
{
    selectedFlora = evt.currentTarget.item;
    console.log(selectedFlora.name);
    startExperience();
}

function randomFlora()
{
    startExperience();
}
  