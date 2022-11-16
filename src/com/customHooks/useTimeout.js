import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const useTimeout = (callback, delay) => {

    const callbackRef=useRef(callback)
    const timeoutRef=useRef()

    return [value, toggleValue]
}
 
export default useToggle;