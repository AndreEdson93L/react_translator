import React, { useState } from "react";
import withAuth from "../../hoc/withAuth";
import { useUser } from "../../context/UserContext";
import TranslationsForm from "../../components/Translations/TranslationsForm/TranslationsForm";
import { translationAdd } from "../../api/translation";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import "./Translations.css";

const Translations = () => {
  const [translationText, setTranslationText] = useState("");
  const { user, setUser } = useUser();

  const handleTranslationClicked = async () => {
    if (!translationText || translationText.trim() === "") {
      alert("Please enter translation notes");
      return;
    }

    const [error, updateUser] = await translationAdd(user, translationText);
    if (error !== null) {
      return;
    }

    storageSave(STORAGE_KEY_USER, updateUser);
    setUser(updateUser);
  };

  return (
    <>
      <h1>Translations</h1>
      <section id="translation-container">
        <TranslationsForm
          translationText={translationText}
          onTranslation={() => handleTranslationClicked()}
          onTranslationTextChange={(value) => setTranslationText(value)}
        />
        <div className="translation-images-container">
          {/* Render translation images here */}
        </div>
      </section>
    </>
  );
};

export default withAuth(Translations);
