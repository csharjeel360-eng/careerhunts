import * as React from 'react'

export function DropdownMenu({ children }: { children: React.ReactNode }) { return <div className="relative inline-block">{children}</div> }
export function DropdownMenuTrigger({ children }: any) { return <button>{children}</button> }
export function DropdownMenuContent({ children }: any) { return <div className="absolute right-0 mt-2 bg-white border rounded shadow">{children}</div> }
export function DropdownMenuItem({ children }: any) { return <div className="px-3 py-2 hover:bg-slate-50">{children}</div> }
export function DropdownMenuLabel({ children }: any) { return <div className="px-3 py-2 text-xs text-slate-500">{children}</div> }
export function DropdownMenuSeparator() { return <hr className="my-1" /> }

export default DropdownMenu
