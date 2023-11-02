import { Room } from "src/rooms/entities/room.entity";
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
}
