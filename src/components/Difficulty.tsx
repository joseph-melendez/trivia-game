import { Difficulty as DifficultyType } from "../types/Difficulty"

interface DifficultyProps {
    difficulty: DifficultyType
};

export const Difficulty = ({difficulty} : DifficultyProps) => {
    const formattedDifficulty = () => {
        if (difficulty === DifficultyType.easy) {
            return 'background-color-green color-white';
        } else if (difficulty === DifficultyType.medium) {
            return 'background-color-orange color-white';
        } else if (difficulty === DifficultyType.hard) {
            return 'background-color-red color-white';
        }

        return '';
    }

    return (
        <>
            <div className={`pill ${formattedDifficulty()}`}>{difficulty}</div>
        </>
    );
}