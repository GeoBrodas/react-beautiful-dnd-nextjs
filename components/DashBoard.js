import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column';
import TaskColumn from './TaskColumn';

function DashBoard({ tasks, loading }) {
  // const todoItems = filterDataByStatus(tasks, 'todo');
  // const inProgressItems = filterDataByStatus(tasks, 'in-progress');
  // const completedItems = filterDataByStatus(tasks, 'completed');

  // set state of the input field in each column
  // const [visible, setVisible] = useState(false);
  // function toggleVisibility() {
  //   if (visible) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }
  // }

  // set initial state of data
  // const [state, setState] = useState({
  //   todo: {
  //     title: 'Todo',
  //     items: todoItems,
  //   },
  //   'in-progress': {
  //     title: 'In Progress',
  //     items: inProgressItems,
  //   },
  //   completed: {
  //     title: 'Completed',
  //     items: completedItems,
  //   },
  // });

  // input-handler for adding cards to list
  // function inputHandler(task, column, title) {
  //   db.collection('userdata').add({
  //     name: task,
  //     order: 1,
  //     status: column,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  // setState((prev) => {
  //   return {
  //     ...prev,
  //     [column]: {
  //       title: title,
  //       items: [
  //         {
  //           id: v4(),
  //           name: task,
  //         },
  //         ...prev[column].items,
  //       ],
  //     },
  //   };
  // });
  // }

  function onDragHandler({ source, destination }) {
    // if (!destination) return;
    // // if the item is draggend to a invalid space
    // if (
    //   destination.index === source.index &&
    //   destination.droppableId === source.droppableId
    // )
    //   return;
    // // create a copy of the dragged card
    // const itemCopy = { ...state[source.droppableId].items[source.index] };
    // setState((prev) => {
    //   prev = { ...prev };
    //   // remove the dragged item from the source array
    //   prev[source.droppableId].items.splice(source.index, 1);
    //   // add the dragged card to the destination array
    //   prev[destination.droppableId].items.splice(
    //     destination.index,
    //     0,
    //     itemCopy
    //   );
    //   return prev;
    // });
  }

  return (
    <div className="flex-col m-4">
      <div className="flex justify-between overflow-scroll md:scrollbar-hide">
        <DragDropContext onDragEnd={onDragHandler}>
          <TaskColumn spinner={loading} title="ToDo" column="todo">
            <Column data={tasks} id="todo" />
          </TaskColumn>
          <TaskColumn
            spinner={loading}
            title="In Progress"
            column="in-progress"
          >
            <Column data={tasks} id="in-progress" />
          </TaskColumn>
          <TaskColumn spinner={loading} title="Completed" column="completed">
            <Column data={tasks} id="completed" />
          </TaskColumn>
        </DragDropContext>
      </div>
    </div>
  );
}

export default DashBoard;
