
var watson = require('./transcribe');  
var youtube = require('./youtubeAudio');  
var mysql = require('./mysql');  
var path = require('path');
var fs = require('fs');  


var flags = process.argv.slice(2);
var id = "";
var title = "";
var thumbnail = "";
var filename = "";
var description="";
var transcript="";
var data="";

if(flags[0] === 'transcribe'){  

    youtube.getYouTubeAudio(flags[1])

     	.then(watson.watsonSpeechToText.bind(this, path.join(__dirname, 'file.flac')))
     	.then(function(){
            console.log('Done transcribing video id: ' + flags[1]);
        });
     	// .then(function(){
            
      //   })
       // .then(function(){
        	//watson.watsonSpeechToText.bind(this, path.join(__dirname, 'file.flac'))
      //   	fs.readFile(path.join(__dirname, 'transcript.txt'), function(err, data,id) {
		    //     if(err) throw err;
		        
		        
		    //     id = youtube.id;
	    	// 	title = youtube.title;
	    	// 	thumbnail = youtube.thumbnail;
	    	// 	filename = youtube.filename;
	    	// 	description= youtube.description;
	    	// 	transcript=data.toString();
	    		
	    	// 	console.log('idi:', id);
		    //     console.log('titlei:', title);
		    //     console.log('thumbnaili:', thumbnail);
		    //     console.log('filenamei:', filename);
		    //     console.log('descriptioni:', description);
		    //     console.log('transcripti:', transcript);
	    	// 	mysql.insertMysql(id, title,thumbnail,filename,description,transcript);
	    	// 	console.log('\n');
	    	// 	console.log('Done transcribing video and inserting it in the DB id: ' + flags[1]);
    		// });

       
     		
      //  });

    
      
}


   
