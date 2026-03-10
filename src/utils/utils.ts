export function isInTelegram() {
  return typeof window.Telegram !== 'undefined'
    || typeof window.TelegramWebview !== 'undefined'
    || typeof window.TelegramWebviewProxy !== 'undefined'
    || typeof window.TelegramWebviewProxyProto !== 'undefined';
}
