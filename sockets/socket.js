const { io } = require('../index');
const Question = require('../models/question');

const Questions = require('../models/questions');

const questions = new Questions();

questions.addQuestion(new Question('1', '¿Cuál es tu color favorito?', 'admin', 0, new Date()));
questions.addQuestion(new Question('1', '¿Cuál es tu color favorito?', 'admin', 0, new Date()));



// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit( 'add-questions',  questions );

    console.log(questions);

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('message', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit( 'mensaje', payload );


    });

    client.on('add-questions', ( payload ) => {    
        questions.addQuestion(payload);
        io.emit( 'add-questions',  questions );
        console.log('raaaaaaaaaa', questions.getQuestions());

    });

    io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

});

