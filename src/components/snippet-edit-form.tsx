'use client';

import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="mt-10">
      <h3 className="font-bold m-3 text-xl">
        {snippet.title}
      </h3>
      <Editor
          height="40vh"
          theme="vs-dark"
          language='javascript'
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      <form action={editSnippetAction} className="flex justify-center m-5">
        <button type="submit" className="secondary-cta-btn">
          Save
        </button>
      </form>
    </div>
  )
}
