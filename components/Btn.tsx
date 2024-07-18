import { Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

export default function Btn(props: any) {
  return (
    <TouchableHighlight 
    style={styles.container} 
    onPress={props.onClick}>
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00f',
  },
  txt: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 4
  }
});