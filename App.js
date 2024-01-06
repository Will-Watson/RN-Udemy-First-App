import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const { container, dummyText } = styles;

  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your Course Goal!' />
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
  });
