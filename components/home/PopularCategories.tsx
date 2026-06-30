import React from 'react'

export function PopularCategories({ categories }: any) {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-xl font-semibold">Popular Categories</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {(categories || []).slice(0,6).map((c:any) => (
          <span key={c._id} className="px-3 py-1 bg-slate-100 rounded">{c.name}</span>
        ))}
      </div>
    </section>
  )
}

export default PopularCategories
