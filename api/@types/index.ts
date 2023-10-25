/* eslint-disable */
/**
 * 並び順
 * 
 * - 1:種別・法令番号(法令種別ID＋法令番号)の降順
 * - 2:種別・法令番号(法令種別ID＋法令番号)の昇順
 * - 3:公布日(公布日＋法令番号)の降順
 * - 4:公布日(公布日＋法令番号)の昇順
 * - 5:五十音順(法令名よみがな＋法令番号)
 */
export type Order_no = 1 | 2 | 3 | 4 | 5

/** 元号 */
export type Era = 'Meiji' | 'Taisho' | 'Showa' | 'Heisei' | 'Reiwa'

/** レスポンス形式（"json" 又は "xml"） */
export type Response_format = 'json' | 'xml'

/**
 * 廃止等の状態:
 *   * `None`                - 廃止・失効等の状態なし
 *   * `Repeal`              - 廃止
 *   * `Expire`              - 失効
 *   * `Suspend`             - 停止
 *   * `LossOfEffectiveness` - 実効性喪失
 */
export type Repeal_status = 'None' | 'Repeal' | 'Expire' | 'Suspend' | 'LossOfEffectiveness'

/**
 * 新規制定・一部改正の別:
 *   * `New`      - 新規制定
 *   * `Partial`  - 一部改正
 */
export type Mission = 'New' | 'Partial'

/**
 * 履歴の状態:
 *   * `CurrentEnforced`  - 現施行法令
 *   * `UnEnforced`       - 未施行法令
 *   * `PreviousEnforced` - 過去施行法令
 *   * `Repeal`           - 廃止・失効法令
 */
export type Status = 'CurrentEnforced' | 'UnEnforced' | 'PreviousEnforced' | 'Repeal'

/**
 * 法令種別:
 *   * `Constitution`         - 憲法
 *   * `Act`                  - 法律
 *   * `CabinetOrder`         - 政令
 *   * `ImperialOrder`        - 勅令
 *   * `MinisterialOrdinance` - 府省令
 *   * `Rule`                 - 規則
 *   * `Misc`                 - その他
 */
export type Law_type = 'Constitution' | 'Act' | 'CabinetOrder' | 'ImperialOrder' | 'MinisterialOrdinance' | 'Rule' | 'Misc'

/**
 * 事項別分類コード:
 * 
 *   * `001` - 憲法
 *   * `002` - 刑事
 *   * `003` - 財務通則
 *   * `004` - 水産業
 *   * `005` - 観光
 *   * `006` - 国会
 *   * `007` - 警察
 *   * `008` - 国有財産
 *   * `009` - 鉱業
 *   * `010` - 郵務
 *   * `011` - 行政組織
 *   * `012` - 消防
 *   * `013` - 国税
 *   * `014` - 工業
 *   * `015` - 電気通信
 *   * `016` - 国家公務員
 *   * `017` - 国土開発
 *   * `018` - 事業
 *   * `019` - 商業
 *   * `020` - 労働
 *   * `021` - 行政手続
 *   * `022` - 土地
 *   * `023` - 国債
 *   * `024` - 金融・保険
 *   * `025` - 環境保全
 *   * `026` - 統計
 *   * `027` - 都市計画
 *   * `028` - 教育
 *   * `029` - 外国為替・貿易
 *   * `030` - 厚生
 *   * `031` - 地方自治
 *   * `032` - 道路
 *   * `033` - 文化
 *   * `034` - 陸運
 *   * `035` - 社会福祉
 *   * `036` - 地方財政
 *   * `037` - 河川
 *   * `038` - 産業通則
 *   * `039` - 海運
 *   * `040` - 社会保険
 *   * `041` - 司法
 *   * `042` - 災害対策
 *   * `043` - 農業
 *   * `044` - 航空
 *   * `045` - 防衛
 *   * `046` - 民事
 *   * `047` - 建築・住宅
 *   * `048` - 林業
 *   * `049` - 貨物運送
 *   * `050` - 外事
 */
export type Category_cd = '001' | '002' | '003' | '004' | '005' | '006' | '007' | '008' | '009' | '010' | '011' | '012' | '013' | '014' | '015' | '016' | '017' | '018' | '019' | '020' | '021' | '022' | '023' | '024' | '025' | '026' | '027' | '028' | '029' | '030' | '031' | '032' | '033' | '034' | '035' | '036' | '037' | '038' | '039' | '040' | '041' | '042' | '043' | '044' | '045' | '046' | '047' | '048' | '049' | '050'

/** エラー情報 */
export type Error_info = {
  /**
   * エラーコード
   * 
   * 現在エラーコードは検討中のため、一律空文字で返却されます。
   */
  code?: string | undefined
  /** エラーメッセージ */
  message?: string | undefined
}

/** 履歴に依存しない法令（法令IDで特定される法令）のメタ情報 */
export type Law_info = {
  /** 法令種別 */
  law_type?: Law_type | undefined

  /** 法令ID */
  law_id?: string | undefined
  /** 法令番号 */
  law_num?: string | undefined

  /** 法令番号の元号 */
  law_num_era?: Era | undefined

  /** 法令番号の年 */
  law_num_year?: number | undefined

  /** 法令番号の法令種別 */
  law_num_type?: Law_type | undefined

  /** 法令番号の号数 */
  law_num_num?: string | undefined
  /** 公布日 */
  promulgation_date?: string | undefined
}

/** 法令の履歴に関する情報 */
export type Revision_info = {
  /** 法令履歴ID */
  law_revision_id?: string | undefined

  /** 法令種別 */
  law_type?: Law_type | undefined

  /** 法令名 */
  law_title?: string | undefined
  /** 法令名読み */
  law_title_kana?: string | undefined
  /** 法令名読み清音 */
  law_title_kanaseion?: string | undefined
  /** 法令略称 */
  abbrev?: string | undefined
  /** 法令略称読み */
  abbrev_kana?: string | undefined
  /** 法令分野分類 */
  category?: string | undefined
  /** 法令履歴の順序を表す数値 */
  revision_index?: number | undefined
  /** 法令履歴の修正版を表す数値 */
  subrevision_index?: number | undefined
  /** 正誤などによる更新日時 */
  updated?: string | undefined
  /** 改正前の法令履歴ID（新規制定のため改正前がない場合はnull） */
  previus_revision_id?: string | null | undefined
  /** 改正法令公布日 */
  amendment_promulgate_date?: string | undefined
  /** 改正法令施行期日（この履歴に対応する改正の施行期日） */
  amendment_enforcement_date?: string | undefined
  /** 改正法令施行終了日（この履歴に対応する改正の施行期日） */
  amendment_enforcement_end_date?: string | undefined
  /** 施行期日規定などの参考情報（この履歴に対応する改正の施行期日） */
  amendment_enforcement_comment?: string | undefined
  /** 擬似的な施行期日（実際の施行期日とは限らない）（この履歴に対応する改正の施行期日） */
  amendment_scheduled_enforcement_date?: string | undefined
  /** 改正法令の法令ID（この履歴に対応する改正法令） */
  amendment_law_id?: string | undefined
  /** 改正法令名 */
  amendment_law_title?: string | undefined
  /** 改正法令名読み */
  amendment_law_title_kana?: string | undefined
  /** 改正法令名読み清音 */
  amendment_law_title_kanaseion?: string | undefined
  /** 改正法令番号 */
  amendment_law_num?: string | undefined

  /** 廃止等の状態 */
  repeal_status?: Repeal_status | undefined

  /** 廃止日 */
  repeal_date?: string | null | undefined
  /** 廃止後の効力 */
  remain_in_force?: boolean | null | undefined

  /** 新規制定・一部改正の別 */
  mission?: Mission | undefined

  /** 履歴の状態 */
  status?: Status | undefined

  /** 当該リビジョンが最も未来のものである場合はtrue */
  is_last?: boolean | undefined
}

/** 添付ファイル情報 */
export type Attached_file = {
  /** 法令ID */
  law_revision_id?: string | undefined
  /** 法令本文中の添付ファイルのsrc属性 */
  src?: string | undefined
  /** 正誤などによる更新日時 */
  updated?: string | undefined
}

/** 添付ファイル情報 */
export type Attached_files_info = {
  /** 添付ファイルデータ（添付ファイルをフォルダ名pictに収集し、フォルダ全体をZIP形式で圧縮したファイルをBase64でエンコードした文字列） */
  image_data?: string | undefined
  /** 添付ファイル一覧 */
  attached_files?: (Attached_file)[] | undefined
}

/** 法令一覧取得API レスポンス */
export type Laws_response = {
  /** limit、offset適用前のリストに含まれる項目数 */
  total_count?: number | undefined
  /** 返却するリスト（limit、offset適用後）に含まれる項目数 */
  count: number
  /** 次のoffset。末尾まで取得が完了した場合はnull */
  next_offset?: number | null | undefined
  /** 法令ID単位の法令情報 */
  laws?: {
    /** 改正履歴に依存しない法令情報 */
    law_info?: Law_info | undefined

    /** 取得した改正履歴における法令情報 */
    revision_info?: Revision_info | undefined

    /** 最新の履歴における法令情報<br/>asofに依存しない現在以前の最後のリビジョン */
    current_revision_info?: Revision_info | undefined
  }[] | undefined
}

/** 法令履歴一覧取得APIレスポンス */
export type Law_revisions_response = {
  law_info: Law_info
  /** 版一覧 */
  revisions: (Revision_info)[]
}

/** 法令本文取得APIレスポンス */
export type Lawdata_response = {
  /** 法令本文 */
  law_full_text?: string | undefined
  attached_files_info?: Attached_files_info | undefined
  law_info?: Law_info | undefined
  revision_info?: Revision_info | undefined
}

/** キーワード検索APIレスポンス */
export type Keyword_response = {
  /** limit、offset適用前のリストに含まれる文書数 */
  total_count?: number | undefined
  /** 返却するリストに含まれる要素数 */
  count: number
  /** 次のoffset。末尾まで取得が完了した場合はnull */
  next_offset?: number | null | undefined
  /**
   * 法令ID単位の情報リスト
   * 
   * * `revision_info` - 指定時点において効力を持つ版のメタ情報
   */
  items?: {
    law_info?: Law_info | undefined
    revision_info?: Revision_info | undefined
    /** 条文内容（ハイライト箇所はspanタグで囲う） */
    sentence?: string | undefined
  }[] | undefined
}
