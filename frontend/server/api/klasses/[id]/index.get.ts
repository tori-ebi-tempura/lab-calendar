import { getKlassById } from "~/server/dummy_db/klasses";
import { getRoomIdsByKlassId } from "~/server/dummy_db/klasses_rooms";
import { getRoomById } from "~/server/dummy_db/rooms";

type ResponseObject = {
  klassId: number;
  klassName: string;
  dayOfWeek: number;
  from: string;
  to: string;
  rooms: string[];
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
    const klass = getKlassById(id);
    const rooms = getRoomIdsByKlassId(klass.klassId).map(
      (roomId) => getRoomById(roomId).roomName,
    );
    const responseObject: ResponseObject = {
      klassId: klass.klassId,
      klassName: klass.klassName,
      dayOfWeek: klass.dayOfWeek,
      from: klass.startTime,
      to: klass.endTime,
      rooms,
    };
    return responseObject;
  } catch (error) {
    return error;
  }
});
