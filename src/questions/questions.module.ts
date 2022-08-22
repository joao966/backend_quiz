import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { questions, questionsSchema } from './schemas/questions.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: questions.name,
    schema: questionsSchema
  }])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
