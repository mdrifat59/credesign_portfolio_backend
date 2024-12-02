const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose');
const Navbar = require('./model/navbarModel')
const Banner = require('./model/bannerModel')


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

app.listen(8000)