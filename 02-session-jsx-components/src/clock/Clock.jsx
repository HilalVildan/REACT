import React from 'react'

const Clock = () => {
  return (
    <div>
      <h2> {new Date().toLocaleString()} </h2>
      {/* toLocaleString()= Geçerli veya belirtilen yerel ayarı kullanarak bir tarih
      ve saati bir dizeye dönüştürür */}
    </div>
  );
}

export default Clock