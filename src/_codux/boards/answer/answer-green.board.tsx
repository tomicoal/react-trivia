import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'Answer green',
    Board: () => <Answer onPress={() => undefined} text="Circle" color="green" disabled={false} />,
    isSnippet: true,
});
