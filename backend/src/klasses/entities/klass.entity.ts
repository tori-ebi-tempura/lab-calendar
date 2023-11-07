import { Room } from "src/rooms/entities/room.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Klass {
  @PrimaryGeneratedColumn({
    name: "klass_id",
  })
  klassId: number;

  @Column({
    name: "klass_name",
    length: 50,
  })
  klassName: string;

  @Column({
    name: "day_of_week",
    length: 50,
  })
  dayOfWeek: string;

  @Column({
    name: "start_time",
    type: "time",
  })
  from: string;

  @Column({
    name: "end_time",
    type: "time",
  })
  to: string;

  @ManyToMany(() => Room, (room) => room.klasses, {
    cascade: true,
  })
  @JoinTable()
  rooms: Room[];

  @ManyToMany(() => User, (user) => user.klasses, {
    cascade: true,
  })
  @JoinTable()
  users: User[];
}
