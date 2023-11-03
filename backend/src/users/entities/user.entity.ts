import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    userName: string;

    @Column()
    studentNumber: number;

    @Column({ length: 50})
    password: string;

    @ManyToMany(() => Klass, (klass) => klass.users)
    klasses: Klass[];
}
