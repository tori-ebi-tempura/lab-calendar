import { getKlassIdsByUserId } from "~/server/dummy_db/users_klasses";
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
  const userId = Number(getRouterParam(event, "id"));

  if (!Number.isInteger(userId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  try {
    const klasses = getKlassIdsByUserId(userId).map((klassId) =>
      getKlassById(klassId),
    );
    return klasses.map((klass): ResponseObject => {
      const rooms = getRoomIdsByKlassId(klass.klassId).map(
        (roomId) => getRoomById(roomId).roomName,
      );
      return {
        klassId: klass.klassId,
        klassName: klass.klassName,
        dayOfWeek: klass.dayOfWeek,
        from: klass.startTime,
        to: klass.endTime,
        rooms,
      };
    });
  } catch (error) {
    return error;
  }
});
