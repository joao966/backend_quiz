import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { questions, questionsDocument } from './schemas/questions.schema';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(questions.name) private questionsModel: Model<questionsDocument>) {}

  async create(createCatDto: CreateQuestionDto): Promise<questions> {
    const createdCat = new this.questionsModel(createCatDto);
    return createdCat.save();
  }

  findAll() {
    return this.questionsModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
