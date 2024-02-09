import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db }  from '@/db';
import * as actions from '@/actions';


interface SnippetDetailsProps {
  params: { id: string };
}

export default async function SnipppetDetails(props: SnippetDetailsProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (snippet) {
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

    return (
      <div>
        <div className="subheader">
          <h1 className="text-xl font-bold">{snippet.title}</h1>
          <div className="flex gap-2">
            <Link
              href={`/snippets/${snippet.id}/edit`}
              className="snippet-btn secondary"
            >
              Edit
            </Link>
            <form action={deleteSnippetAction}>
              <button className="snippet-btn primary">Delete</button>
            </form>
          </div>
        </div>
        <pre className="p-3 border rounded bg-gray-200 border-gray-200 text-wrap">
          <code>{snippet.code}</code>
        </pre>
      </div>
    );
  }

  return notFound();  
}

// export async function generateStaticParams() {
//   const snippets = await db.snippet.findMany();

//   return snippets.map((snippet) => {
//     return {
//       id: snippet.id.toString()
//     };
//   });
// }