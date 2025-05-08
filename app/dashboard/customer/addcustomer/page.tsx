
import { handleSubmit } from "./actions/submit";

export default function Page(){
    return(
        <div>
             <main className="flex min-h-screen items-center justify-center p-8">
      <form action={handleSubmit} className="space-y-4 border p-6 rounded shadow">
        <h1 className="text-xl font-semibold">Enter Your Name</h1>
        <input
          type="text"
          name="name"
          placeholder="customer name"
          required
          className="border p-2 w-full rounded"
        />
           <input
          type="text"
          name="address"
          placeholder="customer address"
          required
          className="border p-2 w-full rounded"
        />
          <input
          type="email"
          name="email"
          placeholder="customer email"
          required
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>

        </div>
    )
}