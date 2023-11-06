import { getRoomById } from "~/server/dummy_db/rooms";

type ResponseObject = {
  roomId: number;
  roomName: string;
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
    const room = getRoomById(id);
    const responseObject: ResponseObject = {
      roomId: room.roomId,
      roomName: room.roomName,
    };
    return responseObject;
  } catch (error) {
    return error;
  }
});
