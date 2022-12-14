

function populateUFs(){
   const ufSelect =  document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) 
    .then(  states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value=${state.id}"1">${state.nome}</option>`
        }

   })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")

    const uFvalue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uFvalue}/municipios`

    fetch(url)
    .then( res => res.json() ) 
    .then( cities => {
        for( const city of states ) {
            citySelect.innerHTML += `<option value=${city.id}"1">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}




document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)