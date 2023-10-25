/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 法令の本文を取得します。
   * 指定した条件に該当する1つの法令について、本文をレスポンスの `law_full_text` に格納します。
   * 
   * また、下記の情報を格納します。
   * 
   * * `law_info` - 改正履歴に依存しない法令情報を格納します。法令番号など、改正されない情報が該当します。法令名は改正されることがありますので、改正履歴に依存する法令情報（`revision_info`）に格納されます。
   * * `revision_info` - 改正履歴に依存する法令情報（改正されうる情報や、改正時点に関する情報）について、指定した条件に合致する一つの改正履歴の情報を格納します。 `asof` を指定しない場合は現時点で最新の改正履歴、 `asof` を指定した場合はその時点で最新の改正履歴を格納します。
   * 
   * `elm` パラメータを指定することで、本文中、条項など、一部を指定して取得することもできます。
   * 
   * `response_format`の指定によりAPIのレスポンス形式が"xml"または"json"に切り替わりますが、これに伴い`law_full_text`も以下のように変わります。<br/>
   * * **"xml"**が指定された場合、法令標準XMLスキーマに準拠したXMLを格納します。<br/>
   * * **"json"**が指定された場合、法令標準XMLと相互に変換可能なjson形式を格納します。<br/>
   * このjson仕様は暫定的なものですが、法令標準XMLのタグ、属性、子要素がそれぞれ「tag」、「attr」、「children」に対応し、内容は法令標準XMLと同様となります。<br/>
   * 
   * <font size="1">
   * <h3>法令標準XMLとJSONの対応表</h3>
   * 法令標準XMLスキーマについては<a href="">こちら</a>を参照してください。（リンク先については検討中のため遷移できません）<br/>
   * 例）\<Sentence Num="1" WritingMode="vertical">
   *         この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・\</Sentence>
   * </font>
   * <table bgcolor="white" border="1">
   *   <tr bgcolor="#DDFFFF">
   *     <th width="10%">項目名</th>
   *     <th width="45%">XML</th>
   *     <th width="45%">JSON</th>
   *   </tr>
   *   <tr>
   *     <td>タグ</td>
   *     <td>Sentence</td>
   *     <td>"tag": "Sentence"</td>
   *   </tr>
   *   <tr>
   *     <td>属性</td>
   *     <td>Num="1" WritingMode="vertical"</td>
   *     <td>"attr": {"Num": "1","WritingMode": "vertical"}</td>
   *     </tr>
   *   <tr>
   *     <td>子要素</td>
   *     <td>この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・</td>
   *     <td>"children": ["この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"]</td>
   *   </tr>
   * </table>
   */
  get: {
    query?: {
      /**
       * 法令ID又は法令履歴ID（完全一致）。law_id または law_num の指定が必須です。
       * 
       * 例： `322CO0000000016`
       */
      law_id?: string | undefined
      /**
       * 法令番号（完全一致）。law_id または law_num の指定が必須です。
       * 
       * 例： `昭和二十二年政令第十六号`
       */
      law_num?: string | undefined
      /**
       * 時点指定。指定した時点での履歴に対応する法令本文を取得します。
       * 
       * 例： `2023-04-01`
       */
      asof?: string | undefined
      /**
       * 法令本文の一部のみを取得する場合、取得する条項など要素を指定します。指定しない場合は全文を取得します。<br/> 指定方法については<a href="#model-elm">Schemas</a>を参照してください。
       * 
       * 例： `MainProvision-Article_1-Paragraph_1`
       */
      elm?: string | undefined
      /**
       * trueの場合、レスポンスのlaw_full_textを省略する
       * 
       * 例： `true`
       */
      omit_law_full_text?: boolean | undefined
      /**
       * trueの場合、レスポンスのlaw_full_textの中に改正法令の附則を含めない
       * 
       * 例： `true`
       */
      omit_amendment_suppl_provision?: boolean | undefined
      /**
       * trueの場合、レスポンスのattached_files_infoのimage_dataを返却する
       * 
       * 例： `true`
       */
      include_attached_file_content?: boolean | undefined

      /**
       * レスポンス形式（"json" 又は "xml"）。未指定の場合はAcceptヘッダから判断、判断できない場合は "json" とする。
       * 
       * 例： `json`
       */
      response_format?: Types.Response_format | null | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Lawdata_response
  }
}
