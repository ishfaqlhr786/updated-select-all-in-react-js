import React ,{useState,useEffect} from 'react'
const userData=[{name:"asad",isChecked:false},{name:"amir",isChecked:false},
{name:"ghafoor",isChecked:false},
{name:"umer",isChecked:false}]
export const SelectAllToggle = () => {
    const [user,setUser]= useState([]);
    useEffect(()=>{
         setUser(userData)
    },[])
    console.log(user)
    const handleChange=(e)=>{
       const {name,checked}= e.target;
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
                <li>
                    <input type="checkbox" onChange={handleChange}
                    name="Allselect"
                    checked={user.filter((user)=>user?.isChecked !== true ).length < 1}
                    />
                    <label>Select all</label>
                </li>
            {
                user.map(user=>(
                    <>
                    <li key={user.id}>
                    <input type="checkbox"  name={user.name}
                    checked={user?.isChecked || false}
                    onChange={handleChange}
                    />
                    <label>{user.name}</label>
                    </li>
                    </>
                ))
            }
            </ul>
        </div>
    )
}
