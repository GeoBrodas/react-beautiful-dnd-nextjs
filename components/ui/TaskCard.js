import { TrashIcon } from '@heroicons/react/outline';
import { db } from 'firebase-config';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ index, details }) {
  function deleteHandler() {
    db.collection('userdata').doc(details.id).delete();
  }

  return (
    <Draggable draggableId={details.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 flex justify-between items-center mt-2 ${
            snapshot.isDragging ? 'bg-gray-200' : 'bg-gray-50'
          } rounded-lg list-none`}
          // on dragging - changes the background color
        >
          <span className="break-all w-5/6 text-left">{details.name}</span>
          <TrashIcon
            onClick={deleteHandler}
            className="h-5 text-gray-600 cursor-pointer hover:text-gray-400 rounded-full"
          />
        </li>
      )}
    </Draggable>
  );
}

export default TaskCard;
