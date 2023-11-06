import { getUserById } from "~/server/dummy_db/users";

type ResponseObject = {
  userId: number;
  userName: string;
  studentNumber: string;
};

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, "id"));

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  try {
    const user = getUserById(id);
    const responseObject: ResponseObject = {
      userId: user.userId,
      userName: user.userName,
      studentNumber: user.studentNumber,
    };
    return responseObject;
  } catch (error) {
    return error;
  }
});
