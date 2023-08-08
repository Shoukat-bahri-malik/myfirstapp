import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

export default function Layout() {
   let mystyle={'backgoundColr':'red'};
  return (
    <div>
      <Navbar title="Maverik-Dresses" />
      <Card imageUrl="https://loremflickr.com/320/240" title="cardOne" disc = "This is card 1 summary" btnTitle="Add"/>
      <Card imageUrl="https://loremflickr.com/320/240" title="cardTwo" disc = "This is card 2 summary" btnTitle="Subtract"/>
      <Card imageUrl="https://loremflickr.com/320/240" title="cardThree" disc = "This is card 3 summary" btnTitle="Divide"/>
      <Card imageUrl="https://loremflickr.com/320/240" title="cardFour" disc = "This is card 4 summary" btnTitle="Multiply"/>

    </div>
  )
}
