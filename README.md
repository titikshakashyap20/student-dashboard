# Student Dashboard

A learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 15 (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS
- Framer Motion
- Lucide React

## Architecture

Course data is fetched server-side using Next.js Server Components, keeping API keys secure and off the client. The Supabase client in `lib/supabase.ts` is used only in server components.

Client components (Sidebar, CourseCard) are marked with `"use client"` only where interactivity or animations require it.

Suspense/loading is handled via `app/loading.tsx` which shows skeleton loaders while Supabase data is being fetched.

## Setup

1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
4. Run `npm run dev`

## Challenges

The main challenge was debugging a Supabase RLS policy that was blocking all reads. Disabling RLS for the courses table fixed it. Figuring out the server vs client component split took some time. I kept getting errors because I was trying to use Framer Motion in server components, which don't support browser APIs. I had to move animations to separate client components and keep the data fetching in the server component.

## Environment Variables

See `.env.example` for required variables.

## Live Demo

https://student-dashboard-ten-ruddy.vercel.app/