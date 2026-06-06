export default function HeroTile() {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
      <p className="text-white/40 text-sm mb-1">Welcome back,</p>
      <h1 className="text-white text-3xl font-bold mb-4">Titiksha 👋</h1>
      <div className="flex items-center gap-2">
        <span className="text-orange-400 text-xl">🔥</span>
        <span className="text-white/70 text-sm">7 day streak</span>
      </div>
    </div>
  )
}