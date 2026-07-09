import { ArrowRight, BadgeCheck, Search, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: Search,
    title: 'Useful before trendy',
    body: 'We focus on tools that help with clear jobs like writing, research, design, coding, marketing, and business operations.',
  },
  {
    icon: BadgeCheck,
    title: 'Plain-language recommendations',
    body: 'Every listing should make it easy to understand who the tool is for, what it does well, and where it may not be the best fit.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent relationships',
    body: 'Some links may be affiliate links. When that happens, we disclose it and keep our recommendations grounded in usefulness.',
  },
];

export const metadata = {
  title: 'About NetAITools | Practical AI Tool Recommendations',
  description: 'Learn how NetAITools helps readers compare useful AI software with clear categories, practical notes, and transparent disclosures.',
};

export default function AboutPage() {
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
          <a href="/privacy">Privacy</a>
          <a className="navButton" href="/#newsletter">Weekly picks</a>
        </div>
      </nav>

      <section className="pageHero">
        <div className="shell narrow">
          <p className="kicker">About NetAITools</p>
          <h1>AI software recommendations for people making real choices.</h1>
          <p>
            NetAITools exists to make the crowded AI software market easier to navigate. We organize tools by practical use case, highlight sensible starting points, and explain the tradeoffs in direct language.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="principleGrid">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article className="infoCard" key={principle.title}>
                <span className="categoryIcon"><Icon size={20} aria-hidden="true" /></span>
                <h2>{principle.title}</h2>
                <p>{principle.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section shell splitSection">
        <div>
          <p className="kicker">Our approach</p>
          <h2>We favor clarity over exhaustive lists.</h2>
        </div>
        <div className="copyStack">
          <p>
            A directory with thousands of entries can be harder to use than a focused shortlist. NetAITools is built around common tasks and straightforward comparisons so readers can find a reasonable next step quickly.
          </p>
          <p>
            We may earn from some outbound links, but affiliate relationships do not guarantee placement and do not remove the need for clear disclosures.
          </p>
          <a className="inlineLink" href="/affiliate-disclosure">
            Read the affiliate disclosure <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
