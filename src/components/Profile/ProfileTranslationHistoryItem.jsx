//#region ProfileTranslationHistoryItem
/*
This is a simple functional component that receives a translation prop 
and renders it as a list item element.
Props:

translation: The translation to be rendered as a list item element.
Returns:
A list item element containing the translation prop as its text.
*/
//#endregion

import React from "react";

function ProfileTranslationHistoryItem({ translation }) {
  return <li>{translation}</li>;
}

export default ProfileTranslationHistoryItem;
