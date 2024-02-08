'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function SnippetAddPage() {
  const [formState, action] = useFormState(actions.addSnippet, { message: ''});

  const renderErrorMessage = (message: string) => (
    <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
      {message}
    </div>
  )

  return (
    <form action={action} className="mt-10">
      <h3 className="font-bold m-5 text-xl">
        Add a new snippet
      </h3>
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
          <label htmlFor="code" className="w-12">Code</label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        { formState.message ? renderErrorMessage(formState.message) : null }

        <div className="flex justify-center">
          <button type="submit" className="secondary-cta-btn">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}