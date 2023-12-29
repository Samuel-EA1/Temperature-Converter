//Variable declarations
const cel_Input = document.getElementById("CelsiusInput");
const cel_Value = cel_Input;


const fah_Input = document.getElementById("FahrenheitInput");
const fah_value = fah_Input;


const kel_Input = document.getElementById("KelvinInput");
const kel_value = kel_Input;



//Celsius to fahrenheit and Kelvin
function cel_2_fah_kel(){
    //celsius to fahrenheit
   
    const cel_value_num = Number(cel_Value.value);
    const fah_result = cel_value_num * (9/5) + 32;
    fah_Input.value = fah_result.toFixed(0);


    //celsius to kelvin
    const kel_result = cel_value_num + 273.15;
    console.log(kel_result);
    kel_Input.value = kel_result.toFixed(0);

   
}

function fah_2_cel_kel(){
    //fahrenheit to celsius
    const fah_value_num = Number(fah_value.value);
    const cel_result = (fah_value_num - 32) * (5/9);
    cel_Input.value = cel_result.toFixed(0);

    //fahrenheit to kelvin
    const kel_result2 = (fah_value_num - 32) * (5/9) + 273.25;
    kel_Input.value = kel_result2.toFixed(0);
}

function kel_2_cel_fah(){
    //kelvin to celsius
    const kel_value_num = Number(kel_value.value);
    const cel_result2 = kel_value_num - 273.15;
    cel_Input.value = cel_result2.toFixed(0);

    //kelvin to fahrenheit
    const fah_result2 = (kel_value_num - 273.15) * (9/5) + 32;
    fah_Input.value = fah_result2.toFixed(0);
}

//Clear result functions
function Clear(e){
    
    console.log(e.target.id);
    if(e.target.id === "id1"){
        cel_Value.value = "";
    }
    else if(e.target.id === "id2"){
        fah_value.value = "";
    }
    else{
        kel_value.value = "";
    }
}

function clearOutput(){
    cel_Input.value = "";
    kel_Input.value = "";
    fah_Input.value = "";
}
function inputDisplay() {
    if (cel_Input === NaN){
        kel_Input.value = "";
        fah_Input.value = "";
    }
}