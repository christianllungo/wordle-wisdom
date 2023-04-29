import { Game } from "src/games/entities/game.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'words' })
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  meaning: string;

  @Column({type: "varchar", length: "1000"})
  interestingFact: string;

  @Column({type: 'date'})
  date: Date;

  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Game, (game) => game.word)
  games: Game[];
}
