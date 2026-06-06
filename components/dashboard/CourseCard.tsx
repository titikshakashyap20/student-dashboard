"use client"

import { motion } from "framer-motion"
import { BookOpen, Server, FileCode, Paintbrush } from "lucide-react"
import type { Course } from "@/types/course"

const icons: Record<string, React.ElementType> = {
  Code: BookOpen,
  Server: Server,
  FileCode: FileCode,
  Paintbrush: Paintbrush,
}

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] || BookOpen

  return (
    <motion.div
      className="bg-[#111111] rounded-2xl p-5 border border-white/5"
      whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white/5 p-2 rounded-lg">
          <Icon size={18} className="text-white/70" />
        </div>
        <p className="text-white text-sm font-medium">{course.title}</p>
      </div>
      <div className="w-full bg-white/5 rounded-full h-1.5">
        <motion.div
          className="bg-violet-500 h-1.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <p className="text-white/30 text-xs mt-2">{course.progress}% complete</p>
    </motion.div>
  )
}