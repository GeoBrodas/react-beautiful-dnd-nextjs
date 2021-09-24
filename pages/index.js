import ToDoColoumn from '@/components/ToDoColoumn';
import Head from 'next/head';
import { resetServerContext } from 'react-beautiful-dnd';

// const toDoListItems = [
//   {
//     id: 'ta-1',
//     title: 'Get stuff',
//   },
//   {
//     id: 'ta-2',
//     title: 'Get shoes',
//   },
//   {
//     id: 'ta-3',
//     title: 'Get books',
//   },
// ];

export default function Home({ data }) {
  return (
    <div>
      {/* To do - coloumn */}
      <ToDoColoumn items={data} />
    </div>
  );
}

export async function getServerSideProps() {
  resetServerContext();

  return {
    props: {
      data: [
        {
          id: 'ta-1',
          title: 'Get stuff',
        },
        {
          id: 'ta-2',
          title: 'Get shoes',
        },
        {
          id: 'ta-3',
          title: 'Get books',
        },
      ],
    },
  };
}
