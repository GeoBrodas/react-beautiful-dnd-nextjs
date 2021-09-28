import DashBoard from '@/components/DashBoard';

import { db } from 'firebase-config';
import { useCollection } from 'react-firebase-hooks/firestore';

import Head from 'next/head';

import { resetServerContext } from 'react-beautiful-dnd';

export default function Home() {
  const [realtimePosts, loading] = useCollection(
    db.collection('userdata').orderBy('order', 'asc')
  );

  console.log(realtimePosts?.docs);

  return (
    <div>
      <Head>
        <title>Pocus - Prototype 🛠</title>
      </Head>
      {/* DashBoard */}
      <DashBoard tasks={realtimePosts} />
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
