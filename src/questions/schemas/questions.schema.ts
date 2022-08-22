import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type questionsDocument = questions & Document;

@Schema()
export class questions {
  @Prop()
  questions: string;

  @Prop()
  options: string[];

  @Prop()
  answers: string;
}

export const questionsSchema = SchemaFactory.createForClass(questions);