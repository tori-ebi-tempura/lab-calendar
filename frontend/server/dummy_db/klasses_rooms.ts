type KlassesRoomsDBShema = {
  klassId: number;
  roomId: number;
};

export const klassesRooms: KlassesRoomsDBShema[] = [
  {
    klassId: 1,
    roomId: 2,
  },
  {
    klassId: 2,
    roomId: 2,
  },
  {
    klassId: 2,
    roomId: 3,
  },
  {
    klassId: 3,
    roomId: 1,
  },
  {
    klassId: 4,
    roomId: 1,
  },
  {
    klassId: 5,
    roomId: 1,
  },
  {
    klassId: 6,
    roomId: 1,
  },
  {
    klassId: 7,
    roomId: 4,
  },
  {
    klassId: 8,
    roomId: 1,
  },
  {
    klassId: 9,
    roomId: 1,
  },
  {
    klassId: 10,
    roomId: 1,
  },
  {
    klassId: 11,
    roomId: 5,
  },
  {
    klassId: 12,
    roomId: 1,
  },
  {
    klassId: 13,
    roomId: 6,
  },
  {
    klassId: 14,
    roomId: 8,
  },
  {
    klassId: 121,
    roomId: 7,
  },
  {
    klassId: 122,
    roomId: 7,
  },
  {
    klassId: 123,
    roomId: 7,
  },
  {
    klassId: 124,
    roomId: 7,
  },
];

export const getRoomIdsByKlassId = (klassId: number): number[] => {
  const roomIds: number[] = [];
  for (const column of klassesRooms) {
    if (klassId === column.klassId) {
      roomIds.push(column.roomId);
    }
  }
  return roomIds;
};
