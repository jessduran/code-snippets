import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="snippet-item-wrapper"
      >
        <Link href={`/snippets/${snippet.id}`}>
          {snippet.title}
        </Link>
        <div className="flex gap-1">
          <Link
            href={`/snippets/${snippet.id}`}
            className="snippet-btn primary"
          >
            View
          </Link>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="snippet-btn secondary"
          >
            Edit
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="flex gap-3 flex-col mt-10">
        {renderedSnippets}
      </div>
    </div>
  );
}
