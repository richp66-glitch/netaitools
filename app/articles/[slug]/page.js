import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { articles, getArticle } from '../articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | NetAITools',
    };
  }

  return {
    title: `${article.title} | NetAITools`,
    description: article.description,
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="logo">N</span>
          <span>NetAITools</span>
        </a>
        <div className="links">
          <a href="/articles">Articles</a>
          <a href="/#tools">Browse tools</a>
          <a href="/about">About</a>
          <a className="navButton" href="/#newsletter">Weekly picks</a>
        </div>
      </nav>

      <article className="articlePage shell">
        <a className="inlineLink backLink" href="/articles">
          <ArrowLeft size={16} aria-hidden="true" /> All articles
        </a>
        <header>
          <p className="kicker">{article.category}</p>
          <h1>{article.title}</h1>
          <div className="articleByline">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <p className="articleIntro">{article.intro}</p>
        </header>

        <div className="articleBody">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
