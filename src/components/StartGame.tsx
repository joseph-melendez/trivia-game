import { useState } from 'react';
import { QuestionsMin, QuestionsMax } from '../types/Constants';
import { useNavigate } from 'react-router';
import { Difficulty } from '../types/Difficulty';
import { GetFullPath } from '../utils/GetFullPath';

export const StartGame = () => {
    const [rounds, setRounds] = useState(10);
    const [difficulty, setDifficulty] = useState(Difficulty.any);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const buttonClick = async () => {
        navigate(GetFullPath(`/play/${rounds}?difficulty=${difficulty}`));
    }

    const validateRounds = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.currentTarget.value);
        const min = Number(e.currentTarget.min);
        const max = Number(e.currentTarget.max);

        if (val < min || val > max) {
            setError(`Current value (${val}) is outside the acceptable range of ${min} and ${max}`);
        } else {
            setError('');
        }

        setRounds(val);
    }

    return (
        <div className='font-size-18'>
            <p>
                Welcome to the Trivia Game!  This application will deliver you random trivia questions to answer and keep track of your score.  Please select the number of questions you wish to answer, from 1 to 20, and the desired difficulty.
            </p>
            <p>
                Number of questions: 
                <input
                    type='number'
                    min={QuestionsMin}
                    max={QuestionsMax}
                    onChange={validateRounds}
                    value={rounds}
                    className='margin-10 number-of-questions'
                />
                <br />
                Difficulty: 
                <select
                    value={difficulty}
                    onChange={(e) => {setDifficulty(e.target.value as Difficulty)}}
                    className='margin-10 difficulty-dropdown'
                >
                    <option value={Difficulty.any}>Any</option>
                    <option value={Difficulty.easy}>Easy</option>
                    <option value={Difficulty.medium}>Medium</option>
                    <option value={Difficulty.hard}>Hard</option>
                </select>
            </p>
            <p className='error'>{error}</p>
            <p>
                <button className='button-ok' onClick={buttonClick} disabled={error !== ''}>Start</button>
            </p>
        </div>
    );
}