"use client"

import React, { useState } from 'react'

export default function MobileToc() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-6">
      <div className="sm:hidden">
        <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
          {open ? 'Hide contents' : 'Show contents'}
        </button>
        {open ? (
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#why" className="text-slate-600 hover:text-sky-700">Why LuLu hires</a></li>
            <li><a href="#roles" className="text-slate-600 hover:text-sky-700">Role types</a></li>
            <li><a href="#salary-guide" className="text-slate-600 hover:text-sky-700">Salary guide</a></li>
            <li><a href="#how-to-apply" className="text-slate-600 hover:text-sky-700">How to apply</a></li>
            <li><a href="#common-mistakes" className="text-slate-600 hover:text-sky-700">Common mistakes</a></li>
            <li><a href="#key-takeaways" className="text-slate-600 hover:text-sky-700">Key takeaways</a></li>
          </ul>
        ) : null}
      </div>
      <div className="hidden sm:block">
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><a href="#why" className="text-slate-600 hover:text-sky-700">Why LuLu hires</a></li>
          <li><a href="#roles" className="text-slate-600 hover:text-sky-700">Role types</a></li>
          <li><a href="#salary-guide" className="text-slate-600 hover:text-sky-700">Salary guide</a></li>
          <li><a href="#how-to-apply" className="text-slate-600 hover:text-sky-700">How to apply</a></li>
          <li><a href="#common-mistakes" className="text-slate-600 hover:text-sky-700">Common mistakes</a></li>
          <li><a href="#key-takeaways" className="text-slate-600 hover:text-sky-700">Key takeaways</a></li>
        </ul>
      </div>
    </div>
  )
}
