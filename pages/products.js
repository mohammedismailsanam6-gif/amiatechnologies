import products from '../src/data/products.json'
import { useState } from 'react'

export default function Products(){
  const [q, setQ] = useState('')
  const [brand, setBrand] = useState('')
  const categories = Array.from(new Set(products.map(p=>p.category)))
  const brands = Array.from(new Set(products.map(p=>p.brand)))

  const filtered = products.filter(p=>{
    return (!brand || p.brand === brand) && (p.model.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()))
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Products Catalog</h1>
      <div className="flex gap-4 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="border p-2 flex-1" />
        <select value={brand} onChange={e=>setBrand(e.target.value)} className="border p-2">
          <option value="">All Brands</option>
          {brands.map(b=> <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(p=> (
          <div key={p.id} className="border p-4 rounded text-center">
            <img src={p.image ? `/media/${p.image}` : '/media/placeholder.png'} alt={p.model} className="mx-auto h-36 object-contain"/>
            <div className="mt-2 font-semibold">{p.brand} {p.model}</div>
            <div className="text-sm text-slate-600">{p.short || p.description || ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
