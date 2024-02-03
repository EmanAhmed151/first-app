

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../utils/styles';


const Item = ({ title, description, onPress , onDelete ,onToggleComplete, completed }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View>
      <Text style={{color:'purple'}}>Title: {title}</Text>
      <Text style={{color:'purple'}}>Description: {description}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-between' }}>
    <TouchableOpacity onPress={onToggleComplete}>
        {completed ? (
          <Icon name="check-square-o" size={20} color="green" style={{ marginRight: 20 ,marginLeft:20}} />
        ) : (
          <Icon name="square-o" size={20} color="purple" style={{ marginRight: 20,marginLeft:20 }} />
        )}
      </TouchableOpacity>
       <TouchableOpacity onPress={onDelete} style={{marginRight: 20,marginLeft:20}}>
      <Icon name="trash" size={20} color="purple" />
       </TouchableOpacity>
     
    </View>
    
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');


  const handleAddTodo = () => {
    if (titleInput && descriptionInput) {
     
      const isTodoExists = todos.some(todo =>
        todo.title === titleInput && todo.description === descriptionInput
      );
  
      if (!isTodoExists) {
        const newTodo = {
          title: titleInput,
          description: descriptionInput,
          completed: false,
        };
  
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitleInput('');
        setDescriptionInput('');
      } else {
        
          alert(
            'Already exist..!',
            
          );
 
       
      }
    }
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;

    if (updatedTodos[index].completed) {
      
     
    }

    setTodos(updatedTodos);
  };



  return (
    <SafeAreaView>
      <View style={ { alignItems:'center'} } >
        <Text style={{ color: 'purple' ,fontWeight:600,fontSize:30,textDecorationLine:'underline'}}> TODO APP </Text>
        <TextInput style={styles.input}
          placeholder='Enter title'
          value={titleInput}
          onChangeText={(text) => setTitleInput(text)}
        />
        <TextInput style={styles.input}
          placeholder='Enter description'
          value={descriptionInput}
          onChangeText={(text) => setDescriptionInput(text)}
        />
        <TouchableOpacity onPress={handleAddTodo} >
          <Text style={{  color: 'purple'  ,fontWeight:500,fontSize:30 }}>Add</Text>
        </TouchableOpacity>
        <View style={styles.dividerLine}></View>
        <FlatList
          data={todos}
          renderItem={({ item ,index}) => (
            <Item
              title={item.title}
              description={item.description}
              completed={item.completed}
              onPress={() => navigation.navigate('Details', { todo: item })}
              onDelete={() => handleDeleteTodo(index)}
              onToggleComplete={() => handleToggleComplete(index)}
              
            />
          )}
          keyExtractor={(item) => item.title}
        />
      
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;