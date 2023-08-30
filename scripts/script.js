//const mobile = documento.getElementById("mobile")
//const mobile = documento.querySelector("#mobile")
//javascript (acima)
const bolsaPraia = $("#bolsaPraia")
const clutch = $("#clutch")
const maeFilha = $("#maeFilha")
const descricaoBolsaPraia = $("#descricaoMobile")
const descricaoClutch = $("#descricaoClutch")
const descricaoMaeFilha = $("#descricaoMaeFilha")

//mobile.addEventListener('click', mostrarDescMobile)
//function mostrarDescMobile(){

//}

mobile.on('click', function(){
    descricaoMobile.slideToggle(500)

})