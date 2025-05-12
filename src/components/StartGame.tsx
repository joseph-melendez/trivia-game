import { useState } from 'react';
import { QuestionsMin, QuestionsMax } from '../types/Constants';
import { Link, useNavigate } from 'react-router';

export const StartGame = () => {
    const [rounds, setRounds] = useState(10);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const buttonClick = async () => {
        navigate(`/play/${rounds}`);
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
        <div>
            <p>
                Welcome to the Trivia Game!  This application will deliver you random trivia questions to answer and keep track of your score.  Please select the number of questions you wish to answer, from 1 to 20.
            </p>
            <p>
                Number of questions: <input type='number' min={QuestionsMin} max={QuestionsMax} onChange={validateRounds} value={rounds}></input>
            </p>
            {
                error.length > 0 && 
                    <p className='error'>{error}</p>
            }
            <p>
                <button className='button-ok' onClick={buttonClick} disabled={error !== ''}>Start</button>
            </p>
            <hr />
            <p>
                <Link to='/about'>About Trivia Game</Link>
            </p>
        </div>
    );
}