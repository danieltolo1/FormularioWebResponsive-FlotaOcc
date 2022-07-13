

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
const lectura = document.getElementById("checkAvanzadoSI")




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
    

//







//Funcion para que aparezca un textArea es NO PREGUNTA1-----------------

function showContentNo() {
    element = document.getElementById("content");
    check = document.getElementById("checkAvanzadoNo");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}


function showContentSi() {
    element = document.getElementById("content");
    check = document.getElementById("checkAvanzadoSi");
    if (check.checked) {
        element.style.display='none';
    }
    else {
        element.style.display='none';
    }
}


//Funcion para que aparezca un textArea es NO PREGUNTA2-----------------------

function showContentNo2() {
    element = document.getElementById("content2");
    check = document.getElementById("checkAvanzadoNo2");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}


function showContentSi2() {
    element2 = document.getElementById("content2");
    check2 = document.getElementById("checkAvanzadoSi2");
    if (check2.checked) {
        element2.style.display='none';
    }
    else {
        element2.style.display='none';
    }
}


//Funcion para que aparezca un textArea es NO PREGUNTA3-----------------------

function showContentNo3() {
    element = document.getElementById("content3");
    check = document.getElementById("checkAvanzadoNo3");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}


function showContentSi3() {
    element3 = document.getElementById("content3");
    check3 = document.getElementById("checkAvanzadoSi3");
    if (check3.checked) {
        element3.style.display='none';
    }
    else {
        element3.style.display='none';
    }
}


//Funcion para que aparezca un textArea es NO PREGUNTA4-----------------------

function showContentNo4() {
    element = document.getElementById("content4");
    check = document.getElementById("checkAvanzadoNo4");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}


function showContentSi4() {
    element4 = document.getElementById("content4");
    check4 = document.getElementById("checkAvanzadoSi4");
    if (check4.checked) {
        element4.style.display='none';
    }
    else {
        element4.style.display='none';
    }
}



//Funcion para seleccionar solo 1 Checkbox enrte el SI y el NO PREGUNTA1---------------

function seleccionar(){
    $("#checkAvanzadoSi").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoSi").prop("checked",true);
        $("#checkAvanzadoNo").prop("checked",false);
    });

    $("#checkAvanzadoNo").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoNo").prop("checked",true);
        $("#checkAvanzadoSi").prop("checked",false);
    });
}

//Funcion para seleccionar solo 1 Checkbox enrte el SI y el NO PREGUNTA2-------------

function seleccionar2(){
    $("#checkAvanzadoSi2").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoSi2").prop("checked",true);
        $("#checkAvanzadoNo2").prop("checked",false);
    });

    $("#checkAvanzadoNo2").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoNo2").prop("checked",true);
        $("#checkAvanzadoSi2").prop("checked",false);
    });
}


//Funcion para seleccionar solo 1 Checkbox enrte el SI y el NO PREGUNTA3-------------

function seleccionar3(){
    $("#checkAvanzadoSi3").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoSi3").prop("checked",true);
        $("#checkAvanzadoNo3").prop("checked",false);
    });

    $("#checkAvanzadoNo3").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoNo3").prop("checked",true);
        $("#checkAvanzadoSi3").prop("checked",false);
    });
}


//Funcion para seleccionar solo 1 Checkbox enrte el SI y el NO PREGUNTA4-------------

function seleccionar4(){
    $("#checkAvanzadoSi4").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoSi4").prop("checked",true);
        $("#checkAvanzadoNo4").prop("checked",false);
    });

    $("#checkAvanzadoNo4").on('change', function (ev){
        ev.preventDefault();

        $("#checkAvanzadoNo4").prop("checked",true);
        $("#checkAvanzadoSi4").prop("checked",false);
    });
}

// Funcion del Boton 







//Funciones de renderizacion


//dataImage.forEach((element) => {

    
  //      imgnCheck.appendChild(iconoSiNo);
    //    iconoSiNo.appendChild(imageIco);
  //      imageIco.setAttribute("src",element.img);
  //      imageIco.setAttribute("alt", "imagen del hotel " );
    

//});







  