import AllBlogs from "./AllBlogs";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title">Latest Blog</h2>
      <span className="section__subtitle">
        A Look at How Ideas Become Realities.
      </span>

      <div className="blog_container container">
        <AllBlogs />
      </div>
    </section>
  );
};

export default Blog;
