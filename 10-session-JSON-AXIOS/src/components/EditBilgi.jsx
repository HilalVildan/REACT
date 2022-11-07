

const EditTutorial = ({putBilgi, items, setItems}) => {
  const { id, title, description } = items;

  //!torun dededen oğula oradan da buraya gelen putBilgi metodunu (altta yorumdaki gibi düşünebiliriz), verileri ve verileri değiştirebilme yeteneğini karşıladı. veriler items={id:id,title:title,desription:description} formatıyla buraya geldiği için destructuring yapmayı tercih ettim. buraya babadan gelen değiştirebilme yeteneği sayesinde inputlara girilen verileri eskisiyle değiştirdim, (altta açıklama var)
  //! sonra save butonuna basınca dededen gelen putBilgi (put) fonksiyonu sayesinde değişiklik tamamlandı
  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title}
                onChange={(e) => setItems({ ...items, title: e.target.value })}
                //! değiştirme yeteneğiyle '...items' veri objemin sadece title ı değişsin, gerisi aynen kalsın

                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description}
                onChange={
                  (e) => setItems({ ...items, description: e.target.value })
                  //! değiştirme yeteneğiyle '...items' veri objemin sadece description ı değişsin, gerisi aynen kalsın
                }
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() =>
                putBilgi({ id: id, title: title, description: description })
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
