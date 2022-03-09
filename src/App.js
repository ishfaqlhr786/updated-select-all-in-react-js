import React ,{useState,useEffect} from 'react'
import { SelectAll } from './SelectAll';
import { SingleOrAllSelect } from './SingleOrAllSelect';
const userData=[{name:"asad",isChecked:false},{name:"amir",isChecked:false},
{name:"ghafoor",isChecked:false},
{name:"umer",isChecked:false}]
export const App = () => {
    const [user,setUser]= useState([]);
    useEffect(()=>{
         setUser(userData)
    },[])
    console.log(user)
    const handleChange=(e)=>{
       const {name,checked}= e.target;
       console.log(name)
       console.log(checked)
       if(name==="Allselect"){
     let tempUser= user.map(user=>{
         return {...user,isChecked:checked}
     })
     setUser(tempUser)
       }else{
        let tempUser= user.map(user=> user.name=== name ? {...user,isChecked:checked}: user)
        setUser(tempUser)
       }
      
    }
    return (
        <div>
            <ul style={{listStyleType:"none"}}>
               <SelectAll user={user} handleChange={handleChange}/>
            {
                user.map(user=>(
                    <>
                    <SingleOrAllSelect user={user} handleChange={handleChange}/>
                    </>
                ))
            }
            </ul>
        </div>
    )
}
