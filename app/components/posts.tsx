'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatDate } from 'app/lib/format'

const GOAL_YEAR = 2026
const GOAL_COUNT = 26

type Post = {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    summary: string
  }
}

export function BlogPosts({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('')

  const count2026 = posts.filter(
    (post) => new Date(post.metadata.publishedAt).getFullYear() === GOAL_YEAR
  ).length

  const filtered = posts
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ? -1
        : 1
    )
    .filter((post) => {
      const q = query.toLowerCase()
      return (
        post.metadata.title.toLowerCase().includes(q) ||
        post.metadata.summary.toLowerCase().includes(q)
      )
    })

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-1">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 shrink-0">
          {GOAL_YEAR} goal: write {GOAL_COUNT} articles &mdash; {count2026} / {GOAL_COUNT} so far
        </p>
        <div className="relative w-full sm:w-48">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search articles…"
            className="w-full pl-8 pr-3 py-1 text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all"
          />
        </div>
      </div>
      {filtered.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium leading-snug">
              {post.metadata.title}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm tabular-nums whitespace-nowrap flex-shrink-0">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
