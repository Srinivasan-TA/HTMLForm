const Name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const address = document.getElementById('address')
const Dob = document.getElementById('dob')

form.addEventListener('submit', (e) => {
  let messages = []
  if (address.value === '' || address.value == null) {
    messages.push('Address is required')
  }
  if (age.value === '' || age.value == null) {
    messages.push('Age is required')
  }
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }    
  if (Name.value === '' || Name.value == null) {
    messages.push('Name is required')
  }
  if (Dob.value === '' || Dob.value == null) {
    messages.push('Dob is required')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})