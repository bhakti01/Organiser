let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("sending request");
let url = "https://www.twilio.com/blog/web-scraping-and-parsing-html-with-node-js-and-cheerio"
request(url, cb);
function cb(err, response, html) {
    console.log("recieved response");
    if(err == null && response.statusCode == 200) {
        fs.writeFileSync("lbc2.html");
        console.log("File Saved");
        parseHtml(html);
    } else if (response.statusCodde == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.stausCode);
    }

}

function parseHtml(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    let title = $("tq3-header-banner");
    console.log("''''''''''''''''''''''''''''''''''''");
    console.log(title.text());
    console.log("''''''''''''''''''''''''''''''''''''");
}

