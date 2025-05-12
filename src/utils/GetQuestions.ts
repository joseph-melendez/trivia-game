import { TriviaApi } from '../types/Constants';
import { Question } from '../types/Question';
import rawData from '../data/GetQuestionsResponse.json';
import { QuestionTypes } from '../types/QuestionTypes';

export const GetQuestions = async (numberOfQuestions: number): Promise<Question[]> => {
    const response = await fetch(`${TriviaApi}?amount=${numberOfQuestions}`);
    const json = await response.json();
    // const json = rawData;

    const questions: Question[] = [];

    json.results.map((item: any, index: number) => {
        const question: Question = {
            number: index + 1,
            category: item.category,
            difficulty: item.difficulty,
            type: item.type,
            question: item.question,
            answer: item.correct_answer,
            options: [...item.incorrect_answers, item.correct_answer]
        };

        if (question.type === QuestionTypes.boolean) {
            // Sort boolean types in reverse so true comes before false
            question.options.sort().reverse();
        } else {
            // Sort in default order
            question.options.sort();
        }

        questions.push(question);
    });

    return questions;
}