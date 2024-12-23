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
const Portfolio = require('./model/portfolioModel')
const Testimonial = require('./model/testimonialModel')
const Partner = require('./model/partnerModel')
const Blog = require('./model/blogModel')
const Contact = require('./model/contactModel')
const Footer = require('./model/footerModel')
const multer = require('multer')
const nodemailer = require("nodemailer");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage })

mongoose.connect('mongodb+srv://mdrifatulislam59:ON86VIVvkh1oAjSF@cluster0.2ckl6wm.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('./uploads'))

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
app.post('/banner', upload.single("image"), function (req, res) {
  const data = new Banner({ ...req.body, image: req.file.path })
  data.save()
  res.send("banner created")
  console.log(req);

})

app.get('/banneritem', async function (req, res) {
  const data = await Banner.findOne({})
  res.send(data)
})

app.put('/banner/:id', upload.single("image"), function (req, res) {
  Banner.findByIdAndUpdate(req.params.id, { ...req.body, image: req.file.path }).then(() => {
    res.send({ massage: "banner update" })
  })
})
// Banner route end
// About route start
app.post('/about', upload.single("image"), function (req, res) {
  const data = new About({ ...req.body, image: req.file.path })
  data.save()
  res.send("About created")
  console.log(req);
})

app.get('/aboutitem', async function (req, res) {
  const data = await About.findOne({})
  res.send(data)
})

app.put("/about/:id", upload.single("image"), function (req, res) {
  About.findByIdAndUpdate(req.params.id, { ...req.body, image: req.file.path }).then(() => {
    res.send({ massage: "about update" })
  })
})
// About route end
// Service route start
app.post('/service', upload.single("image"), function (req, res) {
  const data = new Service({ ...req.body, image: req.file.path })
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
app.put('/service/:id', upload.single("image"), function (req, res) {
  Service.findByIdAndUpdate(req.params.id, { ...req.body, image: req.file.path }).then(() => {
    res.send({ message: "Update success" })
  })
})

// Service route end
// Resume route start
app.post('/resume', upload.single("image"), function (req, res) {
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
app.delete('/reusmeeducation/:id', async function (req, res) {
  const data = await Education.findByIdAndDelete(req.params.id)
  res.send({ massage: "delete succsses" })
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
app.delete('/reusmesoft/:id', async function (req, res) {
  const data = await SoftSkill.findByIdAndDelete(req.params.id)
  res.send({ massage: "delete succsses" })
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
app.delete('/resumeexperiance/:id', async function (req, res) {
  const data = await Experiance.findByIdAndDelete(req.params.id)
  res.send({ massage: "delete succsses" })
})
app.put('/resumeexperiance/:id', function (req, res) {
  Experiance.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "update done" })
  })
})
// Resume route end
// portfolio route start
app.post('/portfolio', upload.single("image"), function (req, res) {
  const data = new Portfolio({ ...req.body, image: req.file.path })
  data.save()
  res.send("portfolio created")
})
app.get('/portfolioitem', async function (req, res) {
  const data = await Portfolio.find({})
  res.send(data)
})
app.delete('/portfolio/:id', async function (req, res) {
  const data = await Portfolio.findByIdAndDelete(req.params.id).then(() => {
    res.send({ massage: "delete compelete" })
  })
})
// portfolio route end
// Testimonial route start
app.post('/testimonial', upload.single("image"), function (req, res) {
  const data = new Testimonial({ ...req.body, image: req.file.path })
  res.send("testimonial is done")
  data.save()
})
app.get('/testimonialitem', async function (req, res) {
  const data = await Testimonial.find({})
  res.send(data)
})
app.delete('/testimonial/:id', async function (req, res) {
  const data = await Testimonial.findByIdAndDelete(req.params.id)
  res.send("Delete Item")

})
app.put('/testimonial/:id', upload.single("image"), function (req, res) {
  Testimonial.findByIdAndUpdate(req.params.id, { ...req.body, image: req.file.path }).then(() => {
    res.send({ massage: "update done" })
  })

})
// Testimonial route end
// partner route start
app.post('/partner', upload.single("image"), function (req, res) {
  const data = new Partner({ ...req.body, image: req.file.path })
  data.save()
  res.send("partner created")
})
app.get('/partneritem', async function (req, res) {
  const data = await Partner.find({})
  res.send(data)
})
app.delete('/partner/:id', async function (req, res) {
  const data = await Partner.findByIdAndDelete(req.params.id).then(() => {
    res.send({ massage: "delete compelete" })
  })
})
// partner route end
// Blog route start
app.post('/blog', upload.single("image"), function (req, res) {
  const data = new Blog({ ...req.body, image: req.file.path })
  res.send("Blog is done")
  data.save()
})
app.get('/blogitem', async function (req, res) {
  const data = await Blog.find({})
  res.send(data)
})
app.delete('/blog/:id', async function (req, res) {
  const data = await Blog.findByIdAndDelete(req.params.id)
  res.send("Delete Item")

})
app.put('/blog/:id', upload.single("image"), function (req, res) {
  Blog.findByIdAndUpdate(req.params.id, { ...req.body, image: req.file.path }).then(() => {
    res.send({ massage: "update done" })
  })

})
// Blog route end
// contact route start
app.post('/email', async function (req, res) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "mdrifatulislam59@gmail.com",
      pass: "smty aldr xpum kcuy",
    },
  });

  const info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "mdrifatulislam59@gamil.com", // list of receivers
    subject: req.body.subject, // Subject line 
    html: `<b>Name:</b>${req.body.name}</br>
    <b>Email:</b>${req.body.email}</br>
    <b>Phone:</b>${req.body.phone}</br>
    <b>Message:</b>${req.body.massage}
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send({ message: "Email send" })

})
app.post('/contact', function (req, res) {
  const data = new Contact(req.body)
  data.save()
  res.send("contact created")
})
app.get('/contactitem', async function (req, res) {
  const data = await Contact.findOne({})
  res.send(data)
})
app.put('/contact/:id', function (req, res) {
  Contact.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send("contact created")
  })
})
// contact route end
// footer route start
app.post('/footer', function (req, res) {
  const data = new Footer(req.body)
  data.save()
  res.send("Footer created")
})
app.get('/footeritem', async function (req, res) {
  const data = await Footer.findOne({})
  res.send(data)
})
app.put('/footer/:id', function (req, res) {
  Footer.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ massage: 'Update done' })
  })
})
// footer route end

app.listen(8000)