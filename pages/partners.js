import partners from '../src/data/partners.json'

export default function Partners(){
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Partners</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map(p=> (
          <div key={p.id} className="border p-4 rounded flex items-center justify-center">
            {p.logo ? <img src={`/media/${p.logo}`} alt={p.name} className="h-16 object-contain" /> : <div className="font-semibold">{p.name}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
