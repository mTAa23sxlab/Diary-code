// ============================================================
//  data.js  —  推し活日記 データファイル
//  写真を追加・変更するときはこのファイルと images/ フォルダを編集してください
// ============================================================

// 有効な年月の定義
const VALID_RANGE = {
  2024: [6, 7, 8, 9, 10, 11, 12],
  2025: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2026: [1, 2, 3, 4, 5, 6], // 6月は2周年記念ページ
};

// 月別テーマカラー（タブの背景色）
const MONTH_COLORS = {
  1:  '#FFE36C',
  2:  '#DDD8F0',
  3:  '#FFC6E2',
  4:  '#63AED9',
  5:  '#846FC7',
  6:  '#DDD8F0',
  7:  '#DDD8F0',
  8:  '#DDD8F0',
  9:  '#DDD8F0',
  10: '#D8E9FC',
  11: '#DDD8F0',
  12: '#DDD8F0',
};

// ページデータ
// photos: 左ページに並ぶメンバーごとの写真（通常4枚、ユニットあり月は5枚）
//   - file: 画像パス（images/YYYY-MM/ファイル名）
//   - url:  クリック時に開くURL（なければ null）
//   - name: メンバー名（任意）
// pickup: 右ページのピックアップ写真1枚＋一言メッセージ
//   - file, url, message

const DIARY_DATA = [
  {
    year: 2024, month: 6,
    photos: [
      { file: 'images/2024-06/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-06/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-06/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-06/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-06/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2024, month: 7,
    photos: [
      { file: 'images/2024-07/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-07/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-07/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-07/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-07/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  // 以降同じ形式で 2024-08 〜 2026-05 まで続きます
  // ユニット写真がある月は photos に5枚目を追加してください:
  // { file: 'images/YYYY-MM/unit.jpg', url: null, name: 'ユニット' },
];
