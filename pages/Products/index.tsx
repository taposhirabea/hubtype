// import { Fragment } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// import { getAllEvents } from '../../utils/api-util';
// import ProductList from '../../components/products/product-list';


// function AllEventsPage(props) {
//   const { events } = props;
 

//   return (
//     <Fragment>
      
//       <Head>
//         <title>Next Js</title>
//       </Head>
//       <ProductList items={events}/>
//     </Fragment>
//   );
// }

// export async function getStaticProps() {
//   const events = await getAllEvents();

//   return {
//     props: {
//       events: events,
//     },
//     revalidate: 60
//   };
// }

// export default AllEventsPage;