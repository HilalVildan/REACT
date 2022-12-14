import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditBilgi from './EditBilgi';
import { useState } from 'react';

const BilgiList = ({bilgiler, deleteBilgi, putBilgi}) => {
  const [items, setItems] = useState("");

  //!babadan gelen bütün bilgiler dizisi ekrana bastırıldı
  //!babadan gelen deleteBilgi fonksiyonu, alttaki çöp iconuna basılınca basıldığı yerdeki id si ile çalıştı
  //!babadan gelen putBilgi fonksiyonu=> burada kalem iconuna basılınca ekrandaki tüm veriler torundaki (modal ın içinde) ekranda çıkmalı, üstelik ben o verileri değiştirebilmeliyim, bu yüzden hem buradaki veriler hem değiştirebilme yeteneği için useState tanımlayıp, (kalem iconuna tıklamamla ) verilerimi ona gömüp, gerekli işlemlerin yapılacağı modal a yani torun a yolladım, orada veriler gözükecek ben değişiklik yapabileceğim, save butonuna basınca değişiklik put ile dataabase e gidecek, bu yüzden  dededen buraya gelen put işlemini (putBilgi fonksiyonunu) verileri gömdüğüm items i ve değiştirebilme yeteneğini (setItems) toruna yolladım

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {bilgiler.map((eleman) => {
            const { id, title, description } = eleman;
            return (
              <tr key={id}>
                <th>{id} </th>
                <td>{title} </td>
                <td>{description} </td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    //! alttaki 2 satır bana tıklandığında modal ı aç demek

                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    size={20}
                    className="me-2 text-warning cursor-pointer"
                    onClick={() => setItems(eleman)}
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteBilgi(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditBilgi putBilgi={putBilgi} items={items} setItems={setItems} />
    </div>
  );
};

export default BilgiList;
