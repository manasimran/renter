'use client'
import Card from '@/app/components/Card'
import React from 'react'

export default async function page(param: any) {
    let data:any=await fetch(`http://localhost:3011/api/cars/${param.params.carid}`)
    let car=await data.json()
    console.log(car)
  return (
    <Card car={car}/>
  )
}
