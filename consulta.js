var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5576fb1df741c60a6e739ff6');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
    function (erro, db) {
        if (erro) throw err;
        db.collection('contatos').findOne({_id: _idProcurado},
            function (erro, contato) {
                if (erro) throw err;
                console.log(contato);
            }
        );
    }
);
