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
    <div>
      <div className="subheader">
        <h1 className="font-bold text-xl">
          {snippet.title}
        </h1>
      </div>

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
