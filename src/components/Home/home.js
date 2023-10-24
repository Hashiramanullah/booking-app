import React from 'react'
import { Provider,useSelector,useDispatch } from "react-redux"
function Home() {
 
    let ApnaStore  = useSelector(function(str){


        return str.SignUpData;
        console.log(str.SignUpData);
     })
    return (
    <div>home Page</div>
  )
}

export default Home