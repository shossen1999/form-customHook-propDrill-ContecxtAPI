/**This is called Custom Hook making  */

import { useState } from "react"

const useInputState = (defaultValue=null)=>{

    const [value , setValue]= useState(defaultValue);

    const onChange = e =>{
        setValue(e.target.value);
    }
    // const handleChange = e =>{
    //     setValue(e.target.value);
    // }
    // return [value , handleChange];

    return{
        value,
        onChange

    }

}

export default useInputState;
/** without exporting you cant use that somewhere else */