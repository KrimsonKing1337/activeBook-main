import FirstBookCoverImage from 'assets/1.png';
import SecondBookCoverImage from 'assets/2.png';

import { Book } from './components';

import * as styles from './BooksWrapper.scss';

export const BooksWrapper = () => {
  return (
    <div className={styles.BooksWrapper}>
      <Book name="Детская сказка" imgSrc={FirstBookCoverImage} link="/farytale" />
      <Book name="По ту сторону изгороди" imgSrc={SecondBookCoverImage} link="/over-the-garden-wall" />
    </div>
  );
};
