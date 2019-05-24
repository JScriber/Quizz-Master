import { QuestionManager } from "../../services/question-manager";

let scope = {};

describe('question-manager.js', () => {
    beforeAll(()=>{
        scope.questionManager = new QuestionManager();
    });
    test('getInstance', () => {
        expect(QuestionManager.getInstance()).toEqual(QuestionManager.getInstance());
    });

    test('getAll', () => {
        let response = scope.questionManager.getAll();
        expect(response).toBeDefined();
    });
    test('getOne', () => {
        let response = scope.questionManager.getOne(1);
        expect(response).toBeDefined();
    });
});