import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameFromFrontendDto } from './dto/game-from-frontend.dto';
import { WordsService } from 'src/words/words.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    private readonly wordsService: WordsService
    ) { }

  create(createGameDto: CreateGameDto) {
    const newGame = this.gameRepository.create(createGameDto);
    return this.gameRepository.save(newGame);
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneBy({id: id});
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update(id, updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }
  
  async createGameFromFrontend(gameFromFronendDto: GameFromFrontendDto, userId: number) {
    const wordOfTheDay = await this.wordsService.findWordOfTheDay();
    const newGame = new Game();
    newGame.userId = userId;
    newGame.wordId = wordOfTheDay.id;
    newGame.isWon = gameFromFronendDto.isWon;
    newGame.numAttempts = gameFromFronendDto.numAttempts;
    this.gameRepository.save(newGame);
  }
}
