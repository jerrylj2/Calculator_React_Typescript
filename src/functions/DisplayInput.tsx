// Displays button input
function DisplayInput(current_value: string, input: string): string {
    let new_value: string;
    current_value = current_value + "";

    if(current_value === "Infinity" || current_value === "Improper Operation"){
        new_value = input; // Restarting input if previous output is infinity or improper
    } else if(current_value.length > 24){
        new_value = current_value; // Limiting the number of inputs a user can enter
    } else {
        new_value = current_value + input; // Concatenating current input with the previous input
    }

    return new_value;
}

export default DisplayInput;