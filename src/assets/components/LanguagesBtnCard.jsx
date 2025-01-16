import { useState } from "react";
import languages from "../data/languages";

const LanguagesBtnCard = (props) => {

  const [selectedLanguage, setSelectedLanguage] = useState(languages);

  const handlerClick = (lang) => {
    setSelectedLanguage(lang)
  }

  return (
    <div>
      <ul className="list-unstyled d-flex mx-3 ">
        {languages.map((lang) => (
          <li key={lang.id}>
            <button
              className='btn btn-primary mx-2 my-3'
              onClick={() => handlerClick(lang)}>
              {lang.title}
            </button>
          </li>
        ))}
      </ul>


      {selectedLanguage &&
        <div className='card'>
          {languages.map}
          <h3 className='my-3 mx-3'>{selectedLanguage.title}</h3>
          <p className='mx-3'>{selectedLanguage.description}</p>
        </div >}
    </div>
  )
}
export default LanguagesBtnCard
