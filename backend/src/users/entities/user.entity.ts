import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: "user_id",
  })
  userId: number;

  @Column({
    name: "user_name",
    length: 50,
  })
  userName: string;

  @Column({
    name: "student_number",
    length: 50,
  })
  studentNumber: string;

  @Column({
    name: "password",
    length: 50,
    select: false
  })
  password: string;

  @ManyToMany(() => Klass, (klass) => klass.users)
  klasses: Klass[];
}
