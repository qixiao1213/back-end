import { timestamp } from 'rxjs'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'


@Entity()
export class MessageBook {
    //自增列
    @PrimaryGeneratedColumn()
    messageId: number
    //普通列
    @Column()
    userId: number
    @Column()
    content: string
    @CreateDateColumn({type:'timestamp'})
    posttime: Date
    @Column()
    likes: number
}