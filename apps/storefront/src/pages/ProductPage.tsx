import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../features/cart/useCart'

type P = { id:string; title:string; price:number; image:string }

export default function ProductPage(){
  const { id } = useParams()
  const [p,setP] = useState<P|undefined>()
  const add = useCart(s=>s.add)

  useEffect(()=>{
    fetch('/mock-catalog.json').then(r=>r.json()).then((all:P[])=>{
      setP(all.find(x=>x.id===id))
    })
  },[id])

  if(!p) return <div>Loading...</div>

  return (
    <div>
      <Link to="/" className="underline">&larr; Back</Link>
      <div className="mt-4 flex gap-6">
        <img src={p.image} alt="" className="w-32 h-32" />
        <div>
          <h1 className="text-2xl font-bold">{p.title}</h1>
          <p className="opacity-70 mb-3">${p.price}</p>
          <button onClick={()=>add(p)} className="px-4 py-2 border rounded-xl">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
