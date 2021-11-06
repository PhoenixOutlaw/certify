import React from 'react'
import { useHistory } from 'react-router'
import'./css/main.css'



export const Main = ({samples}) => {
    const history = useHistory();

  function Option({bkg, name}){
      return (
        <div className='opt' onClick={()=>history.push(`/create/${name}`)}>
            {bkg&&<img src={bkg} alt="" />}
            <h3>{name}</h3>
        </div>
      )
  }

    return (
        <div className="mcnt">
            {samples.map((sample)=>(
                <div key={sample.id}>
                    <Option name={sample.name} bkg={sample.img} />            
                </div>
            ))}

           
                    
        </div>
    )
}
