import firestore from '@react-native-firebase/firestore'
import React from 'react'
import { List } from 'react-native-paper'
const Todo = ({ id, title, complete }) => {
  const toggleComplete = async () => {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete
      })
  }
  return (
    <List.Item
      title={title}
      onPress={toggleComplete}
      left={props => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  )
}

export default Todo