import { ArrowRight } from 'lucide-react';
import { articles } from './articles';

export const metadata = {
  title: 'AI Tool Articles | NetAITools',
  description: 'Read practical NetAITools guides, comparisons, and beginner-friendly articles about choosing useful AI software.',
};

export default function ArticlesPage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="logo">N</span>
          <span>NetAITools</span>
        </a>
        <div className="links">
          <a href="/#tools">Browse tools</a>
          <a href="/#categories">Categories</a>
          <a href="/about">About</a>
          <a className="navButton" href="/#newsletter">Weekly picks</a>
        </div>
      </nav>

      <section className="pageHero">
        <div className="shell narrow">
          <p className="kicker">AI tool guides</p>
          <h1>Clear articles for choosing better AI tools.</h1>
          <p>
            Practical buying guides, comparisons, and beginner-friendly explainers for people who want AI software to save time and improve real work.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="articleGrid">
          {articles.map((article) => (
            <article className="articleCard" key={article.slug}>
              <div className="articleMeta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a className="inlineLink" href={`/articles/${article.slug}`}>
                Read article <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
