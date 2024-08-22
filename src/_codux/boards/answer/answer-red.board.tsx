import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'Answer red',
    Board: () => <Answer onPress={() => undefined} text="Circle" color="red" disabled={true} />,
    isSnippet: true,
});
