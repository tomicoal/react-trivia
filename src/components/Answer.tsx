import { Question } from '../types';
import styles from './Answer.module.scss';

type Props = {
    onPress: () => void;
    text: string;
    color?: string;
    disabled?: boolean;
};

function Answer(props: Props) {
    const style = props.color ? { color: props.color } : {};

    return (
        <button onClick={props.onPress} disabled={props.disabled} className={styles.answer}>
            <span style={style}> {props.text}</span>
        </button>
    );
}

export default Answer;
