import { User } from "src/users/entities/user.entity";
import { Word } from "src/words/entities/word.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'games'})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  wordId: number;

  @Column()
  isWon: boolean;

  @Column()
  numAttempts: number;

  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(() => User, (user) => user.games)
  user: User;

  @ManyToOne(() => Word, (word) => word.games)
  word: Word;
}
