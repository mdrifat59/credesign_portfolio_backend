const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose');
const Navbar = require('./model/navbarModel')
const Banner = require('./model/bannerModel')
const About = require('./model/aboutModel')
const Service = require('./model/serviceModel')
const Resume = require('./model/resumeModel')
const Education = require('./model/educationModel')
const SoftSkill = require('./model/softskilModel')
const Experiance = require('./model/experianceModel')


mongoose.connect('mongodb+srv://mdrifatulislam59:ON86VIVvkh1oAjSF@cluster0.2ckl6wm.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())

// Navbar route start
app.post('/navbar', function (req, res) {
  const data = new Navbar(req.body)
  data.save()
  res.send("menu created")
  console.log(req);

})

app.get("/navbaritem", async function (req, res) {
  const data = await Navbar.findOne({})
  res.send(data)
})

app.put('/navbar/:id', function (req, res) {
  Navbar.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "Navbar updated" })
  })
})
// Navbar route end
// Banner route start
app.post('/banner', function (req, res) {
  const data = new Banner(req.body)
  data.save()
  res.send("banner created")
  console.log(req);

})

app.get('/banneritem', async function (req, res) {
  const data = await Banner.findOne({})
  res.send(data)
})

app.put('/banner/:id', function (req, res) {
  Banner.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ massage: "banner update" })
  })
})
// Banner route end
// About route start
app.post('/about', function (req, res) {
  const data = new About(req.body)
  data.save()
  res.send("About created")
  console.log(req);
})

app.get('/aboutitem', async function (req, res) {
  const data = await About.findOne({})
  res.send(data)
})

app.put("/about/:id", function (req, res) {
  About.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ massage: "about update" })
  })
})
// About route end
// Service route start
app.post('/service', function (req, res) {
  const data = new Service(req.body)
  data.save()
  res.send("service created")
})

app.get('/serviceitem', async function (req, res) {
  const data = await Service.find({})
  res.send(data)
})

app.delete('/service/:id', async function (req, res) {
  const data = await Service.findByIdAndDelete(req.params.id)
  res.send({ massage: "delete succsses" })
})
app.put('/service/:id', function (req, res) {
  Service.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "Update success" })
  })
})

// Service route end
// Resume route start
app.post('/resume', function (req, res) {
  const data = new Resume(req.body)
  data.save()
  res.send("resume created")
})
app.get('/resumeitem', async function (req, res) {
  const data = await Resume.findOne({})
  res.send(data)
})
app.put('/resume/:id', function (req, res) {
  Resume.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "update done" })
  })
})

//  education
app.post('/resumeeducation', function (req, res) {
  const data = new Education(req.body)
  data.save()
  res.send("resume created")
})
app.get('/resumeeducationitem', async function (req, res) {
  const data = await Education.find({})
  res.send(data)
})
app.put('/resumeeducation/:id', function (req, res) {
  Education.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "update done" })
  })
})
//  softskill
app.post('/resumesoft', function (req, res) {
  const data = new SoftSkill(req.body)
  data.save()
  res.send("resume created")
})
app.get('/resumesoftitem', async function (req, res) {
  const data = await SoftSkill.find({})
  res.send(data)
})
app.put('/resumesoft/:id', function (req, res) {
  SoftSkill.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "update done" })
  })
})
//  expariance
app.post('/resumeexperiance', function (req, res) {
  const data = new Experiance(req.body)
  data.save()
  res.send("resume created")
})
app.get('/resumeexperianceitem', async function (req, res) {
  const data = await Experiance.find({})
  res.send(data)
})
app.put('/resumeexperiance/:id', function (req, res) {
  Experiance.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "update done" })
  })
})
// Resume route end

app.listen(8000)