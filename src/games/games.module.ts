import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game } from './entities/game.entity';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordsModule } from 'src/words/words.module';

@Module({
  imports: [
    WordsModule,
    UsersModule,
    TypeOrmModule.forFeature([Game])
  ],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
