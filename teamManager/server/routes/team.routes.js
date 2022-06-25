const TeamController=require('../controllers/team.controller');
module.exports=function(app){
    app.get('/api/players', TeamController.getAllPlayers);
    app.delete('/api/players/:id/delete', TeamController.deletePlayer);
    app.get('/api/players/:id',TeamController.getPlayer);
    app.post('/api/players/addplayer', TeamController.createPlayer);
    app.put('/api/players/:id/edit', TeamController.updatePlayer);
}