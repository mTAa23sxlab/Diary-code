/* ════════════════════════════════════════════════
   data.js サンプル（実際の写真パスに書き換えてください）

   各月のデータ構造:
   {
     year: 2024,
     month: 6,
     member: '梢桃音',          // ファンマーク表示用（右ページ）
     leftLayout: 'h5-grid',    // 左ページレイアウト
     rightLayout: 'h2-stack',  // 右ページレイアウト
     leftPhotos: [...],         // 左ページの写真
     rightPhotos: [...],        // 右ページの写真
     message: '〇〇が楽しかった月。', // コメント（2行以内推奨）
   }

   leftLayout / rightLayout の選択肢:
   ── 縦向き中心 ──
   'v2'       縦2枚横並び
   'v3'       縦3枚横並び
   'v4-grid'  縦2×2グリッド
   ── 横向き中心 ──
   'h2'       横2枚縦積み
   'h3'       横3枚縦積み
   'h4-grid'  横2×2グリッド
   'h5-grid'  横2列3行(先頭1枚が横長)
   'h6-grid'  横2列3行
   'h7-grid'  横3列3行(7枚まで)
   'h8-grid'  横2列4行
   'h9-grid'  横3列3行(9枚)
   ── 混合 ──
   'v1h2'     縦1枚大＋横2枚小（左に縦、右に横2段）
   'v1h3'     縦1枚大＋横3枚小
   'v2h2'     縦2枚＋横2枚
   'v2h3'     縦2枚＋横3枚
   'v5h1'     縦5枚＋横1枚大
   ── 右ページ専用 ──
   'pickup-v'  縦1枚大（デフォルト）
   'pickup-h'  横1枚大
   'h2-stack'  横2枚縦積み
   'h3-stack'  横3枚縦積み
   'v2-side'   縦2枚横並び
   'v3-side'   縦3枚横並び
   'v4-side'   縦2×2グリッド
   'v5-col'    縦5枚横並び
   'grid4'     2×2グリッド
   'grid6'     2×3グリッド
   'grid9'     3×3グリッド
   'v1h2'      縦1大＋横2小
   'v2h2'      縦2＋横2
   'v4h4'      縦4＋横4（8枚）
   'v3h5'      縦3＋横5（8枚）
   'v1h5'      縦1＋横5（6枚）
   'h4-right'  横4枚
   'h5-right'  横5枚
════════════════════════════════════════════════ */
const DIARY_DATA = [
  /* ── 2024年 ── */
  {
    year:2024, month:6,
    member:'梢桃音',
    leftLayout:'h5-grid',
    rightLayout:'h2-stack',
    leftPhotos:[
      {file:'images/2024-06/l1.jpg'},
      {file:'images/2024-06/l2.jpg'},
      {file:'images/2024-06/l3.jpg'},
      {file:'images/2024-06/l4.jpg'},
      {file:'images/2024-06/l5.jpg'},
    ],
    rightPhotos:[
      {file:'images/2024-06/r1.jpg', url:''},
      {file:'images/2024-06/r2.jpg', url:''},
    ],
    message:'',
  },
  {
    year:2024, month:7,
    member:'ルンルン',
    leftLayout:'h6-grid',
    rightLayout:'h3-stack',
    leftPhotos:[
      {file:'images/2024-07/l1.jpg'},
      {file:'images/2024-07/l2.jpg'},
      {file:'images/2024-07/l3.jpg'},
      {file:'images/2024-07/l4.jpg'},
      {file:'images/2024-07/l5.jpg'},
      {file:'images/2024-07/l6.jpg'},
    ],
    rightPhotos:[
      {file:'images/2024-07/r1.jpg'},
      {file:'images/2024-07/r2.jpg'},
      {file:'images/2024-07/r3.jpg'},
    ],
    message:'',
  },
  /* ── 残りの月は同じ形式で追加 ── */
];
