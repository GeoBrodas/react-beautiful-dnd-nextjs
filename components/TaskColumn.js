import { PlusSmIcon } from '@heroicons/react/outline';
import { db } from 'firebase-config';
import firebase from 'firebase';
import InputTask from './ui/InputTask';
import { useState } from 'react';

function TaskColumn(props) {
  const { title, column } = props;

  const [visible, setVisible] = useState(false);
  function toggleVisibility() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  function inputHandler(task, column, title) {
    db.collection('userdata').add({
      name: task,
      order: 1,
      status: column,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <div className="m-4 px-4 text-center w-1/2 md:w-1/4 bg-gray-300 rounded-lg p-2">
      <div className="flex my-4 px-2 py-2 justify-between bg-gray-400 whitespace-nowrap font-medium rounded-lg">
        <p className="text-lg">{title}</p>
        <PlusSmIcon
          onClick={toggleVisibility}
          className={`h-7 hover:bg-gray-50 ${
            visible && 'bg-gray-50'
          } rounded-full p-1`}
        />
      </div>
      {visible && (
        <InputTask title={title} column={column} show={inputHandler} />
      )}
      {props.children}
    </div>
  );
}

export default TaskColumn;
