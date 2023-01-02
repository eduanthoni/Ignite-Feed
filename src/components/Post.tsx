import { Comment } from './Comment';
import style from './Post.module.css';

export function Post() {
	return (
		<article className={style.post}>
			
			<header>
				<div className={style.author}>
					<img className={style.avatar} src="http://github.com/steniowagner.png" />
					<div className={style.authorInfo}>
						<strong>Stenio Wagner</strong>
						<span>Full-Stack Engineer</span>
					</div>
				</div>
				<time title='01 de janeiro de 2023 às 18:56' dateTime='2023-01-01 18:53:00'>Publicado há 1h</time>
			</header>
		
			<div className={style.content}>
				<p>Fala galeraa 👋</p>
				<p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p><a href='#'> 👉 jane.design/doctorcare</a></p>
				<p>
					<a href='#'> #novoprojeto </a>
					<a href="#"> #nlw </a>
					<a href="#"> #rocketseat </a>
				</p>
			</div>

			<form className={style.commentSection}>
				<strong>Deixe seu feedback</strong>
				
				<textarea 
					placeholder='Deixe um comentário'
				/>

				<footer>
					<button type='submit'>Publicar</button>
				</footer>

			</form>
			
			<div className={style.commentList}>
				<Comment/>
				<Comment/>
			</div>
		</article>
		);
	}