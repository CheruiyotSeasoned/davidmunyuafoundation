import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";

import blogHero from "@/assets/blog-hero.jpg";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "FOUNDATION NEWS",
    "TOURNAMENTS",
    "YOUTH PROGRAMS",
    "COMMUNITY IMPACT",
  ];

  const filteredPosts =
    activeCategory === "ALL"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogHero})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8">
              News & Impact
            </h1>

            <p className="text-xl text-white/80">
              Stories, updates, and milestones from the David Munyua Dart Champion
              Foundation — growing darts, empowering youth, and building champions
              across Kenya.
            </p>

            <p className="mt-8 text-sm uppercase tracking-widest text-white/60">
              Growing darts • Empowering youth • Building champions
            </p>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-10 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative text-sm uppercase tracking-wide transition-colors duration-300
                    ${
                      activeCategory === category
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}

                  {/* underline */}
                  <span
                    className={`absolute -bottom-2 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left
                      ${
                        activeCategory === category
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= POSTS GRID ================= */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.id}`} className="block">
                    {/* Image */}
                    <div className="relative overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1">
                        <span className="text-xs font-medium text-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>

                      <h2 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <span className="inline-block pt-4 text-sm text-foreground hover:text-muted-foreground transition-colors duration-300 underline-offset-4 group-hover:underline">
                        Read story →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Stay Connected
            </h2>

            <p className="text-xl text-muted-foreground mb-12">
              Join our community and receive updates on tournaments, youth
              programs, and the impact we’re making through darts in Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-8 py-4 bg-foreground text-background hover:bg-muted-foreground transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
