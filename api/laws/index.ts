/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 法令の一覧を取得します。
   * 指定した条件に該当する複数の法令をレスポンスの `laws` に格納します。
   * 
   * また、それぞれの法令について、下記の情報を格納します。
   * 
   * * `law_info` - 改正履歴に依存しない法令情報を格納します。法令番号など、改正されない情報が該当します。法令名は改正されることがありますので、改正履歴に依存する法令情報（`revision_info`や `current_revision_info`）に格納されます。
   * * `revision_info` - 改正履歴に依存する法令情報（改正されうる情報や、改正時点に関する情報）について、指定した条件に合致する一つの改正履歴の情報を格納します。 `asof` などを指定しない場合は現時点で最新の改正履歴、 `asof` を指定した場合はその時点で最新の改正履歴を格納します。
   * * `current_revision_info` - `asof` などの指定にかかわらず、現在以前の最後の改正履歴を格納します。
   * 
   * パラメータの多くは、 <a href="#model-lawdata_response">lawdata_response</a> に定義されているレスポンス中、 `laws` の各要素の `law_info` または `revision_info` の同名のプロパティに対応します（例えば、 `law_num` や `law_title` など）。パラメータを指定することで、これらのプロパティの値を対象にフィルタを行い、 `laws` に格納する法令や、 `revision_info` に格納する改正履歴を選択するように動作します。
   */
  get: {
    query?: {
      /**
       * 時点指定。指定した時点で有効な改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。
       * 
       * 例： `2023-07-01`
       */
      asof?: string | undefined
      /**
       * 法令ID（完全一致）
       * 
       * 例： `405AC0000000088`
       */
      law_id?: string | undefined
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
       * 公布年月日（指定値を含む、それ以後）
       * 
       * 例： `2023-07-01`
       */
      promulgation_date_from?: string | undefined
      /**
       * 公布年月日（指定値を含む、それ以前）
       * 
       * 例： `2023-07-01`
       */
      promulgation_date_to?: string | undefined
      /**
       * 法令種別（複数指定可）
       * 
       * 例： `Act`
       */
      law_type?: Types.Law_type[] | undefined
      /**
       * 法令名又は法令略称（部分一致）
       * 
       * 例： `国家行政組織法`
       */
      law_title?: string | undefined
      /**
       * 法令名読み又は法令略称読み（部分一致）
       * 
       * 例： `こっかぎょうせいそしきほう`
       */
      law_title_kana?: string | undefined
      /**
       * 法令名読み清音又は法令略称読み清音（部分一致）
       * 
       * 例： `こつかきようせいそしきほう`
       */
      law_title_kanaseion?: string | undefined
      /**
       * 改正日（指定値を含む、それ以後）
       * 
       * 例： `2023-07-01`
       */
      amendment_date_from?: string | undefined
      /**
       * 改正日（指定値を含む、それ以前）
       * 
       * 例： `2023-07-01`
       */
      amendment_date_to?: string | undefined
      /**
       * 改正法令公布日（指定値を含む、それ以後）
       * 
       * 例： `2023-07-01`
       */
      amendment_promulgate_date_from?: string | undefined
      /**
       * 改正法令公布日（指定値を含む、それ以前）
       * 
       * 例： `2023-07-01`
       */
      amendment_promulgate_date_to?: string | undefined
      /**
       * 改正法令の法令ID（完全一致）
       * 
       * 例： `405AC0000000088`
       */
      amendment_law_id?: string | undefined
      /**
       * 改正法令の法令名（部分一致）
       * 
       * 例： `国家行政組織法`
       */
      amendment_law_title?: string | undefined
      /**
       * 改正法令の法令名読み（部分一致）
       * 
       * 例： `こっかぎょうせいそしきほう`
       */
      amendment_law_title_kana?: string | undefined
      /**
       * 改正法令の法令名読み清音（部分一致）
       * 
       * 例： `こつかきようせいそしきほう`
       */
      amendment_law_title_kanaseion?: string | undefined
      /**
       * 改正法令の法令番号（完全一致）
       * 
       * 例： `平成五年法律第八十八号`
       */
      amendment_law_num?: string | undefined
      /**
       * 更新日時（指定値を含む、それ以後）
       * 
       * 例： `2023-07-01T14:30:15+09:00`
       */
      updated_from?: string | undefined
      /**
       * 更新日時（指定値を含む、それ以前）
       * 
       * 例： `2023-07-01T14:30:15+09:00`
       */
      updated_to?: string | undefined
      /**
       * 廃止等の状態
       * 
       * 例： `Repeal,Expire`
       */
      repeal_status?: Types.Repeal_status[] | undefined
      /**
       * 廃止日（指定値を含む、それ以後）
       * 
       * 例： `2023-07-01`
       */
      repeal_date_from?: string | undefined
      /**
       * 廃止日（指定値を含む、それ以前）
       * 
       * 例： `2023-07-01`
       */
      repeal_date_to?: string | undefined
      /**
       * 廃止後の効力
       * 例： `true`
       */
      remain_in_force?: boolean | undefined
      /**
       * 事項別分類コード（複数指定可）
       * 
       * コードの定義については<a href="#model-category_cd">Schemas</a>を参照
       * 
       * 例： `001,002`
       */
      category_cd?: Types.Category_cd[] | undefined
      /**
       * 新規制定・一部改正の別（複数指定可）
       * 
       * 例： `New,Partial`
       */
      mission?: Types.Mission[] | undefined
      /**
       * 履歴の状態（asofの値に関わらず常に現時点の状態を表す）
       * 
       * 例： `CurrentEnforced,UnEnforced`
       */
      status?: Types.Status[] | undefined
      /**
       * trueの場合、asofに依存しない現在以前の最後の版の情報（current_revision_info）をレスポンスに含めない
       * 例： `true`
       */
      omit_current_revision_info?: boolean | undefined
      /**
       * 並び順（返却値の項目に応じて複数選択可能。先頭に"+"または"-"の符号を付すことで昇順と降順を切り替え可能。符号がない場合は昇順。）<br/>orderとorder_noの両方が指定された場合はorderの並び順とする。 <br/>尚、プロトタイプ時点では、本パラメータ指定で並び順を指定すると速度が遅くなります。速度の問題が無いorder_noの利用を推奨します。
       * 
       * 例： `+law_info.law_id,-revision_info.amendment_promulgate_date`
       */
      order?: string[] | undefined
      /**
       * 並び順
       * 
       * - 1:種別・法令番号(法令種別ID＋法令番号)の降順
       * - 2:種別・法令番号(法令種別ID＋法令番号)の昇順
       * - 3:公布日(公布日＋法令番号)の降順
       * - 4:公布日(公布日＋法令番号)の昇順
       * - 5:五十音順(法令名よみがな＋法令番号)
       * 
       * 例： `1`
       */
      order_no?: Types.Order_no | undefined
      /** レスポンスの laws の取得件数の上限。省略時：最大数（全件取得） */
      limit?: number | undefined
      /**
       * レスポンスの laws を全件のうち何件目から取得するか
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
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Laws_response
  }
}
