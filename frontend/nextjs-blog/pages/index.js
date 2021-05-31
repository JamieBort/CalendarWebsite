import Head from 'next/head';
import BasicFunction from '../components/BasicFunction';
import Header from '../components/Header';
import Body from '../components/Body';

const name ="jim jam"

export default function Home(props) {
  return (<div>
    <p>Hello from inside index.js.</p>
    <Header name="index.js"></Header>
    <Body secondName = "second name!" name="index.js"></Body>
  </div>
  )
}

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <p>Hellooooooo from main.</p>
//         <BasicFunction name="james"></BasicFunction>
//       </main>

//       <footer>
//         <p>Hellooooooo from from footer.</p>
//       </footer>
//     </div>
//   )
// }
