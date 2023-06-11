/*
*->BodyLayout
*           ->Profile Component
*           ->Projects Component
*           ->Contact Details Components
*
* 
*/ 

import React from 'react'
import { Outlet } from 'react-router-dom'

const BodyLayout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default BodyLayout
