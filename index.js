//Variable declarations
const cel_Input = document.getElementById("CelsiusInput");
const cel_Value = cel_Input;


const fah_Input = document.getElementById("FahrenheitInput");
const fah_value = fah_Input;


const kel_Input = document.getElementById("KelvinInput");
const kel_value = kel_Input;



//Celsius to fahrenheit and Kelvin
function cel_2_fah_kel(){
   if (cel_Input.value === ""){
        alert("Enter a number");
        fah_Input.value = "";
        kel_Input.value = "";
   }
   else {
        //celsius to fahrenheit
         const cel_value_num = Number(cel_Value.value);
        const fah_result = cel_value_num * (9/5) + 32;
        fah_Input.value = fah_result;
          //celsius to kelvin
         const kel_result = cel_value_num + 273.15;
        console.log(kel_result);
        kel_Input.value = kel_result;
   }
}

function fah_2_cel_kel(){
    if(fah_Input.value === ""){
        alert("Enter a number");
        cel_Input_Input.value = "";
        kel_Input.value = "";
    }
    else {
        //fahrenheit to celsius
         const fah_value_num = Number(fah_value.value);
        const cel_result = (fah_value_num - 32) * (5/9);
        cel_Input.value = cel_result;

        //fahrenheit to kelvin
        const kel_result2 = (fah_value_num - 32) * (5/9) + 273.25;
        kel_Input.value = kel_result2;
    }

}

function kel_2_cel_fah(){
    if(kel_Input.value === ""){
        alert("Enter a number");
        cel_Input_Input.value = "";
        fah_Input.value = "";
    }
    else {
        //kelvin to celsius
        const kel_value_num = Number(kel_value.value);
        const cel_result2 = kel_value_num - 273.15;
        cel_Input.value = cel_result2;
        //kelvin to fahrenheit
        const fah_result2 = (kel_value_num - 273.15) * (9/5) + 32;
        fah_Input.value = fah_result2;
    }

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