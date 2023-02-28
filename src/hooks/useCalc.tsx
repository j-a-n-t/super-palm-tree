import {useRef, useState} from "react";

enum Operadores {sumar, restar, multiplicar, division}

const useCalc = () => {
    const [number, setNumber] = useState<string>("0");
    const [previous, setprevious] = useState<string>("0");
    const lastOperation = useRef<Operadores>();
    const handleClear = () => {
        setNumber("0")
        setprevious("0")
    }

    const handleChange = (numberText: string) => {
        if (number.includes(".") && numberText === ".") return;

        if (number.startsWith("0") || number.startsWith("-0")) {
            if (numberText === ".") {
                setNumber(number + numberText)
            } else if (numberText === "0" && number.includes(".")) {
                setNumber(number + numberText)
            } else if (numberText !== "0" && !number.includes(".")) {
                setNumber(numberText)
            } else if (numberText === "0" && !number.includes(".")) {
                setNumber(number)
            } else {
                setNumber(number + numberText)
            }
        } else {
            setNumber(number + numberText)
        }
    }
    const deLastNumber = () => {
        if (number.includes("-")) {
            const newNumber = number.replace("-", "");
            if (newNumber.length === 1) {
                setNumber("0");
            } else {
                setNumber(number.substring(0, number.length - 1))
            }
        } else {
            if (number.length === 1) {
                setNumber("0");
            } else {
                setNumber(number.substring(0, number.length - 1))
            }
        }
    }
    const positiveNegative = () => {
        if (number.includes("-")) {
            setNumber(number.replace("-", ""))
        } else {
            setNumber(`-${number}`);
        }
    }
    const ChangeNumber = () => {
        if (number.endsWith(".")) {
            setprevious(number.slice(0, -1));
        } else {
            setprevious(number);
        }
        setNumber("0")
    }
    const btnDividir = () => {
        lastOperation.current = Operadores.division
        ChangeNumber();
    }
    const btnMultiplicar = () => {
        lastOperation.current = Operadores.multiplicar;
        ChangeNumber();
    }
    const btnSumar = () => {
        lastOperation.current = Operadores.sumar
        ChangeNumber();
    }
    const btnRestar = () => {
        lastOperation.current = Operadores.restar
        ChangeNumber();
    }
    const calc = () => {
        const number1 = Number(number);
        const number2 = Number(previous);
        switch (lastOperation.current) {
            case Operadores.sumar:
                setNumber(`${number1 + number2}`);
                break;
            case Operadores.restar:
                setNumber(`${number2 - number1}`);
                break;
            case Operadores.multiplicar:
                setNumber(`${number1 * number2}`);
                break;
            case Operadores.division:
                if (number1 === 0) {
                    setNumber("No se puede dividir entre 0");
                } else {
                    setNumber(`${number2 / number1}`);
                }
                break;
            default:
                setNumber("0");
                break;

        }
        setprevious("0");
    }

    return {
        number,
        previous,
        handleClear,
        deLastNumber,
        positiveNegative,
        btnDividir,
        btnRestar,
        btnSumar,
        btnMultiplicar,
        calc,
        handleChange
    }
}

export default useCalc;