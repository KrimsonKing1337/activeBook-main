import FirstBookCoverImage from 'assets/1.png';
import SecondBookCoverImage from 'assets/2.png';

import { Book } from './components';

import * as styles from './BooksWrapper.scss';

export const BooksWrapper = () => {
  return (
    <div className={styles.BooksWrapper}>
      <Book name="Детская сказка" imgSrc={FirstBookCoverImage} />
      <Book name="Заглянуть за..." imgSrc={SecondBookCoverImage} />
    </div>
  );
};
