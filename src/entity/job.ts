import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column({ type: 'decimal', scale: 2 })
    hourlyPay: number;

    @Column()
    location: string;

    @CreateDateColumn()
    createdTimestamp: string;

    @UpdateDateColumn()
    updatedTimestamp: string;

    @DeleteDateColumn()
    deletedTimestamp: string;
}