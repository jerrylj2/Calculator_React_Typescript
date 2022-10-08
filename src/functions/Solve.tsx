import Parse from "./Parse"

// Calculation
function Solve(current_value: string, input: string): string[] {
    let sub_output_value: string;
    let main_output_value: string;
    current_value = current_value + "";
    current_value = current_value.replace("^", "**"); // Converting to appropriate power syntax
    
    switch (input) {
        case "sqrt(x)":
            sub_output_value = Parse("(" + current_value + ")**.5");
            break;
        
        case "C":
            sub_output_value = "";
            break;

        case "+/-":
            sub_output_value = Parse("-1*(" + current_value + ")");
            break;

        case "1/x":
            sub_output_value = Parse("1/(" + current_value + ")");
            break;

        case "x^2":
            sub_output_value = Parse("(" + current_value + ")**2");
            break;
        
        case "=":
            sub_output_value = Parse(current_value);
            break;

        default:
            sub_output_value = current_value;
    }

    main_output_value = sub_output_value;

    // Alerting user if calculation is not possible
    if (isNaN((sub_output_value as unknown) as number)){
        sub_output_value = "";
        main_output_value = "Improper Operation";
    }

    return [main_output_value, sub_output_value];
}

export default Solve;