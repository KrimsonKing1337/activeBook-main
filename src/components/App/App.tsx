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
          Живые книги &mdash; это текст, который звучит и&nbsp;дышит.
          Музыка, анимация, световые и&nbsp;тактильные эффекты усиливают атмосферу, сохраняя главное &mdash; чтение.
        </p>

        <p>
          Ниже &mdash; демонстрация формата на&nbsp;примере двух произведений.
        </p>

        <p>
          Лучше всего ощущается на&nbsp;смартфоне.
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
