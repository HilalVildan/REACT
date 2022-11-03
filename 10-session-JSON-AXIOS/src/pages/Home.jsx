import { useState, useEffect } from "react";
import AddBilgi from "../components/AddBilgi"
import BilgiList from "../components/BilgiList"
import axios from "axios"

const Home = () => {

  const [bilgiler, setBilgiler] = useState([]);

 const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

//! GET (Read)
const getBilgiler =  async () => {

  // datayi parcalamak icin suslu parantez icine aldik
  const {data} = await axios.get(url)
  // console.log(data);

  setBilgiler(data)
 }

//? Sadece Component mount oldugunda istek yapar

useEffect(() => {
  getBilgiler(); 
}, [])

 console.log(bilgiler);
  

 
  //! POST (Create)
const postBilgi = async(z)=> {
  await axios.post(url, z)
  getBilgiler()

}

  

  //! DELETE (delete)
const deleteBilgi = async(id)=>{
 await axios.delete(`${url}/${id}`)
 getBilgiler()
}
  
  

  //! Update (PUT:tüm Update,PATCH :kısmen Update)


  // bilgi={id:id, title:title, description:desc}

  const putBilgi = async(bilgi) => {
    await axios.put(`${url}/${bilgi.id}`, bilgi);
    getBilgiler()
  }
 

  return (
    <>
      <AddBilgi  postBilgi={postBilgi} />
      <BilgiList bilgiler={bilgiler} deleteBilgi={deleteBilgi} putBilgi={putBilgi}/>
    </>
  );
};

export default Home;
