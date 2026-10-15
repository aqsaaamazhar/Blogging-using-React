export default function BlogCard({ blog }) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl my-4 border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {blog.featured && (
        <span className="mb-4 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          Featured
        </span>
      )}

      <p className="mb-3 text-sm font-semibold text-blue-600">
        {blog.category}
      </p>

      <h2 className="text-xl font-bold leading-snug text-slate-900">
        {blog.title}
      </h2>

      <div className="mt-auto pt-6">
        <p className="text-sm text-slate-500">
          Written by{" "}
          <span className="font-medium text-slate-700">
            {blog.author}
          </span>
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {blog.readingTime} min read
        </p>
      </div>
    </article>
  );
}