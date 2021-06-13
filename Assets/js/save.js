const title = document.querySelector(".js-title");
const descrition = document.querySelector(".js-descrition");
const language = document.querySelector(".js-language");
const code = document.querySelector(".js-code");
const btnSalvar= document.querySelector(".js-btn-savar");
const borderColor = document.querySelector(".js-color")

btnSalvar.addEventListener('click', ()=>{
    if(typeof(Storage) !== 'undefined'){
        console.log("suporta")
        const projeto = montar()
        salvar(projeto)
    }else{
        console.log("not suport")
    }
})


function montar(){
    let projeto={
        'id': addId(),
        'details':{
            'titleProject':title.value,
            'descriptionProject': descrition.value,
            'language':language.value,
            'code':code.innerText,
            'color':borderColor.value
        }
    }
    return projeto
}

function addId(){
    return localStorage.length
}

function salvar(objectJson){
    localStorage.setItem(objectJson.id, JSON.stringify(objectJson))
}