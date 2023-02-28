import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    textValue: string
    color?: "values" | "button" | "operation",
    onPress: (number:string) => void
}

const colors = {values: "#9B9B9B", button: "#393939", operation: "#f3801d"}
const ButtonCalc = ({textValue, color = "button", onPress}: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={()=>onPress(textValue)}
            style={{
                ...styles.button,
                backgroundColor: color === "operation" ? colors.operation
                    : color === "values" ? colors.values : colors.button
            }}>
            <Text style={{
                ...styles.buttonText,
                color: color === "values" ? "#000000" : "#ffffff"
            }}>{textValue}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        padding: 20
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})
export default ButtonCalc;