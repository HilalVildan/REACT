import React,{useContext} from 'react'
import { UserContext } from '../App';
import AnaUser from "./AnaUser";

const Isimler = () => {

 const {user} =  useContext(UserContext)
 console.log(user);

  return (
    <div>
{user.slice(0,4).map((i)=> <div style={{background:"pink"}}>{i.login}</div>)}

    <AnaUser user = {user} />
    </div>
    
  )
}

export default Isimler