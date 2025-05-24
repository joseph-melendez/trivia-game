import { Link } from 'react-router';
import { GetFullPath } from '../utils/GetFullPath';

export function ProgrammingGoals() {
  return (
    <>
        <p>
            This is nothing more than a fun exercise by Joe Melendez by tapping into an existing API for Trivia questions.  The purpose was simply to keep up on some programming skills and serves no real purposse beyond that.
        </p>
        <div>
            <h1>Programming Goals</h1>
        </div>
        <div style={{textAlign: 'left'}}>
        <p>
            Below are a list of items that I wish to complete on this trivia game.  They are set out into different steps so that I can focus on them in sections to make the development smoother.<br />
        </p>
        <p>
            <b>Step 1</b>
        </p>
        <ol>
            <li>Get the number of questions they would like to answer</li>
            <li>Display questions</li>
            <li>Keep counter of correct and incorrect.  For example: 3/10</li>
            <li>Keep counter of question number.  For example: Question 5/10</li>
            <li>Display question and values correctly based upon the answer types</li>
            <li>Use React Router to control different aspects of what is displayed: start, questions, results</li>
        </ol>
        <p>
            <b>Step 2</b>
        </p>
        <ol>
            <li>Keep track of the session token so same questions don't come up again</li>
            <li>Allow user to select categories</li>
            <li>Allow user to select difficulty</li>
        </ol>
        <p>
            <b>Step 3</b>
        </p>
        <ol>
            <li>Select number of players so that you may play against others</li>
            <li>Get player names</li>
            <li>Time limit per question?</li>
        </ol>
        </div>
        <p>
            <Link to={GetFullPath('/')}>Return to Game Start</Link>
        </p>
    </>
  )
}
