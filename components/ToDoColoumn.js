import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function ToDoColoumn({ items }) {
  const [tasks, updateTasks] = useState(items);

  function onDragHandler(result) {
    const items = Array.from(tasks);
    // make a new copy of the array

    const [reorderedItem] = items.splice(result.source.index, 1);
    // remove the dragged object from the array and destructure to get hold of the dragged obejct

    items.splice(result.destination.index, 0, reorderedItem);
    // add the dragged obejct to the array and re-order

    updateTasks(items); // update the new list
  }

  return (
    <div className="m-4 text-center w-44 bg-gray-300 rounded-lg p-2">
      <p className="text-lg font-medium bg-gray-400 rounded-lg">To Do List</p>
      <div>
        <DragDropContext onDragEnd={onDragHandler}>
          <Droppable droppableId="ta">
            {(provided) => (
              <ul
                className="list-none space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 mt-2 rounded-lg bg-gray-50"
                      >
                        {item.title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ToDoColoumn;
