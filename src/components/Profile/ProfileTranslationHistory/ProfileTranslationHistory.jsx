//#region ProfileTranslationHistory.jsx

/*
This is a React component that displays the translation history of a user. 
It takes a translations prop, which is an array of the user's translations.
The component first slices the translations array to display only the last 
ten translations, then maps over the sliced array to create an array of 
ProfileTranslationHistoryItem components, passing each translation as a prop.
If the translationList array is empty, it displays a message indicating 
that the user has no translations yet.
Finally, the component renders the translation list and the message 
(if applicable) within a section element with a heading indicating 
that it's the user's translation history.
*/

//#endregion

import React from "react";
import ProfileTranslationHistoryItem from "../ProfileTranslationHistoryItem";
import "./ProfileTranslationHistory.css"

function ProfileTranslationHistory({ translations }) {
  const lastTenTranslations = translations.slice(-10);

  const translationList = lastTenTranslations.map((translation, index) => (
    <ProfileTranslationHistoryItem key={index} translation={translation} />
  ));

  return (
    <section>
      <h3>Your translation history</h3>

      {translationList.length === 0 && (
        <span className="translation-history-empty">¯\_(ツ)_/¯<br/>You have no translations yet.</span>
      )}

      <ul className="translationList">{translationList}</ul>
    </section>
  );
}

export default ProfileTranslationHistory;
