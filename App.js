import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const { container, dummyText } = styles;

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!' />
        <Button title='ADD' />
      </View>
      <View>
        <Text>Course Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 8,
    marginRight: 8,
  },
  });
