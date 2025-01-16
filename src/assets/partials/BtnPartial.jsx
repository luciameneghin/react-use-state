import { useState } from "react";
import languages from "../data/languages";
import CardPartial from "./CardPartial";

const BtnPartial = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handlerClick = (lang) => {
    setSelectedLanguage(lang); // Aggiorna lo stato con la lingua selezionata
  };

  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap mx-3">
        {languages.map((lang) => (
          <li key={lang.id}>
            <button
              className={`btn btn-primary mx-2 my-3 ${selectedLanguage && selectedLanguage.id === lang.id ? "btn-warning" : ""
                }`}
              onClick={() => handlerClick(lang)}
            >
              {lang.title}
            </button>
          </li>
        ))}
      </ul>

      <CardPartial selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default BtnPartial;

