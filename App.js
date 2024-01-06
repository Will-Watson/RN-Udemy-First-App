import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const { container, dummyText } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={dummyText}>Another piece of text.</Text>
      </View>
      <Text style={dummyText}>Hello World!</Text>
      <Button title='Tap me!' onPress={() => alert('You pressed me!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
