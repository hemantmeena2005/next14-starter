"use client"

import { useEffect, useState } from "react"

const HydrationTest = () => {
    const a = Math.random();
    console.log(a);
  return (
    <div>{a}</div>
  )
}

export default HydrationTest