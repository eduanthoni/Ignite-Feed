import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Info } from 'phosphor-react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

type postProps = {
	author: {
		avatarUrl: string,
		name: string,
		role: string
	},
	content: {
		type: string,
		info: string
	}[],
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
				{content.map(item => {
					if(item.type === 'paragraph') {
						return <p>{item.info}</p>
					} else if (item.type === 'link') {
						return <p><a href='#'>{item.info}</a></p>
					}
				})}
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