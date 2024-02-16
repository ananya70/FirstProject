const xy = require('express')
const ab = xy()
ab.post('/', function (req, res) {
    res.send('Hello World post')
  })

  ab.get('/', function (req, res) {
    res.send('Hello World get')
  })  
ab.listen(3333 || process.env.PORT,()=>{
  console.log("server started")
});
