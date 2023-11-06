import { rooms } from "~/server/dummy_db/rooms";

type ResponseObject = {
  roomId: number;
  roomName: string;
};

export default defineEventHandler(() =>
  rooms.map(
    (room): ResponseObject => ({
      roomId: room.roomId,
      roomName: room.roomName,
    }),
  ),
);
