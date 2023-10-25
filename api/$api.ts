import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_7kvqgy } from './attached';
import type { Methods as Methods_lvc44x } from './keyword';
import type { Methods as Methods_rk8rlj } from './law_revisions';
import type { Methods as Methods_1pmphdm } from './lawdata';
import type { Methods as Methods_3e7f23 } from './laws';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.lawapi-prototype-test-elaws.e-gov.go.jp/api/{Version}' : baseURL).replace(/\/$/, '');
  const PATH0 = '/attached';
  const PATH1 = '/keyword';
  const PATH2 = '/law_revisions';
  const PATH3 = '/lawdata';
  const PATH4 = '/laws';
  const GET = 'GET';

  return {
    attached: {
      /**
       * 法令の添付ファイルを取得します。
       *
       * 指定した法令履歴IDに該当する法令の添付ファイルを指定することで、バイナリデータを取得できます。
       *
       * ファイルを指定しない場合は、当該法令の全ての添付ファイルを pict フォルダに格納してZIP圧縮したバイナリデータを取得できます。
       * @returns OK
       */
      get: (option: { query: Methods_7kvqgy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7kvqgy['get']['resBody'], BasicHeaders, Methods_7kvqgy['get']['status']>(prefix, PATH0, GET, option).blob(),
      /**
       * 法令の添付ファイルを取得します。
       *
       * 指定した法令履歴IDに該当する法令の添付ファイルを指定することで、バイナリデータを取得できます。
       *
       * ファイルを指定しない場合は、当該法令の全ての添付ファイルを pict フォルダに格納してZIP圧縮したバイナリデータを取得できます。
       * @returns OK
       */
      $get: (option: { query: Methods_7kvqgy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7kvqgy['get']['resBody'], BasicHeaders, Methods_7kvqgy['get']['status']>(prefix, PATH0, GET, option).blob().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7kvqgy['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    keyword: {
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
       * @returns OK
       */
      get: (option: { query: Methods_lvc44x['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lvc44x['get']['resBody'], BasicHeaders, Methods_lvc44x['get']['status']>(prefix, PATH1, GET, option).json(),
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
       * @returns OK
       */
      $get: (option: { query: Methods_lvc44x['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lvc44x['get']['resBody'], BasicHeaders, Methods_lvc44x['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_lvc44x['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    law_revisions: {
      /**
       * 法令の改正履歴の一覧を取得します。
       * 指定した条件に該当する1つの法令について、改正履歴の一覧をレスポンスの `revisions` に格納します。
       *
       * パラメータの多くは、 <a href="#model-law_revisions_response">law_revisions_response</a> に定義されているレスポンス中、 `revisions` の各要素の同名のプロパティに対応します。パラメータを指定することで、これらのプロパティの値を対象にフィルタを行い、 `revisions` に格納する改正履歴を選択するように動作します。
       * @returns OK
       */
      get: (option?: { query?: Methods_rk8rlj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rk8rlj['get']['resBody'], BasicHeaders, Methods_rk8rlj['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 法令の改正履歴の一覧を取得します。
       * 指定した条件に該当する1つの法令について、改正履歴の一覧をレスポンスの `revisions` に格納します。
       *
       * パラメータの多くは、 <a href="#model-law_revisions_response">law_revisions_response</a> に定義されているレスポンス中、 `revisions` の各要素の同名のプロパティに対応します。パラメータを指定することで、これらのプロパティの値を対象にフィルタを行い、 `revisions` に格納する改正履歴を選択するように動作します。
       * @returns OK
       */
      $get: (option?: { query?: Methods_rk8rlj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rk8rlj['get']['resBody'], BasicHeaders, Methods_rk8rlj['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rk8rlj['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    lawdata: {
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
       * @returns OK
       */
      get: (option?: { query?: Methods_1pmphdm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1pmphdm['get']['resBody'], BasicHeaders, Methods_1pmphdm['get']['status']>(prefix, PATH3, GET, option).json(),
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
       * @returns OK
       */
      $get: (option?: { query?: Methods_1pmphdm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1pmphdm['get']['resBody'], BasicHeaders, Methods_1pmphdm['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1pmphdm['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    laws: {
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
       * @returns OK
       */
      get: (option?: { query?: Methods_3e7f23['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_3e7f23['get']['resBody'], BasicHeaders, Methods_3e7f23['get']['status']>(prefix, PATH4, GET, option).json(),
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
       * @returns OK
       */
      $get: (option?: { query?: Methods_3e7f23['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_3e7f23['get']['resBody'], BasicHeaders, Methods_3e7f23['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_3e7f23['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
