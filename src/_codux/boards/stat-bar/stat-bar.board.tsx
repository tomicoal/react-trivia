import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => (
        <div>
            <StatBar currentQuestions={10} totalQuestions={20} correct={8} incorrect={2} />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 228,
        windowWidth: 388,
    },
});
