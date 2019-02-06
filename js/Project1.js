


let track1Path = "https://wavesurfer-js.org/example/media/demo.wav";
let track2Path = "../audio/Alive.mp3";
let track3Path = "../audio/Beats.mp3";
let track4Path = "../audio/Buzz.mp3";
let track5Path = "../audio/Electro.mp3";
let track6Path = "../audio/Fader.mp3";



let playlistList = []; //list of playlist for project1

let tracks1 = []; //create tracks array for playlist
tracks1.push(new Track("Trouble On My Mind", track1Path)); //add a track to tracks list new, Track(name of track,url to track)
tracks1.push(new Track("Alive", track2Path)); //add a track to tracks list
tracks1.push(new Track("Beats", track3Path)); //add a track to tracks list



playlistList.push(new Playlist("Playlist 1", "#", "This is Playlist 1 Add desk", tracks1)); //playlist1 1 added


let track2 = [];
track2.push(new Track("Buzz", track4Path));
track2.push(new Track("Electro", track5Path));
track2.push(new Track("Fader", track6Path));

playlistList.push(new Playlist("Playlist 2", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "This is Playlist 1", track2)); //playlist 2 added

let project1 = new Project("Project 1", playlistList); //create project1 EX(name,list of playlist)





window.project = project1; //add in very project js file
