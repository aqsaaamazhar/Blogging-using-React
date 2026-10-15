export default function Header() {
  return (
    <header className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <h2 className="text-2xl font-bold">
          BlogSpace
        </h2>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>

          <a href="#blogs" className="hover:text-blue-300">
            Blogs
          </a>
        </nav>
      </div>
    </header>
  );
}