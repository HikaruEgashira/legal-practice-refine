/* eslint-disable */
export type Methods = {
  /**
   * 法令の添付ファイルを取得します。
   * 
   * 指定した法令履歴IDに該当する法令の添付ファイルを指定することで、バイナリデータを取得できます。
   * 
   * ファイルを指定しない場合は、当該法令の全ての添付ファイルを pict フォルダに格納してZIP圧縮したバイナリデータを取得できます。
   */
  get: {
    query: {
      /**
       * 法令履歴ID（完全一致）
       * 
       * 例： `411AC0000000127_20150801_000000000000000`
       */
      law_revision_id: string
      /**
       * 法令本文中の添付ファイルのsrc属性
       * 
       * 例： ` ./pict/H11HO127-001.jpg`
       */
      src?: string | undefined
    }

    status: 200
    /** OK */
    resBody: Blob
  }
}
