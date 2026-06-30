import * as React from 'react'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
}
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
}
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
}

export function Tabs({ children, className, defaultValue, value, ...props }: TabsProps) {
  return (
    <div className={`tabs ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
export function TabsList({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`tabs-list ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
export function TabsTrigger({ children, className, ...props }: TabsTriggerProps) {
  return (
    <button type="button" className={`tab-trigger ${className || ''}`} {...props}>
      {children}
    </button>
  )
}
export function TabsContent({ children, className, ...props }: TabsContentProps) {
  return (
    <div className={`tabs-content ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export default Tabs
