interface AnswerProps {
    prompt: string,
    index: number,
    answer: number,
    wasAnswered: boolean,
    correctAnswer: string,
    setAnswer: (index: number) => void
}

export const Answer = ({prompt, index, answer, wasAnswered, correctAnswer, setAnswer} : AnswerProps) => {
    const answerFormatting = (index: number): string => {
        const start = (wasAnswered) ? 'answer-disabled ' : 'answer ';
        const selected = (index === answer) ? 'answer-selected' : '';
        const wrongAnswer = (wasAnswered && index !== answer && prompt === correctAnswer) ? 'answer-wrong' : '';

        return start + selected + wrongAnswer;
    }

    const answerClicked = (index: number) => {
        if (!wasAnswered) {
            setAnswer(index);
        }
    }

    return (
        <li
            className={`${answerFormatting(index)}`}
            key={prompt}
            onClick={() => answerClicked(index)}
            dangerouslySetInnerHTML={{__html: `${index+1}. ${prompt}`}}
        />
    );
}