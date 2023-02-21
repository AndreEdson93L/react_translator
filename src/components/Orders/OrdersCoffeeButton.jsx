import React from 'react'

function OrdersCoffeeButton({coffee, onSelect }) {
  return (
    <button onClick={ () => onSelect(coffee.id)}>
        <aside>
            <img src={coffee.image} alt={coffee.name} width="55" />
        </aside>
        <section>
            <strong>{coffee.name}</strong>
        </section>
    </button>
  )
}

export default OrdersCoffeeButton