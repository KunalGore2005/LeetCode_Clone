// Layout.jsx
import Left from './Left'

export default function Layout({ children }) {
  return (
    <div className="flex w-full justify-between h-screen overflow-hidden">
        <Left />
      {/* Scrollable right content */}
      <main className="flex justify-between gap-10 overflow-y-auto scrollbar-hide">
        {children}
      </main>

    </div>
  )
}