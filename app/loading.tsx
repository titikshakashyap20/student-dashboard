export default function Loading() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:block w-52 h-screen bg-[#111111] border-r border-white/5" />
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
        <div className="col-span-1 md:col-span-2 h-36 bg-white/5 rounded-2xl animate-pulse" />
        <div className="h-28 bg-white/5 rounded-2xl animate-pulse" />
        <div className="h-28 bg-white/5 rounded-2xl animate-pulse" />
        <div className="h-28 bg-white/5 rounded-2xl animate-pulse" />
        <div className="h-28 bg-white/5 rounded-2xl animate-pulse" />
        <div className="col-span-1 md:col-span-2 h-40 bg-white/5 rounded-2xl animate-pulse" />
      </main>
    </div>
  )
}