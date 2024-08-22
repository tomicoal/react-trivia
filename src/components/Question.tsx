import { Question } from '../types';
import Answers from './Answers';
import styles from './Question.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void; // When submiting answer main app goes to next and knows correct or not
};

function QuestionComp(props: Props) {
    return (
        <div>
            <h3 className={styles.question}> {props.question.question} </h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
