let botao = document.getElementById('meuBotao')
let relogio = document.getElementById('cronometro')
let zerar = document.getElementById('zerar')
let pausar = document.getElementById('pausar')

botao.addEventListener('click', ()=>{
    botao.disabled = true
    zerar.addEventListener('click', ()=> {
        relogio.innerText = 0
        clearInterval(interv)
        botao.disabled = false
    })
    pausar.addEventListener('click', ()=>{
        clearInterval(interv)
        botao.disabled = false
    })
    let interv = setInterval(()=>{
        relogio.innerText = Number(relogio.innerText) + 1
    }, 1000)
})

