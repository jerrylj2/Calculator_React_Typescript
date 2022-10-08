import { useState } from "react";
import DisplayInput from "../functions/DisplayInput";
import Solve from "../functions/Solve";
import Delete from "../functions/Delete";
import AddOutputRow from "./AddOutputRow";

function CalculatorElements() {
    const [sub_output, set_sub_output] = useState<string>("");
    const [main_output, set_main_output] = useState<string>("");
    const [output_table, set_output_table] = useState<string[]>([]);
    
    function AddRow(output: string) {
        if (output_table.length < 18) {
            set_output_table([output, ...output_table]);
        } else {
            // limiting rows to the length of the table
            output_table.pop() // Removing last row in the table
            set_output_table([output, ...output_table]);
        }
    }

    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="screen">
                        <div className="main-screen" id="main_output">{main_output}</div>
                        <div className="sub-screen" id="sub_output">{sub_output}</div>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "^"))}
                            className="btn-operator"
                            name="calc_button"
                            value="^"
                        >^</button>

                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "C")[0]);
                                set_main_output(Solve(sub_output, "C")[1]);
                            }}
                            className="btn-clear"
                            name="calc_button"
                            value="C"
                        >C</button>

                        <button
                            onClick={() => set_sub_output(Delete(sub_output))}
                            className="btn-delete"
                            name="calc_button"
                            value="delete"
                        >delete</button>

                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "+/-")[0]);
                                set_main_output(Solve(sub_output, "+/-")[1]);
                                AddRow(Solve(sub_output, "+/-")[0]);
                            }}
                            className="btn-operator"
                            name="calc_button"
                            value="+/-"
                        >+/-</button>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "1/x")[0]);
                                set_main_output(Solve(sub_output, "1/x")[1]);
                                AddRow(Solve(sub_output, "1/x")[0]);
                            }}
                            className="btn-operator"
                            name="calc_button"
                            value="1/x"
                        >1/x</button>

                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "x^2")[0]);
                                set_main_output(Solve(sub_output, "x^2")[1]);
                                AddRow(Solve(sub_output, "x^2")[0]);
                            }}
                            className="btn-operator"
                            name="calc_button"
                            value="x^2"
                        >x^2</button>

                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "sqrt(x)")[0]);
                                set_main_output(Solve(sub_output, "sqrt(x)")[1]);
                                AddRow(Solve(sub_output, "sqrt(x)")[0]);
                            }}
                            className="btn-operator"
                            name="calc_button"
                            value="sqrt(x)"
                        >sqrt(x)</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "/"))}
                            className="btn-operator"
                            name="calc_button"
                            value="/"
                        >/</button>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "7"))}
                            className="btn-number"
                            name="calc_button"
                            value="7"
                        >7</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "8"))}
                            className="btn-number"
                            name="calc_button"
                            value="8"
                        >8</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "9"))}
                            className="btn-number"
                            name="calc_button"
                            value="9"
                        >9</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "*"))}
                            className="btn-operator"
                            name="calc_button"
                            value="*"
                        >x</button>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "4"))}
                            className="btn-number"
                            name="calc_button"
                            value="4"
                        >4</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "5"))}
                            className="btn-number"
                            name="calc_button"
                            value="5"
                        >5</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "6"))}
                            className="btn-number"
                            name="calc_button"
                            value="6"
                        >6</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "-"))}
                            className="btn-operator"
                            name="calc_button"
                            value="-"
                        >-</button>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "1"))}
                            className="btn-number"
                            name="calc_button"
                            value="1"
                        >1</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "2"))}
                            className="btn-number"
                            name="calc_button"
                            value="2"
                        >2</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "3"))}
                            className="btn-number"
                            name="calc_button"
                            value="3"
                        >3</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "+"))}
                            className="btn-operator"
                            name="calc_button"
                            value="+"
                        >+</button>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "0"))}
                            className="btn-number btn-zero"
                            name="calc_button"
                            value="0"
                        >0</button>

                        <button
                            onClick={() => set_sub_output(DisplayInput(sub_output, "."))}
                            className="btn-number"
                            name="calc_button"
                            value="."
                        >.</button>

                        <button
                            onClick={() => {
                                set_sub_output(Solve(sub_output, "=")[0]);
                                set_main_output(Solve(sub_output, "=")[1]);
                                AddRow(Solve(sub_output, "=")[0]);
                            }}
                            className="btn-operator"
                            name="calc_button"
                            value="="
                        >=</button>
                    </div>
                </div>
            </div>

            <div className="output-box">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Output History
                                <button
                                    onClick={() => {
                                        set_output_table([])
                                    }}
                                    className="btn-clear-history btn-clear"
                                    name="calc_button"
                                    value="clear_history"
                                >clear</button>
                            </th>
                        </tr>
                    </tbody>
                    <tbody>
                        {output_table.map((item, index) => (<AddOutputRow first_output={index} output_value={item} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CalculatorElements;