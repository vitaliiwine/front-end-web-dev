const http = require("http")
const fs = require("fs").promises
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)

    if (request.url === "/") {
        fs.readFile("./html/ajax-start.html", "utf-8").then(file => {
            return response.end(file)
        })
    } else if (request.url.match(/^\/verses\/\d{1,}$/g)) {
        const verseId = request.url.split("/")[2]

        fs.readFile(`./verses/verse${verseId}.txt`, "utf-8")
          .then(file => {
              return response.end(file)
          })
          .catch(err => {
              return response.end("No such file with id " + verseId)
          })
    } else {
        return response.end("404")
    }
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
    if (err) {
        return console.log("something bad happened", err)
    }

    console.log(`Server is listening on ${port}`)
})
