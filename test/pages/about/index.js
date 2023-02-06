import React, { useEffect } from 'react'

const about = () => {
  useEffect(()=>{
    fetch('http://localhost:1337/api/card-datas')
    .then((res)=>res.json())
    .then((res)=>console.log(res))
  })
  return (
    <div> About page</div>
  )
}

export default about