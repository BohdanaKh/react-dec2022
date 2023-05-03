const placeBaseURL = 'https://jsonplaceholder.typicode.com/'
const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'

const users = '/users'
const posts = '/posts'
const cars = '/cars'

const urls = {
    carAPI: {
        cars,
        byId: (id) => `${cars}/${id}`
},
placeAPI: {
    users,
    posts
}
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}