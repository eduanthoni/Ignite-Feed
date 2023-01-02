import './global.css';
import styles from './App.module.css';

import { Header } from '../src/components/Header';
import { Sidebar } from '../src/components/Sidebar';
import { Post } from '../src/components/Post';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
