"use client";
import {SessionProvider} from "next-auth/react"
import { Children, ReactNode } from 'react';
interface Props {
    Children:ReactNode
}
export default function AuthProvider() {
  return (
    <SessionProvider>AuthProvider</SessionProvider>
  )
}
