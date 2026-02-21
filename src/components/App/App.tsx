import { BooksWrapper, Title } from 'components';

import 'styles/styles.scss';

import * as styles from './App.scss';

export const App = () => {
  return (
    <div className={styles.Wrapper}>
      <Title>
        ActiveBooks
      </Title>

      <div className={styles.Desc}>
        <p>
          ActiveBooks &mdash; книги в&nbsp;формате «живая книга»,
          с&nbsp;различными визуальными эффектами,
          звуками, музыкой, вибрацией и&nbsp;вспышкой.
        </p>

        <p>
          Для наилучшего опыта читайте на&nbsp;смартфоне.
        </p>

        <p>
          Внимание: не работает во&nbsp;встроенных браузерах мессенджеров.
        </p>
      </div>

      <BooksWrapper />
    </div>
  );
};
