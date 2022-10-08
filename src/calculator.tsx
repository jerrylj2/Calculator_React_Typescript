import './calculator.css';
import CalculatorElements from './components/CalculatorElements';
import { FaGithub } from "react-icons/fa";

function Calculator() {
    return (
        <body>
            <div className="navbar">
                <div className="navbar-brand">Calculator</div>
            </div>

            <div className="body-content">
                <CalculatorElements />
            </div>

            <footer>
                <p>
                    © 2022 | designed & coded by Jerry Jackson
                    <span>
                        <a href="https://github.com/jerrylj2/Calculator" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="github" title="GitHub"/>
                        </a>
                    </span>
                </p>
            </footer>
        </body>
    );
}

export default Calculator;
