import { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)

  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

  async function handleSubmit(e){
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    try{
      await fetch(FORM_ENDPOINT, { method: 'POST', body: data })
      setSent(true)
    }catch(err){
      alert('Unable to send. Please configure FORM_ENDPOINT in README and try again.')
    }
  }

  if(sent) return <div className="container mx-auto px-4 py-8"><h2 className="text-xl">Thank you — we'll contact you shortly.</h2></div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="max-w-xl">
        <label className="block mb-2">Full name<input name="name" required className="w-full border p-2" /></label>
        <label className="block mb-2">Email<input name="email" type="email" required className="w-full border p-2" defaultValue="info@amiatechnologies.com" /></label>
        <label className="block mb-2">Company<input name="company" className="w-full border p-2" /></label>
        <label className="block mb-2">Inquiry type<select name="type" className="w-full border p-2"><option>Product Inquiry</option><option>Corporate Procurement</option><option>Channel Partnership</option><option>Technical Support</option><option>General Inquiry</option></select></label>
        <label className="block mb-2">Message<textarea name="message" className="w-full border p-2" rows="6" /></label>
        <div className="mt-4"><button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button></div>
      </form>
      <div className="mt-6 text-slate-700">
        <div><strong>Office (Dubai):</strong> Office 1408, 14th Floor, The Onyx Tower 2, Sheikh Zayed Road, Greens, Dubai, UAE</div>
        <div><strong>Headquarters (UK):</strong> 4th Floor, 128 Great Portland Street, London W1W 6PY</div>
        <div className="mt-2">We use email contact only — phone is not displayed as requested.</div>
      </div>
    </div>
  )
}
