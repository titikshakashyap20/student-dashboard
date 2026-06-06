const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const data = [3, 5, 2, 8, 4, 6, 1]

export default function ActivityTile() {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
      <p className="text-white font-medium mb-4">This week</p>
      <div className="flex items-end gap-2 h-24 w-full">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-violet-500/70 rounded-sm"
              style={{ height: `${(val / 8) * 100}px` }}
            />
            <span className="text-white/30 text-xs">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}