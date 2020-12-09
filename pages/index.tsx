import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'



export default function Home({posts}) {
  /*const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://levecriar.com.br/wp-json/wp/v2/posts")
      .then(response=>{
        response.json().then(data=>{
          setPosts(data);
        })
      });

  },[]);*/
  return (
    <div className={styles.container}>
      <Head>
        <title>LeveCriar.com.br</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Leve Criar
        </h1>

        <p className={styles.description}>
        Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional e financeira.
        </p>

        <div className={styles.grid}>
          {posts.map(post=>{
            return(
              <a key={post.id}href={post.link} className={styles.card}>
            <img className={styles.img} src={post.jetpack_featured_media_url}/>
                <div className={styles.textbox}>
                  <h3>{post.title.rendered.replace('&#8211;','-')}</h3>
                  <p>
                  {post.excerpt.rendered.replace('&#8220;','"').replace('&#8230;','...').replace('&#8221;','"').replace('&#8211;','-').slice(3,-16)+'...'}
                  </p>

                </div>
          </a>
            )
          })}
        
        </div>
      </main>

      <footer className={styles.footer}>
Levecriar.com.br      </footer>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("https://levecriar.com.br/wp-json/wp/v2/posts")
  const posts = await res.json()

  return {
    props: {posts}, // will be passed to the page component as props
  }
}
