const main = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/register';

    const user = {
        name:'Alex',
        age: 22
    };



    try {
        const response = await axios.post(url, user);

        console.log(response.data);
    }
    catch (error) {
        console.error(error)
    }
};

window.onload = main;