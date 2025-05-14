import { Difficulty as DifficultyType } from "../types/Difficulty";
import { Difficulty } from "./Difficulty";


interface CategoryDifficultyProps {
    category: string,
    difficulty: DifficultyType
}

export const CategoryDifficulty = ({category, difficulty}: CategoryDifficultyProps) => {
    return (
        <div className='flex-container'>
            <div className='category-difficulty font-size-24'>
                <b className='align-left' dangerouslySetInnerHTML={{__html: `${category}`}} />
            </div>
            <div className='category-difficulty'>
                <Difficulty difficulty={difficulty} />
            </div>
        </div>
    );
}