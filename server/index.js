const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

let users = []

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
                     "Cool shirt!",
                     "Your Javascript skills are stellar.",
  ]

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
})

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A golden egg of opportunity falls into your lap this month.", "All will go well with your new project.", "Perhaps you’ve been focusing too much on saving."
]
  let random = Math.floor(Math.random() * fortune.length)
  let randomFortune = fortune[random]
  res.status(200).send(randomFortune)

})

app.post("/api/color", (req, res) => {
  console.log('color',req.body)
  let {fav} = req.body
  res.status(200).send(fav)
})

app.post("/api/login", (req, res) => {
  console.log("Logging you in now!")
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          return res.status(200).send(users[i])
        } 
      } 
      res.status(400).send("User not found.")
    })

app.post("/api/register", (req, res) => {
  console.log("You have been successfully registered")
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    })






app.listen(4000, () => console.log("Server running on 4000"));
