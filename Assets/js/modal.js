const modalCnt = document.querySelector("#modalColors")
const close = document.querySelector(".modal__close")
const codeContainer = document.querySelector(".code__container")
const modalBtn = document.querySelector('#sidebar__modal_btn')

const fundo = ['fundo_green','fundo_blue','fundo_red','fundo_yellow','fundo_purple','fundo_white','fundo_pink','fundo_orange']


function modal(){
    // modalBtn.style.dysplay = "block";
    modalCnt.classList.remove('overlay-desactive')
    modalCnt.classList.add('overlay-active')
}
function closeModal(){
    modalCnt.classList.remove('overlay-active')
    modalCnt.classList.add('overlay-desactive')
}


const green = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_green")
    modalBtn.classList.add("fundo_green")
    modalBtn.value="fundo_green"
}
const blue = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_blue")
    modalBtn.classList.add("fundo_blue")
    modalBtn.value="fundo_blue"
}
const red = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_red")
    modalBtn.classList.add("fundo_red")
    modalBtn.value="fundo_red"
}
const yellow = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_yellow")
    modalBtn.classList.add("fundo_yellow")
    modalBtn.value="fundo_yellow"
}

const purple = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_purple")
    modalBtn.classList.add("fundo_purple")
    modalBtn.value="fundo_purple"
}
const white = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_white")
    modalBtn.classList.add("fundo_white")
    modalBtn.value="fundo_white"
}
const pink = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_pink")
    modalBtn.classList.add("fundo_pink")
    modalBtn.value="fundo_pink"
}
const orange = () => {
    codeContainer.classList.remove(...fundo);
    modalBtn.classList.remove(...fundo)
    codeContainer.classList.add("fundo_orange")
    modalBtn.classList.add("fundo_orange")
    modalBtn.value="fundo_orange"
}