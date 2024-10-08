【名称】
  DXVA Checker


【概要】
  DirectX Video Acceleration (DXVA)に関して主に以下の事が可能。

  ・GPUで利用可能なデコーダデバイスとプロセッサデバイスの確認
  ・DXVAのデコードパフォーマンスおよびビデオ処理パフォーマンスの確認
  ・トレースログによる他のアプリケーションにおけるDXVA API呼び出しの確認
  ・DirectShowデコーダおよびMedia FoundationデコーダでサポートされるDXVAモードの確認
  ・幾つかのDirectShowデコーダおよびMedia Foundationデコーダにおける設定変更


【動作環境】
  ■OS
    Windows 11/10/8.1/8/7/Vista

  ■ランタイム
    ・Microsoft .NET Framework 4.6
      https://www.microsoft.com/ja-jp/download/details.aspx?id=48130

    ・Microsoft Visual C++ ランタイム x86 (32bit/64bit Windows)
      https://aka.ms/vs/16/release/vc_redist.x86.exe

    ・Microsoft Visual C++ ランタイム x64 (64bit Windows)
      https://aka.ms/vs/16/release/vc_redist.x64.exe


【作者】
  Bluesky
  bluesky@bluesky-soft.com
  https://bluesky-soft.com/


【使用許諾契約】
  使用者は本ソフトウェアをダウンロード、インストールまたは使用した時点で、本使用許諾契約書に同意したものとみなされます。

  1.著作権
  本ソフトウェアに関する著作権は作者が有しています。

  2.権利
  作者は予告および同意無く本契約の内容を変更する権利を有します。
  作者は予告および同意無く本ソフトウェアの仕様を変更する権利を有します。

  3.免責事項
  本ソフトウェアは現状有姿にて提供されるものです。
  作者は本ソフトウェアの使用および使用不能により、直接的あるいは間接的に生じたいかなる損失や損害に対しても一切の責任を負いません。
  また、その様な損失や損害が発生する可能性について作者に知らされていた場合についても同様です。
  作者は本ソフトウェアに対する継続的なサポート（バグ修正、問い合わせ等）の義務を負いません。

  4.禁止事項
  本ソフトウェアに対して逆コンパイル、逆アセンブルおよび改造等を行う事を禁止します。
  本ソフトウェアを再配布する事を禁止します。

 [License Agreement]
  By downloading, installing and/or using this software, You will be deemed to have accepted this License Agreement. 

  1.COPYRIGHT
  The author has the copyright of this software.

  2.RIGHT
  The author reserves the right to change this licesne agreement without advance notice and agreement. 
  The author reserves the right to change the specification of this software without advance notice and agreement.  

  3.DISCLAIMER
  This software is provided "AS IS". 
  The author does not take responsibility for any direct/indirect loss or damage by use or unavailability of this software. 
  Moreover, even when the possibility that such loss or damage occurs is told to the author, the author does not take responsibility. 
  The author does not take responsibility for continuous support (Bug Fix, Inquiry etc) to this software.

  4.PROHIBITION
  You are prohibited to decompile, disassemble, or modify this software.
  You are prohibited to redistribute this software.


【寄付】
  DXVA Chekcerは無料で使用する事が出来ますが、寄付も歓迎しています。
  寄付をしていただける場合はお手数ですがメールで作者までご連絡下さい（本文はなくても結構ですが件名は「寄付」として下さい）。
  折り返し振込先の銀行口座をお知らせします。

  メールはメインメニューにある「寄付...」をクリックするとメールソフトが起動するのでそのまま送信するか、
  ホームページ上にある「寄付」ボタンをクリックすると表示されるメールフォームにメールアドレスを記入して「送信」ボタンを押す事で行う事も可能です。

  なお、振込手数料については寄付者様のご負担となってしまいます。あらかじめご了承下さい。


【インストール／アンインストール】
  ■インストール
    セットアップを実行し、後はインストーラの指示に従って下さい。
    アップデート時はアンインストールせずにセットアップを実行して下さい。

    ZIP版をダウンロードした場合は適当な場所にZIPファイルを展開して下さい。

  ■アンインストール
    Windowsのアンインストール機能からか、インストール先にある「unins000.exe」を実行して下さい。
    
    ZIP版を展開した場合はメインメニューにある「設定ファイルを削除」をクリックしてから全てのファイルを削除して下さい。

  ※セキュリティソフトについて
    ファイルは予めチェックを行い安全である事を確認しています。
    もし、お使いのセキュリティソフトで誤検出された場合は除外設定を行って下さい。


【説明】
  起動時に「ユーザーアカウントの制御」が表示される場合があります。
  この場合は「許可」を選択して下さい。

  DXVA Checkerが正常に起動しなかったりBSOD(Blue Screen Of Death)が発生する場合は、
  キーボードの「Ctrl」キーを押したままファイルを実行するか(画面が表示されるまで押し続けて下さい)、
  コマンドラインオプションで「/r」を指定して起動して下さい。
  この場合、デバイスの解像度チェックが一時的に無効になりますが、正常に起動出来る可能性が高くなります。

  この状態で正常に起動した場合はGPUメニューにある「解像度チェックを無効にする」のチェックをオンにして下さい。
  そうすると常に解像度チェックを行なわなくなるので、以後の起動時にこれらの操作が必要なくなります。


  ＜＜GPU＞＞
    ご利用の環境で複数のGPUが存在する場合はここでGPUを指定出来ます。

    デコーダデバイスやプロセッサデバイスは選択されているGPUについての情報が表示され、
    ビデオ再生やパフォーマンス計測時にも選択されているGPUが使用されます。
    また、GPUエンジン使用率も選択されているGPUの使用率が表示されます。

    なお、仕様上出力を持たないGPUでDirect3D9は利用出来ないため、
    その様なGPUを選択した場合はDXVA2およびDXVA-HDについての情報を得る事は出来ません。
    また、ビデオ再生や再生パフォーマンスの計測も行えません。

    ■デバイスを再チェック
      デコーダデバイスおよびプロセッサデバイスを再チェックします。

    ■解像度チェックを無効にする
      チェックをオンにするとデコーダデバイスおよびプロセッサデバイスが使用可能な解像度のチェックを行なわなくなります。

      正常に起動出来ない場合に、「Ctrl」キーを押したままファイルを実行するか、コマンドラインオプションで「/r」を指定して、
      一時的に解像度チェックを無効にした状態で正常に起動した場合はこのチェックをオンにする事で以後の起動時にこれらの操作が必要なくなります。

    ■不明なデコーダデバイスを非表示にする
      チェックがオンの場合（デフォルトでオン）、不明な（代替名の無い）デコーダデバイスが表示されなくなります。

    ■デコーダデバイスクリエイター
      デコーダデバイスクリエイター画面が表示されます。詳しくは<<デコーダデバイスクリエイター>>をご覧ください。

    ■ドライバ設定
      ドライバ設定画面が表示されます。

    ■デバイス情報をデータベースに送信
      デバイス情報をXMLファイル化したものをZIP形式で圧縮して送信します。


  ＜＜デコーダデバイス＞＞
    デコーダデバイスの情報が表示されます。

    * デバイス名について
      ・XXXX_XXX_AMD    (AMDが独自に定義したデバイスに対する名称)
      ・XXXX_XXX_Intel  (Intelが独自に定義したデバイスに対する名称)
      ・XXXX_XXX_NVIDIA (NVIDIAが独自に定義したデバイスに対する名称)

    ■リストの内容（左から右の順）
      ●デバイス名
        デバイスのGUID(ハイフンで区切られた32桁の16進数値)またはデバイス名が表示されます。

      ●API
        デバイスのAPIが表示されます。

        ・DXVA1
          DXVA1を使用したデバイスで、レンダラはOverlay Mixer (OM), Video Mixing Renderer 7 (VMR-7), Video Mixing Renderer 9 (VMR-9)が対応します。     

        ・DXVA2
          DXVA2を使用したデバイスで、レンダラはEnhanced Video Renderer (EVR)が対応します。

        ・D3D11
          Direct3D11を使用したデバイスです。

      ●解像度
        デバイスが使用可能な解像度が表示されます。なお、7680x4320を超える解像度でのチェックは行っていません。
        また、特定のデバイスは解像度チェックを行わない様にしており、その場合は何も表示されません。

        SD / HD / FHD / 4K / 8K: 7680x4320までの解像度で使用可能
        SD / HD / FHD / 4K     : 3840x2160までの解像度で使用可能
        SD / HD / FHD          : 1920x1080までの解像度で使用可能
        SD / HD                : 1280x720までの解像度で使用可能
        SD                     : 720x480までの解像度で使用可能
        -                      : 720x480でも使用不可能

       （注意）
         表示されている解像度でデバイスが作成可能である事のみを意味し、正常に再生可能である事を保障するものではありません。
         特に4Kや8Kの様なハードウェアの実際の能力による対応範囲を超えている場合であっても、ビデオカードのドライバによっては
         デバイスが作成可能な場合があります。

         また、ビデオ再生時にはDirectShow/MediaFoundationデコーダ側が解像度をチェックしている場合もあるので
         実使用の結果と必ず一致するものではありません。


  ＜＜プロセッサデバイス＞＞
    DXVA1, DXVA2, DXVA-HDおよびDirect3D11によるプロセッサデバイスの情報が表示されます。

    ■DXVA1/2
      DXVA1およびDXVA2のプロセッサデバイスの情報が表示されます。

      ●デバイス一覧
        デバイスが一覧表示され、選択すると下部にCapsが表示されます。

        ○リストの内容（左から右の順）
          ・デバイス名
            デバイスのGUIDまたはデバイス名が表示されます。

          ・API
            デバイスのAPIが表示されます。

          ・解像度
            デバイスが使用可能な解像度が表示されます。

      ●API
        DXVA1とDXVA2の両方に対応している場合にCapsの表示を切り替える時に使用します。

        ○DXVA1
          DXVA1のCapsを表示します。

        ○DXVA2
          DXVA2のCapsを表示します。

      ●Input Format
        入力フォーマットによりCapsが異なる場合に表示され、ここで入力フォーマットを選択します。

    ■DXVA-HD
      DXVA-HDビデオプロセッサの情報が表示されます。

      ●デバイスCaps
        デバイスのCapsが表示されます。

      ●プロセッサCaps
        デバイスで使用可能なプロセッサの一覧とそのCapsが表示されます。

        ○プロセッサ一覧
          表示内容はDXVA1/2のデバイス一覧と同じです。

    ■D3D11
      Direct3D11ビデオプロセッサの情報が表示されます。

      ●プロセッサCaps
        プロセッサのCapsが表示されます。

      ●レート変換Caps
        プロセッサで使用可能なレート変換の一覧とそのCapsが表示されます。


  ＜＜DS/MF デコーダ＞＞
    メディアファイルまたはフォーマットを指定する事でシステムに登録されているDirectShowデコーダおよびMedia FoundationデコーダがDXVAに対応しているかどうかや、
    対応しているDXVAモードを調べる事が出来ます。

    ■ターゲット
      チェック対象となるデコーダを指定します。
      対象がDirectShowのみの場合はメリット順に、MediaFoundationの場合は列挙順に、
      DirectShowとMediaFoundation両方の場合は名前の順でデコーダが表示されます。

      ・DS             : DirectShowデコーダを対象とします。(32bit版Windows使用時のみ)
      ・DS (32bit)     : 32bitのDirectShowデコーダを対象とします。
      ・DS (64bit)     : 64bitのDirectShowデコーダを対象とします。
      ・MF             : Media Foundationデコーダを対象とします。(32bit版Windows使用時のみ)
      ・MF (32bit)     : 32bitのMedia Foundationデコーダを対象とします。
      ・MF (64bit)     : 64bitのMedia Foundationデコーダを対象とします。
      ・DS + MF        : DirectShowとMedia Foundation両方のデコーダを対象とします。(32bit版Windows使用時のみ)
      ・DS + MF (32bit): 32bitのDirectShowとMedia Foundation両方のデコーダを対象とします。
      ・DS + MF (64bit): 64bitのDirectShowとMedia Foundation両方のデコーダを対象とします。

    ■デコーダをチェック
      ・メディアファイルを指定
        ファイルを開くダイアログが表示されるので、調べたいメディアファイルを指定して下さい。

      ・フォーマットを指定
        選択したフォーマットで使用可能なデコーダをチェックします。

    ■強制終了
      DXVAモードチェック中の特定の処理である程度時間が経過しても処理が終わらない場合にボタンが有効になり、
      押すと処理を強制的に終了させ、次の処理あるいは次のデコーダのチェックに移行します。
      なお、強制終了ボタンを押しても同じデコーダで再度このボタンが有効になる場合があります。

    ■グループ(デコーダ名)
      使用可能なデコーダの名前がグループ名として表示されます。
      デコーダ名の末尾にはFourCCと解像度が、例えば[H264 1920x1080]の様に表示されます。
      それ以外でデコーダ名の前や後ろにある[]の意味は以下の通りです。

      ・DS      : 32bitのDirectShow デコーダ(32bit版Windows使用時のみ)
      ・DS32    : 32bitのDirectShow デコーダ
      ・DS64    : 64bitのDirectShow デコーダ
      ・MF      : 32bitのMedia Foundation デコーダ(32bit版Windows使用時のみ)
      ・MF32    : 32bitのMedia Foundation デコーダ
      ・MF64    : 64bitのMedia Foundation デコーダ
      ・DXVA1   : DXVA1に対応
      ・DXVA2   : DXVA2に対応
      ・D3D9    : Direct3D9に対応したMedia Foundationデコーダ
      ・D3D11   : Direct3D11によるDXVAまたはDirect3D11に対応したMedia Foundationデコーダ
      ・Hardware: ハードウェアデコーダ (Media Foundation用デコーダでソフトウェア処理には対応していないデコーダ)

      ただし、デコーダが対応していても入力フォーマットや設定によって内部的に無効になっている場合等では
      表示されない場合があります。

    ■グループ内のリストの内容（左から右の順）
      ・DXVAモード名
        DXVAモードのGUID若しくは代替名が表示されます。

        Unsupported: デコーダがDXVAに対応していない場合に表示されます。
                     なお、デコーダの設定によりDXVAを無効にした場合にも表示されます。
             -     : デコーダはDXVAに対応しているが、指定されたファイル(フォーマット)に対して使用可能なDXVAモードが無かった場合に表示されます。
 
      ・バージョン
        DXVAモードのバージョンが表示されます。
 
        ・DXVA1: DXVA1のモード
        ・DXVA2: DXVA2のモード
        ・D3D11: Direct3D11のモード

    ■リストクリック時のメニュー(各デコーダグループの左端に表示されるボタンをクリックした時のメニュー)
      各メニューに「32bit」と「64bit」が表示されている場合、「32bit」をクリックすると32bit版のデコーダに対して、
     「64bit」をクリックすると64bit版のデコーダに対して選択した処理を実行します。

      ・再チェック (レンダラに接続)
        デコーダに対して再度DXVAモードのチェックを行うと同時にEnhanced Video Rendererに接続して実際に有効になるDXVA2モードもチェックします。

      ・再チェック
        デコーダに対して再度DXVAモードのチェックを行います。

      ・デコーダ情報を表示
        選択されたデコーダの詳細情報を確認する事が出来ます。
        また、DirectShowデコーダではメリット値の変更とプロパティの表示が可能です。

        ・DXVA
          以下に記載されているデコーダのGPU アクセラレーション設定を行います。
          この設定はDXVA Checker以外での再生時にも反映されます。なお、同じ行に記載されているデコーダは設定を共有しています。

          ・CyberLink H.264/AVC Decoder
          ・CyberLink VC-1 Decoder
          ・CyberLink Video/SP Decoder
          ・CyberLink Video Deocder
          ・InterVideo Video Decoder
          ・Microsoft MPEG-2 Video Decoder
          ・Microsoft DTV-DVD Video Decoder / Microsoft H264 Video Decoder MFT / Microsoft MPEG Video Decoder MFT
          ・Microsoft H265 Video Decoder MFT
          ・Microsoft WebM MF VP8 Decoder Transform
          ・Nero DVD Decoder / Nero Video Decoder
          ・WMVideo Decoder DMO
          ・WMVideo Decoder MFT / AMD Playback Decoder MFT

          * CyberLink社製デコーダのDXVA設定はプロパティ側の設定が優先されますが、プロパティの設定はアプリケーション毎に保存されます。
            この為、他のプレイヤー等からデコーダを利用する場合にDXVAの設定を反映させたい場合はプロパティからではなくこちら側で設定して下さい。

      ・再生
        選択されているビデオデコーダと指定されたDXVAビデオプロセッサを使用してファイルを再生します。

        ・DXVA2 Vp
          DXVA2ビデオプロセッサを使用します。

        ・DXVA-HD Vp
          DXVA-HDビデオプロセッサを使用します。

        ・D3D11 Vp
          D3D11ビデオプロセッサを使用します。

      ・デコードパフォーマンス
        選択されているビデオデコーダのデコードパフォーマンスを計測します。

        ・DXVA2/CPU
          DXVAによるデコード支援時はDXVA2を使用します。

        ・D3D11/CPU
          DXVAによるデコード支援時はD3D11を使用します。

      ・再生パフォーマンス
        選択されているビデオデコーダと指定されたDXVAビデオプロセッサを使用したビデオ再生パフォーマンスを計測します。

        ・DXVA2 Vp
          DXVA2ビデオプロセッサを使用します。

        ・DXVA-HD Vp
          DXVA-HDビデオプロセッサを使用します。

        ・D3D11 Vp
          D3D11ビデオプロセッサを使用します。

    ■DSF/MFT Viewer
      DirectShow Filter (DSF)とMedia Foundation Transform (MFT) の一覧画面が表示されます。
      詳しくは＜＜SF/MFT Viewer＞＞をご覧ください。


  ＜＜トレースログ＞＞
    実行中のアプリケーションにおけるDXVA API呼び出しを確認する事が可能です。

    * DXVA1はアプリケーションがVMR-7またはVMR-9を使用している場合にのみログに残り、Overlay Mixerを使用している場合はログに残りません。

    ■イベント
      リスト内に存在するイベント名が表示され、選択するとそのイベントのみが表示される様になります。

    ■プロセス
      リスト内に存在するプロセス名が表示され、選択するとそのプロセスのイベントのみが表示される様になります。

    ■リストの内容
      ・イベント
        イベント名が表示されます。
        イベントによっては選択すると下部にパラメータが表示されます。

        ・DXVA1_DecodeDeviceBeginFrame/DXVA1_DecodeDeviceEndFrame
          アプリケーションがDXVA1デコーダデバイスを使用している時に表示されます。

        ・DXVA2_DecodeDeviceCreated/DXVA2_DecodeDeviceDestroyed
          アプリケーションがDXVA2デコーダデバイスを作成／破棄した時に表示されます。
          「DXVA2_DecodeDeviceCreated」では作成されたデコーダデバイスのGUIDもしくは代替名が分かります。

        ・DXVA2_DecodeDeviceGetBuffer/DXVA2_DecodeDeviceExecute/DXVA2_DecodeDeviceBeginFrame/DXVA2_DecodeDeviceEndFrame
          アプリケーションがDXVA2デコーダデバイスを使用している時に表示されます。

        ・DXVA2_ProcessDeviceCreated/DXVA2_ProcessDeviceDestroyed
          アプリケーションがDXVA2プロセッサデバイスを作成／破棄した時に表示されます。
          「DXVA2_ProcessDeviceCreated」では作成されたプロセッサデバイスのGUIDもしくは代替名が分かります。

        ・DXVA2_ProcessBlt
          アプリケーションがDXVA2プロセッサデバイスを使用している時に表示されます。

        ・DXVAHD_CreateVideoProcessor/DXVAHD_DestroyVideoProcessor
          アプリケーションがDXVAHDビデオプロセッサを作成／破棄した時に表示されます。
          「DXVAHD_CreateVideoProcessor」では作成されたプロセッサのGUIDもしくは代替名が分かります。

        ・DXVAHD_VideoProcessXXXXX
          アプリケーションがDXVAHDビデオプロセッサを使用している時に表示されます。

        ・D3D11_XXXXX
          アプリケーションがDirect3D11を使用している時に表示されます。
          イベント名に「Decoder」が含まれている場合はデコーダのイベント、「Processor」が含まれている場合はプロセッサのイベントになります。
 
      ・プロセス名
        対象プロセスが実行中の場合はプロセス名が、そうでない場合は実行時のプロセスIDが表示されます。

      ・時間
        記録開始時間を基準としたイベント発生時の時間が表示されます。

    ■開始
      ログの記録を開始します。

    ■更新
      記録済みのログをリストに表示します。

    ■停止
      ログの記録を停止し、記録されたログをリストに表示します。

    ■オプション
      表示するイベントを設定します。


  ＜＜GPUエンジン使用率＞＞
    Windows11/10で、プロセス毎のGPUエンジンの使用率をチェックする事が可能です。

    開始ボタンを押すと、モニタリング可能なプロセスが一覧表示され、GPUエンジンの使用率が
   「現在値 [最小値-最大値]」の形で表示されます(モニタリング開始後からGPUを使用していない間は0ではなく「-」と表示されます)。

    モニタリング可能なGPUエンジンは複数ありますが、ここでは使用されたエンジンのみが表示され、
    全てのプロセスで一度も使用されていないエンジンは表示されません。

    また、GPUによっては同じ名前のエンジンが複数表示される場合があります。

    ■開始
      モニタリングを開始します。

    ■停止
      モニタリングを停止します。


  ＜＜メインメニュー(「終了」ボタンの右横にあるボタンを押すと表示されます)＞＞
    ■スクリーンショットを保存
      DXVA Checkerのスクリーンショットを保存します。

    ■最前面表示
      チェックをオンにするとフォームが常に最前面に表示される様になります。

    ■新バージョンを通知
      チェックをオン（デフォルト設定）にすると起動時に最新バージョンをチェックし、
      使用中のバージョンより新しければメッセージボックスを表示して通知します。

    ■寄付
      クリックすると、寄付方法を説明したページがインターネットブラウザで表示されます。

    ■ReadMeを開く
      ReadMeを開きます。

    ■設定ファイルを削除
      設定ファイルを削除し、DXVA Checkerを終了します。

    ■DXVA Checkerについて
      DXVA Checkerのバージョン情報等が表示されます。


  ＜＜デコーダデバイスクリエイター＞＞
    デコーダデバイスが指定された解像度で作成可能かどうか、または指定したデバイスが何個まで同時に作成可能かどうか等を調べる事が可能です。

    ■API
      ・DXVA2: DXVA2 APIを使用します。
      ・D3D11: Direct3D11 APIを使用します。

    ■デバイス
      作成したいデバイスを指定します。

    ■解像度
      デバイス作成時の解像度を指定します。手動で入力する場合は選択候補の形式に従って解像度を入力して下さい。

    ■作成
      指定された解像度でデバイスを作成すると共にデバイス名と解像度をリストに追加します。
      デバイスの作成に成功した場合は「状態」が「作成済み」に、失敗した場合は「失敗」になります。
      ここで作成に成功したデバイスは状態を維持したままなので、続いてデバイスを作成する事で同時に作成可能な個数を調べる事が出来ます。

    ■破棄
      作成されたデバイスを破棄します。

    ■クリア
      作成されたデバイスを破棄すると共にリストをクリアします。


  ＜＜ドライバ設定＞＞ (AMD RadeonおよびIntel iGPUのみ)
    レジストリを利用してGPUのデコードに関わる設定を行います。

    リストの行を選択すると設定値の候補が表示されるので選択して下さい。

      ・自動：レジストリの値を削除します。
              大抵の場合はそれが初期値になりますが、ドライバインストール時にあらかじめ値が設定されている場合もあるので注意して下さい。
      ・オフ：選択されている機能をオフにします。
      ・オン：選択されている機能をオンにします。
    
    ■OK
      設定内容をレジストリに書き込んだ後(*)、ビデオ アクセラレーション設定画面を閉じます。

    ■適用
      設定内容をレジストリに書き込みます。

    ■キャンセル
      レジストリを変更せずに画面を閉じます。

    * 注意事項
      お使いのGPUやドライバのバージョンによっては設定を変更しても何も変化しない場合があります。
      また、設定の変更によって正常に動作しなくなる可能性があります。
      設定を元の状態に戻したい時に初期状態の設定を忘れてしまった場合は、全ての設定を「自動」設定にしてからドライバを再インストールして下さい。


  ＜＜DSF/MFT Viewer＞＞
    ■画面左側
      システムに登録されているDirectShow Filter(DSF)とMedia Foundation Transform(MFT)が一覧表示されます。
      リストを選択するとそのDSF/MFTの詳細な情報が画面右側に表示されます。
      なお、名前が赤色で表示されているDSF/MFTはDXVAの設定を行う事が可能です。

      [ 32 ] : 32bitのアプリケーションから使用可能なDSF/MFT
      [ 64 ] : 64bitのアプリケーションから使用可能なDSF/MFT
      [32|64]: 32bitと64bitの両方から使用可能なDSF/MFT

      ・DirectShow
        一覧表示をDSFに切り替えます。

      ・Media Foundation
        一覧表示をMFTに切り替えます。

      ・グループ表示
        DSFとMFTを「オーディオ」、「ビデオ」、「その他」にグループ分けして表示します。
        MFTではさらに細かいグループに分かれます。

      ・タイプ表示
        32bitか64bitかを示すアイコンを表示するかどうかを設定します。

      ・登録
        DSFまたはMFT(ファイル拡張子がaxまたはdll)を登録します。
　
      ・登録解除
        選択されている一つ以上のDSFまたはMFTの登録を解除します。
        なお、32bitと64bitの両方から使用可能なDSF/MFTの場合は両方同時に登録を解除します。

    ■画面右側
      ・CLSID
        DSF/MFTのCLSIDが表示されます。

      ・Attribute
        MFTの属性が表示されます。

         D3D9          : DXVA2またはDirect3D9に対応している場合にチェックがオンになります。
         D3D11         : Direct3D11によるDXVAまたはDirect3D11に対応している場合にチェックがオンになります。
         Hardware      : ハードウェアMFTの場合にチェックがオンになります。
         Transcode Only: トランスコード時の使用に最適化されたMFTの場合にチェックがオンになります。

      ・Merit
        DSF/MFTのメリット値(優先度)が表示され、クリックするとその値を変更する事が出来ます。

      ・File Name
        dll/axファイルの名前が表示され、クリックするとエクスプローラでその場所が開かれます。

      ・File Version
        dll/axファイルのバージョンが表示されます。

      ・File Description
        dll/axファイルの説明が表示されます。

      ・Company Name
        dll/axファイルの会社名が表示されます。

      ・Product Name
        dll/axファイルの製品名が表示されます。

      ・Media Type
        DSF/MFTの対応するメディアタイプが入力および出力毎にグループ化されて表示されます。

      ・32bit
        情報表示、メリット値の変更、登録解除、再登録、プロパティ表示の対象が32bitのDSF/MFTになります。

      ・64bit
        情報表示、メリット値の変更、登録解除、再登録、プロパティ表示の対象が64bitのDSF/MFTになります。

      ・登録
        ・登録解除
          登録を解除します。

        ・再登録
          再登録します。

      ・プロパティ
        DSFのプロパティを表示します。

      ・DXVA
        DXVAの設定を行います。


  ＜＜ビデオプレイヤー＞＞
    ■パフォーマンス計測結果
      ・Decoder Device
        使用されたデコーダデバイス

      ・Processor Device
        使用されたプロセッサデバイス

      ・Frame
        フレーム数

      ・FPS
        平均フレームレート

      ・CPU
        DXVA CheckerのCPUの平均使用率([]内は最小値－最大値)

      ・GPU XXX
        DXVA CheckerのGPUエンジン(XXXはエンジン名)の平均使用率([]内は最小値－最大値)

        * GPUエンジンの使用率表示はWindows11/10にのみ対応しており、
          結果には実際に使用されていたGPUエンジンのみが表示されます。

          Windows8.1/8/7/Vistaでは、
          AMD GPUの場合はシステム全体のGPU使用率が、NVIDIA GPUの場合はシステム全体のGPUとビデオエンジンの使用率が常に表示されます。

    ■Decoder Device
      デコーダデバイスが使用中の場合は「In use」または使用中のデコーダデバイスのGUID(若しくはその代替名)が表示され、
      未使用の場合は「Not in use」と表示されます。

      ・▼ボタン
        変更可能なデコーダデバイス(DXVAモード)の一覧が表示されます。ここでデバイスを選択するとそのデバイスを使用してビデオを再生します。

          Auto      : 自動設定
          Do not use: デコーダデバイスを使用しません(DXVAが無効になります)

    ■Processor Device
      使用中のビデオプロセッサ名が表示されます。

    ■Frame Rate
      フレームレートが表示されます。

    ■CPU Usage
      DXVA CheckerのCPUの使用率が表示されます([]内は最小値－最大値)。

    ■GPU Usage
      DXVA CheckerのGPUエンジンの使用率が表示されます([]内は最小値－最大値)。

      * GPUエンジンの使用率表示はWindows11/10にのみ対応しており、
        実際に使用されているGPUエンジンの使用率のみが表示されます。

        Windows8.1/8/7/Vistaでは、
        AMD GPUの場合はシステム全体のGPU使用率が、NVIDIA GPUの場合はシステム全体のGPUとビデオエンジンの使用率が常に表示されます。

    ■操作パネル
      ●「|＞」/「||」ボタン
        ビデオを再生／一時停止します。

      ●「■」ボタン
        再生を停止します。


      ●「VP」ボタン
         色調整やフィルタ等の設定が可能です。

      ●スピーカーボタン
        音量を調整します。

      ●カメラボタン
        レンダラから取得したイメージをPNGファイルとして保存します。

      ●「▲」ボタン(パフォーマンス計測時のみ)
        ・設定
          パフォーマンス計測の設定を行います。

        ・DWM 合成
          デスクトップウィンドウマネージャ(DWM)合成を有効化または無効化します。
          なお、ここでDWM合成を有効化または無効化した場合でも、DXVA Checkerを終了すると起動前の状態に戻ります。

        ・スクリーンショットを保存
          スクリーンショットを保存します。

        ・結果をコピー
          計測結果をクリップボードにコピーします。

        ・結果をクリア
          計測結果をクリアします。

      ●設定
        ・プロセス優先度
          プロセスの優先度を設定します。

        ・繰り返し回数
          計測の繰り返し回数を指定します。
          指定した回数の計測が終わった後に結果が表示されます。

        ・スケーリング設定
          再生パフォーマンス計測時にスケーリングを行うかどうかを設定します。
          (サイズを手動で設定する場合は一覧にある様に横x縦で指定して下さい)


  ＜＜コマンドラインオプション＞＞
    /r: デバイスの解像度チェックを無効にします。

    (指定方法)
     DXVAChecker.exeのショートカットを作成後、プロパティの「ショートカット」にある「リンク先」の
     最後に半角スペースを挿入後、コマンドラインオプションを記入して下さい。

     例）"C\Program Files\DXVA Checker\DXVAChecker.exe" /r