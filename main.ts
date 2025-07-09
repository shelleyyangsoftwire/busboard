var getResponse = require('prompt-sync')();


interface busInfo {
    lineName: string
    destinationName: string
    timeToStation: number
}

const fetchData = async (stopID: string): Promise<JSON | undefined> => {
    try {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopID}/Arrivals`);
        const responseJson = await response.json();
        return responseJson;
    } catch (error: any) {
        console.error(error);
        return undefined;
    }
}

const main = async (): Promise<undefined> => {

        let stopID = getResponse('Enter stop ID: ');
        let responses = await fetchData(stopID);
        console.log(responses);
        /*
        for (let i = 0 ; i < 5; i++){
            console.log(responses);
        } */

}

main();
