'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handleSubmit } from './action/submit';

export default function Addemployee() {
  const [isOpen, setIsOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter(); // ← ✅ for refreshing

  const onSubmit = async (formData: FormData) => {
    setPending(true);
    await handleSubmit(formData);
    setPending(false);
    setIsOpen(false);
    router.refresh(); // ← ✅ re-fetches data from the server
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Employee
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className=" rounded p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <form action={onSubmit} className="space-y-4">
              <input type="text" name="name" required placeholder="Name" className="border p-2 w-full rounded" />
              <input type="text" name="address" required placeholder="Address" className="border p-2 w-full rounded" />
              <input type="email" name="email" required placeholder="Email" className="border p-2 w-full rounded" />
              <input type="date" name="date" required className="border p-2 w-full rounded" />
              <button
                type="submit"
                disabled={pending}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                {pending ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
