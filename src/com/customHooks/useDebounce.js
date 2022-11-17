import React, { useState, useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (callback, delay, deps) => {
    const {reset, clear} = useTimeout(callback, delay)

    useEffect(reset, [...deps, reset])
    useEffect(clear, []) // to stop running on the first load

}
 
export default useDebounce;