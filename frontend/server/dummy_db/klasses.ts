export type KlassDBShema = {
  klassId: number;
  klassName: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
};

export const klasses: KlassDBShema[] = [
  {
    klassId: 1,
    klassName: "ソフトウェア工学演習",
    dayOfWeek: 2,
    startTime: "17:10",
    endTime: "18:50",
  },
  {
    klassId: 2,
    klassName: "プログラム実習2",
    dayOfWeek: 2,
    startTime: "13:30",
    endTime: "17:00",
  },
  {
    klassId: 3,
    klassName: "院ゼミ4",
    dayOfWeek: 1,
    startTime: "13:30",
    endTime: "17:00",
  },
  {
    klassId: 4,
    klassName: "TAミーティング",
    dayOfWeek: 1,
    startTime: "17:00",
    endTime: "18:50",
  },
  {
    klassId: 5,
    klassName: "B3院進ゼミ",
    dayOfWeek: 2,
    startTime: "19:00",
    endTime: "20:40",
  },
  {
    klassId: 6,
    klassName: "院ゼミ2",
    dayOfWeek: 3,
    startTime: "13:30",
    endTime: "15:10",
  },
  {
    klassId: 7,
    klassName: "システム設計特論",
    dayOfWeek: 3,
    startTime: "15:20",
    endTime: "17:00",
  },
  {
    klassId: 8,
    klassName: "B4院進ゼミ",
    dayOfWeek: 3,
    startTime: "17:10",
    endTime: "18:50",
  },
  {
    klassId: 9,
    klassName: "M1院ゼミ++",
    dayOfWeek: 3,
    startTime: "19:00",
    endTime: "20:40",
  },
  {
    klassId: 10,
    klassName: "卒業研究2",
    dayOfWeek: 4,
    startTime: "13:30",
    endTime: "17:00",
  },
  {
    klassId: 11,
    klassName: "プログラム言語特論",
    dayOfWeek: 4,
    startTime: "15:10",
    endTime: "17:00",
  },
  {
    klassId: 12,
    klassName: "ゼミナール2",
    dayOfWeek: 4,
    startTime: "17:10",
    endTime: "18:50",
  },
  {
    klassId: 13,
    klassName: "情報科学特別講義D",
    dayOfWeek: 5,
    startTime: "09:00",
    endTime: "10:40",
  },
  {
    klassId: 14,
    klassName: "ソフトウェア基礎特論",
    dayOfWeek: 1,
    startTime: "10:50",
    endTime: "12:30",
  },
  {
    klassId: 101,
    klassName: "情報TA（月・午前）",
    dayOfWeek: 1,
    startTime: "08:55",
    endTime: "12:55",
  },
  {
    klassId: 102,
    klassName: "情報TA（火・午前）",
    dayOfWeek: 2,
    startTime: "08:55",
    endTime: "12:55",
  },
  {
    klassId: 103,
    klassName: "情報TA（水・午前）",
    dayOfWeek: 3,
    startTime: "08:55",
    endTime: "12:55",
  },
  {
    klassId: 104,
    klassName: "情報TA（木・午前）",
    dayOfWeek: 4,
    startTime: "08:55",
    endTime: "12:55",
  },
  {
    klassId: 105,
    klassName: "情報TA（金・午前）",
    dayOfWeek: 5,
    startTime: "08:55",
    endTime: "12:55",
  },
  {
    klassId: 106,
    klassName: "情報TA（土・午前）",
    dayOfWeek: 6,
    startTime: "08:30",
    endTime: "12:30",
  },
  {
    klassId: 121,
    klassName: "プロ実2質問対応（火）",
    dayOfWeek: 2,
    startTime: "12:40",
    endTime: "13:20",
  },
  {
    klassId: 122,
    klassName: "プロ実2質問対応（水）",
    dayOfWeek: 3,
    startTime: "12:40",
    endTime: "13:20",
  },
  {
    klassId: 123,
    klassName: "プロ実2質問対応（木）",
    dayOfWeek: 4,
    startTime: "12:40",
    endTime: "13:20",
  },
  {
    klassId: 124,
    klassName: "プロ実2質問対応（金）",
    dayOfWeek: 5,
    startTime: "12:40",
    endTime: "13:20",
  },
];

export const getKlassById = (id: number): KlassDBShema => {
  for (const klass of klasses) {
    if (id === klass.klassId) {
      return klass;
    }
  }
  throw new Error(`Klass with ID:${id} was not found.`);
};
