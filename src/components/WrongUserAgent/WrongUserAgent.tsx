import { useState } from 'react';

import * as styles from './WrongUserAgent.scss';

export const WrongUserAgent = () => {
  const [isCopied, setIsCopied] = useState(false);

  const buttonClickHandler = () => {
    setIsCopied(true);

    navigator.clipboard.writeText('https://active-books.ru');
  };

  const buttonLabel = isCopied ? 'Скопировано' : 'Скопировать ссылку';

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Desc}>
        Откройте, пожалуйста, в браузере (здесь работает некорректно)
      </div>

      <div className={styles.Button} onClick={buttonClickHandler}>
        {buttonLabel}
      </div>
    </div>
  );
};
