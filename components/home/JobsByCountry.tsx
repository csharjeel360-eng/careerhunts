import React from 'react'

export function JobsByCountry({ countries }: any) {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-xl font-semibold">Jobs By Country</h2>
      <div className="mt-4">
        {(!countries || countries.length === 0) ? (
          <div className="p-6 border rounded bg-slate-50 text-slate-600">No country data available.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(countries || []).slice(0,8).map((c:any) => (
              <div key={c._id} className="p-3 border rounded">{c.name}</div>
            ))}
          </div>
        )}
        {process.env.NODE_ENV !== 'production' && (
          <div className="mt-3 text-xs text-slate-400">Debug: fetched {countries ? countries.length : 0} countries</div>
        )}
      </div>
    </section>
  )
}

export default JobsByCountry
