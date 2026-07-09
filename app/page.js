'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Image,
  Megaphone,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from 'lucide-react';

const categories = [
  { name: 'Writing', icon: PenTool, description: 'Draft, edit, and refine content with less friction.' },
  { name: 'Images', icon: Image, description: 'Create graphics, illustrations, ads, and product visuals.' },
  { name: 'Coding', icon: Code2, description: 'Ship, debug, document, and understand code faster.' },
  { name: 'Video', icon: Video, description: 'Make clips, voiceovers, demos, and social video assets.' },
  { name: 'Business', icon: BriefcaseBusiness, description: 'Improve meetings, research, operations, and sales work.' },
  { name: 'Marketing', icon: Megaphone, description: 'Plan campaigns, SEO, email, ads, and brand content.' },
];

const tools = [
  { name: 'ChatGPT', category: 'Business', rating: 4.9, price: 'Free plan', bestFor: 'Everyday writing, research, brainstorming, analysis, and productivity.', tag: 'Best all-around' },
  { name: 'Claude', category: 'Writing', rating: 4.8, price: 'Free plan', bestFor: 'Long documents, thoughtful analysis, and polished writing workflows.', tag: 'Best for documents' },
  { name: 'Canva AI', category: 'Images', rating: 4.7, price: 'Free plan', bestFor: 'Fast social graphics, presentations, and marketing designs.', tag: 'Best for beginners' },
  { name: 'Grammarly', category: 'Writing', rating: 4.7, price: 'Free plan', bestFor: 'Clearer emails, documents, and professional communication.', tag: 'Best editor' },
  { name: 'Perplexity', category: 'Business', rating: 4.6, price: 'Free plan', bestFor: 'Quick research with linked sources and useful follow-up prompts.', tag: 'Best for research' },
  { name: 'ElevenLabs', category: 'Video', rating: 4.6, price: 'Free tier', bestFor: 'Natural voiceovers, narration, dubbing, and audio content.', tag: 'Best for voice' },
  { name: 'Cursor', category: 'Coding', rating: 4.6, price: 'Free tier', bestFor: 'AI-assisted coding, refactoring, and codebase questions.', tag: 'Best for developers' },
  { name: 'Jasper', category: 'Marketing', rating: 4.5, price: 'Paid plans', bestFor: 'Campaign planning, brand voice, and marketing content workflows.', tag: 'Best for teams' },
];

const evaluationSteps = [
  'Practical use cases before hype',
  'Transparent price and plan notes',
  'Clear tradeoffs for the buyer',
];

function ToolCard({ tool }) {
  return (
    <article className="toolCard">
      <div className="toolHeader">
        <div className="toolMark">{tool.name.slice(0, 1)}</div>
        <div>
          <h3>{tool.name}</h3>
          <p className="toolCategory">{tool.category}</p>
        </div>
        <span className="rating">
          <Star size={14} fill="currentColor" aria-hidden="true" /> {tool.rating}
        </span>
      </div>
      <span className="toolTag">{tool.tag}</span>
      <p className="toolDescription">{tool.bestFor}</p>
      <div className="toolFooter">
        <span className="price">{tool.price}</span>
        <button className="textButton" type="button">
          Compare <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      const searchable = `${tool.name} ${tool.category} ${tool.bestFor} ${tool.tag}`.toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  function chooseCategory(category) {
    setActiveCategory(category);
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="logo">N</span>
          <span>NetAITools</span>
        </a>
        <div className="links">
          <a href="#tools">Browse tools</a>
          <a href="#categories">Categories</a>
          <a href="/about">About</a>
          <a className="navButton" href="#newsletter">Weekly picks</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell heroInner">
          <div className="heroCopyBlock">
            <div className="eyebrow">
              <Sparkles size={15} aria-hidden="true" /> Practical AI recommendations
            </div>
            <h1>Find the right AI tool for the work in front of you.</h1>
            <p className="heroCopy">
              NetAITools curates useful AI software by goal, price, and real-world fit so you can compare options without getting buried in launch hype.
            </p>
            <div className="searchBox" role="search">
              <Search size={19} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tools, categories, or use cases"
                aria-label="Search AI tools"
              />
              {query && (
                <button className="clearButton" type="button" onClick={() => setQuery('')}>
                  Clear
                </button>
              )}
              <button className="searchButton" type="button" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
                Search
              </button>
            </div>
            <div className="heroMeta">
              <span><Check size={16} aria-hidden="true" /> Clear use cases</span>
              <span><Check size={16} aria-hidden="true" /> Pricing shown</span>
              <span><Check size={16} aria-hidden="true" /> Disclosure-first links</span>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Featured recommendation summary">
            <div className="panelTop">
              <span className="signal">
                <BadgeCheck size={17} aria-hidden="true" /> Editor shortlist
              </span>
              <span className="resultCount">{tools.length} tools</span>
            </div>
            <div className="featuredTool">
              <span className="toolMark large">C</span>
              <div>
                <strong>ChatGPT</strong>
                <p>Best starting point for broad research, writing, and analysis.</p>
              </div>
            </div>
            <div className="miniStats">
              <span><strong>6</strong> Categories</span>
              <span><strong>4.7</strong> Avg rating</span>
              <span><strong>Free</strong> first picks</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section shell" id="categories">
        <div className="sectionHeading">
          <div>
            <p className="kicker">Start with your goal</p>
            <h2>Browse by category</h2>
          </div>
          <button className="quietButton" type="button" onClick={() => chooseCategory('All')}>
            View all tools <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                className={`categoryCard ${activeCategory === category.name ? 'selected' : ''}`}
                key={category.name}
                type="button"
                onClick={() => chooseCategory(category.name)}
              >
                <span className="categoryIcon"><Icon size={20} aria-hidden="true" /></span>
                <span>
                  <strong>{category.name}</strong>
                  <small>{category.description}</small>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="section toolsSection" id="tools">
        <div className="shell">
          <div className="sectionHeading">
            <div>
              <p className="kicker">Editor shortlist</p>
              <h2>{activeCategory === 'All' ? 'Useful tools to explore' : `${activeCategory} tools`}</h2>
            </div>
            <span className="resultCount">{filteredTools.length} results</span>
          </div>
          <div className="filterRow" aria-label="Tool category filters">
            <button className={activeCategory === 'All' ? 'filter active' : 'filter'} type="button" onClick={() => setActiveCategory('All')}>All</button>
            {categories.map((category) => (
              <button className={activeCategory === category.name ? 'filter active' : 'filter'} key={category.name} type="button" onClick={() => setActiveCategory(category.name)}>
                {category.name}
              </button>
            ))}
          </div>
          {filteredTools.length > 0 ? (
            <div className="toolGrid">
              {filteredTools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
            </div>
          ) : (
            <div className="emptyState">
              <h3>No matching tools yet</h3>
              <p>Try a broader search or browse all categories.</p>
              <button className="primaryButton" type="button" onClick={() => { setQuery(''); setActiveCategory('All'); }}>
                Show all tools
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section shell standards" id="standards">
        <div>
          <p className="kicker">How we review</p>
          <h2>Recommendations built for real decisions.</h2>
          <p>
            We explain who a tool is for, what it does well, what it costs, and what to consider before signing up. Affiliate relationships are disclosed clearly and never change the basics of our review standard.
          </p>
          <a className="inlineLink" href="/affiliate-disclosure">Read the affiliate disclosure</a>
        </div>
        <div className="standardList">
          {evaluationSteps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
              <p>Each recommendation has to help someone make a faster, clearer choice.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter shell" id="newsletter">
        <div>
          <p className="kicker">Weekly, not noisy</p>
          <h2>Get a short list of worthwhile AI tools.</h2>
          <p>New tools, useful comparisons, and practical ideas for people who want AI to save time instead of creating more tabs.</p>
        </div>
        <form className="emailForm" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="you@example.com" aria-label="Email address" required />
          <button className="primaryButton" type="submit">Join free</button>
          <small><ShieldCheck size={13} aria-hidden="true" /> We respect your inbox. Read our <a href="/privacy">privacy policy</a>.</small>
        </form>
      </section>

      <footer className="footer shell">
        <div>
          <a className="brand" href="/">
            <span className="logo">N</span>
            <span>NetAITools</span>
          </a>
          <p>Clearer choices for useful AI software.</p>
        </div>
        <div className="footerLinks">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
        </div>
      </footer>
    </main>
  );
}
