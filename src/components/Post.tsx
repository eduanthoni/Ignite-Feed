import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

type postProps = {
	author: {
		avatarUrl: string,
		name: string,
		role: string
	},
	content: Array<object>,
	publishedAt: Date
}

export function Post({author, content, publishedAt}: postProps) {
	const formattedPublishedDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
		locale: ptBR
	});

	const comparedPublishedAt = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})
	
	return (
		<article className={style.post}>
			
			<header>
				<div className={style.author}>
					<Avatar src={author.avatarUrl} hasBorder/>
					<div className={style.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={formattedPublishedDate} dateTime={publishedAt.toISOString()}>
					{comparedPublishedAt}
				</time>
			</header>
		
			<div className={style.content}>
				<p>Fala galeraa 👋</p>
				<p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p><a href='#'> 👉 jane.design/doctorcare</a></p>
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