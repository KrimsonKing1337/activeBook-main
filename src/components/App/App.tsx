import { BooksWrapper, Title } from 'components';

import 'styles/styles.scss';

import * as styles from './App.scss';

export const App = () => {
  return (
    <div className={styles.Wrapper}>
      <Title>
        ActiveBook
      </Title>

      <BooksWrapper />
    </div>
  );
};
