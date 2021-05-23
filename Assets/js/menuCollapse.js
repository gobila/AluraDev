var menu = document.querySelector("#menu");
var dropBtn = document.querySelector("#btn-dropdown");

function dropdow() {
    menu.classList.toggle("menu__container-desactived");
    menu.classList.toggle("menu__container-actived");
  }
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
      console.log("hello")
    if (event.target.matches('.header__search__menu_btn')) {
        var dropdowns = document.getElementsByClassName("menu");
        dropdowns.classList.remove('menu__container-desactived')
    }
}


// // var inputField = document.querySelector("#new_task");
// var myButton = document.querySelector("#btn-dropdown");
// // var taskList = document.querySelector("#tasks"); 
// // var lis = document.querySelectorAll("#tasks li");

// function dropdow(event) {
//   if(event.target.classList.contains("menu__container-desactived"))
//      event.target.classList.remove("menu__container-desactived");
//   else
//      event.target.classList.add("menu__container-actived");
// }

// // // add onclick handler to existing nodes
// // for(var i=0; i<lis.length; ++i) lis[i].onclick = clickHandler;

// myButton.onclick = function() {
// var newList = document.createElement("li");
// taskList.appendChild(newList);
// newList.innerHTML = inputField.value;
// inputField.value = "";
// // add onclick handler to new nodes
// newList.onclick = clickHandler;

// }