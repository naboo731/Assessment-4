const fortuneBtn = document.querySelector("#fortune-btn")
fortuneBtn.addEventListener('click', () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (res) {
        const data = res.data
        alert(data)
    })
})

const colorForm = document.querySelector("#fav-color-form")
const colorFormSection = document.querySelector("#color-form-section")
const colorSubmit = document.querySelector("#color-submit")

function clearColorForm() {
    colorFormSection.innerHTML = ``
}

    
const favColor = () => { 
    let colorObj = {
        fav: document.querySelector("#fav-color-input").value
    }

 axios.post("http://localhost:4000/api/color/", colorObj)
.then( res => {
    console.log(res.data)
    const colorData = res.data
    alert(`Oh my gosh! I love ${colorData} too!`)
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })}

colorSubmit.addEventListener('click', favColor)

const registerForm = document.querySelector("#register-form")
const loginForm = document.querySelector("#login-form")
const userSection = document.querySelector("#login-user-info")


const login = (body) => {
    axios.post("http://localhost:4000/api/login/", body)
    .then( res => {
    alert("Logging you in now!")
    console.log(res.data)
    createUserCard(res.data)
  }).catch(err => {
    console.log(err)
    alert("Oh no! Seems like that didn't work. Try again.")
  })
}
  
function loginSubmitHandler(element) {
    element.preventDefault()

    let username = document.querySelector('#login-username')
    let password = document.querySelector('#login-password')

    let userObj = {
        username: username.value,
        password: password.value
    }
    login(userObj)

    username.value = ''
    password.value = ''
}

loginForm.addEventListener('submit', loginSubmitHandler)

function registerSubmitHandler(element) {
    element.preventDefault()
    let username = document.querySelector('#register-username')
    let email = document.querySelector('#register-email')
    let firstName = document.querySelector('#register-firstName')
    let lastName = document.querySelector('#register-lastName')
    let password = document.querySelector('#register-password')
  
    let userObj = {
        username: username.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
    }
    register(userObj)
  
    username.value = ''
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    password.value = ''
  }

const register = (body) => {
    axios.post("http://localhost:4000/api/register/", body)
    .then(res => {
        alert("You have been successfully registered!")
        createUserCard(res.data)
  }).catch(err => {
    console.log(err)
    alert("Oh no! Seems like that didn't work. Try again.")
  })
}
  

function createUserCard(data) {
    userSection.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = 
    `<p class="username">
    Username: ${data.username}</p>
    <p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>
    `
    userSection.appendChild(userCard)
}

registerForm.addEventListener('submit', registerSubmitHandler)
