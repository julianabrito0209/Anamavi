
const boleto = $("#boleto")
const dinheiro = $("#dinheiro")
const cartao = $("#cartao")

const descricaoBoleto = $("#descricaoBoleto")
const descricaoDinheiro = $("#descricaoDinheiro")
const descricaoCartao = $("#descricaoCartao")


boleto.on('mousein' , function(){
    descricaoBolsaPraia.slideToggle(500)
    descricaoClutch.slideUp(100)
    descricaoMaeFilha.slideUp(100)

})

dinheiro.on('Mousein' , function(){
    descricaoClutch.slideToggle(500)
    descricaoBolsaPraia.slideUp(100)
    descricaoMaeFilha.slideUp(100)
})

cartao.on('Mousein' , function(){
    descricaoCartao.slideToggle(500)
    descricaoBoleto.slideUp(100)
    descricaoDinheiro.slideUp(100)
    

})