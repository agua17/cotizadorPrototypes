function Seguro (marca,year,tipo){
    this.marca = marca;
    this.year= year;
    this.tipo = tipo;
}

function UI() {}

    UI.prototype.llenarOpciones = ()=>{
        const max = new Date().getFullYear(),
        min = max - 20;

        const selectYear = document.querySelector('#year');

        for (let i = max; i > min; i--) {
            let option = document.createElement('option');
                option.value = i; 
                option.textContent = i; 
                selectYear.appendChild(option);
            
        } 
    }



const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', ()=> {
    ui.llenarOpciones();

})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizador-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    console.log ('Cotizando...');
}