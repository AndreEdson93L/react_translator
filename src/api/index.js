//const apiKey = process.env.REACT_APP_API_KEY
const apiKey = "tHpriKT13fPXs8Ku6uLfCbOX3b8TjpBbKYjO4H6ZF67UExf7DVKCuED02LJMPapo"

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}