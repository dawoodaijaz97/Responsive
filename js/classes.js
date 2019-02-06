function Track (name, path) { //Track Object,The Object represent each Audio or Track
    this.name = name; // Name of the track
    this.name2 = name.replace(/[^A-Z0-9]/ig, ""); //name of the track after after removing spaces and special characters from the track name
    this.path = path; //URL or permalink to the audio file Ex (audio/alive.mp3 or https://web006.mp3-youtube.download/tmp/20190107105311_20496a94-d44b-4e28-95bb-06a2c6063b3a/krewella-alive-video?md5=rEvap_kahikTI3DddnKuoQ&expires=1546858417)
};


 function Playlist (name, imgUrl, text, tracks) { // Playlist Object,The object represents Playlist
    this.name = name; //Name of The playlist
    this.name2 = name.replace(/\s/g, ""); //Name of the playlist after removing spaces and special characters ex( "Alejandro(2) remix = Alejandro2remix")
    this.imgUrl = imgUrl; //Url or the image attached to each playlist Ex(images/xyz.jpg or https://i1.sndcdn.com/avatars-000010991573-yxedrc-t200x200.jpg )
    this.text = text; //Text attached to each playlist ex(This is playlist 1)
    this.tracks = tracks;//List of track in a playlist The list is of type Track
};

//represents a Project object,Each object has a sing or multiple playlist
 function  Project (name, playlistList) {
    this.name = name; //name of the project1
    this.playlistList = playlistList; //list of playlist in a project1 (A project1 can have 1 or multiple playlist)
};
