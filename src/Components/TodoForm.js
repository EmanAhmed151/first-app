

import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TodoForm = ({ todos, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    const todoExists = todos.some((todo) => todo.title === taskTitle);

    if (todoExists) {
     
      alert('Todo Already Exists', 'Please enter a unique title for the task.');
    } else {
      onAddTask({ title: taskTitle, description: taskDescription });
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Task Description"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
      />
      <TouchableOpacity  onPress={addTask}>
        <Text style={{ color: 'purple', fontWeight: 500, fontSize: 30 }}>Add </Text>
      </TouchableOpacity>
    </View>
  );
};



export default TodoForm;