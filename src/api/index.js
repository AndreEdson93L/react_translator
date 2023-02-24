//#region index.js
/*
This is JavaScript code that defines an apiKey constant with a string value 
and a createHeaders function that returns an object with two keys, 
'Content-Type' and 'x-api-key'. 
The former indicates the type of data being sent in an HTTP request, 
while the latter is used for authentication using the apiKey value.
*/
//#endregion

const apiKey = "tHpriKT13fPXs8Ku6uLfCbOX3b8TjpBbKYjO4H6ZF67UExf7DVKCuED02LJMPapo"

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}