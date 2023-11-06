type UserDBShema = {
  userId: number;
  userName: string;
  studentNumber: string;
  password: string;
};

export const users: UserDBShema[] = [
  {
    userId: 1,
    userName: "M1太郎",
    studentNumber: "ce235990",
    password: "m1taropass",
  },
  {
    userId: 2,
    userName: "M1次郎",
    studentNumber: "ce235991",
    password: "m1jiropass",
  },
  {
    userId: 3,
    userName: "M2太郎",
    studentNumber: "ce225990",
    password: "m2taropass",
  },
  {
    userId: 4,
    userName: "B4太郎",
    studentNumber: "ee207990",
    password: "b4taropass",
  },
  {
    userId: 5,
    userName: "B3太郎",
    studentNumber: "ee217990",
    password: "b3taropass",
  },
];

export const getUserById = (id: number): UserDBShema => {
  for (const user of users) {
    if (id === user.userId) {
      return user;
    }
  }
  throw new Error(`User with ID:${id} was not found.`);
};
