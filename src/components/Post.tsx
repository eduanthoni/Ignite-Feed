import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, useState } from 'react';

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
	});

	const [comment, setComment] = useState(['alo']);

	const [newCommentText, setNewCommentText] = useState('');

	function handleAddNewComment(e: FormEvent) {
		e.preventDefault();

		setComment([...comment, newCommentText]);

		setNewCommentText('');
	}

	function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>){
		setNewCommentText(e.target.value);
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeleted = comment.filter(comment => {
			return comment !== commentToDelete;
		});

		setComment(commentsWithoutDeleted);
	}

	const isTextEmpty = newCommentText.length === 0;
	
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
						return <p key={item.info}>{item.info}</p>
					} else if (item.type === 'link') {
						return <p key={item.info}><a href='#'>{item.info}</a></p>
					}
				})}
			</div>

			<form onSubmit={handleAddNewComment} className={style.commentSection}>
				<strong>Deixe seu feedback</strong>
				
				<textarea 
					placeholder='Deixe um comentário'
					onChange={handleNewCommentChange}
					value={newCommentText}
				/>

				<footer>
					<button 
						type='submit'
						disabled={isTextEmpty}
					>
						Publicar
					</button>
				</footer>

			</form>
			
			<div className={style.commentList}>
				{comment.map(comment => {
					return <Comment 
						content={comment}
						key={comment}
						onDelete={deleteComment}
					/>
				})}
			</div>
		</article>
		);
	}