import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ index, details }) {
  return (
    <Draggable draggableId={details.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 mt-2 ${
            snapshot.isDragging ? 'bg-gray-200' : 'bg-gray-50'
          } rounded-lg`}
          // on dragging - changes the background color
        >
          {details.name}
        </li>
      )}
    </Draggable>
  );
}

export default TaskCard;
