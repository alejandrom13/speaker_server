const {v4: uuidv4} = require('uuid');

class Question {
  constructor(id, question, user, votes, date) {
    this.id = uuidv4();
    this.question = question;
    this.user = user;
    this.votes = votes;
    this.date = date;
  }


}


module.exports = Question;