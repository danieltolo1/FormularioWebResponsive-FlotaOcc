
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expersiones = {
    numBus12: /\d{3,5}/
}

const validarFormulario = (e) => {
  switch (e.target.name){
      case "numerBus":
          if(expersiones.numBus12.test(e.target.value)){
            document.getElementById('numberBus').classList.remove('numberBusNegative')
            document.getElementById('numberBus').classList.add('numberBusAfirmative')
          }else{
              document.getElementById('numberBus').classList.add('numberBusNegative')
              document.getElementById('numberBus').classList.remove('numberBusAfirmative')
              document.querySelector('#form__card .mensajeDeErrorNbus').classList.add('mensajeDeErrorNbus-activo')
          }
      break;
      
  }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    })


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

});


