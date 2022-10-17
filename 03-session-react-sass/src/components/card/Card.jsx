import "./Card.scss"


const Card = ({data}) => {
    console.log({data});
  return (
    <div className='container' >

    {data.map((veri)=>{

        return(
            <div className="card" key={veri.id}>
                <h1 >{veri.name} </h1>
                <h2>{veri.job} </h2>
                <p>{veri.comment} </p>
                <img src={veri.img} alt="" />
                <div className="btn-container">
                    <button className="btn-container--small" >Small</button>
                    <button className="btn-container--large" >Large</button>
                </div>
            </div>
        )



    })}

    
</div>
  )
}

export default Card