/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 法令の改正履歴の一覧を取得します。
   * 指定した条件に該当する1つの法令について、改正履歴の一覧をレスポンスの `revisions` に格納します。
   * 
   * パラメータの多くは、 <a href="#model-law_revisions_response">law_revisions_response</a> に定義されているレスポンス中、 `revisions` の各要素の同名のプロパティに対応します。パラメータを指定することで、これらのプロパティの値を対象にフィルタを行い、 `revisions` に格納する改正履歴を選択するように動作します。
   */
  get: {
    query?: {
      /**
       * 法令ID（完全一致）。law_id または law_num の指定が必須です。
       * 
       * 例： `405AC0000000088`
       */
      law_id?: string | undefined
      /**
       * 法令番号（完全一致）。law_id または law_num の指定が必須です。
       * 
       * 例： `昭和二十二年政令第十六号`
       */
      law_num?: string | undefined
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
       * 
       * 例： `true`
       */
      remain_in_force?: boolean | undefined
      /**
       * 事項別分類コード（複数指定可）</br>コードの定義については<a href="#model-category_cd">Schemas</a>を参照
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
       * レスポンス形式（"json" 又は "xml"）。未指定の場合はAcceptヘッダから判断、判断できない場合は "json" とする。
       * 
       * 例： `json`
       */
      response_format?: Types.Response_format | null | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Law_revisions_response
  }
}
