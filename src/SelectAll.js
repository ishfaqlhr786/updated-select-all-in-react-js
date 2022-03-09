import React from 'react'

export const SelectAll = ({user,handleChange}) => {
    return (
        <div>
            <li>
<input type="checkbox" onChange={handleChange}
name="Allselect"
checked={user.filter((user)=>user?.isChecked !== true ).length < 1}
/>
<label>Select all</label>
</li>
        </div>
    )
}



