const placeBaseUrl = 'https://jsonplaceholder.typicode.com/'

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';
const posts = '/posts';


const urls = {
    placeAPI:{
        todos,
        albums,
        comments
    },
    postAPI:{
        byPostId: (id: string | undefined):string => `${posts}/${id}`
        }
}

export {
    placeBaseUrl,
    urls
}