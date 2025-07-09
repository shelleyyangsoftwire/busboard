var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var busID:string = '';

rl.question("Enter your bus stop id ", function(answer:string) {
    busID = answer;
    fetchData();
    rl.close();
});

const fetchData = async () => {
    try {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${busID}/Arrivals`);
        const responseJson = await response.json();
        console.log(responseJson)
    } catch (error: any) {
        console.error(error)
    } finally {
        console.log("Request complete")
    }
}


