type UsersKlassesDBShema = {
  userId: number;
  klassId: number;
};

export const usersKlasses: UsersKlassesDBShema[] = [
  {
    userId: 1,
    klassId: 1,
  },
  {
    userId: 1,
    klassId: 2,
  },
  {
    userId: 1,
    klassId: 3,
  },
  {
    userId: 1,
    klassId: 4,
  },
  {
    userId: 1,
    klassId: 5,
  },
  {
    userId: 1,
    klassId: 6,
  },
  {
    userId: 1,
    klassId: 7,
  },
  {
    userId: 1,
    klassId: 8,
  },
  {
    userId: 1,
    klassId: 9,
  },
  {
    userId: 1,
    klassId: 10,
  },
  {
    userId: 1,
    klassId: 11,
  },
  {
    userId: 1,
    klassId: 13,
  },
  {
    userId: 1,
    klassId: 14,
  },
  {
    userId: 1,
    klassId: 102,
  },
  {
    userId: 1,
    klassId: 103,
  },
  {
    userId: 1,
    klassId: 124,
  },
  {
    userId: 2,
    klassId: 1,
  },
  {
    userId: 2,
    klassId: 2,
  },
  {
    userId: 2,
    klassId: 3,
  },
  {
    userId: 2,
    klassId: 4,
  },
  {
    userId: 2,
    klassId: 5,
  },
  {
    userId: 2,
    klassId: 6,
  },
  {
    userId: 2,
    klassId: 7,
  },
  {
    userId: 2,
    klassId: 8,
  },
  {
    userId: 2,
    klassId: 9,
  },
  {
    userId: 2,
    klassId: 10,
  },
  {
    userId: 2,
    klassId: 11,
  },
  {
    userId: 2,
    klassId: 13,
  },
  {
    userId: 2,
    klassId: 14,
  },
  {
    userId: 2,
    klassId: 102,
  },
  {
    userId: 2,
    klassId: 104,
  },
];

export const getKlassIdsByUserId = (userId: number): number[] => {
  const klassIds: number[] = [];
  for (const column of usersKlasses) {
    if (userId === column.userId) {
      klassIds.push(column.klassId);
    }
  }
  return klassIds;
};
