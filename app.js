const { Console } = require('console');
const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);
const path = require('path');

const nameTracker = [];
const players = [];
var petCount = 0;
var maxCount = 0;
var turnTracker = 0;
var totalPets = 0;

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(path.join(__dirname, 'public')));
console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/PetTheKitty', function( req, res ){ 
    res.sendFile( __dirname + '/public/3D.html' );
});

// socket.io / websockets stuff
io.on('connection', (socket) => {
    console.log(socket.id + " is connected!");
    
    // emptying username list
    if(nameTracker.length > 0){
        nameTracker.length = 0;
        console.log("Restarting");
    }
        
    socket.on('disconnect', () =>{
        console.log(socket.id + ' disconnected');
    });

    // Red START button to start the game with 2 players
    socket.on('red', (data) => {
        if(nameTracker.length == 2){
            // starting gameplay
            io.sockets.emit('usernameSwitch');
        }
        else{
            console.log("waiting for other player");
        }
    });        

    // Grey SUBMIT button to save their decided username
    socket.on('submit', (data) => {
        // submitting personal username
        io.sockets.emit('submitUsername', {p:data.id});
        nameTracker.push(data.id);
    });

    // Starting the game
    socket.on('play', (data) => {
        // saving usernames to players list
        for (let i = 0; i < nameTracker.length; i++) {
            players[i] = nameTracker[i];
            console.log("player " + i + ": " + players[i]);
        }
        
        // setting variables before game starts
        console.log("random num is "+ data.m)
        maxCount = data.m;
        turnTracker = data.turn;
        petCount = 0;
        totalPets = 0;

        // sending final usernames to html
        io.sockets.emit('submitPlayer', {p:players, t:turnTracker});
    }); 

    // Ped 3D Button pressed by player to pet the cat
    socket.on('pet', (data) => {
        // pet counting
        petCount++;
        totalPets++;

        // checking if max pets has been REACHED
        if(totalPets == maxCount){
            console.log("max reached!!!");
            console.log("last person to pet was "+ data.x);
            io.sockets.emit('maxPetsCheck', {p:data.x});
        }

        // resetting petCount
        if(petCount == 4){
            petCount = 0;
        }
    });   

    // Switching turns once a player passes or uses all their pets
    socket.on('switchTurns', (data) => {
        turnTracker = data.t;
        io.sockets.emit('updateTurns', {t:turnTracker});
    });  

    // Displaying the petting points
    socket.on('ptDisplay', (data) => {
        io.sockets.emit('pointDisplay', {n:data.num, lt:data.ids});
    });

});