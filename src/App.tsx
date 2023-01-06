import './global.css';
import styles from './App.module.css';

import { Header } from '../src/components/Header';
import { Sidebar } from '../src/components/Sidebar';
import { Post } from '../src/components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/steniowagner.png",
      name: "Stenio Wagner",
      role: "Full-Stack Engineer"
    },
    content: [
      {type: 'paragraph', info: 'Fala galeraa 👋'},
      {type: 'paragraph', info: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', info: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/eduanthoni.png",
      name: "Anthoni Duque",
      role: "Junior Developer"
    },
    content: [
      {type: 'paragraph', info: 'Apenas uma linha para testar. Olá a todos'},
    ],
    publishedAt: new Date('2023-01-06 10:17:59')
  }
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map(post => {
            return <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </div>
      </div>
    </>
  )
}

export default App
