import Head from 'next/head'
import { Nav, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
//import Card from '../components/card'



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
  <Nav variant="pills" defaultActiveKey={categories[0].link}>{categories.map(cat=>{
    return (
    <Nav.Link key={cat.id} href={cat.link}>{cat.name}</Nav.Link>
  )})}</Nav>
        <div className="md:w-1/2 flex flex-row items-center md:flex-col ml-8">
          <h1 className="p-2 font-serif text-6xl md:text-8xl">
            Leve<br/>Criar
          </h1>

          <p className="text-3xl md:text-4xl">
          Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional e financeira.
          </p>
        </div>

        <div className="flex justify-around flex-wrap m-8">
          {posts.map(post=>{
            return(
              <Card key={post.id}style={{ width: '18rem' }}>
  <Card.Img variant="top" src={post.jetpack_featured_media_url} />
  <Card.Body>
    <Card.Title>{post.title.rendered.replace('&#8211;','-')}</Card.Title>
    <Card.Text>
    {post.excerpt.rendered.replace('&#8220;','"').replace('&#8230;','...').replace('&#8221;','"').replace('&#8211;','-').slice(3,200)+'...'}

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              //<Card key={post.id} props={post}/>
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
