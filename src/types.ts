export type Questions = {
    questions: Question[];
};

export type Question = {
    question: string;
    choices: [];
    correctAnswerIdx: number;
};
