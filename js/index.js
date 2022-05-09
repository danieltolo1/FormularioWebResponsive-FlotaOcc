

const dataImage = [
    {
        id: "1",
        photo: "./img/si.jpg"
    },
    {
        id: "2",
        photo: "./img/no.png"

    }
    
];

//variables para asociar al DOM


const imgcheck = document.getElementById("imgcheckB");
const lectura = document.getElementById("checkAvanzado")




//variables para la busqueda


const imageIco = document.createElement("img");
    imageIco.setAttribute("class", "card__image__des");




function verificar1(){
    let checkbox = document.getElementById('checkAvanzado').checked;
    console.log(checkbox);
    if(checkbox == true ){
        imgcheck.appendChild(imageIco);
        imageIco.setAttribute("src", dataImage[0].photo);
    }else{
        imgcheck.appendChild(imageIco);
        imageIco.setAttribute("src", dataImage[1].photo);
    }
}
    








//Funciones de renderizacion


//dataImage.forEach((element) => {

    
  //      imgnCheck.appendChild(iconoSiNo);
    //    iconoSiNo.appendChild(imageIco);
  //      imageIco.setAttribute("src",element.img);
  //      imageIco.setAttribute("alt", "imagen del hotel " );
    

//});







  