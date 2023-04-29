import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { WordsModule } from './words/words.module';
import { Word } from './words/entities/word.entity';
import { GamesModule } from './games/games.module';
import { Game } from './games/entities/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'homepc2021!!',
      database: 'wordle-wisdom',
      entities: [User, Word, Game],
      synchronize: true, // TODO: Remove on production
    }),
    UsersModule,
    AuthModule,
    WordsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
