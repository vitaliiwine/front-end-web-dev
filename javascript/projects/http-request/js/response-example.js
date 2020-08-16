const main = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await axios.get(url);
        console.log(response.data);

        for (let prop in response.data) {
            document.querySelector('div').innerHTML = `${prop}: ${response.data[name]}`;
        }

    }

    catch (error) {
        console.error(error)
    }
};

window.onload = main;