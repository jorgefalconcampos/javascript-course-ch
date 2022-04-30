
/** *
 Problema: El usuario debe seleccionar cuántas veces quiere que se riegue el jardín.
 Se debe regar al menos 1 vez y máximo 3 veces por día.
 * */ 

const MENSAJE = "Ingresa el número de veces que quieres regar";

let input = parseInt(prompt(MENSAJE, 0));

if (input > 3) {
    alert("No puedes regar más de 3 veces en un día.")
}

switch(input) {
    case 0:
        input = parseInt(prompt(`${MENSAJE} - Recuerda que debe ser al menos 1 vez al día.`));
    break;

    case 1: case 2: case 3:
        alert(`Genial. Número de veces a regar: ${input}`);
        for(i=0; i<input; i++){
            console.log("Regando... ");
            console.log(`El riego #${i+1} se ha completado.`)
        }
    break;
    
    default:
        console.log("Error.") 
    break;
}