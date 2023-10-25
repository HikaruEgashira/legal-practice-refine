/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 指定したキーワードを本文に含む法令の一覧を取得します。
   * 指定した条件に該当する複数の法令をレスポンスの `items` に格納します。
   * 
   * また、それぞれの法令について、下記の情報を格納します。
   * 
   * * `law_info` - 改正履歴に依存しない法令情報を格納します。法令番号など、改正されない情報が該当します。法令名は改正されることがありますので、改正履歴に依存する法令情報（`revision_info`）に格納されます。
   * * `revision_info` - 改正履歴に依存する法令情報（改正されうる情報や、改正時点に関する情報）について、指定した条件に合致する一つの改正履歴の情報を格納します。 `asof` などを指定しない場合は現時点で最新の改正履歴、 `asof` を指定した場合はその時点で最新の改正履歴を格納します。
   * * `sentence` - 版の段落内本文を格納します。
   * 
   * パラメータの多くは、 <a href="#model-keyword_response">keyword_response</a> に定義されているレスポンス中、 `items` の各要素の `law_info` または `revision_info` の同名のプロパティに対応します（例えば、 `law_num` や `law_title` など）。パラメータを指定することで、これらのプロパティの値を対象にフィルタを行い、 `items` に格納する法令や、検索対象の改正履歴を選択するように動作します。
   */
  get: {
    query: {
      /**
       * 検索ワード<br/> ・入力された検索ワードを含む法令条文を検索します。<br/> ・複数の検索ワードを空白で区切った場合は、そのすべての検索ワードを含む法令条文を検索します（AND検索）。<br/> 　例：「国旗　国歌」の場合「国旗」と「国歌」の両方を含む法令条文を検索。<br/> ・正規表現等には対応しておりません。<br/><br/>
       * 例： `国旗　国歌`
       */
      keyword: string
      /**
       * 法令種別、複数指定可
       * 
       * 例： `Act,CabinetOrder`
       */
      law_type?: Types.Law_type[] | undefined
      /**
       * 公布年月日(開始)
       * 
       * 例： `2023-07-01`
       */
      promulgation_date_from?: string | undefined
      /**
       * 公布年月日(終了)
       * 
       * 例： `2023-07-01`
       */
      promulgation_date_to?: string | undefined
      /**
       * 時点指定。指定した時点で有効な改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。
       * 
       * 
       * 例： `2023-07-01`
       */
      asof?: string | undefined
      /**
       * 法令番号（完全一致）
       * 
       * 例： `平成五年法律第八十八号`
       */
      law_num?: string | undefined
      /**
       * 法令番号の元号
       * 
       * 例： `Showa`
       */
      law_num_era?: Types.Era | undefined
      /**
       * 法令番号の年
       * 
       * 例： `60`
       */
      law_num_year?: number | undefined
      /**
       * 法令番号の法令種別
       * 
       * 例： `Act`
       */
      law_num_type?: Types.Law_type | undefined
      /**
       * 法令番号の号数
       * 
       * 例： `88`
       */
      law_num_num?: string | undefined
      /**
       * 事項別分類コード（複数指定可）</br>コードの定義については<a href="#model-category_cd">Schemas</a>を参照
       * 
       * 例： `001,002`
       */
      category_cd?: Types.Category_cd[] | undefined
      /**
       * 並び順（返却値の項目に応じて複数選択可能。先頭に"+"または"-"の符号を付すことで昇順と降順を切り替え可能。符号がない場合は昇順。）<br/>orderとorder_noの両方が指定された場合はorderの並び順とする。 <br/>尚、プロトタイプ時点では、本パラメータ指定で並び順を指定すると速度が遅くなります。速度の問題が無いorder_noの利用を推奨します。
       * 
       * 例： `+law_info.law_id,-revision_info.amendment_promulgate_date`
       */
      order?: string[] | undefined
      /**
       * 並び順
       * - 1:種別・法令番号(法令種別ID＋法令番号)の降順 - 2:種別・法令番号(法令種別ID＋法令番号)の昇順 - 3:公布日(公布日＋法令番号)の降順 - 4:公布日(公布日＋法令番号)の昇順 - 5:五十音順(法令名＋法令番号)
       * 
       * 例： `1`
       */
      order_no?: Types.Order_no | undefined
      /** レスポンスの `items` の取得件数の上限。省略時：最大数（全件取得） */
      limit?: number | undefined
      /**
       * 取得位置（何件目から取得するか）
       * 
       * 例： `0`
       */
      offset?: number | undefined

      /**
       * レスポンス形式（"json" 又は "xml"）。未指定の場合はAcceptヘッダから判断、判断できない場合は "json" とする。
       * 
       * 例： `json`
       */
      response_format?: Types.Response_format | null | undefined
    }

    status: 200
    /** OK */
    resBody: Types.Keyword_response
  }
}
