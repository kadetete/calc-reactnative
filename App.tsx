import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Btn from './components/Btn';
import Display from './components/Display';

export default function App() {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("0");

  const handlePress = (value: any) => {
    if (typeof value === "number" || value === ".") {
      setCalculation(calculation + value);
      setResult(eval(calculation + value).toString());
    } else {
      handleOperation(value);
    }
  };

  const handleOperation = (value: any) => {
    if (value === "C") {
      setCalculation("");
      setResult("0");
    } else if (value === "=") {
      setResult(eval(calculation).toString());
    } else if (value === "<=") {
      setCalculation(calculation.substring(0, calculation.length - 1));
    } else {
      setCalculation(calculation + value);
    }
  };

  return (
    <View style={styles.container}>
      <Display valor={calculation} />
      <Display valor={result} />
      <View style={styles.btns}>
        {["C", "(", ")", "/"].map((item) => (
          <Btn key={item} label={item} onClick={() => handlePress(item === "/" ? "/" : item)} />
        ))}
      </View>
      <View style={styles.btns}>
        {["7", "8", "9", "*"].map((item) => (
          <Btn key={item} label={item} onClick={() => handlePress(item === "*" ? "*" : item)} />
        ))}
      </View>
      <View style={styles.btns}>
        {["4", "5", "6", "-"].map((item) => (
          <Btn key={item} label={item} onClick={() => handlePress(item === "-" ? "-" : item)} />
        ))}
      </View>
      <View style={styles.btns}>
        {["1", "2", "3", "+"].map((item) => (
          <Btn key={item} label={item} onClick={() => handlePress(item === "+" ? "+": item)} />
        ))}
      </View>
      <View style={styles.btns}>
        {["0", ".", "<=" ,"="].map((item) => (
          <Btn key={item} label={item} onClick={() => handlePress(item)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'black'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btn: {
    flex: 1,
  },
});
