import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  roomName: string;

  @ManyToMany(() => Klass, (klass) => klass.rooms)
  klasses: Klass[];
}
