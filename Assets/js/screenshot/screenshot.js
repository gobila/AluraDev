// Esse arquivo é responsavel pela integração das bibliotecas HTML2Canvas e Canvas2Image
//a função takeshot é chamada no botao salvar projeto

function takeshot(){
    html2canvas(document.getElementById("photo"),{backgroundColor: "transparent", padding:"0px"}).then(canvas => {
        // document.getElementById('output').appendChild(canvas)
        return Canvas2Image.saveAsPNG(canvas);
        console.log(canvas)
    });
}