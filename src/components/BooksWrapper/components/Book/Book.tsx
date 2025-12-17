import * as styles from './Book.scss';

export type BookProps = {
  imgSrc: string;
  name: string;
  link: string;
};

export const Book = ({ imgSrc, name, link }: BookProps) => {
  const clickHandler = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.Book} onClick={clickHandler}>
      <img src={imgSrc} alt="" />

      <div className={styles.Name}>
        {name}
      </div>
    </div>
  );
};
