export const ERROR_CODES = {
  /*
   * Response status 200番台
   */
  NORMAL_NOOP: {
    errCode: 1000,
    errMsg: '',
  },

  /*
   * Response カラの時
   */
  EMPTY_CONTENTS: {
    errCode: 2000,
    errMsg: 'コンテンツが存在しません。条件を変更して再度お試しください。',
  },

  /*
   * バリデーション: Email
   */
  VALIDATE_TEXT_256: {
    errCode: 3000,
    errMsg: '256文字以内で入力してください。',
  },

  /*
   * バリデーション: URL
   */
  VALIDATE_URL: {
    errCode: 3001,
    errMsg: '正しい形式で入力してください。',
  },

  /*
   * バリデーション: Image
   */
  VALIDATE_IMAGE: {
    errCode: 3002,
    errMsg: '画像のURLが取得できませんでした。再度お試しください。',
  },

  /*
   * バリデーション: 必須入力
   */
  REQUIRED_TEXT: {
    errCode: 4000,
    errMsg: '必須入力項目が未入力のままです。',
  },

  /*
   * サーバーエラー
   */
  INTERNAL_SERVER_ERROR: {
    errCode: 5000,
    errMsg: 'サーバーエラーが起きました。開発者に問い合わせください。',
  },

  /*
   * 予期せぬエラー
   */
  UNKNOWN_ERROR: {
    errCode: 9999,
    errMsg: '予期せぬエラーが発生しました。再度お試しください。',
  },
}
