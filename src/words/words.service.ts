import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { Word } from './entities/word.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WordsService {
  constructor(@InjectRepository(Word) private wordRepository: Repository<Word>) { }

  create(createWordDto: CreateWordDto) {
    const newWord = this.wordRepository.create(createWordDto);
    return this.wordRepository.save(newWord);
  }

  findAll() {
    return this.wordRepository.find();
  }

  findOne(id: number) {
    return this.wordRepository.findOneBy({ id: id });
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return this.wordRepository.update(id, updateWordDto);
  }

  remove(id: number) {
    return this.wordRepository.delete(id);
  }

  async findWordOfTheDay() {
    const currentDateFull = new Date();
    const currentDate = `${currentDateFull.getFullYear()}-${currentDateFull.getMonth() + 1}-${currentDateFull.getDate()}`;
    const wordOfTheDay = await this.wordRepository.createQueryBuilder("word").where("word.date = :currentDate", {currentDate: currentDate}).getOne();
    return wordOfTheDay;
  }
}
