let form = document.forms.register
let container = document.querySelector('.bg2')
let cont = document.querySelector('.bg')
let eml = document.querySelector('.eml')
let inpEmail = document.querySelector('#eml')
let userName = document.querySelector('.UserName')
let inp2 = document.querySelector('.username')
let user = {
    id: Math.random()
}
form.onsubmit = (event) => {
    event.preventDefault()

    let fm = new FormData(form)
    fm.forEach((value, key)=>{
        user[key] = value
    })

    
    
    localStorage.setItem('users', JSON.stringify(user))
   
    
    console.log(localStorage.getItem('users'));

    container.style.display = 'none'
    eml.innerHTML = inpEmail.value
    userName.innerHTML = inp2.value


}

if(localStorage.getItem('users') !== null){
    cont.style.display = 'block'
    container.style.display = 'none'
    // alert('smth')
}
// localStorage.clear('user')



// let signForm = document.forms.sign
// let newInp = document.querySelector('.eminp')
// let pswrd = document.querySelector('.pswrd')
// let pswrd2 = document.querySelector('.password-inp')
// signForm.onsubmit = (e) => {
//     newInp.value = inpEmail.value
//     e.preventDefault()
    
//         console.log(localStorage.getItem('users'));
    
    // inpEmail.innerHTML = newInp.value
    // userName.innerHTML = inp2.value
    // cont.style.display = 'none'
// }
