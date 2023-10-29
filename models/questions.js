class Questions {

    constructor() {
        this.questions = [];     
    }

    addQuestion(question = new Question()){
        this.questions.push(question);
        return question;
    }


    getQuestions() { this.questions;}

    deleteQuestion(id = '') {
        this.questions = this.questions.filter(question => question.id !== id);
        return this.questions;
    }

    voteQuestion(id = '', vote = 0) {
        this.questions = this.questions.map(question => {
            if (question.id === id) {
                question.votes += vote;
            }
            return question;
        });
        return this.questions;
    }
}

module.exports = Questions;