import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  if (blogs.length === 0) {
    return <p className="empty-message">No blogs found.</p>;
  }

  return (
    <section id="blogs" className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
}

export default BlogList;