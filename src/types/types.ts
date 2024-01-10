export type ApiResponse = {
    response_code: number;
    results: Question[];
    trivia_categories?: Category[];
};

export type Category = {
    id: number | string;
    name: string;
};

export type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};
