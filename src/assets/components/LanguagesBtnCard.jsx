import BtnPartial from "../partials/BtnPartial";

const LanguagesBtnCard = () => {

  // const [selectedLanguage, setSelectedLanguage] = useState(null);

  // const handlerClick = (lang) => {
  //   setSelectedLanguage(lang)
  // }
  return (
    <div className="container">
      {/* <ul className="list-unstyled d-flex flex-wrap mx-3 ">
        {languages.map((lang) => (
          <li key={lang.id}>
            <button
              className={`btn btn-primary mx-2 my-3 ${selectedLanguage && selectedLanguage.id === lang.id ? "btn-warning" : ""}`}
              onClick={() => handlerClick(lang)}>
              {lang.title}
            </button>
          </li>
        ))}
      </ul> */}
      <BtnPartial />

      {/* {selectedLanguage ?
        <div className="card">
          <h3 className="my-3 mx-3">{selectedLanguage.title}</h3>
          <p className="mx-3">{selectedLanguage.description}</p>
        </div>
        :
        <p className="my-3 mx-3 fs-4 fw-bold">Nessun linguaggio selezionato</p>
      } */}
    </div>
  );
};

export default LanguagesBtnCard
