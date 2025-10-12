import { Link } from 'react-router-dom'
import { useCart } from '../features/cart/useCart'

export default function CartPage(){
  const { items, clear } = useCart()
  const total = items.reduce((s,i)=>s + i.price*i.qty, 0)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="underline">Browse products</Link></p>
      ) : (
        <>
          <ul className="space-y-2">
            {items.map(i=>(
              <li key={i.id} className="border p-3 rounded-xl flex justify-between">
                <div>{i.title} × {i.qty}</div>
                <div>${i.price*i.qty}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <div className="font-semibold">Total: ${total}</div>
            <Link to="/checkout" className="underline">Checkout</Link>
            <button onClick={clear} className="border px-3 py-1 rounded-lg">Clear</button>
          </div>
        </>
      )}
    </div>
  )
}
