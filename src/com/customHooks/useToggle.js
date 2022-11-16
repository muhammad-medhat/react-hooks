import React, { useState, useEffect } from 'react';
const useToggle = (def) => {
    const [value, setValue] = useState(def);
    const toggleValue = (value)=>{
        setValue(current =>
            typeof value === 'boolean'? value: !current
        )
    }

    return [value, toggleValue]
}
 
export default useToggle;