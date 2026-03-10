import * as styles from './WrongUserAgent.scss';

export const WrongUserAgent = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Desc}>
        Пожалуйста, скопируйте и откройте в браузере (здесь работает некорректно):
      </div>

      <div className={styles.Link}>
        https://active-books.ru
      </div>
    </div>
  );
};
