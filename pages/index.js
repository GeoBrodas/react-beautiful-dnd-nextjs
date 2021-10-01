import DashBoard from '@/components/DashBoard';

import { db } from 'firebase-config';

import Head from 'next/head';

import { resetServerContext } from 'react-beautiful-dnd';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Pocus - Prototype 🛠</title>
      </Head>
      {/* DashBoard */}
      <DashBoard tasks={data} />
    </div>
  );
}

export async function getServerSideProps() {
  resetServerContext();
  const ref = db.collection('userdata');
  const response = await ref.orderBy('order', 'asc').get();
  const newArray = response.docs.map((item) => ({
    id: item.id,
    name: item.data().name,
    status: item.data().status,
    order: item.data().order,
  }));

  // console.log(newArray);

  return {
    props: {
      data: newArray,
    },
  };
}
