var link1 = document.getElementById('link1') //link 1 = Contacts
var link2 = document.getElementById('link2') // link 2 = Projects
var link3 = document.getElementById('link3') //link 3 = Header
var header = document.querySelector('.container')
var contact = document.querySelector('.contacts')
var projects = document.querySelector('.projects')



function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector)
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }
}



link1.addEventListener('click', () => {
    header.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'flex'
    contact.style.flexDirection = 'column'
})
link2.addEventListener('click', () => {
    header.style.display = 'none'
    contact.style.display = 'none'
    projects.style.display = 'block'
    
})
link3.addEventListener('click', () => {
    location.reload()
})