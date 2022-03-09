import React from 'react'

export const SingleOrAllSelect = ({user,handleChange}) => {
    return (
        <div>
            <li key={user.id}>
                    <input type="checkbox"  name={user.name}
                    checked={user?.isChecked || false}
                    onChange={handleChange}
                    />
                    <label>{user.name}</label>
                    </li>
        </div>
    )
}
