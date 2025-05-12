interface AnswerProps {
    prompt: string,
    index: number,
    disabled: boolean,
    answer: number,
    setAnswer: (index: number) => void
}

export const Answer = ({prompt, index, disabled, answer, setAnswer} : AnswerProps) => {
    const answerFormatting = (index: number): string => {
        const start = (disabled) ? 'answer-disabled ' : 'answer ';
        const selected = (index === answer) ? 'answer-selected' : '';

        return start + selected;
    }

    const answerClicked = (index: number) => {
        if (!disabled) {
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