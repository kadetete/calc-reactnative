import { Text, View, StyleSheet } from 'react-native';

const Display = (props: any) => {
    return (
        <View style={styles.dsp}>
            <Text style={styles.txt}>
                {props.valor}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    dsp: {
      padding: 10,
      backgroundColor: '#000'
    }, 
    txt: {
      color: '#fff',
      backgroundColor: '#000',
      padding: 10,
      fontSize: 30,
      textAlign: 'center'
    }
  })
  
  export default Display