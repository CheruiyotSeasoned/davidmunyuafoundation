import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";

// Example hero image (you can replace this with your own banner)
import blogHero from "@/assets/blog-hero.jpg"; 

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                Post Not Found
              </h1>
              <Link
                to="/blog"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                ← BACK TO BLOG
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Function to render markdown-like content
  const renderContent = () => {
    const lines = post.content.split("\n");
    return lines.map((line, idx) => {
      line = line.trim();
      if (!line) return <br key={idx} />;
      if (line.startsWith("# ")) return <h1 key={idx} className="text-3xl md:text-4xl font-light text-architectural mb-8 mt-12">{line.substring(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={idx} className="text-2xl md:text-3xl font-light text-architectural mb-6 mt-10">{line.substring(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={idx} className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-8">{line.substring(4)}</h3>;
      if (line.startsWith("- **") && line.endsWith("**")) return <li key={idx} className="ml-6 mb-2"><strong className="text-foreground">{line.substring(4, line.length - 2)}</strong></li>;
      if (line.startsWith("- ")) return <li key={idx} className="ml-6 mb-2">{line.substring(2)}</li>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={idx} className="mb-4"><strong className="text-foreground">{line.substring(2, line.length - 2)}</strong></p>;
      return <p key={idx} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section (generic banner) */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url(${blogHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
        <div className="relative z-10 px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Blog Post</h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            Insights, updates, and stories from the David Munyua Foundation
          </p>
          <Link
            to="/blog"
            className="inline-block mt-6 text-white/80 hover:text-white underline text-sm"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Featured Blog Image */}
          <div className="w-full h-96 mb-12 overflow-hidden rounded-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="prose prose-lg max-w-none">{renderContent()}</div>

          {/* Author Info */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-muted rounded-full"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground">{post.author}</h3>
                <p className="text-muted-foreground">Architect & Writer</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-architectural mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-sm">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h4 className="text-lg font-light text-architectural group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {relatedPost.date} • {relatedPost.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
