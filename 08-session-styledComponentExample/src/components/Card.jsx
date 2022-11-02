import React from 'react'
import ContainerSSS from './styles/ContainerSSS'
import data from "../data.js"
import ImageSSS from './styles/ImageSSS'
import KartSSS from './styles/KartSSS'


const Card = () => {
  return (
    <ContainerSSS>
{data.map((item)=>{

return(

<KartSSS key={item.id}  ters={item.id %2===1 && "row-reverse"}>

<div> <h2>{item.title}</h2> 
<p>{item.body}</p>
</div>
<ImageSSS src={`./images/${item.image}`}></ImageSSS>


</KartSSS>





)




})}


    </ContainerSSS>
  )
}

export default Card