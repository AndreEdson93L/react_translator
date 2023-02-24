//#region translation.js

/*
This is JavaScript code that defines two functions, 
translationAdd and translationClearHistory, 
which make HTTP PATCH requests to an API endpoint 
for adding and clearing a user's translation history. 
Both functions use the createHeaders function to set 
the HTTP request headers and return the response body 
if the response is OK. If the response is not OK, 
an error is thrown and returned.
*/

//#endregion

import { createHeaders } from ".";

const apiUrl =
  "https://ael-lost-in-translation-api-production.up.railway.app/translations";

export const translationAdd = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not update the translation.");
    }

    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update the translations");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
