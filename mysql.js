var mysql = require("mysql");

exports.insertMysql = function(id, title,thumbnail,filename,description,transcript){  
  return new Promise(function(resolve, reject){
 var connection = mysql.createConnection({
   host: 'localhost',
  user: 'root',
  password: 'root',
   database : 'db',
   socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock' 
 });
 
 connection.connect();

  var params  = {id: id, title: title,thumbnail:thumbnail, filename:filename, description:description, transcript:transcript};

  connection.query('INSERT INTO videoInfo SET ?', params , function(err, rows, fields)   {  
  if (err) throw err;  

 }); 

 connection.query("SELECT * FROM videoInfo WHERE id=?", [id], function(err, rows, fields)   {  
  if (err) throw err; 
      console.log('New inserted video'); 
      console.log('id:', rows[0].id);
      console.log('title:', rows[0].title);
      console.log('thumbnail:', rows[0].thumbnail);
      console.log('filename:', rows[0].filename);
      //console.log('description:', rows[0].description);
      console.log('transcript:', rows[0].transcript);
  //console.log('Post Titles: ', rows[i].title);
  
  // for (var i in rows) {
  //       console.log('Post Titles: ', rows[i].title);
  //   }
 
});  
  
connection.end();  

  });
};
