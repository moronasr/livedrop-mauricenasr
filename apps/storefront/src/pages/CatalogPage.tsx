import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type P = { id:string; title:string; price:number; image:string; tags:string[]; stockQty:number }

export default function CatalogPage(){
  const [data,setData] = useState<P[]>([])
  useEffect(()=>{ fetch('/mock-catalog.json').then(r=>r.json()).then(setData) },[])
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(p=>(
          <li key={p.id} className="border rounded-2xl p-4">
            <img src={p.image} alt="" className="w-20 h-20 mb-2" />
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm opacity-70">${p.price}</div>
            <Link to={`/product/${p.id}`} className="underline mt-2 inline-block">View</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
