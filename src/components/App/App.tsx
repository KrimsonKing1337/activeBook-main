import { useEffect, useState } from 'react';

import { BooksWrapper, Title } from 'components';

import { isInTelegram } from 'utils';

import 'styles/styles.scss';

import { WrongUserAgent } from '../WrongUserAgent';

import * as styles from './App.scss';

export const App = () => {
  const [isInApp, setIsInApp] = useState(false);

  useEffect(() => {
    const { userAgent } = navigator;

    const isMessengerUserAgent =
      /Telegram|FBAN|FBAV|Facebook|Instagram|WhatsApp|Viber|Line|MicroMessenger|QQBrowser/i.test(userAgent);

    const isInTelegramWebview = isInTelegram();

    setIsInApp(isMessengerUserAgent || isInTelegramWebview);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Title>
        ActiveBooks
      </Title>

      {isInApp && (
        <WrongUserAgent />
      )}

      {!isInApp && (
        <>
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
              Внимание: после последних обновлений ios
              у некоторых пользователей наблюдается отсутствие звуков.
              Просьба в таких случаях вместо айфона использовать десктоп
            </p>
          </div>

          <BooksWrapper />

          <div className={styles.Footer}>
            <p>
              Демонстрационный прототип.
            </p>

            <p>
              ActiveBook engine © Олег Шилов
            </p>
          </div>
        </>
      )}
    </div>
  );
};
