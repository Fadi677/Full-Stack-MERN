const AuthorController=require('../controllers/author.controller');
module.exports=function(app){
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.put('/api/authors/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteAuthor);
}