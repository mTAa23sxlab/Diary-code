// ============================================================
//  data.js  —  推し活日記 データファイル
//  写真を追加・変更するときはこのファイルと images/ フォルダを編集してください
// ============================================================

const DIARY_DATA = [
  // ── 2024年 ──────────────────────────────────────────────
  {
    year: 2024, month: 6,
    photos: [
      { file: 'images/2024-06/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-06/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-06/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-06/member4.jpg', url: null, name: 'メンバー4' },
      // ユニット写真がある月は下の行のコメントを外して使用
      // { file: 'images/2024-06/unit.jpg', url: null, name: 'ユニット' },
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
  {
    year: 2024, month: 8,
    photos: [
      { file: 'images/2024-08/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-08/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-08/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-08/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-08/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2024, month: 9,
    photos: [
      { file: 'images/2024-09/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-09/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-09/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-09/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-09/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2024, month: 10,
    photos: [
      { file: 'images/2024-10/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-10/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-10/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-10/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-10/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2024, month: 11,
    photos: [
      { file: 'images/2024-11/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-11/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-11/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-11/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-11/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2024, month: 12,
    photos: [
      { file: 'images/2024-12/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2024-12/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2024-12/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2024-12/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2024-12/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  // ── 2025年 ──────────────────────────────────────────────
  {
    year: 2025, month: 1,
    photos: [
      { file: 'images/2025-01/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-01/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-01/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-01/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-01/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 2,
    photos: [
      { file: 'images/2025-02/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-02/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-02/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-02/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-02/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 3,
    photos: [
      { file: 'images/2025-03/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-03/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-03/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-03/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-03/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 4,
    photos: [
      { file: 'images/2025-04/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-04/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-04/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-04/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-04/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 5,
    photos: [
      { file: 'images/2025-05/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-05/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-05/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-05/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-05/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 6,
    photos: [
      { file: 'images/2025-06/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-06/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-06/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-06/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-06/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 7,
    photos: [
      { file: 'images/2025-07/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-07/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-07/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-07/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-07/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 8,
    photos: [
      { file: 'images/2025-08/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-08/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-08/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-08/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-08/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 9,
    photos: [
      { file: 'images/2025-09/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-09/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-09/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-09/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-09/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 10,
    photos: [
      { file: 'images/2025-10/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-10/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-10/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-10/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-10/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 11,
    photos: [
      { file: 'images/2025-11/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-11/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-11/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-11/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-11/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2025, month: 12,
    photos: [
      { file: 'images/2025-12/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2025-12/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2025-12/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2025-12/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2025-12/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  // ── 2026年 ──────────────────────────────────────────────
  {
    year: 2026, month: 1,
    photos: [
      { file: 'images/2026-01/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2026-01/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2026-01/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2026-01/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2026-01/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2026, month: 2,
    photos: [
      { file: 'images/2026-02/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2026-02/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2026-02/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2026-02/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2026-02/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2026, month: 3,
    photos: [
      { file: 'images/2026-03/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2026-03/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2026-03/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2026-03/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2026-03/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2026, month: 4,
    photos: [
      { file: 'images/2026-04/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2026-04/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2026-04/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2026-04/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2026-04/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
  {
    year: 2026, month: 5,
    photos: [
      { file: 'images/2026-05/member1.jpg', url: null, name: 'メンバー1' },
      { file: 'images/2026-05/member2.jpg', url: null, name: 'メンバー2' },
      { file: 'images/2026-05/member3.jpg', url: null, name: 'メンバー3' },
      { file: 'images/2026-05/member4.jpg', url: null, name: 'メンバー4' },
    ],
    pickup: {
      file: 'images/2026-05/pickup.jpg',
      url: null,
      message: 'ここにこの月の一言コメントを入れてください。',
    },
  },
];
