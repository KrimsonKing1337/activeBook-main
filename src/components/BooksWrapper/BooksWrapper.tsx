import FirstBookCoverImage from 'assets/1.jpg';
import SecondBookCoverImage from 'assets/2.jpg';

import { Book } from './components';

import * as styles from './BooksWrapper.scss';

export const BooksWrapper = () => {
  return (
    <div className={styles.BooksWrapper}>
      <Book
        name="Детская сказка"
        desc="Демонстрация применения формата для&nbsp;детской литературы"
        imgSrc={FirstBookCoverImage}
        link="/fairytale"
      />

      <Book
        name="По ту сторону изгороди"
        desc="Демонстрация применения формата для&nbsp;художественной литературы"
        imgSrc={SecondBookCoverImage}
        link="/over-the-garden-wall"
      />
    </div>
  );
};
