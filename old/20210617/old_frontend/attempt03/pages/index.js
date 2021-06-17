import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
// import { getFetchedData } from '../lib/fetch'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const anObj = new Object;
  console.log("hello!!!")
  return { props: anObj };
  // return {
  //   props: {
  //     allPostsData
  //   }
  // }
}

// export async function getFetch() {
//   const allData = getFetchedData()
//   console.log("hello")
//   return {
//     props: {
//       allData
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>[Your Self Introduction]</p> */}
        <p>Here's a little bit about myself:...</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  )
}