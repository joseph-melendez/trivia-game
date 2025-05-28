import { useState } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import { Question as QuestionType } from '../types/Question';
import { Answers } from './Answers';
import { QuestionXOfX } from './QuestionXOfX';
import { CategoryDifficulty } from './CategoryDifficulty';
import { Question } from './Question';
import { useParams, Link } from 'react-router';
import { GetDifficultyFromQueryString } from '../types/Difficulty';
import { GetFullPath } from '../utils/GetFullPath';

export const Play = () => {
    const { rounds } = useParams();
    const difficulty = GetDifficultyFromQueryString(window.location.search);
    const [timestamp] = useState(Date.now().toString());
    const [answer, setAnswer] = useState(-1);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const { data, isFetching, error } = useQuestions(Number(rounds), difficulty, timestamp);

    if (isFetching) {
        return <>Retrieving Data...</>;
    } else if (error || data === undefined) {
        return <>There was an error</>;
    }

    const item: QuestionType = data[questionNumber];

    const buttonClicked = () => {
        if (questionAnswered) {
            setAnswer(-1);
            setQuestionAnswered(false);
            setQuestionNumber(questionNumber + 1);
        } else {
            setQuestionAnswered(true);

            if (data[questionNumber].options[answer] === data[questionNumber].answer) {
                setCorrectAnswers(correctAnswers + 1);
            }
        }
    }

    const isCorrectAnswer = (): boolean => {
        return (data[questionNumber].options[answer] === data[questionNumber].answer);
    }

    const answerText = () => {
        if (isCorrectAnswer()) {
            return <b>You are correct!<br /><br /></b>
        } else {
            return (
                <p>
                    That is incorrect.<br />
                    The correct answer is:&nbsp;
                    <b dangerouslySetInnerHTML={{__html: data[questionNumber].answer}} />
                </p>
            )
        }
    }

    const buttonText = () => {
        return (questionAnswered) ? 'Next Question' : 'Answer';
    }

    if (questionNumber >= data.length) {
        return (
            <div className='font-size-18'>
                <p>You answered {correctAnswers} of {data.length} question(s) correctly.</p>
                <p><Link to={GetFullPath('/')}>Play Again</Link></p>
            </div>
        )
    }

    return (
        <div className='font-size-18'>
            <QuestionXOfX number={item.number} total={data?.length} />
            <hr />
            <CategoryDifficulty category={item.category} difficulty={item.difficulty} />
            <br />
            <Question question={item.question} />
            <Answers
                answers={item.options}
                answer={answer}
                setAnswer={setAnswer}
                wasAnswered={questionAnswered}
                correctAnswer={data[questionNumber].answer}
            />
            {!questionAnswered && <><br /><br /></>}
            {questionAnswered && answerText()}
            <p>
                <button
                    className='button-ok'
                    onClick={() => buttonClicked()}
                    disabled={answer < 0}
                    data-testid='button-ok'
                >
                    {buttonText()}
                </button>
            </p>
        </div>
    );
}