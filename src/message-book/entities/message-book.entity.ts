import { timestamp } from 'rxjs'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'


@Entity()
export class MessageBook {
    //自增列
    @PrimaryGeneratedColumn()
    messageId: number
    //普通列
    @Column({default:''})
    email: string
    @Column({default:' '})
    content: string
    @CreateDateColumn({type:'timestamp'})
    posttime: Date
    @Column({default:0})
    likes: number
    @Column({default:''})
    reply: string
}