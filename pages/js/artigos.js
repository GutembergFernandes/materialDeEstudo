

// Lê a coleção do DB
db.collection('artigos').get()
// Se der certo
.then(function (getData){

    getData.forEach(function(doc) {

        _(doc.data().titulo);
    })

})

// Se der errado
.catch();