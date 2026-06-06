import Sidebar from "@/components/dashboard/Sidebar"
import HeroTile from "@/components/dashboard/HeroTile"
import CourseCard from "@/components/dashboard/CourseCard"
import ActivityTile from "@/components/dashboard/ActivityTile"
import MotionWrapper from "@/components/dashboard/MotionWrapper"
import { supabase } from "@/lib/supabase"
import type { Course } from "@/types/course"

export default async function Home() {
  const { data, error } = await supabase.from("Courses").select("*")
  const courses: Course[] = error || !data ? [] : data

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
        <div className="col-span-1 md:col-span-2">
          <MotionWrapper delay={0}>
            <HeroTile />
          </MotionWrapper>
        </div>
        {courses.map((course, i) => (
          <MotionWrapper key={course.id} delay={0.1 * (i + 1)}>
            <CourseCard course={course} />
          </MotionWrapper>
        ))}
        <div className="col-span-1 md:col-span-2">
          <MotionWrapper delay={0.5}>
            <ActivityTile />
          </MotionWrapper>
        </div>
      </main>
    </div>
  )
}