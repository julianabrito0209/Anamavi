
const bolsaPraia = $("#bolsaPraia")
const clutch = $("#clutch")
const maeFilha = $("#maeFilha")

const descricaoBolsaPraia = $("#descricaoBolsaPraia")
const descricaoClutch = $("#descricaoClutch")
const descricaoMaeFilha = $("#descricaoMaeFilha")


bolsaPraia.on('click' , function(){
    descricaoBolsaPraia.slideToggle(500)
    descricaoClutch.slideUp(100)
    descricaoMaeFilha.slideUp(100)

})

clutch.on('click' , function(){
    descricaoClutch.slideToggle(500)
    descricaoBolsaPraia.slideUp(100)
    descricaoMaeFilha.slideUp(100)
})

maeFilha.on('click' , function(){
    descricaoMaeFilha.slideToggle(500)
    descricaoBolsaPraia.slideUp(100)
    descricaoClutch.slideUp(100)
    

})
