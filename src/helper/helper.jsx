

import React from "react";

export const useCount = (el= 0) => {
    const [count,setCount] = React.useState(0)
    console.log('rr' + count)
    setCount(el)
}

