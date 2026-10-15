// export default function SearchBar({ search, setSearch }) {
//   return (
//     <section className="py-10 text-center">
//       <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//         Explore Our Blogs
//       </h1>

//       <p className="mt-3 text-slate-500">
//         Discover articles about web development and technology.
//       </p>

//       <input
//         type="text"
//         placeholder="Search blog titles..."
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//         className="mt-6 w-full max-w-xl rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//       />
//     </section>
//   );
// }

export default function SearchBar({ search, setSearch, inputRef }) {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search blog titles..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  );
}