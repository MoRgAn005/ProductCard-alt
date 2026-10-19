import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ onBuy, title, image, price }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    onBuy()
  }

  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <span>{price} ₽</span>
      <button onClick={handleClick}>Добавить в корзину ({count})</button>
    </div>
  )
}

export default ProductCard
