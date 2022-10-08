interface Output {
    output_value: string;
    first_output: number;
}

function AddOutputRow(props: Output) {
    let output_class: string = "output_history";
    if(props.first_output === 0){
        output_class = "output_history first_output"
    }

    return (
        <>
            <tr className={output_class}>
                <td>
                    {props.output_value}
                </td>
            </tr>
        </>
    )
}

export default AddOutputRow;