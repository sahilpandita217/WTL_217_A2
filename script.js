const username = document.getElementsByName('username')
const password = document.getElementsByName('password')
const form = document.getElementById('form')

form.addEventListener('submit' , (e) =>{
    let messages = []
    if (username.value === '' || usernamename.value == null) {
        messages.push('Username is required')
    }
    if (password.length <=6) {
        messages.push('Password must be longer than 6 characters')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innertext = messages.join(', ')
    }
})