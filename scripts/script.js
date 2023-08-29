//const mobile = documento.getElementById("mobile")
//const mobile = documento.querySelector("#mobile")
//javascript (acima)
const mobile = $("#mobile")
const desktop = $("#mobile")
const flowwork = $("#mobile")
const descricaoMobile = $("#descricaoMobile")
const descricaoDesktop = $("#descricaoDesktop")
const descricaoFlowwork = $("#descricaoFlowwork")

//mobile.addEventListener('click', mostrarDescMobile)
//function mostrarDescMobile(){

//}

mobile.on('click', function(){
    descricaoMobile.slideToggle(500)

})