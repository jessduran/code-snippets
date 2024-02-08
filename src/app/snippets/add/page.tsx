'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import Editor from '@monaco-editor/react';

export default function SnippetAddPage() {
  const [formState, action] = useFormState(actions.addSnippet, { message: ''});
  const [code, setCode] = useState('');

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const renderErrorMessage = (message: string) => (
    <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
      {message}
    </div>
  )

  return (
    <form action={action}>
      <div className="subheader">
        <h1 className="font-bold text-xl">
          Add a new snippet
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">Title</label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
            hidden
            value={code}
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">Code</label>
          <Editor
            height="40vh"
            theme="vs-dark"
            language='javascript'
            defaultValue=''
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
          />
        </div>

        { formState.message ? renderErrorMessage(formState.message) : null }

        <div className="flex justify-center">
          <button type="submit" className="main-cta-btn">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}