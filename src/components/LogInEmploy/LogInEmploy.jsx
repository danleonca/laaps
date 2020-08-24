import React, { useState, useEffect } from 'react'

const LogInEmploy = () => {
    const [employ, setEmploy] = useState([]);

    useEffect(() => {
        
     getData()
    }, [])

    const getData=async()=>{
        const data= await fetch('https://car-cleaners.herokuapp.com/cleaner')
        const employs= await data.json()
        console.log(employs)
        setEmploy(employs)
    }
 
    return (
        <div>
           
        </div>
    )
}

export default LogInEmploy
