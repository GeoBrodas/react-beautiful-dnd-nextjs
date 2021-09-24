import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function ToDoColoumn({ items }) {
  return (
    <div className="m-4 text-center w-44 bg-gray-300 rounded-lg p-2">
      <p className="text-lg font-medium bg-gray-400 rounded-lg">To Do List</p>
      <div>
        <DragDropContext>
          <Droppable droppableId="ta">
            {(provided) => (
              <ul
                className="list-none space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (
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
