import React, { useState, useEffect } from 'react';

const useArray = (def) => {
    const [array, setArray] = useState(def);

    const push = (el) =>{
        setArray([...array, el])
    }
    const update = (index, newElement)=>{
        setArray(arr=>[
            ...arr.slice(0,index), 
            newElement, 
            ...arr.slice(index+1, arr.length-1)

        ])
    }
    const remove = (index)=>{
        setArray(arr=>[
            ...arr.slice(0,index), 
            ...arr.slice(index+1, arr.length)
        ])
    }

    const filter = (callback) => {
        setArray(arr=>arr.filter(callback))
    }
    const clear = () => setArray([])

    return [array, push, update, remove, filter, clear]
}
 
export default useArray