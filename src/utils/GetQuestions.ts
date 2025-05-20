import { TriviaApi } from '../types/Constants';
import { Question } from '../types/Question';
import { QuestionTypes } from '../types/QuestionTypes';
import { Difficulty } from '../types/Difficulty';
import { RawQuestion } from '../types/RawQuestion';

export const GetQuestions = async (numberOfQuestions: number, difficulty: Difficulty): Promise<Question[]> => {
    const baseUrl = `${TriviaApi}?amount=${numberOfQuestions}`;
    const urlToFetch = baseUrl + ((difficulty != null && difficulty != Difficulty.any) ? `&difficulty=${difficulty}` : '');

    const response = await fetch(urlToFetch);
    const json = await response.json();

    const questions: Question[] = [];

    json.results.map((item: RawQuestion, index: number) => {
        const question: Question = {
            number: index + 1,
            category: item.category,
            difficulty: item.difficulty as Difficulty,
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