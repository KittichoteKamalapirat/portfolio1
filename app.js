const express = require('express')
const app = express()
const path = require('path')
app.set("view engine", "ejs");


var morgan = require("morgan");
app.use(morgan("tiny")); // less text in our logs??

// no need to use app.use(app.router) because of that update
// function signature express.static(root, [options])
app.use(express.static(__dirname + '/public'));
// mount root to views/statics
app.use('/', express.static('views/statics'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`)
  });


app.get('/case',(req,res,next)=> {
  res.sendFile('case.html', { root: path.join( __dirname, 'views/statics')})

})

app.get('/case/junction', (req, res) => {
  res.sendFile('junction.html',{ root: path.join( __dirname, 'views/statics')});
});

app.get('/case/tedx-website', (req, res) => {
  res.sendFile('tedx-website.html',{ root: path.join( __dirname, 'views/statics')});
});

app.get('/case/portfolio-website', (req, res) => {
  res.sendFile('portfolio-website.html',{ root: path.join( __dirname, 'views/statics')});
});

app.get('/case/gochiso', (req, res) => {
  res.sendFile('gochiso.html',{ root: path.join( __dirname, 'views/statics')});
});

app.get('/case/tedx-flyer', (req, res) => {
  res.sendFile('tedx-flyer.html',{ root: path.join( __dirname, 'views/statics')});
});

app.get('/case/thirty-logo-challenge', (req, res) => {
  res.sendFile('thirty-logo-challenge.html',{ root: path.join( __dirname, 'views/statics')});
});

// app.get('/case/:case',(req, res)=>{
//   res.sendFile(path.join(__dirname, 'views/statics/case', req.params.case));
// })


// app.get('/case/medeasy',(req,res)=> {
//   // res.sendFile(req.params.case, { root: path.join( __dirname, 'views/statics/case')})
//   res.render('medeasy', { root: path.join( __dirname, 'views/statics/case')})
//   // res.render('statics/case/medeasy',{case : req.params.case});
// })



// app.get('/case/logo',(req,res)=>{
//   res.sendFile('logo.html')
// })