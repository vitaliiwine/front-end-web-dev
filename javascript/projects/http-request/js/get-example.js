const get = (url) => {
    return new Promise((resolve, reject) => {
        let response = {data: {}}


        // Some code to get data

        const users = [{id: 0, name: 'Alex', age: 22}, {id: 1, name: 'Kate', age: 19}] // Here server responded with the users, but we create fake one for example
        // let users = []
        if (!users.length) {
            response.error = 'Empty users, fuck you brooo'

            reject(response)
        } else {
            response.data.users = users

            resolve(response)
        }
    })
}

const main = () => {


    get('sadasd').then(response => {
        console.log('Users')
        console.log(response.data.users)
    }).catch(response => {
        console.error('Error: ')
        console.error(response.error)
    })
};

window.onload = main;