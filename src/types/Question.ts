import { Difficulty } from './Difficulty';

export interface Question {
    number: number;
    difficulty: Difficulty;
    category: string;
    type: string;
    question: string;
    answer: string;
    options: string[];
}