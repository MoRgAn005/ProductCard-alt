import { useState } from 'react'
import ProductCard from './ProductCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <main className="page">
      <div className="top-bar">
        <h1>Магазин техники</h1>
        <div className="counter">Товаров в корзине: {count}</div>
      </div>

      <div className="cards">
        <ProductCard onBuy={handleClick} title="Беспроводные наушники" image="/image/headphones.jpg" price="3490" />
        <ProductCard onBuy={handleClick} title="Механическая клавиатура" image="/image/keyboard.jpg" price="5790" />
        <ProductCard onBuy={handleClick} title="Игровая мышь" image="/image/mouse.jpg" price="2490" />
      </div>
    </main>
  )
}

export default App
