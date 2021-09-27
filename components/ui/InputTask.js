import { CheckIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

function InputTask(props) {
  const userEnteredInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    if (!userEnteredInput.current.value) return;
    props.show(userEnteredInput.current.value, props.column, props.title);
    userEnteredInput.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-gray-100 flex p-2 rounded-lg">
        <input
          ref={userEnteredInput}
          placeholder="Get coffee ☕"
          className="outline-none flex-grow bg-transparent "
        />
        <button type="submit">
          <CheckIcon className="h-8 rounded-full p-2 hover:bg-gray-300 bg-transparent" />
        </button>
      </div>
    </form>
  );
}

export default InputTask;
