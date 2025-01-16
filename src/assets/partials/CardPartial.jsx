const CardPartial = ({ selectedLanguage }) => {
  return (
    <div>
      {selectedLanguage ? (
        <div className="card">
          <h3 className="my-3 mx-3">{selectedLanguage.title}</h3>
          <p className="mx-3">{selectedLanguage.description}</p>
        </div>
      ) : (
        <p className="my-3 mx-3 fs-4 fw-bold">Nessun linguaggio selezionato</p>
      )}
    </div>
  );
};

export default CardPartial;

