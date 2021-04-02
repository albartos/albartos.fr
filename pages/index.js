import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <meta name="Description" content={"ALBARTOS, Consultant informatique freelance"}></meta>
        <title>ALBARTOS</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.brand}>ALBARTOS</h1>


        <div className={styles.blog}>

        </div>

        <ul className={styles.links}>
          <li><a href="./blog">Blog</a></li>
        </ul>

        <ul className={styles.links}>
          <li><a href="https://www.malt.fr/profile/albartos">Malt</a></li>
          <li><a href="https://www.linkedin.com/in/delemotte/">Linkedin</a></li>
          <li><a href="https://github.com/DBarthe">Github</a></li>
        </ul>
      </header>



      <div className={styles.title}>
        <h2>
          Ingénieur Informaticien
        </h2>
        <br></br>
        <p className={styles.skills}>Web - DevOps - Cloud - Automatisation</p>
      </div>


      <div className={styles.email}>Barthélémy Delemotte</div>
      <div className={styles.email}>contact (at) albartos.fr</div>


    </div>
  )
}