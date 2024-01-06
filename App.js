import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler} />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {
          courseGoals.map((goal, index) => <Text key={index}>{goal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  });
