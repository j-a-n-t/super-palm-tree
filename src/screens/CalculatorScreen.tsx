import ButtonCalc from "../component/ButtonCalc";
import {StyleSheet, Text, View} from "react-native";
import {useRef, useState} from "react";
import useCalc from "../hooks/useCalc";

enum Operadores {sumar, restar, multiplicar, division}

const CalculatorScreen = () => {
    const {
        number,
        previous,
        handleChange,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        deLastNumber,
        positiveNegative,
        handleClear,
        calc,
    } = useCalc();
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.result_two} numberOfLines={1} adjustsFontSizeToFit>IEU Jóse Alexis Nuñez Torres</Text>
            <Text style={styles.result_two} numberOfLines={1} adjustsFontSizeToFit>Actividad 4. Proyecto en React Native</Text>
            <Text style={styles.result_two} numberOfLines={1} adjustsFontSizeToFit>{previous}</Text>
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
            <View>
                <View style={styles.keypad}>
                    <ButtonCalc textValue={"AC"} color={"values"} onPress={handleClear}/>
                    <ButtonCalc textValue={"+/-"} color={"values"} onPress={positiveNegative}/>
                    <ButtonCalc textValue={"del"} color={"values"} onPress={deLastNumber}/>
                    <ButtonCalc textValue={"/"} color={"operation"} onPress={btnDividir}/>
                </View>
                <View style={styles.keypad}>
                    <ButtonCalc textValue={"7"} onPress={handleChange}/>
                    <ButtonCalc textValue={"8"} onPress={handleChange}/>
                    <ButtonCalc textValue={"9"} onPress={handleChange}/>
                    <ButtonCalc textValue={"x"} color={"operation"} onPress={btnMultiplicar}/>
                </View>
                <View style={styles.keypad}>
                    <ButtonCalc textValue={"4"} onPress={handleChange}/>
                    <ButtonCalc textValue={"5"} onPress={handleChange}/>
                    <ButtonCalc textValue={"6"} onPress={handleChange}/>
                    <ButtonCalc textValue={"-"} color={"operation"} onPress={btnRestar}/>
                </View>
                <View style={styles.keypad}>
                    <ButtonCalc textValue={"1"} onPress={handleChange}/>
                    <ButtonCalc textValue={"2"} onPress={handleChange}/>
                    <ButtonCalc textValue={"3"} onPress={handleChange}/>
                    <ButtonCalc textValue={"+"} color={"operation"} onPress={btnSumar}/>
                </View>
                <View style={styles.keypad}>
                    <ButtonCalc textValue={"0"} onPress={handleChange}/>
                    <ButtonCalc textValue={"."} onPress={handleChange}/>
                    <ButtonCalc textValue={""} onPress={() => ""}/>
                    <ButtonCalc textValue={"="} color={"operation"} onPress={calc}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
    },
    result: {
        fontSize: 80,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "right"
    },
    result_two: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#5C5C5CAB",
        textAlign: "right"
    },
    keypad: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10,
        marginTop: 5
    }
})
export default CalculatorScreen;