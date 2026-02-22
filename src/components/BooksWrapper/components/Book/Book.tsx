import * as styles from './Book.scss';

export type BookProps = {
  imgSrc: string;
  name: string;
  desc: string;
  link: string;
};

export const Book = ({ imgSrc, name, desc, link }: BookProps) => {
  const clickHandler = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.BookWrapper}>
      <div className={styles.Book} onClick={clickHandler}>
        <img src={imgSrc} alt="" />

        <div className={styles.Name}>
          {name}
        </div>

        <div className={styles.Desc}>
          {desc}
        </div>
      </div>
    </div>
  );
};
