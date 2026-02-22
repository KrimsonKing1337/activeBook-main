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
          ActiveBooks &mdash; новый формат интерактивных цифровых книг,
          с&nbsp;различными визуальными эффектами,
          звуками, музыкой, вибрацией и&nbsp;вспышкой.
        </p>

        <p>
          Демонстрация технологии на&nbsp;примере двух произведений.
        </p>

        <p>
          Для наилучшего опыта читайте на&nbsp;смартфоне.
        </p>

        <p>
          Внимание: не работает во&nbsp;встроенных браузерах мессенджеров.
        </p>
      </div>

      <BooksWrapper />

      <div className={styles.Footer}>
        <p>Демонстрационный прототип.</p>
        <p>ActiveBook engine © Олег Шилов</p>
      </div>
    </div>
  );
};
