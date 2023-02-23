import React from "react";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

function ProfileTranslationHistory({ translations }) {
  const lastTenTranslations = translations.slice(-10);

  const translationList = lastTenTranslations.map((translation, index) => (
    <ProfileTranslationHistoryItem key={index} translation={translation} />
  ));

  return (
    <section>
      <h4>Your translation history</h4>

      {translationList.length === 0 && <p>You have no translations yet.</p>}

      <ul>{translationList}</ul>
    </section>
  );
}

export default ProfileTranslationHistory;
