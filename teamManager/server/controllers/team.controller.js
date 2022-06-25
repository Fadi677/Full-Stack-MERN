const {Team}=require('../models/team.model')

module.exports.getAllPlayers=(request, response)=>{
    Team.find({})
    .then(players=>response.json(players))
    .catch(err=>response.json(err))
}

module.exports.deletePlayer=(request, response)=>{
    Team.deleteOne({_id: request.params.id})
    .then(deleteConfirmation=>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}

module.exports.createPlayer=(request, response)=>{
    const  { playerName, preferredPosition }=request.body;
    Team.create({
        playerName,
        preferredPosition
    })
    .then(player=>response.json(player))
    .catch(err=>response.status(400).json(err));
}

module.exports.getPlayer=(request, response)=>{
    Team.findOne({_id: request.params.id})
    .then(player=>response.json(player))
    .catch(err=>response.json(err))
}

module.exports.updatePlayer=(request, response)=>{
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatePlayer=>response.json(updatePlayer))
    .catch(err=>response.status(400).json(err))
}