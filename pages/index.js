import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title >My name is Lisa.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-12">
        <h1 className="title text-3xl pb-4 font-bold border-b-2 border-[color:var(--body-color)] mb-6">
          Lisa Sy
        </h1>

        <p fontSize="lg">
          Designer, artist, entrepreneur passionate about creative problem-solving,
          fostering community, and encouraging us to become our best
          selves together.
        </p>
        <p>
        A decade of experience.
From 0 to 1, to big tech, and everything in between.
From product design, to illustration, and front-end development.
          </p>

          <ul>
            <li>
            Founder of <a href="https://www.daybreaksupply.co/" target="_blank">Daybreak Supply Co.</a>
            </li>
            <li>
            Staff Designer at Meta, New Product Experimentation
            </li>
            <li>
            Created <a href="https://getactus.com/" target="_blank">Actus</a>, a new volunteering platform
            </li>
          </ul>
      </main>
      <footer>
        <ul className="flex gap-4">
          <li><a href="">Resume</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </footer>
    </div>
  )
}
