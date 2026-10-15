export default function BlogStats({ blogs }) {
  const totalBlogs = blogs.length;

  const featuredBlogs = blogs.filter(
    (blog) => blog.featured
  ).length;

  return (
    <section className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 ">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Total Blogs
        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-900">
          {totalBlogs}
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Featured Blogs
        </p>

        <h3 className="mt-2 text-3xl font-bold text-blue-600">
          {featuredBlogs}
        </h3>
      </div>
    </section>
  );
}