import {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Btn from './components/Btn'
import Display from './components/Display'


export default function App() {
  const [num, setNum] = useState(0)

  const dec = () => {
    setNum(num - 1)
  }

  const inc = () => {
    setNum(num + 1)
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Contador
      </Text>
      <Display valor={num}/>
    </View>

    <View style={styles.btns}>
        <Btn style={styles.btn}
             label="-" 
             onClick={dec} 
             />
        <Btn label="+" 
             onClick={inc} 
             style={styles.btn}/>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  btn: {
    width: 20,
  }
});

