import CalculatorScreen from "./src/screens/CalculatorScreen";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <CalculatorScreen/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        paddingHorizontal:20
    },
})
export default App;
