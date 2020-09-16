// Function declaration

function say(something) {
    console.log(something);
}

say('Hello!');

// Passing function as an argument

function exec(func, arg){
    func(arg);
}

exec(say, 'Hi, there!');

// Anonymous function

exec((something) =>  {
    console.log(something);
}, 'Hello, there!');

// Call back function

window.setTimeout((something) => {
    console.log(something);
}, 5000, 'I\'m greeting u after 5 secs!' );