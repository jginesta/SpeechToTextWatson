
var spawn = require('child_process').spawn;  
var Promise = require('bluebird');  
var ffmpeg = require('fluent-ffmpeg');  
var youtubedl = require('youtube-dl');
var path = require('path');

exports.getYouTubeAudio = function(videoId){  
    return new Promise(function(resolve, reject){
    
     var url =  "http://www.youtube.com/watch?v=" + videoId;
    youtube_dl = spawn('youtube-dl', ['--extract-audio', '--audio-format', 'mp3', '-o', 'file.%(ext)s', "http://www.youtube.com/watch?v=" + videoId]);

    youtubedl.getInfo(url,  function(err, info) {
    if (err) throw err;
      var id=info.id;
      var title= info.title;
      var thumbnail= info.thumbnail;
      var filename=info._filename;
      var description= info.description;

     exports.id = id;
     exports.title= title;
     exports.thumbnail= thumbnail;
     exports.filename=filename;
     exports.description=description;
    });

    youtube_dl.stdout.on('data', function(data){
      console.log(data.toString());
    });

    youtube_dl.stderr.on('data', function(data){
      process.stderr.write(data);
    });

    youtube_dl.on('exit', function(){
      var mp3File = path.join(__dirname, 'file.mp3');
      var flacFile = path.join(__dirname, 'file.flac')
      ffmpeg(mp3File)
        .output(flacFile)
        .on('end', function(){
          resolve();
        })
        .on('error', function(err){
          reject(err);
        })
        .run();
    });
  });
};