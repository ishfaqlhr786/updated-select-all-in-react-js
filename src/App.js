import React ,{useState} from 'react'

export const App = () => {
  const [selected,setSelected]= useState(false)
  const [all,setAll]= useState(1)
  const [items,setItems]=useState({
   data:[ {id:1,name:"banana",isChecked: false},
    {id:2,name:"apple",isChecked: false},
    {id:3,name:"orange",isChecked: false},
    {id:4,name:"mango",isChecked: false},
  ]
  }
  )
  console.log(items)
const handleAllChecked=(e)=>{
  //e.preventDefault()
  setSelected(!selected)
  var fruites = [...items.data];
  
    fruites.forEach(fruite => {
     
      fruite.isChecked = e.target.checked});
    //this.setState({ fruites: fruites });
  
    console.log(items)
    setItems({...items,data:fruites})
}


const handleCheckChieldElement = event => {
 // event.preventDefault()
  //console.log("isha");
  let fruites = [...items.data];
  console.log(fruites)
  fruites.forEach(fruite => {
   
   if (fruite.name === event.target.name){
      fruite.isChecked = event.target.checked;
     //fruite.isChecked = fruite.isChecked;
      console.log(fruite.isChecked)
      
   }
     
      
  });
  if(event.target.checked){
        setAll(all+1)
        console.log(all)
      }
      if(all === fruites.length){
        setSelected(true)
        
        setItems({items,data:fruites})
        setAll(1)
      }
     
//  this.setState({ fruites: fruites });

 // setItems(fruites)
 //setAll(1)
 
};
  return (
    <div>
       <input
          type="checkbox"
        //  onClick=
          onChange={handleAllChecked}
          checked={selected}
          
         // value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {items.data.map(fruite => {
            return (
              <>{ selected ?
              <li>
              <input type="checkbox"
               onClick={handleAllChecked}
               checked= {selected}
                key={fruite.id}
                name={fruite.name}
               // {...fruite}
              />
              {fruite.name}
              </li>:  <li>
              <input type="checkbox"
               onClick={handleCheckChieldElement}
             //checked={fruite.isChecked}
                key={fruite.id}
                name={fruite.name}
               // {...fruite}
              />
              {fruite.name}
              </li>
          }
            
              </>
            );
          })}
        </ul>
        <hr/>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>is checked</th>
          </tr>
          {
            items.data.map(p=>{
              return(<>
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.isChecked.toString()}</td>
              </tr>
              </>)
            })
          }
        </table>
        
    </div>
  )
}
