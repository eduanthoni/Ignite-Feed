import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

type commentProps = {
  content: string,
  onDelete: (param: string) => void
}

export function Comment({ content, onDelete }: commentProps) {
  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    onDelete(content);
  }

  function handleLikeCommment() {
    setLikes(likes + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar src='http://github.com/danielhe4rt.png' hasBorder={false}/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>

          <header>
            <div className={style.authorAndTime}>
              <strong>Daniel He4rt</strong>
              <time title='01 de janeiro de 2023 às 18:56' dateTime='2023-01-01 18:53:00'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCommment}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}