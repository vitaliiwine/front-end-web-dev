const main = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await axios.get(url);
        console.log(response.data);
    }

    catch (error) {
        console.error(error)
    }
};

window.onload = main;