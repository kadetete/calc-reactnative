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
      padding: 20,
      backgroundColor: '#000'
    }, 
    txt: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center'
    }
  })
  
  export default Display