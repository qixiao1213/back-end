import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId:number
    @Column()
    email:string
    @Column({default:false})
    isBan: boolean
}
