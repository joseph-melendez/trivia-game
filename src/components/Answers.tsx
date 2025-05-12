import { Answer } from './Answer';

interface AnswersProps {
    answers: string[],
    answer: number,
    disabled: boolean,
    setAnswer: (index: number) => void
}

export const Answers = ({answers, answer, disabled, setAnswer} : AnswersProps) => {
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
                            disabled={disabled}
                        />
                    )
                }
            </ol>
        </div>  
    );
}
