import Head from 'next/head'
import { useEffect, useState } from 'react'



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
    <div className="container">
      <Head>
        <title>LeveCriar.com.br</title>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&amp;family=Roboto+Slab:wght@300&amp;display=swap" rel="stylesheet"></link>
      </Head>

      <main className="">
  <header className="md:container mx-auto"><ul>{categories.map(cat=>{
    return <li><a href={cat.link}>
              {cat.name}
           </a></li>
  })}</ul></header>
        <h1 className="bg">
          Leve<br/>Criar
        </h1>

        <p className="">
        Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional e financeira.
        </p>

        <div className="">
          {posts.map(post=>{
            return(
              <a key={post.id}href={post.link} className="">
            <img className="" src={post.jetpack_featured_media_url}/>
                <div className="">
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

      <footer className="">
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
