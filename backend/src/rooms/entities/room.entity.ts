import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn({
    name: "room_id",
  })
  id: number;

  @Column({
    name: "room_name",
    length: 50,
  })
  roomName: string;

  @ManyToMany(() => Klass, (klass) => klass.rooms)
  klasses: Klass[];
}
