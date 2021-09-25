import { CheckIcon } from '@heroicons/react/outline';

function InputTask() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-gray-50 flex justify-evenly p-2 rounded-lg">
        <input placeholder="Get coffee☕" className="flex-grow outline-none" />
        <button type="submit">
          <CheckIcon className="h-10 rounded-full p-2 hover:bg-gray-300 bg-transparent" />
        </button>
      </div>
    </form>
  );
}

export default InputTask;
