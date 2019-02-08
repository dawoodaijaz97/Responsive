
let autoplay = false;
//

let createWave = function () {
    let waveSurfer = WaveSurfer.create({
        container: ".playerCont .wave", //the container in which the waveform is drawn
        hideScrollbar: true,//hide the scroll bar for the wave
        autoCenter: true,
        fillParent: true,
        height: 80,//height for the wave
        progressColor: "#F5F5DC",//color of progress
        cursorColor: "#007066",//cursor color
        waveColor: "#b3b3b3",
       backend: 'MediaElement',
        responsive: true,

    });
    waveSurfer.on('ready', function () {
        console.log("ready");
            if (autoplay === false) {
        autoplay = true;
        } else {

            waveSurfer.play();
        }
    });

    waveSurfer.on("finish", function () {
        console.log("finish");
        waveSurfer.seekTo(0);
    });
    waveSurfer.on("seek", function (seek) {
        console.log("seek" + seek);
    });
    waveSurfer.on("audioprocess", function () {

        let progressPart="";
        let totalPart = "";
        let tDuration = wave.getDuration();
        let tMin = Math.floor(tDuration / 60);
        let tSec = Math.floor(tDuration % 60);
        let progress = wave.getCurrentTime();
        let durationP = $(".playerCont").find(".duration");
        let min;
        if (progress / 60 < 0) {
            min = 0;
        } else {
            min = Math.floor(progress / 60);
        }
        let sec = Math.floor(progress % 60);
        if (sec < 10) {
            progressPart = min+":0"+sec+"|";

        }
        else{
            progressPart = min+":"+sec+"|";

        }
        if(tSec<10){
            totalPart = tMin+":0"+tSec;

        }else {
            totalPart = tMin+":"+tSec;
        }

        durationP.text(progressPart+totalPart);

    });
    waveSurfer.on("stop", function () {
        console.log("stop");
    });


    return waveSurfer;
};

var setPlayer = function (track) {

    let playerCont = $(".playerCont");
    playerCont.find(".title").text(track.name);


};


var wave;



//start adding the content from here

// let track1Path = "https://wavesurfer-js.org/example/media/demo.wav";


//STEP A
// let playlistListMN = []; //list of playlist for Project MN
// //STEP B
// let snd5001 ="../audio/5001_Waltz_begin.mp3";
// let snd5002 ="../audio/5002_Waltz_Drone1.mp3"	;
// let snd5003 ="../audio/5003_Waltz_JoKun.mp3";
// let snd5004 ="../audio/5004_Waltz_walk-in.mp3";
// let snd5005 ="../audio/5005_Waltz_walk-in2.mp3";
// let snd5006 ="../audio/5006_Waltz_walk-in3.mp3";
// let snd5007 ="../audio/5007_Waltz_Yuki.mp3";
// let snd5008 ="../audio/5008_Waltz_Yuki2.mp3";
// let snd5009 ="../audio/5009_Waltz_YukiLast.mp3";
// let snd5010 ="../audio/5010_Waltz.mp3";
// let snd5011 ="../audio/5011_Waltz_Drone2.mp3";
// //STEP C
// let tracksMN50 = []; //create tracks array for playlist
// //STEP D
// tracksMN50.push(new Track("5001", snd5001)); //add a track to tracks list new, Track(name of track,url to track)
// tracksMN50.push(new Track("5002", snd5002)); //add a track to tracks list
// tracksMN50.push(new Track("5003", snd5003)); //add a track to tracks list
// tracksMN50.push(new Track("5004", snd5004)); //add a track to tracks list
// tracksMN50.push(new Track("5005", snd5005)); //add a track to tracks list
// tracksMN50.push(new Track("5006", snd5006)); //add a track to tracks list
// tracksMN50.push(new Track("5007", snd5007)); //add a track to tracks list
// tracksMN50.push(new Track("5008", snd5008)); //add a track to tracks list
// tracksMN50.push(new Track("5009", snd5009)); //add a track to tracks list
// tracksMN50.push(new Track("5010", snd5010)); //add a track to tracks list
// tracksMN50.push(new Track("5011", snd5011)); //add a track to tracks list
// //STEP E
// playlistListMN.push(new Playlist("Waltz (2007), Choreography by Megumi Nakamura", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "The music for 'Waltz', premiered 2007.10.05, Niigata Japan ", tracksMN50)); //playlist1 1 added
// //STEP B
// let snd7401 ="../audio/7401_dirkhaubrich_TheSonnetsTR1.mp3";
// let snd7402 ="../audio/7402_dirkhaubrich_TheSonnetsTR2.mp3";
// let snd7403 ="../audio/7403_dirkhaubrich_TheSonnetsTR3.mp3";
// let snd7404 ="../audio/7404_dirkhaubrich_TheSonnetsTR3.mp3";
// let snd7405 ="../audio/7405_dirkhaubrich_TheSonnetsTR3.mp3";
// let snd7406 ="../audio/7406_dirkhaubrich_TheSonnetsTR4.mp3";
// let snd7407 ="../audio/7407_dirkhaubrich_TheSonnetsTR5.mp3";
// let snd7408 ="../audio/7408_dirkhaubrich_TheSonnetsTR6.mp3";
// let snd7409 ="../audio/7409_dirkhaubrich_TheSonnetsTR6.mp3";
// let snd7410 ="../audio/7410_dirkhaubrich_TheSonnetsTR6.mp3";
// let snd7411 ="../audio/7411_dirkhaubrich_TheSonnetsTR6.mp3";
// let snd7412 ="../audio/7412_dirkhaubrich_TheSonnetsTR7.mp3";
// let snd7413 ="../audio/7413_dirkhaubrich_TheSonnetsTR7.mp3";
// let snd7414 ="../audio/7414_dirkhaubrich_TheSonnetsTR8.mp3";
// let snd7415 ="../audio/7415_dirkhaubrich_TheSonnetsTR9.mp3";
// //STEP C
// let tracksMN74 = [];
// //STEP D
// tracksMN74.push(new Track("TheSonnets #7401", snd7401));
// tracksMN74.push(new Track("TheSonnets #7402", snd7402));
// tracksMN74.push(new Track("TheSonnets #7403", snd7403));
// tracksMN74.push(new Track("TheSonnets #7404", snd7404));
// tracksMN74.push(new Track("TheSonnets #7405", snd7405));
// tracksMN74.push(new Track("TheSonnets #7406", snd7406));
// tracksMN74.push(new Track("TheSonnets #7407", snd7407));
// tracksMN74.push(new Track("TheSonnets #7408", snd7408));
// tracksMN74.push(new Track("TheSonnets #7409", snd7409));
// tracksMN74.push(new Track("TheSonnets #7410", snd7410));
// tracksMN74.push(new Track("TheSonnets #7411", snd7411));
// tracksMN74.push(new Track("TheSonnets #7412", snd7412));
// tracksMN74.push(new Track("TheSonnets #7413", snd7413));
// tracksMN74.push(new Track("TheSonnets #7414", snd7414));
// tracksMN74.push(new Track("TheSonnets #7415", snd7415));
// //STEP E
// playlistListMN.push(new Playlist("The Sonnets (2011), Choreography by Megumi Nakamura", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "premiered 2011.09.30, New National Theater Tokyo, Japan", tracksMN74));
//
//
// //STEP B
// let snd7801 ="../audio/7801_UnePetiteMaison.m4a";
// let snd7802 ="../audio/7802_UnePetiteMaison.m4a";
// let snd7803 ="../audio/7803_UnePetiteMaison.m4a";
// let snd7804 ="../audio/7804_UnePetiteMaison.m4a";
// let snd7805 ="../audio/7805_UnePetiteMaison.m4a";
// let snd7806 ="../audio/7806_UnePetiteMaison.m4a";
// let snd7807 ="../audio/7807_UnePetiteMaison.m4a";
// let snd7808 ="../audio/7808_UnePetiteMaison.m4a";
// let snd7809 ="../audio/7809_UnePetiteMaison.m4a";
// let snd7810 ="../audio/7810_UnePetiteMaison.m4a";
// let snd7811 ="../audio/7811_UnePetiteMaison.m4a";
// let snd7812 ="../audio/7812_UnePetiteMaison.m4a";
// //STEP C
// let tracksMN78 = [];
// //STEP D
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7801", snd7801));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7802", snd7802));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7803", snd7803));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7804", snd7804));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7805", snd7805));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7806", snd7806));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7807", snd7807));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7808", snd7808));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7809", snd7809));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7810", snd7810));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7811", snd7811));
// tracksMN78.push(new Track(" Une Petite Maison, Tokyo 2013, #7812", snd7812));
// //STEP E
// playlistListMN.push(new Playlist("Une Petite Maison (2013), Choreography by Megumi Nakamura", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "premiered 2013, New National Theater Tokyo, Japan", tracksMN78));
//
//
// //STEP B
// let snd8301 ="../audio/8301_SilentSong.m4a";
// let snd8302 ="../audio/8302_SilentSong.m4a";
// //STEP C
// let tracksMN83 = [];
// //STEP D
// tracksMN83.push(new Track(" SilentSong 2015, #8301", snd8301));
// tracksMN83.push(new Track(" SilentSong 2015, #8302", snd8302));
// //STEP E
// playlistListMN.push(new Playlist("Silent Song (2015), Choreography by Megumi Nakamura", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "premiered 2015,  Tokyo, Japan", tracksMN83));
//
//
// //STEP B
// let snd6701 ="../audio/6701_TokiNoNiwa.mp3";
// //STEP C
// let tracksMN67 = [];
// //STEP D
// tracksMN67.push(new Track("Toki No Niwa #6701", snd6701));
// //STEP E
// playlistListMN.push(new Playlist("Toki No Niwa/ A Chronicle of a time yard (2010), Choreography by Megumi Nakamura", "https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg", "premiered 2010.01.07, World Premièred 7th Jan 2010, Kanagawa Kenmin Hall, Yokohama, Japan ", tracksMN67));
//
//
//
// //STEP F
// let projectMN = new Project("Project MN", playlistListMN); //create project1 EX(name,list of playlist)
// //STEP G
// projects.push(projectMN); //push the project1 in projects array
//
//
// //Below steps show creating a new Project
//
// let playlistList2 = []; //list of playlist in project1 2


$("document").ready(function () {

    $("#slider").slider({
        range: "min",
        min: 0,
        max: 1,
        value: 0.5,
        step:0.01,
        slide: function( event, ui ) {
            console.log(ui.value);
            wave.setVolume(ui.value);
            if (!$("#mute").hasClass("soundOff")) {
                $("#mute").addClass("sound").removeClass("soundOff").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
                wave.setMute(true);
            }
        },

    });


    let path = $(location).attr("pathname");
    let x = path.lastIndexOf("/");
    let y = path.indexOf(".");
    console.log("x= " + x + "y" + y);
    let projectName = path.substring(x + 1, y);
    projectName = decodeURI(projectName);
    console.log(path);
    console.log("name=" + projectName);


    console.log("project" + project);


    for (let i = 0; i < project.playlistList.length; i++) {
        let playlist = project.playlistList[i];
        createPlaylistCard(playlist, i); //create playlist card for the playlist

    }
    if (!wave) {
        wave = createWave();
    }


    $(".container:eq(0)").css({
        "margin-top": "270px"
    });

    $("#forward").on("click", function () {

        let nextBtn = $(".playing").next().find(".btn");
        console.log(nextBtn.attr("class"));
        if (nextBtn.attr("class")) {
            nextBtn.trigger("click");
        }
        else {
            console.log("going to else");
            let nextPlaylist = $(".playing").parents(".container").next(".container").find(".playlist").attr("id");
            console.log(nextPlaylist);
            for (let x = 0; x < project.playlistList.length; x++) {
                if (project.playlistList[x].name2 === nextPlaylist) {
                    let nextSong = project.playlistList[x].tracks[0].name2;
                    console.log("next song =" + nextSong);
                    $("#" + nextSong).trigger("click");
                }
            }
        }
    });

    $("#backward").on("click", function () {
        let prevBtn = $(".playing").prev().find(".btn");
        console.log("prev song" + prevBtn.attr("id"));
        if (prevBtn.attr("id")) {
            prevBtn.trigger("click");
        } else {
            console.log("playing else");

            let prevPlaylist = $(".playing").parents(".container").prev(".container").find(".playlist").attr("id");
            console.log("prev playlist= " + prevPlaylist);
            for (let x = 0; x < project.playlistList.length; x++) {
                if (project.playlistList[x].name2 === prevPlaylist) {
                    let nextSong = project.playlistList[x].tracks[project.playlistList[x].tracks.length - 1].name2;
                    console.log("next song =" + nextSong);
                    $("#" + nextSong).trigger("click");
                }
            }

        }
    });
    $("#play").on("click", function (e, data) {
        if ($(this).hasClass("play")) {
            $(this).find("i").removeClass("fa-play").addClass("fa-pause");
            $(this).removeClass("play").addClass("stop");
            let playingSong = $(".playing").find(".btn").attr("id");
            console.log(playingSong);
            wave.play();
        } else {
            $(this).find("i").removeClass("fa-pause").addClass("fa-play");
            $(this).removeClass("stop").addClass("play");
            wave.pause();
        }
    });

    $("#mute").on("click", function (event, data) {
        console.log(data);
        console.log(event);
        let btn = $(this);
        if (data) {
            btn.addClass("soundOff").removeClass("sound").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
            wave.setMute(false);
        }
        else {
            if (btn.hasClass("sound")) {
                btn.addClass("soundOff").removeClass("sound").find("i").addClass("fa-volume-up").removeClass("fa-volume-mute");
                wave.setMute(false);
            } else {
                btn.addClass("sound").removeClass("soundOff").find("i").addClass("fa-volume-mute").removeClass("fa-volume-up");
                wave.setMute(true);
            }
        }
    });

    $(".songCard:first").find(".btn").trigger("click");
    $("#play").trigger("click");


});

//creates the playlist card
var createPlaylistCard = function (playlist, i) {

    let card = $("<div class=\"playlistCard\">\n" +
        "    <h3 class=\"playlistName\">Playlist1</h3>\n" +
        "    <div class=\"meta\">\n" +
        "        <img src=\"https://i1.sndcdn.com/artworks-000021056062-hj3gdo-t500x500.jpg\" class=\"playlistImg\">\n" +
        "        <p class=\"playlistDesc\">Lorem ipsum dolor\n" +
        "            sit amet, consectetur adipisicing elit.\n" +
        "            Commodi cumque necessitatibus neque nostrum\n" +
        "            quod vitae.\n" +
        "        </p>\n" +
        "    </div>\n" +
        "    <ul class=\"songList\">\n" +
        "    </ul>\n" +
        "</div>");
    card.find(".playlistName").text(playlist.name); //set title to playlist name
    card.find(".playlistImg").attr("src", playlist.imgUrl); //set the playlist image url
    if(playlist.imgUrl === "#"){
        card.find(".playlistImg").css({
            display:"none"
        });
    }
    card.find(".playlistDesc").text("").text(playlist.text);
    let songList = card.find(".songList");
    for (let i = 0; i < playlist.tracks.length; i++) { //create song card for each track in the playlist
        songList.append(createSongCard(playlist.name, playlist.tracks[i], i)); //append the each song card to corresponding playlist song list
    }
    let div = $(".playlist:eq(" + i + ")");
    div.attr("id", playlist.name2);
    div.append(card);
};


//creates songsCard for each track

var createSongCard = function (playlistName, track, i) {
    console.log("Creating song Card");
    let card = $("<li class=\"songCard\">\n" +
        "               <button class=\"btn play\"><i class=\"fas fa-play\"></i></button>\n" +
        "               <p class=\"title\">This is a song</p>\n" +
        "</li>");

    card.find(".title").text(track.name); //set the title of the card to track name

    let button = card.find("button");
    button.attr("id", track.name2);
    button.on("click", function (event) { //add event listener to play button
        event.stopImmediatePropagation();
        if ($(this).hasClass("play")) { //check if it is play button

            let buttons = $(".songCard button");
            buttons.removeClass("stop").addClass("play");
            buttons.each(function () {
                $(this).find("i").removeClass("fa-stop").addClass("fa-play");
            });
            $(this).removeClass("play"); //remove play class from the button
            $(this).addClass("stop"); //add stop class to the button
            $(".songCard").each(function () {
                $(this).removeClass("playing"); //from all songs card remove playing class
            });
            $(this).parent(".songCard").toggleClass("playing"); //add the playing class to song card for which the track was played
            $(this).find("i").removeClass("fa-play").addClass("fa-stop"); //change the button icon from play to stop
            $(".playerCont").find("#play").addClass("pause").removeClass("play").find("i").removeClass("fa-play").addClass("fa-pause");
            $("#mute").trigger("click", ["play"]);
            wave.load(track.path);
            setPlayer(track);

        }
        else if ($(this).hasClass("stop")) { //it it has stop class
            $(this).removeClass("stop").addClass("play"); //remove stop class and add play class to the button
            $(this).find("i").removeClass("fa-stop").addClass("fa-play");//change to icon from stop to play
            console.log("playling sds ");
            wave.stop();

        }

    });

    card.on("click",function () {
       $(this).find(".btn").trigger("click");
    });

    return card;
};




