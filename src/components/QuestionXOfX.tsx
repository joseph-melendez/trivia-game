interface QuestionXOfXProps {
    number: number,
    total: number
}

export const QuestionXOfX = ({number, total}: QuestionXOfXProps) => {
    return (
        <div className='font-size-28 margin-10'>
            <b>Question {number}/{total}</b>
        </div>
    );
}