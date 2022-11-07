import { useState, useEffect } from "react";
import AddBilgi from "../components/AddBilgi"
import BilgiList from "../components/BilgiList"
import axios from "axios"

const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //!burada bir dizi oluşturup database deki dataları buradaki dizime attım, ve buradaki bilgiler dizisini BilgiList componentinde ekrana bastıracağım database deki her değişiklikte bu işlemi tekrar ederek kendi dizimi (ekrana bastıracağım bilgiler dizisini) güncellemiş oldum
  //! GET (Read)
  const getBilgiler = async () => {
    // datayi parcalamak icin suslu parantez icine aldik
    const { data } = await axios.get(url);
    // console.log(data);

    setBilgiler(data);
  };

  //? Sadece Component mount oldugunda istek yapar

  useEffect(() => {
    getBilgiler();
  }, []);

  console.log(bilgiler);
  //!database url sini child lara göndermek istemiyorum, bütün axios işlemleri bu sayfada bulunsun istiyorum, o yüzden put post delete işlemlerini burada yazıp, gerekli çocuk ve torunlara göndericem
  //! postBilgi fonksiyonu (post işlemi için) AddBilgi componentinde çalışmalı, çünkü verileri gireceğimiz inputlu form yapısı orada. bu yüzden mecburen Home da tanımladığım postBilgi fonksiyonunu child a (AddBilgi ye) yolluyorum props la. post işlemi bütün hatlarıyla child da artık, orada inputlara girilen veri submit edildiği anda buraya düşer ve post sayesinde database e kaydolur
  //! POST (Create)
  const postBilgi = async (z) => {
    await axios.post(url, z);
    getBilgiler();
  };

  //! yine delete işlemi aslında BilgiList componentindeki çöp icon una tıklanınca gerçekleşmeli, ama axios dan delete işlemini bu sayfada tanımladığım için, yine child a kullansın diye yolluyorum propsla. fonksiyon bütün hatlarıyla child a gider, orada tıklanan id li veriyi alıp alttaki yolla siler

  //! DELETE (delete)
  const deleteBilgi = async (id) => {
    await axios.delete(`${url}/${id}`);
    getBilgiler();
  };



  //! güncelleme işlemi ilk önce çocuk (BilgiList) teki kalem iconuna tıklayınca tetikleniyor ve sonrasında torun sayfası=EditList (modal-form yapılı) açılıyor. biz yine axios la put işlemini dede (Home) da tanımlayıp çocuğa yollamalı, orada icon a tıklanınca açılacak olan toruna yollamalıyız, direk toruna yollayamayız, çünkü torun babasındaki icon tıklanınca açılıyor, dedeyle direk teması yok. burada put tanımlanıyor oradan çocuğa, icon tıklanınca çalışmak üzere gidiyor, gerisi diğer sayfada olacak

  // bilgi={id:id, title:title, description:desc}
  
  //! Update (PUT:tüm Update,PATCH :kısmen Update)
  const putBilgi = async (bilgi) => {
    await axios.put(`${url}/${bilgi.id}`, bilgi);
    getBilgiler();
  };

  return (
    <>
      <AddBilgi postBilgi={postBilgi} />
      <BilgiList
        bilgiler={bilgiler}
        deleteBilgi={deleteBilgi}
        putBilgi={putBilgi}
      />
    </>
  );
};

export default Home;
