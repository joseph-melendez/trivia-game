interface QuestionProps {
    question: string
}

export const Question = ({question}: QuestionProps) => {
    return (
        <div className='align-left' dangerouslySetInnerHTML={{__html: `${question}`}} />
    );
}