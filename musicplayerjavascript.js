// console.log("script is running");
var ctrlIcon=document.querySelector("#ctrlIcon");
var playpausebtn=document.querySelector("#playpausebtn");
var progress=document.querySelector("#progress");
var volumeup=document.querySelector(".volumeup");
var volumedown=document.querySelector(".volumedown");
const audio=document.querySelector("audio");
const song_img=document.querySelector(".song-img");
// const song_img1=document.querySelector(".song-img1")
// song_img.classList.add("anime")


volumedown.addEventListener("click",()=>{
  
    if(volumeup.volume>0){
        volumeup.volume-=.1;
    }
});


audio.onloadedmetadata=function(){
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}
var songnumber=0;
ctrlIcon.addEventListener("click",function(){

    if(playpausebtn.classList.contains("fa-pause")){
        
        audio.pause();
        song_img.src="https://th.bing.com/th/id/R.a2e047c4ed368cf1a247e882b2bbbf0c?rik=OGT30awN4Gq9vQ&riu=http%3a%2f%2fis2.mzstatic.com%2fimage%2fthumb%2fPurple111%2fv4%2fbb%2f12%2fc2%2fbb12c252-076b-613e-5dc2-ea661c77494f%2fsource%2f1200x630bb.jpg&ehk=QAZWcwa4LpNIV8J7RHQLioPbUbIxZzwdwXQ9hwPbiDw%3d&risl=&pid=ImgRaw&r=0";
        // songnumber=0;
        song_img.classList.add("anime")
        // playpausebtn.classList.remove("fa-pause");
        // playpausebtn.classList.add("fa-play");
        playpausebtn.classList.replace("fa-pause","fa-play");
        playpausebtn.style.fontSize="1.5rem"

    }
    else{
        
        audio.play();
        if(songnumber==0){
        song_img.src="https://1.bp.blogspot.com/-ssOF2fb-dt4/WAn8vOHKv5I/AAAAAAAA7Zg/YXz6nMcJFwE0YUDDbH-A60Rl0jrmBqREQCLcB/s1600/song%2Blyrics%2BAlan%2BWalker%2B-%2BFaded.jpg";
        }
        else if(songnumber==1){
            song_img.src="https://static.qobuz.com/images/covers/52/43/0060255754352_600.jpg";
        }
        else if(songnumber==2){
            song_img.src="https://img.discogs.com/TK9RDGfYR3Ut-YNLJYTsyJd1P18=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13805073-1561504824-6972.jpeg.jpg"; 
        }
        else if(songnumber==3){
            song_img.src="https://i.ytimg.com/vi/VfCfrz-CVpo/maxresdefault.jpg";
        }
        else if(songnumber==4){
            song_img.src="https://tse3.mm.bing.net/th/id/OIP.fPNzmgNLas2S1zSSqN8NWgHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";   
        }
        else if(songnumber==5){
            song_img.src=" https://www.billboard.com/wp-content/uploads/2022/09/Rema-Selena-Gomez-Calm-Down-2022-billboard-1548.jpg?w=1024";   
        }
        else if(songnumber==6){
            song_img.src="https://tse4.mm.bing.net/th/id/OIP.epXd0rFaj661_rCdzRIxUQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"; 
        }
        else if(songnumber==7){
            song_img.src="https://tse4.mm.bing.net/th/id/OIP.PiXcF299hOTMP3L35IcZcQAAAA?pid=ImgDet&rs=1";  
        }
        else if(songnumber==8){
            song_img.src="https://th.bing.com/th/id/R.d4ce3ca9abbfe4cf4ac42c6ccbfab232?rik=Z4DlSnHn6qvnyQ&riu=http%3a%2f%2fwww.music-bazaar.com%2falbum-images%2fvol30%2f1118%2f1118628%2f2984942-big%2fSing-Me-To-Sleep-Maxi-Single-cover.jpg&ehk=jQbkSGOoNpWiF4Jw9afet1Nk6KsRT2JQJtH44hGCs7g%3d&risl=&pid=ImgRaw&r=0";  
        }

        // songnumber=1;}
        playpausebtn.classList.add("fa-pause");
        playpausebtn.classList.remove("fa-play");
        song_img.classList.add("anime")
        playpausebtn.style.fontSize="1.5rem"
    }
});
//
volumeup.addEventListener("click",()=>{
  
    
    
   if(progress.value>0){
       
    audio.currentTime=audio.currentTime+10;  
   }
   progress.value=audio.currentTime;
   
});
volumedown.addEventListener("click",()=>{
  
    
    
   if(progress.value>0){
       
    audio.currentTime=audio.currentTime-10;  
   }
   progress.value=audio.currentTime;
   
});
//it decides when progress bar bordered circle will move forward 
//it moves with duration of 500 miliseconds
if(audio.play()){
setInterval(()=>{
  progress.value=audio.currentTime;
  progress.style.backgroundColor="#4fb46a";
            },        
            500);
}
//to play from the current position of progress bar
progress.onchange=function(){
    audio.play();
    audio.currentTime=progress.value;
    playpausebtn.classList.add("fa-pause");
    playpausebtn.classList.remove("fa-play");
       if(songnumber==0){
        song_img.src="https://1.bp.blogspot.com/-ssOF2fb-dt4/WAn8vOHKv5I/AAAAAAAA7Zg/YXz6nMcJFwE0YUDDbH-A60Rl0jrmBqREQCLcB/s1600/song%2Blyrics%2BAlan%2BWalker%2B-%2BFaded.jpg";
        }
        else if(songnumber==1){
            song_img.src="https://static.qobuz.com/images/covers/52/43/0060255754352_600.jpg";
        }
        else if(songnumber==2){
            song_img.src="https://img.discogs.com/TK9RDGfYR3Ut-YNLJYTsyJd1P18=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13805073-1561504824-6972.jpeg.jpg"; 
        }
        else if(songnumber==3){
            song_img.src="https://i.ytimg.com/vi/VfCfrz-CVpo/maxresdefault.jpg";
        }
        else if(songnumber==4){
            song_img.src="https://tse3.mm.bing.net/th/id/OIP.fPNzmgNLas2S1zSSqN8NWgHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";   
        }
        else if(songnumber==5){
            song_img.src=" https://www.billboard.com/wp-content/uploads/2022/09/Rema-Selena-Gomez-Calm-Down-2022-billboard-1548.jpg?w=1024";   
        }
        else if(songnumber==6){
            song_img.src="https://tse4.mm.bing.net/th/id/OIP.epXd0rFaj661_rCdzRIxUQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"; 
        }
        else if(songnumber==7){
            song_img.src="https://tse4.mm.bing.net/th/id/OIP.PiXcF299hOTMP3L35IcZcQAAAA?pid=ImgDet&rs=1";  
        }
        else if(songnumber==8){
            song_img.src="https://th.bing.com/th/id/R.d4ce3ca9abbfe4cf4ac42c6ccbfab232?rik=Z4DlSnHn6qvnyQ&riu=http%3a%2f%2fwww.music-bazaar.com%2falbum-images%2fvol30%2f1118%2f1118628%2f2984942-big%2fSing-Me-To-Sleep-Maxi-Single-cover.jpg&ehk=jQbkSGOoNpWiF4Jw9afet1Nk6KsRT2JQJtH44hGCs7g%3d&risl=&pid=ImgRaw&r=0";  
        }
}

// const music=document.querySelector("audio")
// const playpausebtn=document.getElementById("#playpausebtn")
// playpausebtn.addEventListener('click',()=>)

var nextbtn=document.querySelector("#nextbtn");
var prevbtn=document.querySelector("#prevbtn");
var songname=document.querySelector("#songname");
var artistname=document.querySelector("#artistname");
var source=document.querySelector("source");
nextbtn.addEventListener("click",function(){
    
    // if(audio.pause()){
    // // audio.pause();
    
   
    // }
    if(songnumber==0){
    songname.textContent="Despasito";
    artistname.textContent="Luis Fonsi";
    audio.src="Luis Fonsi - Despacito_64-(PagalWorld.Ink).mp3"
    songnumber=1;
    }
    else if(songnumber==1){
        songname.textContent="On My Way";
        artistname.textContent="By Sabrina Carpenter & Farruko";
        audio.src="Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way.mp3"
        songnumber=2;
    }
    else if(songnumber==2){
        songname.textContent="Intentions";
        artistname.textContent="By Justein Bieber";
        audio.src="Justin_Bieber_Intentions_(NaijaMusic.NG).mp3";
        songnumber=3;
    }
    else if(songnumber==3){
        songname.textContent="Your Love";
        artistname.textContent="By Kate Linn";
        audio.src="Your-Love(PaglaSongs).mp3";
        songnumber=4; 
    }
    else if(songnumber==4){
        songname.textContent="Calm Down";
        artistname.textContent="By Rema & Salena Gomez";
        audio.src="Baby-Calm-Down(PaglaSongs).mp3";
        songnumber=5; 
    }
    //add new song here

    else if(songnumber==5){
        songname.textContent="Paradise";
        artistname.textContent="By Tamiga 2 Bad";
        audio.src="M500002ngNi13NeoGf.mp3";
        songnumber=6;  
    }
    else if(songnumber==6){
        songname.textContent="Ignite";
        artistname.textContent="By Alan Walker";
        audio.src="K-391_Alan_Walker_-_Ignite_feat_Julie_Bergan_Seungri.mp3";
        songnumber=7;
    }
    else if(songnumber=7){
        songname.textContent="Sing Me to Sleep";
        artistname.textContent="By Alan Walker";
        audio.src="Alan-Walker-Sing-Me-To-Sleep-Marshmello-Remix.mp3";
        songnumber=8; 
    }
    
   


        if(playpausebtn.classList.contains("fa-pause")){
        
            audio.pause();
            // songnumber=0;
            
            // playpausebtn.classList.remove("fa-pause");
            // playpausebtn.classList.add("fa-play");
            playpausebtn.classList.replace("fa-pause","fa-play");
            song_img.classList.remove("anime")
            playpausebtn.style.fontSize="1.5rem"
            audio.pause();
    
        }
        
    
});
  
prevbtn.addEventListener("click",function(){
    
    if(songnumber==8){
        songname.textContent="Ignite";
        artistname.textContent="By Alan Walker";
        audio.src="Ignite---Alan-Walker(pagolworld.nl).mp3";
        songnumber=7; 
    }
    // else if(songnumber==7){
    //     songname.textContent="Sing Me to Sleep";
    //     artistname.textContent="By Alan Walker";
    //     audio.src="Alan-Walker-Sing-Me-To-Sleep-Marshmello-Remix.mp3";
    //     songnumber=6;
    // }
    else if(songnumber==7){
        songname.textContent="Paradise";
        artistname.textContent="By Tamiga 2 Bad";
        audio.src="M500002ngNi13NeoGf.mp3";
        songnumber=6;
    }
    else if(songnumber==6){
        songname.textContent="Calm Down";
        artistname.textContent="By Rema & Salena Gomez";
        audio.src="Baby-Calm-Down(PaglaSongs).mp3";
        songnumber=5; 
    }
    else if(songnumber==5){
        songname.textContent="Your Love";
        artistname.textContent="By Kate Linn";
        audio.src="Your-Love(PaglaSongs).mp3"
        // audio.src="Baby-Calm-Down(PaglaSongs).mp3"
        songnumber=4; 
    }
    else if(songnumber==4){
        songname.textContent="Intentions";
        artistname.textContent="By Justein Bieber";
        audio.src="Justin_Bieber_Intentions_(NaijaMusic.NG).mp3"
        songnumber=3;
    }
    else if(songnumber==3){
        songname.textContent="On My Way";
        artistname.textContent="By Sabrina Carpenter & Farruko";
        audio.src="Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way.mp3"
        songnumber=2;
    }
    else if(songnumber==2){
        songname.textContent="Despasito";
        artistname.textContent="Luis Fonsi";
        audio.src="Luis Fonsi - Despacito_64-(PagalWorld.Ink).mp3"
        songnumber=1;
    }
    else if(songnumber==1){
        songname.textContent="FADED";
        artistname.textContent="By Alan Walker";
        audio.src="Faded(PaglaSongs).mp3";
        songnumber=0;
        }

        if(playpausebtn.classList.contains("fa-pause")){
        
            audio.pause();
            // songnumber=0;
            
            // playpausebtn.classList.remove("fa-pause");
            // playpausebtn.classList.add("fa-play");
            playpausebtn.classList.replace("fa-pause","fa-play");
            song_img.classList.remove("anime")
            playpausebtn.style.fontSize="1.5rem"
            audio.pause();
    
        }
    
});


   
