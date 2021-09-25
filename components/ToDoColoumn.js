import { useState } from 'react';
import _ from 'lodash';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './ui/TaskCard';
import { filterDataByStatus } from 'helpers/task-filter';

function ToDoColoumn({ tasks }) {
  const todoItems = filterDataByStatus(tasks, 'todo');
  const inProgressItems = filterDataByStatus(tasks, 'in-progress');
  const completedItems = filterDataByStatus(tasks, 'completed');

  const [state, setState] = useState({
    todo: {
      title: 'Todo',
      items: todoItems,
    },
    'in-progress': {
      title: 'In Progress',
      items: inProgressItems,
    },
    completed: {
      title: 'Completed',
      items: completedItems,
    },
  });

  function onDragHandler({ source, destination }) {
    if (!destination) return;
    // if the item is draggend to a invalid space

    // if (
    //   destination.index === source.index &&
    //   destination.droppableId === source.droppableId
    // )
    //   return;

    // create a copy of the dragged card
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };

      // remove the dragged item from the source array
      prev[source.droppableId].items.splice(source.index, 1);

      // add the dragged card to the destination array
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  }

  return (
    <div className="flex justify-between overflow-scroll md:scrollbar-hide">
      <DragDropContext onDragEnd={onDragHandler}>
        {_.map(state, (data, key) => {
          return (
            <div
              key={key}
              className="m-4 px-4 text-center w-1/2 md:w-1/4 bg-gray-300 rounded-lg p-2"
            >
              <p className="text-lg my-2 px-2 py-2 whitespace-nowrap font-medium bg-gray-400 rounded-lg">
                {data.title}
              </p>

              <Droppable droppableId={key}>
                {(provided, snapshot) => (
                  <ul
                    className="list-none space-y-2 my-5"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {data.items.map((item, index) => (
                      <TaskCard key={item.id} index={index} details={item} />
                    ))}
                    {provided.placeholder}
                    {data.items.length === 0 && !snapshot.isDraggingOver && (
                      <li className="text-gray-50">Yay way to go 🚀</li>
                    )}
                  </ul>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default ToDoColoumn;
