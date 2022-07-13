var formList = [];



const $elementos = document.querySelectorAll(".numberBus");
document.querySelector('#buttonSave').addEventListener('click', saveForm);




    


$elementos.forEach(elemento => {
	elemento.addEventListener("keydown", (evento) => {
		if (evento.key == "Enter") {
			// Prevenir
			evento.preventDefault();
			return false;
		}
	});
});


function saveForm(){
    const snBus     = document.getElementById('numberBus').value,
          scheckSi1 = document.getElementById('checkAvanzadoSi').checked,
          scheckNo1 = document.getElementById('checkAvanzadoNo').checked,
          stext1    = document.getElementById('textno1').value,
          scheckSi2 = document.getElementById('checkAvanzadoSi2').checked,
          scheckNo2 = document.getElementById('checkAvanzadoNo2').checked,
          stext2    = document.getElementById('textno2').value,
          scheckSi3 = document.getElementById('checkAvanzadoSi3').checked,
          scheckNo3 = document.getElementById('checkAvanzadoNo3').checked,
          stext3    = document.getElementById('textno3').value,
          scheckSi4 = document.getElementById('checkAvanzadoSi4').checked,
          scheckNo4 = document.getElementById('checkAvanzadoNo4').checked,
          stext4    = document.getElementById('textno4').value;


        if(snBus === ""){
                alert("Es necesario escribir el Numero del bus ")
                document.getElementById('numberBus').focus(); 
                return
        }if(scheckNo1 === true && stext1 === ""){
                alert("Si su respuesta de la pregunta 1 es NO, se necesita escribir el porque")  
                document.getElementById('textno1').focus(); 
                return
        }if(scheckNo2 === true && stext2 === ""){
                 alert("Si su respuesta de la pregunta 2 es NO, se necesita escribir el porque")
                 document.getElementById('textno2').focus(); 
                 return
        }if(scheckNo3 === true && stext3 === ""){
                alert("Si su respuesta de la pregunta 3 es NO, se necesita escribir el porque")
                document.getElementById('textno3').focus();
                return
        }if(scheckNo4 === true && stext4 === ""){
                alert("Si su respuesta de la pregunta 4 es NO, se necesita escribir el porque")
                document.getElementById('textno4').focus();
                return
        }else{
                addForm(snBus,scheckSi1,scheckNo1,stext1,scheckSi2,scheckNo2,stext2,scheckSi3,scheckNo3,stext3,scheckSi4,scheckNo4,stext4);
                document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
	        	setTimeout(() => {
			    document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		        }, 3000);
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            }
        
   
}






function addForm(nBus, checkSi1, checkNo1, text1, checkSi2, checkNo2, text2, checkSi3, checkNo3, text3, checkSi4, checkNo4, text4,){

    var newForm = {
        numBus : nBus,
        pregcheckSi1 : checkSi1,
        pregcheckNo1 : checkNo1,
            textR1   : text1,
        pregcheckSi2 : checkSi2,
        pregcheckNo2 : checkNo2,
            textR2   : text2,
        pregcheckSi3 : checkSi3,
        pregcheckNo3 : checkNo3,
            textR3   : text3,
        pregcheckSi4 : checkSi4,
        pregcheckNo4 : checkNo4,
            textR4   : text4,
    };
    console.log(newForm)
    formList.push(newForm);
}



