//#region storage.js
/*
The code defines three functions (storageSave, storageRead, and storageDelete) 
for saving, reading, and deleting data from sessionStorage.
The validateKey function checks that the key argument provided is a non-empty string.
The storageSave function checks that key is a non-empty string and that value is 
not falsy before storing the serialized value in sessionStorage with the provided key.
The storageRead function checks that key is a non-empty string before retrieving and 
parsing data stored in sessionStorage with the provided key.
The storageDelete function checks that key is a non-empty string before removing data stored in 
sessionStorage with the provided key.
The code ensures that the key parameter provided to the functions is validated before 
performing any operation on the sessionStorage object.
*/
//#endregion

const validateKey = key => {
    if (!key || typeof key !== 'string') {
        throw new Error('Invalid key was not provided')
    }
}

export const storageSave = (key, value) => {
    validateKey(key)

    if(!key || typeof key !== 'string') {
        throw new Error('Storagesave: Invalid storage key provided')
    }

    if(!value) {
        throw new Error('Storagesave: No value provided for' + key)
    }

    sessionStorage .setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    validateKey(key)

    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }

    return null
}

export const storageDelete = key => {
    validateKey(key)

    sessionStorage.removeItem(key)
}