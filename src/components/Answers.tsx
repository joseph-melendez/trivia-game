import { Answer } from './Answer';

interface AnswersProps {
    answers: string[],
    answer: number,
    wasAnswered: boolean,
    correctAnswer: string,
    setAnswer: (index: number) => void
}

export const Answers = ({answers, answer, wasAnswered, correctAnswer, setAnswer} : AnswersProps) => {
    return (
        <div className='answer-table align-left'>
            <ol className='ol-no-decoration ol-margin-left'>
                {
                    answers && answers.map((prompt: string, index: number) =>
                        <Answer
                            prompt={prompt}
                            index={index}
                            answer={answer}
                            setAnswer={setAnswer}
                            key={prompt}
                            wasAnswered={wasAnswered}
                            correctAnswer={correctAnswer}
                        />
                    )
                }
            </ol>
        </div>  
    );
}
