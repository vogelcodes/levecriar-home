import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/card'



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
    <div className="">
      <Head>
        <title>LeveCriar.com.br</title>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&amp;family=Roboto+Slab:wght@300&amp;display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col items-center">
  <header><ul className="w-screen flex flex-row">{categories.map(cat=>{
    return (
    <a className="flex-grow"href={cat.link}><li key={cat.id} className="text-4x1">{cat.name}</li></a>
  )})}</ul></header>
        <div className="w-auto flex flex-row items-center md:flex-col ml-8">
          <h1 className="p-2 font-serif text-6xl md:text-8xl">
            Leve<br/>Criar
          </h1>

          <p className="font-sans p-2 md:text-4xl md:text-center w-3/4">
          Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional e financeira.
          </p>
        </div>

        <div className="flex justify-around flex-wrap m-8">
          {posts.map(post=>{
            return(
              <Card props={post}/>
            )
          })}
        
        </div>
      <footer className="self-center">
Levecriar.com.br      </footer>
      </main>

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
