import React,{useState,useEffect} from 'react'
import './App.css'
import { SelectAll } from './SelectAll'
export const SingleOrAllSelect = ({product,checked,arr,handleChange}) => {
   // console.log(checked)
//const [checked,setChecked1]=useState(false)
//console.log(checked1)
const [checked2,setChecked2]= useState(false)
console.log(checked2)
//const [selected,setSelected]= (0)
    console.log(product)
   // console.log(arr)
//   const handleChange=(e)=>{
//     var fruites = arr;
//     fruites.forEach(fruite => {
//       if (fruite.value === e.target.value)
//         fruite.isChecked = !fruite.isChecked
        
//   })
//   arr=fruites;
// }
//arr=fruites;
    return (
        <div>
            {   checked ?

      
                <li>
                    <input type="checkbox" 
                    //defaultChecked={checked}
                    checked={checked}
                   //checked={product.isChecked}
                    onChange={(e)=>handleChange(e)}
                    
                    />
                    <label>{product.name}</label>
                    <label>{product.id}</label>
                
                </li>: <li>
                    <input type="checkbox" 
                   // defaultChecked={product.isChecked}
                  //  checked={checked}
                  //  checked={product.isChecked}
                    onChange={(e)=>handleChange(e)}
                    
                    />
                    <label>{product.name}</label>
                    <label>{product.id}</label>
                    <label>{product.isChecked}</label>
                
                </li> 

}

                
            
        </div>
    )
}
