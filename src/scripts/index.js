import { users, posts, suggestUsers } from "./database.js"

function gerarSugestão(){
    
    const containerSugestoes = document.querySelector('.sugestoes__container')
    containerSugestoes.innerHTML = ''
    
    for(let i = 0; i < suggestUsers.length; i++){
        const divContainerPerfil = document.createElement('div')
        const div = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const divNome = document.createElement('div')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const divButton = document.createElement('div')
        const buttonSeguir = document.createElement('button')

        img.src = suggestUsers[i].img
        h2.innerHTML = suggestUsers[i].user
        p.innerHTML = suggestUsers[i].stack
        buttonSeguir.innerHTML = 'seguir'
        divButton.classList.add('button-seguir__container')
        buttonSeguir.classList.add('button__segir')
        divContainerPerfil.classList.add('perfil__container')
        div.classList.add('perfil')
        
        containerSugestoes.append(divContainerPerfil)
        divContainerPerfil.append(div)
        divContainerPerfil.append(divButton)

        div.append(figure)
        div.append(divNome)

        figure.append(img)

        divNome.append(h2)
        divNome.append(p)

        divButton.append(buttonSeguir)
    }
}

function gerarPosts(array){
    const divPostsContaner = document.querySelector('.posts__container')
    divPostsContaner.innerHTML = ''

    array.forEach(element => {
        console.log(element)

        const divPostsUsuario = document.createElement('div')

        const divPerfil = document.createElement('div')
        const figurePerfil = document.createElement('figure')
        const imgPerfil = document.createElement('img')
        const divNome = document.createElement('div')
        const h2Nome = document.createElement('h2')
        const pStack = document.createElement('p')
        const divConteudo = document.createElement('div')
        const h2Conteudo = document.createElement('h2')
        const pConteudo = document.createElement('p')
        const divAbrirPost = document.createElement('div')
        const bntAbritPost = document.createElement('button')
        const spanCurtir = document.createElement('span')

        divPostsContaner.append(divPostsUsuario)

        divPostsUsuario.append(divPerfil)
        divPostsUsuario.append(divConteudo)
        divPostsUsuario.append(divAbrirPost)

        divPerfil.append(figurePerfil)
        divPerfil.append(divNome)

        figurePerfil.append(imgPerfil)

        divNome.append(h2Nome)
        divNome.append(pStack)

        divConteudo.append(h2Conteudo)
        divConteudo.append(pConteudo)

        divAbrirPost.append(bntAbritPost)
        divAbrirPost.append(spanCurtir)

        divPostsUsuario.classList.add('post__usuario')

        divPerfil.classList.add('perfil')
        imgPerfil.src = element.img
        h2Nome.innerHTML = element.user
        pStack.innerHTML = element.stack

        divConteudo.classList.add('conteudo-post__usuario')
        h2Conteudo.innerHTML = element.title
        pConteudo.innerHTML = element.text

        divAbrirPost.classList.add('post__abrir')
        bntAbritPost.innerHTML = 'Abrir post'
        bntAbritPost.classList.add('abrir__post' ,'button__conza')
        spanCurtir.classList.add('curtir__post')
        spanCurtir.innerHTML = `\u2764\uFE0F ${element.likes}`
        

        bntAbritPost.addEventListener('click', () => {
            mostrarPost(bntAbritPost, element)
        })
    });
}

// function gerarPosts(){

//     const postsContaienr = document.querySelector('.posts__container')
//     postsContaienr.innerHTML = ''
    
//     for(let i = 0; i < posts.length; i++){
//         const postUsuario = document.createElement('div')
//         postUsuario.innerHTML = ''

//         const divPerfil = document.createElement('div')
//         const figure = document.createElement('figure')
//         const img = document.createElement('img')
//         const divNome = document.createElement('div')
//         const h2 = document.createElement('h2')
//         const p = document.createElement('p')

//         const divConteudo = document.createElement('div')
//         const titulo = document.createElement('h2')
//         const conteudoPrincipal = document.createElement('p')

//         const divBottons = document.createElement('div')
//         const abrirPost = document.createElement('button')
//         const curtir = document.createElement('span')
//         const curtirImg = document.querySelector('img')
//         const quantidadeCurtidas = document.createElement('p')

//         divPerfil.classList.add('perfil')
//         postUsuario.classList.add('post__usuario')
//         img.src = posts[i].img
//         h2.innerHTML = posts[i].user
//         p.innerHTML = posts[i].stack
//         divPerfil.classList.add('perfil')

//         postsContaienr.append(postUsuario)
//         postUsuario.append(divPerfil)
//         divPerfil.append(figure)
//         divPerfil.append(divNome)
//         figure.append(img)
//         divNome.append(h2)
//         divNome.append(p)

//         divConteudo.classList.add('conteudo-post__usuario')
//         titulo.innerHTML = posts[i].title
//         conteudoPrincipal.innerHTML = posts[i].text

//         postUsuario.append(divConteudo)
//         divConteudo.append(titulo)
//         divConteudo.append(conteudoPrincipal)

//         divBottons.classList.add('post__abrir')
//         abrirPost.classList.add('abrir__post')
//         abrirPost.classList.add('button__conza')
//         abrirPost.innerHTML = 'Abrir Post'
//         curtir.classList.add('curtir__post')
//         quantidadeCurtidas.innerHTML = posts[i].likes
//         curtirImg.src = "src/assets/img/coracao_deful.png"
//         curtirImg.alt = 'curtir'
        

//         postUsuario.append(divBottons)
//         divBottons.append(abrirPost)
//         divBottons.append(curtir)
//         curtir.append(curtirImg)
//         curtir.append(quantidadeCurtidas)

//         abrirPost.addEventListener('click', () => {
//             mostrarPost(abrirPost, posts[i])
//         })
//     }
// }

function mostrarPost (botaoDoEvento,post){
    const modalControler = document.querySelector('.modal__controler')
    const modalContainer = document.querySelector('.modal__container')
    const fechar = document.createElement('span')

    modalContainer.append(fechar)
    fechar.classList.add('fechar')
    fechar.innerHTML = 'x'

    const divPerfil = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const divNome = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    divPerfil.classList.add('perfil')
    img.src = post.img
    h2.innerHTML = post.user
    p.innerHTML = post.stack

    modalContainer.append(divPerfil)
    divPerfil.append(figure)
    figure.append(img)
    divPerfil.append(divNome)
    divNome.append(h2)
    divNome.append(p)

    const divConteudo = document.createElement('div')
    const titulo = document.createElement('h2')
    const conteudoPrincipal = document.createElement('p')

    divConteudo.classList.add('conteudo-post__usuario')
    titulo.innerHTML = post.title
    conteudoPrincipal.innerHTML = post.text
    
    modalContainer.append(divConteudo)
    divConteudo.append(titulo)
    divConteudo.append(conteudoPrincipal)

    modalControler.showModal()
 
    fechar.addEventListener('click', () => {
        modalControler.close()
        modalContainer.innerHTML = ''
    })
}


gerarSugestão()
gerarPosts(posts)