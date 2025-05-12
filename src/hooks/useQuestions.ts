import { useQuery } from '@tanstack/react-query';
import { GetQuestions } from '../utils/GetQuestions';

export const useQuestions = (numberOfQuestions: number, timestamp: string) => {
    return useQuery({
        queryKey: [`questions-${timestamp}`],
        queryFn: async () => {
            console.log("getting data from joe");
            return await GetQuestions(numberOfQuestions);
        }
    })
}