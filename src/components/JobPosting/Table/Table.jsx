import React from 'react'
import Home from './Home'
// import 'bootstrap/dist/css/bootstrap.min.css';
                    

const Table = ({data}) => {
  console.log(data)
  return (
    <>
        <Home tableData = {data}/>
    </>
  )
}

export default Table