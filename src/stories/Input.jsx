import { useState } from "react"
import './output.css'

export const Input = ({ placeHolder, bgColor, size }) => {
  const [color, setColor] = useState('bg-')
  return (
    <input placeholder={placeHolder} className="bg-red-100 rounded-full" type="text" />
  )
}