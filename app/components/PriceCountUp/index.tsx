'use client'
import React, {useRef, memo } from 'react'
import CountUp from 'react-countup'

interface Props{
  price: string
}

const PriceCountUp = (props: Props) => {
  const priceRef = useRef()
  const {price} = props
  console.log("PRICE", price)
  return(
    <CountUp start={0.0} end={parseFloat(price)} decimals={1} duration={2} ref={priceRef} />
  )
}

export default memo(PriceCountUp)