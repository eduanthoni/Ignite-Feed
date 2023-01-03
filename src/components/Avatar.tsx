import style from './Avatar.module.css';

type imageProp = {
  src: string,
  hasBorder: boolean
}

export function Avatar({ src, hasBorder = true }: imageProp) {
  return (
    <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={src} />
  );
}