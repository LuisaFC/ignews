import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButon'
import styles from './home.module.scss'

export default function Home() {
  return (
   <>
     <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <br/><span>React</span> world.</h1>
          <p>
            Get access to all the contents <br />
            <span>for only $9.90/month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
   </>
  )
}
