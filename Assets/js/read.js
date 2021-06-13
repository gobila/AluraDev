const allProjects = document.querySelector(".js-projects")

new function(){
    readProjects()
}

function readProjects(){
    if(localStorage.length ==0){
        return
    }

    let projetos = [];
    for(let i=0; i< localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)));
    }

    projetos.forEach(projeto =>{
        const card = makeCard(projeto)
        allProjects.innerHTML += card;
        const codeForText = allProjects.querySelector(`[data-id="${projeto.id}"]`);
        codeForText.querySelector('code').innerText= projeto.details.code
    })
}
// hljs ${projeto.details.language}
function makeCard(projeto){
    let card = `
    <div class="project__card  js-projects ">
                <a  data-id="${projeto.id}">
                    <div class="project__card__codigo ${projeto.details.color}">
                        <code class="hljs hlhj ${projeto.details.language}"></code>
                    </div>
                    <div class="project__card_title">
                        <h2 class=""> ${projeto.details.titleProject}</h2>
                    </div>
                    <div class="project__card_description">
                        <p class="description"> ${projeto.details.descriptionProject}</p>
                    </div>
                    <div class="project__card_footer">
                        <div class="project__card_footer-engagement">
                            <p class="project__card-coments">💬 9</p>
                            <p class="project__card-like">❤ 9</p>
                        </div>
                        <div class="project__card_footer-user">
                            <img class="header__user_img" src="./Assets/img/Photo.png" alt=""/>
                            <p class="header__user_name">Herry</p>
                        </div>
                    </div>
                </a>
                </div>`;

    return card;
}