type RoomDBShema = {
  roomId: number;
  roomName: string;
};

export const rooms: RoomDBShema[] = [
  {
    roomId: 1,
    roomName: "6405（ゼミ室）",
  },
  {
    roomId: 2,
    roomName: "A307",
  },
  {
    roomId: 3,
    roomName: "A308",
  },
  {
    roomId: 4,
    roomName: "0301",
  },
  {
    roomId: 5,
    roomName: "0303",
  },
  {
    roomId: 6,
    roomName: "A305",
  },
  {
    roomId: 7,
    roomName: "6306",
  },
  {
    roomId: 8,
    roomName: "A208",
  },
];

export const getRoomById = (id: number): RoomDBShema => {
  for (const room of rooms) {
    if (id === room.roomId) {
      return room;
    }
  }
  throw new Error(`Room with ID:${id} was not found.`);
};
