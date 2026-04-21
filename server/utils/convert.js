const csv = require("csvtojson");
const fs = require("fs");

csv()
    .fromFile("./server/data/.guest_data.csv")
    .then(json => {
        fs.writeFileSync(
            "./server/data/guests.json",
            JSON.stringify(json, null, 2)
        );
        console.log("CSV converted to JSON!");
    });