import { type PropsWithChildren } from 'react';

import * as styles from './Title.scss';

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Title}>
      {children}
    </div>
  );
};
