import * as styles from './Book.scss';

export type BookProps = {
  imgSrc: string;
  name: string;
};

export const Book = ({ imgSrc, name }: BookProps) => {
  return (
    <div className={styles.Book}>
      <img src={imgSrc} alt="" />

      <div className={styles.Name}>
        {name}
      </div>
    </div>
  );
};
