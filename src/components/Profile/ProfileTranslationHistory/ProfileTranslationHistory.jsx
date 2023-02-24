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
