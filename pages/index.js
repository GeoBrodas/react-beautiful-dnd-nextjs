import ToDoColoumn from '@/components/ToDoColoumn';

import { db } from 'firebase-config';
import { useCollection } from 'react-firebase-hooks/firestore';

import Head from 'next/head';

import { resetServerContext } from 'react-beautiful-dnd';

import { v4 } from 'uuid';

export default function Home() {
  const [realtimePosts, loading] = useCollection(
    db.collection('userdata').orderBy('order', 'asc')
  );

  const data = realtimePosts?.docs.map((item) => ({
    id: item.id,
    name: item.data().name,
    status: item.data().status,
    order: item.data().order,
  }));

  console.log(data);

  return (
    <div>
      <Head>
        <title>Pocus - Prototype 🛠</title>
      </Head>
      {/* To do - coloumn */}
      {data ? <ToDoColoumn tasks={data} /> : 'Loading'}
    </div>
  );
}

export async function getServerSideProps() {
  resetServerContext();

  return {
    props: {
      data: [],
    },
  };
}
