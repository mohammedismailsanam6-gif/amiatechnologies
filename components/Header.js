import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-[#071A3A] text-white">
      <div className="container mx-auto flex items-center gap-6 py-4 px-4">
        <div className="flex items-center gap-4">
          <img src="/media/logo.png" alt="Amia Technologies" className="h-16 object-contain" />
          <div className="hidden md:block text-sm text-slate-200">Innovate · Integrate · Inspire</div>
        </div>
        <nav className="ml-auto space-x-6">
          <Link href="/"><a className="text-white">Home</a></Link>
          <Link href="/products"><a className="text-white">Products</a></Link>
          <Link href="/partners"><a className="text-white">Partners</a></Link>
          <Link href="/solutions"><a className="text-white">Solutions</a></Link>
          <Link href="/about"><a className="text-white">About</a></Link>
          <Link href="/contact"><a className="text-white">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
