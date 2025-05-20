import { useQuery } from '@tanstack/react-query';
import { GetQuestions } from '../utils/GetQuestions';
import { Difficulty } from '../types/Difficulty';

export const useQuestions = (numberOfQuestions: number, difficulty: Difficulty, timestamp: string) => {
    return useQuery({
        queryKey: [`questions-${timestamp}`],
        queryFn: async () => {
            return await GetQuestions(numberOfQuestions, difficulty);
        }
    })
}