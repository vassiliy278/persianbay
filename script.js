const url = 'https://pixabay.com/api/?key=23641816-dcf4d4f9c34852472448f65fc&page=1&per_page=12'

const form = document.forms.namedItem('queryline')
let query = ''
form.addEventListener('submit', e => {
    e.preventDefault()
})

const queryField = document.getElementById('queryField')

queryField.oninput = (e) => {
    query = e.target.value
}

form.onsubmit = () => sendRequest()


const contentWrapper = document.querySelector('.content_wrapper')
const fullScreen = function() {
    console.log('fullscreen mode')
}
function sendRequest() {
    fetch(url+`&q=${query}`).then(response1 => {
        return response1.json()
    }).then(response2 => {
        const contentObject = response2.hits
        contentWrapper.innerHTML = ''
        contentObject.forEach(elementObject => {
            const wrapperElement = document.createElement('div')
            wrapperElement.classList.add('wrapper_element')
            wrapperElement.style.backgroundImage = `url(${elementObject.webformatURL})`
            contentWrapper.appendChild(wrapperElement)

            wrapperElement.onclick = () => {
                console.log('clicked')
                const fullscreen = document.createElement('div')
                fullscreen.classList.add('fullscreen')
                fullscreen.innerHTML = `<img src=${elementObject.largeImageURL}/>`
                document.body.appendChild(fullscreen)
            }
        });
    })
}
