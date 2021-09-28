import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './ui/TaskCard';

function Column({ data, id }) {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <ul
          className="list-none space-y-2 my-5"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {data?.docs
            .filter((doc) => doc.data().status === id)
            .map((item, index) => (
              <TaskCard key={item.id} index={index} details={item} />
            ))}
          {provided.placeholder}
          {data?.docs.length === 0 && !snapshot.isDraggingOver && (
            <li className="text-gray-50">Yay way to go 🚀</li>
          )}
        </ul>
      )}
    </Droppable>
  );
}

export default Column;
