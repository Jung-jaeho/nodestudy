//express를 사용하기 위해서 로드해준다.
var express = require('express');
var app = express();
//get vs post 일반적으로는 url으로 접속하니까 get방식으로 접속한다.
//express 정적파일 추가 public은 디렉토리를 의미한다.
app.use(express.static('public'));

app.get('/route', function(req, res){
  res.send('Hello Router, <img src="/image.png">')
})

app.get('/',function(req,res){ //응답에 대한 객체를 불러온다. callback
   res.render('index.html');
});  //이건 홈이다.


app.get('/login', function(req,res){
  res.send('Login please');
});
app.listen(3000,function(){
    console.log('Conneted 3000 port!');
});


//get이 하는 일은 라우터 역할을 한다. (라우터 = 길을 찾아준다.)
//사용자 -> router -> controller

