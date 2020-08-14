const main = async () => {
    const res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello after 5 sec')
        }, 5000)
    })

    console.log(res)
};

window.onload = main;