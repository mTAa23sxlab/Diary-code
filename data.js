/* ════════════════════════════════════════════════
   data.js サンプル（スライドショー方式）

   各月のデータ構造:
   {
     year: 2024,
     month: 6,
     leftFrames:  [ {orient:'h'|'v', photos:[{file,url?}, ...]}, ... ],
     rightFrames: [ {orient:'h'|'v', photos:[{file,url?}, ...]}, ... ],
     leftLayout:  'h-stack' | 'v-stack' | 'v1h2' | 'single' | null(自動判定),
     rightLayout: 同上,
     message: 'コメント（2行以内推奨）',
   }

   ── frame（枠）の仕組み ──
   - orient:'h' → 横長(4:3)の枠。横向き写真向け。
   - orient:'v' → 縦長(3:4)の枠。縦向き写真向け。
   - photos配列の枚数によって動作が変わる:
       1枚   → 静止（インジケーターなし）
       2〜5枚 → 3秒ごとに自動スライド・ドットインジケーター
       6枚以上 → 3秒ごとに自動スライド・数字インジケーター(1/7等)
   - 同じ向きの写真は1つの枠にまとめる（枠を分割しすぎない）

   ── layout（配置）の種類 ──
   'single'   : 枠1つのみ（横大1枠 or 縦大1枠）
   'h-stack'  : 横長の枠を縦に2つ積む
   'v-stack'  : 縦長の枠を横に2つ並べる
   'v1h2'     : 新レイアウト。縦1枠(大)を左、右側に横長2枠を縦積み
   null       : framesの構成から自動判定

   ── photos の各要素 ──
   { file: 'images/2024-06/01.jpg', url: '' }  // urlは省略可（クリックでリンクが開く写真用）
════════════════════════════════════════════════ */

const DIARY_DATA = [

  /* ══ 2024年 ══ */

  /* 6月: 横7枚（左5右2） → 横大1枠・横1枠 */
  {
    year:2024, month:6,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2024-06/l1.jpg'},
        {file:'images/2024-06/l2.jpg'},
        {file:'images/2024-06/l3.jpg'},
        {file:'images/2024-06/l4.jpg'},
        {file:'images/2024-06/l5.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2024-06/r1.jpg'},
        {file:'images/2024-06/r2.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* 7月: 横9枚（左6右3） → 横大1枠(6枚)・横1枠(3枚) */
  {
    year:2024, month:7,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2024-07/l1.jpg'},{file:'images/2024-07/l2.jpg'},
        {file:'images/2024-07/l3.jpg'},{file:'images/2024-07/l4.jpg'},
        {file:'images/2024-07/l5.jpg'},{file:'images/2024-07/l6.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2024-07/r1.jpg'},{file:'images/2024-07/r2.jpg'},{file:'images/2024-07/r3.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* 8月: 縦1横6（左縦1横3右横3） → 新レイアウト(左): 縦1+横3 / 右: 横大1枠(3枚) */
  {
    year:2024, month:8,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2024-08/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2024-08/l2.jpg'},{file:'images/2024-08/l3.jpg'},{file:'images/2024-08/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2024-08/r1.jpg'},{file:'images/2024-08/r2.jpg'},{file:'images/2024-08/r3.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 9月: 縦1横6（左横4右縦1横2） → 左: 横大1枠(4枚) / 右: 新レイアウト 縦1+横2 */
  {
    year:2024, month:9,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2024-09/l1.jpg'},{file:'images/2024-09/l2.jpg'},
        {file:'images/2024-09/l3.jpg'},{file:'images/2024-09/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2024-09/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2024-09/r2.jpg'},{file:'images/2024-09/r3.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'v1h2',
    message:'',
  },

  /* 10月: 横10枚（左5右5） → 横大1枠・横大1枠 */
  {
    year:2024, month:10,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2024-10/l1.jpg'},{file:'images/2024-10/l2.jpg'},
        {file:'images/2024-10/l3.jpg'},{file:'images/2024-10/l4.jpg'},{file:'images/2024-10/l5.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2024-10/r1.jpg'},{file:'images/2024-10/r2.jpg'},
        {file:'images/2024-10/r3.jpg'},{file:'images/2024-10/r4.jpg'},{file:'images/2024-10/r5.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* 11月: 縦7横3（左縦2横3右縦5） → 左: 新レイアウト 縦2+横3 / 右: 縦大1枠(5枚) */
  {
    year:2024, month:11,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2024-11/l1.jpg'},{file:'images/2024-11/l2.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2024-11/l3.jpg'},{file:'images/2024-11/l4.jpg'},{file:'images/2024-11/l5.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2024-11/r1.jpg'},{file:'images/2024-11/r2.jpg'},{file:'images/2024-11/r3.jpg'},
        {file:'images/2024-11/r4.jpg'},{file:'images/2024-11/r5.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 12月: 横11枚（左5右6） → 横大1枠・横大1枠 */
  {
    year:2024, month:12,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2024-12/l1.jpg'},{file:'images/2024-12/l2.jpg'},
        {file:'images/2024-12/l3.jpg'},{file:'images/2024-12/l4.jpg'},{file:'images/2024-12/l5.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2024-12/r1.jpg'},{file:'images/2024-12/r2.jpg'},{file:'images/2024-12/r3.jpg'},
        {file:'images/2024-12/r4.jpg'},{file:'images/2024-12/r5.jpg'},{file:'images/2024-12/r6.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* ══ 2025年 ══ */

  /* 1月: 縦1横6（左縦1横2右横4） → 左: 新レイアウト 縦1+横2 / 右: 横大1枠(4枚) */
  {
    year:2025, month:1,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2025-01/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-01/l2.jpg'},{file:'images/2025-01/l3.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2025-01/r1.jpg'},{file:'images/2025-01/r2.jpg'},
        {file:'images/2025-01/r3.jpg'},{file:'images/2025-01/r4.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 2月: 縦6横6（左縦3横3右縦3横3） → 左右ともに新レイアウト 縦3+横3 */
  {
    year:2025, month:2,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2025-02/l1.jpg'},{file:'images/2025-02/l2.jpg'},{file:'images/2025-02/l3.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-02/l4.jpg'},{file:'images/2025-02/l5.jpg'},{file:'images/2025-02/l6.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2025-02/r1.jpg'},{file:'images/2025-02/r2.jpg'},{file:'images/2025-02/r3.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-02/r4.jpg'},{file:'images/2025-02/r5.jpg'},{file:'images/2025-02/r6.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

  /* 3月: 縦4横8（左縦3横5右縦1横3） → 左: 新レイアウト 縦3+横5 / 右: 新レイアウト 縦1+横3 */
  {
    year:2025, month:3,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2025-03/l1.jpg'},{file:'images/2025-03/l2.jpg'},{file:'images/2025-03/l3.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-03/l4.jpg'},{file:'images/2025-03/l5.jpg'},{file:'images/2025-03/l6.jpg'},
        {file:'images/2025-03/l7.jpg'},{file:'images/2025-03/l8.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2025-03/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-03/r2.jpg'},{file:'images/2025-03/r3.jpg'},{file:'images/2025-03/r4.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

  /* 4月: 縦2横6（左縦2横2右横4） → 左: 新レイアウト 縦2+横2 / 右: 横大1枠(4枚) */
  {
    year:2025, month:4,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2025-04/l1.jpg'},{file:'images/2025-04/l2.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-04/l3.jpg'},{file:'images/2025-04/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2025-04/r1.jpg'},{file:'images/2025-04/r2.jpg'},
        {file:'images/2025-04/r3.jpg'},{file:'images/2025-04/r4.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 5月: 縦1横7（左横4右縦1横3） → 左: 横大1枠(4枚) / 右: 新レイアウト 縦1+横3 */
  {
    year:2025, month:5,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2025-05/l1.jpg'},{file:'images/2025-05/l2.jpg'},
        {file:'images/2025-05/l3.jpg'},{file:'images/2025-05/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2025-05/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-05/r2.jpg'},{file:'images/2025-05/r3.jpg'},{file:'images/2025-05/r4.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'v1h2',
    message:'',
  },

  /* 6月: 縦9横5（左縦5横1右縦4横4） → 左右ともに新レイアウト */
  {
    year:2025, month:6,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2025-06/l1.jpg'},{file:'images/2025-06/l2.jpg'},{file:'images/2025-06/l3.jpg'},
        {file:'images/2025-06/l4.jpg'},{file:'images/2025-06/l5.jpg'},
      ]},
      {orient:'h', photos:[{file:'images/2025-06/l6.jpg'}]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2025-06/r1.jpg'},{file:'images/2025-06/r2.jpg'},
        {file:'images/2025-06/r3.jpg'},{file:'images/2025-06/r4.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-06/r5.jpg'},{file:'images/2025-06/r6.jpg'},
        {file:'images/2025-06/r7.jpg'},{file:'images/2025-06/r8.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

  /* 7月: 縦2横5（左横3右縦2横2） → 左: 横大1枠(3枚) / 右: 新レイアウト 縦2+横2 */
  {
    year:2025, month:7,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2025-07/l1.jpg'},{file:'images/2025-07/l2.jpg'},{file:'images/2025-07/l3.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2025-07/r1.jpg'},{file:'images/2025-07/r2.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-07/r3.jpg'},{file:'images/2025-07/r4.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'v1h2',
    message:'',
  },

  /* 8月: 縦1横7（左横4右縦1横3） → 左: 横大1枠(4枚) / 右: 新レイアウト 縦1+横3 */
  {
    year:2025, month:8,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2025-08/l1.jpg'},{file:'images/2025-08/l2.jpg'},
        {file:'images/2025-08/l3.jpg'},{file:'images/2025-08/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2025-08/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-08/r2.jpg'},{file:'images/2025-08/r3.jpg'},{file:'images/2025-08/r4.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'v1h2',
    message:'',
  },

  /* 9月: 縦1横6（左縦1横3右横3） → 左: 新レイアウト 縦1+横3 / 右: 横大1枠(3枚) */
  {
    year:2025, month:9,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2025-09/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-09/l2.jpg'},{file:'images/2025-09/l3.jpg'},{file:'images/2025-09/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2025-09/r1.jpg'},{file:'images/2025-09/r2.jpg'},{file:'images/2025-09/r3.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 10月: 横8枚（左4右4） → 横大1枠・横大1枠 */
  {
    year:2025, month:10,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2025-10/l1.jpg'},{file:'images/2025-10/l2.jpg'},
        {file:'images/2025-10/l3.jpg'},{file:'images/2025-10/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2025-10/r1.jpg'},{file:'images/2025-10/r2.jpg'},
        {file:'images/2025-10/r3.jpg'},{file:'images/2025-10/r4.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* 11月: 縦4横10（左縦1横5右縦3横5） → 左右ともに新レイアウト */
  {
    year:2025, month:11,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2025-11/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-11/l2.jpg'},{file:'images/2025-11/l3.jpg'},
        {file:'images/2025-11/l4.jpg'},{file:'images/2025-11/l5.jpg'},{file:'images/2025-11/l6.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2025-11/r1.jpg'},{file:'images/2025-11/r2.jpg'},{file:'images/2025-11/r3.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2025-11/r4.jpg'},{file:'images/2025-11/r5.jpg'},
        {file:'images/2025-11/r6.jpg'},{file:'images/2025-11/r7.jpg'},{file:'images/2025-11/r8.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

  /* 12月: 縦2横11（左縦1横6右縦1横5） → 左右ともに新レイアウト（6枚は左右2枠に分割） */
  {
    year:2025, month:12,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2025-12/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-12/l2.jpg'},{file:'images/2025-12/l3.jpg'},{file:'images/2025-12/l4.jpg'},
        {file:'images/2025-12/l5.jpg'},{file:'images/2025-12/l6.jpg'},{file:'images/2025-12/l7.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2025-12/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2025-12/r2.jpg'},{file:'images/2025-12/r3.jpg'},
        {file:'images/2025-12/r4.jpg'},{file:'images/2025-12/r5.jpg'},{file:'images/2025-12/r6.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

  /* ══ 2026年 ══ */

  /* 1月: 縦1横13（左縦1横7右横6） → 左: 新レイアウト 縦1+横7(自動で6+で数字表示) / 右: 横大1枠(6枚) */
  {
    year:2026, month:1,
    leftFrames:[
      {orient:'v', photos:[{file:'images/2026-01/l1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2026-01/l2.jpg'},{file:'images/2026-01/l3.jpg'},{file:'images/2026-01/l4.jpg'},
        {file:'images/2026-01/l5.jpg'},{file:'images/2026-01/l6.jpg'},{file:'images/2026-01/l7.jpg'},{file:'images/2026-01/l8.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2026-01/r1.jpg'},{file:'images/2026-01/r2.jpg'},{file:'images/2026-01/r3.jpg'},
        {file:'images/2026-01/r4.jpg'},{file:'images/2026-01/r5.jpg'},{file:'images/2026-01/r6.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 2月: 横9枚（左4右5） → 横大1枠・横大1枠 */
  {
    year:2026, month:2,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2026-02/l1.jpg'},{file:'images/2026-02/l2.jpg'},
        {file:'images/2026-02/l3.jpg'},{file:'images/2026-02/l4.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2026-02/r1.jpg'},{file:'images/2026-02/r2.jpg'},{file:'images/2026-02/r3.jpg'},
        {file:'images/2026-02/r4.jpg'},{file:'images/2026-02/r5.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'single',
    message:'',
  },

  /* 3月: 縦3横11（左横6右縦3横3） → 左: 横大1枠(6枚) / 右: 新レイアウト 縦3+横3 */
  {
    year:2026, month:3,
    leftFrames:[
      {orient:'h', photos:[
        {file:'images/2026-03/l1.jpg'},{file:'images/2026-03/l2.jpg'},{file:'images/2026-03/l3.jpg'},
        {file:'images/2026-03/l4.jpg'},{file:'images/2026-03/l5.jpg'},{file:'images/2026-03/l6.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[
        {file:'images/2026-03/r1.jpg'},{file:'images/2026-03/r2.jpg'},{file:'images/2026-03/r3.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2026-03/r4.jpg'},{file:'images/2026-03/r5.jpg'},{file:'images/2026-03/r6.jpg'},
      ]},
    ],
    leftLayout:'single', rightLayout:'v1h2',
    message:'',
  },

  /* 4月: 縦2横7（左縦2横3右横4） → 左: 新レイアウト 縦2+横3 / 右: 横大1枠(4枚) */
  {
    year:2026, month:4,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2026-04/l1.jpg'},{file:'images/2026-04/l2.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2026-04/l3.jpg'},{file:'images/2026-04/l4.jpg'},{file:'images/2026-04/l5.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'h', photos:[
        {file:'images/2026-04/r1.jpg'},{file:'images/2026-04/r2.jpg'},
        {file:'images/2026-04/r3.jpg'},{file:'images/2026-04/r4.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'single',
    message:'',
  },

  /* 5月: 縦3横12（左縦2横7右縦1横5） → 左右ともに新レイアウト（7枚は数字表示） */
  {
    year:2026, month:5,
    leftFrames:[
      {orient:'v', photos:[
        {file:'images/2026-05/l1.jpg'},{file:'images/2026-05/l2.jpg'},
      ]},
      {orient:'h', photos:[
        {file:'images/2026-05/l3.jpg'},{file:'images/2026-05/l4.jpg'},{file:'images/2026-05/l5.jpg'},
        {file:'images/2026-05/l6.jpg'},{file:'images/2026-05/l7.jpg'},{file:'images/2026-05/l8.jpg'},{file:'images/2026-05/l9.jpg'},
      ]},
    ],
    rightFrames:[
      {orient:'v', photos:[{file:'images/2026-05/r1.jpg'}]},
      {orient:'h', photos:[
        {file:'images/2026-05/r2.jpg'},{file:'images/2026-05/r3.jpg'},{file:'images/2026-05/r4.jpg'},
        {file:'images/2026-05/r5.jpg'},{file:'images/2026-05/r6.jpg'},
      ]},
    ],
    leftLayout:'v1h2', rightLayout:'v1h2',
    message:'',
  },

];

/* ── anniversaryページ左の横写真（2026年6月用） ── */
DIARY_DATA.anniversaryPhoto = 'images/anniversary/photo.jpg';
