import { CheckIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

function InputTask(props) {
  const userEnteredInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    props.show(userEnteredInput.current.value);
    userEnteredInput.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-gray-300 ml-4 w-1/4 flex justify-between p-2 rounded-lg">
        <input
          ref={userEnteredInput}
          placeholder="Get coffee ☕"
          className="outline-none bg-transparent px-4"
        />
        <button type="submit">
          <CheckIcon className="h-8 rounded-full p-2 hover:bg-gray-50 bg-transparent" />
        </button>
      </div>
    </form>
  );
}

export default InputTask;
