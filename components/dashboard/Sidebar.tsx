"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Home, Settings, Trophy, Menu } from "lucide-react"

const links = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Courses" },
  { icon: Trophy, label: "Achievements" },
  { icon: Settings, label: "Settings" },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState("Home")

  return (
    <>
      <nav
        className={`hidden md:flex h-screen bg-[#111111] border-r border-white/5 flex-col gap-2 p-3 transition-all duration-300 ${collapsed ? "w-16" : "w-52"}`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white self-end"
        >
          <Menu size={18} />
        </button>

        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`relative flex items-center gap-3 p-2 rounded-lg transition-colors ${active === label ? "text-white" : "text-white/40 hover:text-white"}`}
          >
            {active === label && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-lg"
              />
            )}
            <Icon size={18} className="relative z-10" />
            {!collapsed && <span className="text-sm relative z-10">{label}</span>}
          </button>
        ))}
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-white/5 flex justify-around p-3 z-50">
        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex flex-col items-center gap-1 ${active === label ? "text-white" : "text-white/40"}`}
          >
            <Icon size={20} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}