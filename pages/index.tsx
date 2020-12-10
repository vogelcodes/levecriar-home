import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'



export default function Home({posts, categories}) {
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
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&amp;family=Roboto+Slab:wght@300&amp;display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
  <header className={styles.header}><ul>{categories.map(cat=>{
    return <li><a href={cat.link}>
              {cat.name}
           </a></li>
  })}</ul></header>
        <div className="w-auto flex flex-row items-center md:flex-col">
          <h1 className="p-2 font-serif text-6xl md:text-8xl">
            Leve<br/>Criar
          </h1>

          <p className="font-sans p-2 md:text-3xl md:text-center w-3/4">
          Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional e financeira.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map(post=>{
            return(
              <a key={post.id}href={post.link} className={styles.card}>
            <img className={styles.img} src={post.jetpack_featured_media_url}/>
                <div className={styles.textbox}>
                  <h3>{post.title.rendered.replace('&#8211;','-')}</h3>
                  <p>
                  {post.excerpt.rendered.replace('&#8220;','"').replace('&#8230;','...').replace('&#8221;','"').replace('&#8211;','-').slice(3,150)+'...'}
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
  var res = await fetch("https://levecriar.com.br/wp-json/wp/v2/posts?per_page=12")
  const posts = await res.json()
  res = await fetch("https://www.levecriar.com.br/wp-json/wp/v2/categories?orderby=count&order=desc&per_page=6")
  const categories = await res.json()
  

  return {
    props: {posts, categories}, // will be passed to the page component as props
  }
}
