

function toggMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', "./assets/avatar sol.png")
        img.setAttribute('alt', "imagem de perfil: um avatar de uma menina ruiva com oculos de sol com fundo azul claro")
    } else {
        img.setAttribute('src', "./assets/lua.png")
        img.setAttribute('alt', "apenas 'zzz' e uma pequana lua que esta dormindo. A avatar ja não esta na imagem, indicando que ela foi dormir.")
    }
}
