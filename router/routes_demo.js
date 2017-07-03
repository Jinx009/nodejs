/**
 * Created by jinx on 7/3/17.
 */
module.exports=function(app){

    app.get('/',function(req,res){
        res.sendFile( __dirname + "/views/" + "index.html" );
    });
    app.get('/ok',function(req,res){
        res.render('index',{
            title:'首页'
        });
    });
};