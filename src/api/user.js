import { createHeaders } from "./index";

//const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl =
  "https://ael-lost-in-translation-api-production.up.railway.app/translations";

export const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);

    if (!response.ok) {
      throw new Error("Could not complete request");
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      return [null, data];
    } else {
      throw new TypeError("Response was not in JSON format");
    }
  } catch (error) {
    return [error.message, []];
  }
};

export const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST", //Create User
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username: " + username);
    }

    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return await createUser(username);
};

export const userById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);
    if (!response.ok) {
      throw new Error("Could not fetch user.");
    }
    const user = await response.json();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
