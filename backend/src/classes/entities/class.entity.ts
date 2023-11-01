import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50})
  className: string;

  @Column({ length: 50})
  dayOfWeek: string;

  @Column({ type: "time"})
  from: string;

  @Column({ type: "time"})
  to: string;
}
