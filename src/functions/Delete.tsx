// Deletes last character
function Delete(current_value: string): string {
    let new_value: string;
    current_value = current_value + "";

    if (current_value.length > 0 && current_value !== "Infinity") {
        new_value = current_value.slice(0, current_value.length - 1); // Remove one character
    } else {
        new_value = "";
    }

    return new_value;
}

export default Delete;