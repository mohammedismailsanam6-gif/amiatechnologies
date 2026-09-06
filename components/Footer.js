export default function Footer(){
  return (
    <footer className="bg-[#071A3A] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center md:text-left">
          <img src="/media/logo.png" alt="Amia Technologies" className="mx-auto md:mx-0 h-20 object-contain" />
          <div className="mt-2 text-slate-300">Innovate · Integrate · Inspire</div>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-slate-300">
            <li>Products</li>
            <li>Partners</li>
            <li>Solutions</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-2 text-slate-300">info@amiatechnologies.com</div>
          <div className="mt-2"><a className="text-slate-300 underline" href="https://www.linkedin.com/company/amia-technologies/">LinkedIn</a></div>
        </div>
      </div>
      <div className="text-center text-slate-400 mt-6">© {new Date().getFullYear()} Amia Technologies</div>
    </footer>
  )
}
