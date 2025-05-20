export enum Difficulty {
    any = 'any',
    easy = 'easy',
    medium = 'medium',
    hard = 'hard'
};

export const GetDifficultyFromQueryString = (query: string): Difficulty => {
    const newQuery = query.replace('?', '');
    const split: string[] = newQuery.split('&');

    for (const item of split) {
        const elements: string[] = item.split('=');

        if (elements[0] === 'difficulty') {
            return elements[1] as Difficulty;
        }
    }

    return Difficulty.any;
}