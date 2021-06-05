const menu = document.querySelector("#menu");
// var dropBtn = document.querySelector("#btn-dropdown");
const openedMenu = document.querySelector("#btn-dropdown");
const closedMenu = document.querySelector("#closeMenu");

// function dropdow() {
//     menu.classList.toggle("menu__container-desactived");
//     menu.classList.toggle("menu__container-actived");
// }

function openMenu(){
    menu.classList.add("menu__container-actived");
    menu.classList.remove("menu__container-desactived");

    closedMenu.classList.remove("desactive");
    closedMenu.classList.add("active");
    openedMenu.classList.add("desactive");
    openedMenu.classList.remove("active");

}
function closeMenu(){
    menu.classList.add("menu__container-desactived");
    menu.classList.remove("menu__container-actived");

    closedMenu.classList.remove("active");
    closedMenu.classList.add("desactive");
    openedMenu.classList.add("active");
    openedMenu.classList.remove("desactive");
}
// const modalCnt = document.querySelector("#modalColors")
// const close = document.querySelector(".modal__close")
// const codeContainer = document.querySelector(".code__container")
// const modalBtn = document.querySelector('#sidebar__modal_btn')


  // Close the dropdown if the user clicks outside of it
// window.onclick = (event)=> {
//     // menu.classList.remove("menu__container-actived")
//     if (event.target.matches('.header__search__menu_btn')) {
//         var dropdowns = document.getElementsByClassName("menu");
//         dropdowns.classList.remove('.menu__container-actived')
//         console.log("hello")
//     }
// }


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