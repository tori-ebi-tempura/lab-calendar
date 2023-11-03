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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  klassName: string;

  @Column({ length: 50 })
  dayOfWeek: string;

  @Column({ type: "time" })
  from: string;

  @Column({ type: "time" })
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
