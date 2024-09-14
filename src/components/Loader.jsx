import React from 'react'

import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-[#E0F7FA] h-screen">
        <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  )
}

export default Loader