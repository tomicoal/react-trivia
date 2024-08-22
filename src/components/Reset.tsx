import answerStyles from './Answer.module.scss';
import appStyles from '../App.module.scss';
import classNames from 'classnames';
import styles from './Reset.module.scss';
type Props = {
    totalQuestions: number;
    correctAnswers: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div>
            <h3 className={styles['reset-text']}>
                You scored: {props.correctAnswers} out of {props.totalQuestions}.
            </h3>
            <button
                onClick={props.onPress}
                className={classNames(appStyles['next-button'], answerStyles.answer)}
            >
                Press to try again
            </button>
        </div>
    );
}
export default Reset;
