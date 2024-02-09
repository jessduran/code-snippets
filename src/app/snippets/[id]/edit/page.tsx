import { notFound } from 'next/navigation';
import { db } from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form';

interface EditSnippetProps {
  params: {
    id: string
  }
}

export default async function SnippetEditPage(props: EditSnippetProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (snippet) {
    return (
      <SnippetEditForm snippet={snippet} />
    );
  }

  return notFound();
}


export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString()
    };
  });
}
