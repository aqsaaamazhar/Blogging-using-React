// import { useState } from "react";

// import Header from "./components/Header";
// import SearchBar from "./Components/SearchBar";
// import BlogCard from "./Components/BlogCard";
// import BlogList from "./Components/BlogList";
// import BlogStats from "./Components/BlogStats";

// import initialBlogs from "./data/blogs";

// export default function App() {
//   const [search, setSearch] = useState("");

//   const filteredBlogs = initialBlogs.filter((blog) =>
//     blog.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div id="home" className="min-h-screen bg-slate-50">
//       <Header />

//       <main className="mx-auto max-w-6xl px-5 pb-16">
//         <SearchBar
//           search={search}
//           setSearch={setSearch}
//         />

//         <BlogStats blogs={initialBlogs} />

//         <div className="mt-10 mb-5">
//           <h2 className="text-2xl font-bold text-slate-900">
//             Latest Articles
//           </h2>

//           <p className="mt-2 text-slate-500">
//             Browse our latest articles and tutorials.
//           </p>
//         </div>

//         <BlogList blogs={filteredBlogs} />
//       </main>
//     </div>
//   );
// }



// import { useState } from "react";
// import initialBlogs from "./data/blogs";
// import useFilteredBlogs from "./Hooks/useFilteredBlogs";

// import Header from "./Components/Header";
// import SearchBar from "./Components/SearchBar";
// import BlogList from "./Components/BlogList";
// import BlogStats from "./Components/BlogStats";

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const filteredBlogs = useFilteredBlogs(
//     initialBlogs,
//     search,
//     category
//   );

//   return (
//     <div id="home">
//       <Header />

//       <main className="mx-auto max-w-6xl px-5 pb-16">
//         <SearchBar
//           search={search}
//           setSearch={setSearch}
//         />

//         <select
//           value={category}
//           onChange={(event) => setCategory(event.target.value)}
//         >
//           <option value="All">All Categories</option>
//           <option value="React">React</option>
//           <option value="Redux">Redux</option>
//           <option value="Node">Node</option>
//         </select>

//         <BlogStats blogs={initialBlogs} />

//         <BlogList blogs={filteredBlogs} />
//       </main>
//     </div>
//   );
// }



import { useState, useRef, useEffect, useCallback } from "react";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import BlogList from "./Components/BlogList";
import BlogStats from "./Components/BlogStats";

import initialBlogs from "./data/blogs";
import useFilteredBlogs from "./Hooks/useFilteredBlogs";

export default function App() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Create a reference for the search input
  const searchInputRef = useRef(null);

  // Focus the search input when App first loads
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Delete a blog by its ID
  const handleDelete = useCallback((blogId) => {
    setBlogs((currentBlogs) =>
      currentBlogs.filter((blog) => blog.id !== blogId)
    );

    setFavoriteIds((currentIds) =>
      currentIds.filter((id) => id !== blogId)
    );
  }, []);

  // Add or remove a blog from favorites
  const handleToggleFavorite = useCallback((blogId) => {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(blogId)) {
        return currentIds.filter((id) => id !== blogId);
      }

      return [...currentIds, blogId];
    });
  }, []);

  // Filter blogs by search text and category
  const filteredBlogs = useFilteredBlogs(
    blogs,
    search,
    category
  );

  return (
    <div id="home" className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mt-10 mb-5 text-center sm:text-left">
         <h2 className="text-4xl font-bold text-slate-900 text-center  ">
           Latest Articles
        </h2>

          <p className="mt-2 text-slate-500 text-center ">
            Browse our latest articles and tutorials.
           </p>
          </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          inputRef={searchInputRef}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2"
        >
          <option value="All">All Categories</option>
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="Node">Node</option>
        </select>

        <div className="my-6">
          <BlogStats blogs={blogs} />
        </div>

        <BlogList
          blogs={filteredBlogs}
          favoriteIds={favoriteIds}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </div>
  );
}