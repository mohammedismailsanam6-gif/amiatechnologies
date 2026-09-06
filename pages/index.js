import fs from 'fs'
import products from '../src/data/products.json'

export default function Home({ productsList }){
  const stats = [
    { label: 'Brand Partners', value: 33 },
    { label: 'Products', value: 156 },
    { label: 'Years Experience', value: 10 },
    { label: 'Coverage', value: 'UAE & Gulf' }
  ]

  return (
    <div>
      <section className="bg-[url('/media/hero-datacenter.jpg')] bg-cover bg-center text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Amia Technologies — IT Reseller & Solutions</h1>
          <p className="mt-4 text-xl max-w-2xl">Dubai HQ — Global supply, UAE installation & configuration. Reseller and wholesale of servers, networking, CCTV, desktops, laptops, smartphones and accessories.</p>
          <div className="mt-6 space-x-4">
            <a href="/products" className="bg-blue-500 px-4 py-2 rounded text-white">Browse Catalog</a>
            <a href="/contact" className="bg-transparent border border-white px-4 py-2 rounded">Request a Quote</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s=> (
            <div key={s.label} className="p-6 border rounded text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0,8).map(p=> (
            <div key={p.id} className="border rounded p-4 text-center">
              <img src={p.image ? `/media/${p.image}` : '/media/placeholder.png'} alt={p.model} className="mx-auto h-36 object-contain"/>
              <div className="mt-2 font-semibold">{p.brand} {p.model}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(){
  // products are imported from src/data/products.json
  return { props: { productsList: products } }
}
