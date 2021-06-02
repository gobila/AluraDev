const codeText = document.querySelector("#codigo");
const linguagem = document.querySelector(".sidebar__options");
const btn = document.querySelector(".code__btn");

function formatSintax(){
    const code = codeText.querySelector("code");
    codeText.innerHTML = `<code class="hlhj ${linguagem.nodeValue}" contenteditable="true" id="codeArea" area-label="editor"></code>`;
    codeText.firstChild.innerText = code.innerText
}

linguagem.addEventListener("change", ()=>{
    formatSintax()
})

btn.addEventListener("click", ()=>{
    const code = codeText.querySelector("code");
    hljs.highlightBlock(code)
})