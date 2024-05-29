import React from 'react'
import Card from '@/app/components/Card';
export default async function page() {
  let car={
    name:"BMW",
    brand:"BMW",
    year:2000,
    perhourrate:100,
    milage:1000,
    seats:5,
    overtimerate:10,
    color:"red",
    avalibility:false
  }
  return (
    <div>
      <Card car={car}/>
    </div>
  )
}
