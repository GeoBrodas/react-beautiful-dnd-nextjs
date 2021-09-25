import ToDoColoumn from '@/components/ToDoColoumn';

import Head from 'next/head';

import { resetServerContext } from 'react-beautiful-dnd';
import { v4 } from 'uuid';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Pocus - Prototype 🛠</title>
      </Head>
      {/* To do - coloumn */}
      <ToDoColoumn tasks={data} />
    </div>
  );
}

export async function getServerSideProps() {
  resetServerContext();

  return {
    props: {
      data: [
        {
          id: v4(),
          name: 'Get stuff',
          status: 'todo',
        },
        {
          id: v4(),
          name: 'Get batteries',
          status: 'in-progress',
        },
        {
          id: v4(),
          name: 'Get house',
          status: 'in-progress',
        },
        {
          id: v4(),
          name: 'Get shoes',
          status: 'in-progress',
        },
        {
          id: v4(),
          name: 'Get books',
          status: 'completed',
        },
      ],
    },
  };
}
