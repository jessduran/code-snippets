'use client';

interface ErrorPageProps {
  error: Error,
  reset: () => void
}

export default function SnippetsErrorPage({ error }: ErrorPageProps) {
  return (
    <div>{error.message}</div>
  )
}
