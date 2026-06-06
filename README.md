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

The main challenge was debugging a Supabase RLS policy that was blocking all reads. Disabling RLS for the courses table fixed it. Also had to handle the table name casing issue (Courses vs courses) in the query.

## Environment Variables

See `.env.example` for required variables.