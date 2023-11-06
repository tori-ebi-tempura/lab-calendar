import { users } from "~/server/dummy_db/users";

type ResponseObject = {
  userId: number;
  userName: string;
  studentNumber: string;
};

export default defineEventHandler(() =>
  users.map(
    (user): ResponseObject => ({
      userId: user.userId,
      userName: user.userName,
      studentNumber: user.studentNumber,
    }),
  ),
);
