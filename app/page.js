'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Image,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
  Star,
  Video,
} from 'lucide-react';

const categories = [
  { name: 'Writing', icon: PenTool, description: 'Draft, edit, and improve everyday writing.' },
  { name: 'Images', icon: Image, description: 'Create graphics, illustrations, and product visuals.' },
  { name: 'Coding', icon: Code2, description: 'Build, debug, and explain software faster.' },
  { name: 'Video', icon: Video, description: 'Turn ideas into clips, ads, and presentations.' },
  { name: 'Business', icon: BriefcaseBusiness, description: 'Save time across meetings, sales, and operations.' },
  { name: 'Marketing', icon: Megaphone, description: 'Plan campaigns, SEO, social content, and ads.' },
];

const tools = [
  { name: 'ChatGPT', category: 'Business', rating: 4.9, price: 'Free plan', bestFor: 'Writing, research, brainstorming, and everyday productivity.', tag: 'Best all-around' },
  { name: 'Claude', category: 'Writing', rating: 4.8, price: 'Free plan', bestFor: 'Long documents, thoughtful analysis, and polished writing.', tag: 'Best for documents' },
  { name: 'Canva AI', category: 'Images', rating: 4.7, price: 'Free plan', bestFor: 'Social graphics, presentations, and quick marketing designs.', tag: 'Best for beginners' },
  { name: 'Grammarly', category: 'Writing', rating: 4.7, price: 'Free plan', bestFor: 'Clearer emails, documents, and professional communication.', tag: 'Best editor' },
  { name: 'Perplexity', category: 'Business', rating: 4.6, price: 'Free plan', bestFor: 'Fast research with sources and follow-up questions.', tag: 'Best for research' },
  { name: 'ElevenLabs', category: 'Video', rating: 4.6, price: 'Free tier', bestFor: 'Natural voiceovers, narration, and audio content.', tag: 'Best for voice' },
  { name: 'Cursor', category: 'Coding', rating: 4.6, price: 'Free tier', bestFor: 'AI-assisted coding, refactoring, and codebase questions.', tag: 'Best for developers' },
  { name: 'Jasper', category: 'Marketing', rating: 4.5, price: 'Paid plans', bestFor: 'Marketing campaigns, brand voice, and content workflows.', tag: 'Best for teams' },
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
        <span className="rating"><Star size={14} fill="currentColor" /> {tool.rating}</span>
      </div>
      <span className="toolTag">{tool.tag}</span>
      <p className="toolDescription">{tool.bestFor}</p>
      <div className="toolFooter">
        <span className="price">{tool.price}</span>
        <button className="textButton" type="button">Read overview <ArrowRight size={15} /></button>
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
        <a className="brand" href="#top"><span className="logo">N</span><span>NetAITools</span></a>
        <div className="links">
          <a href="#tools">Browse tools</a>
          <a href="#categories">Categories</a>
          <a href="#standards">How we review</a>
          <a className="navButton" href="#newsletter">Weekly picks</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell heroInner">
          <div className="eyebrow"><Sparkles size={15} /> Practical AI recommendations</div>
          <h1>Choose the right AI tool without wasting time.</h1>
          <p className="heroCopy">Search a focused collection of useful AI software, compare what each tool is best for, and start with a clear recommendation.</p>
          <div className="searchBox" role="search">
            <Search size={19} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools, categories, or use cases" aria-label="Search AI tools" />
            {query && <button className="clearButton" type="button" onClick={() => setQuery('')}>Clear</button>}
            <button className="searchButton" type="button" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>Search</button>
          </div>
          <div className="heroMeta"><span><Check size={16} /> Clear use cases</span><span><Check size={16} /> Pricing shown</span><span><Check size={16} /> Updated regularly</span></div>
        </div>
      </section>

      <section className="section shell" id="categories">
        <div className="sectionHeading"><div><p className="kicker">Start with your goal</p><h2>Browse by category</h2></div><button className="quietButton" type="button" onClick={() => chooseCategory('All')}>View all tools <ArrowRight size={16} /></button></div>
        <div className="categoryGrid">
          {categories.map((category) => {
            const Icon = category.icon;
            return <button className={`categoryCard ${activeCategory === category.name ? 'selected' : ''}`} key={category.name} type="button" onClick={() => chooseCategory(category.name)}><span className="categoryIcon"><Icon size={20} /></span><span><strong>{category.name}</strong><small>{category.description}</small></span><ArrowRight size={16} /></button>;
          })}
        </div>
      </section>

      <section className="section toolsSection" id="tools">
        <div className="shell">
          <div className="sectionHeading"><div><p className="kicker">Editor shortlist</p><h2>{activeCategory === 'All' ? 'Useful tools to explore' : `${activeCategory} tools`}</h2></div><span className="resultCount">{filteredTools.length} results</span></div>
          <div className="filterRow"><button className={activeCategory === 'All' ? 'filter active' : 'filter'} type="button" onClick={() => setActiveCategory('All')}>All</button>{categories.map((category) => <button className={activeCategory === category.name ? 'filter active' : 'filter'} key={category.name} type="button" onClick={() => setActiveCategory(category.name)}>{category.name}</button>)}</div>
          {filteredTools.length > 0 ? <div className="toolGrid">{filteredTools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}</div> : <div className="emptyState"><h3>No matching tools yet</h3><p>Try a broader search or browse all categories.</p><button className="primaryButton" type="button" onClick={() => { setQuery(''); setActiveCategory('All'); }}>Show all tools</button></div>}
        </div>
      </section>

      <section className="section shell standards" id="standards">
        <div><p className="kicker">Our standard</p><h2>Recommendations built for real decisions.</h2><p>We explain who a tool is for, what it does well, what it costs, and what to consider before signing up. We do not publish inflated claims or pretend every tool is right for everyone.</p></div>
        <div className="standardList"><div><span>01</span><strong>Useful first</strong><p>Every listing starts with a practical use case.</p></div><div><span>02</span><strong>Transparent pricing</strong><p>Free plans and paid plans are clearly labeled.</p></div><div><span>03</span><strong>Independent voice</strong><p>Affiliate relationships will always be disclosed.</p></div></div>
      </section>

      <section className="newsletter shell" id="newsletter"><div><p className="kicker">Weekly, not noisy</p><h2>Get a short list of worthwhile AI tools.</h2><p>New tools, useful comparisons, and practical ideas. No daily spam.</p></div><form className="emailForm" onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="you@example.com" aria-label="Email address" required /><button className="primaryButton" type="submit">Join free</button><small>Affiliate disclosure: some links may earn us a commission at no extra cost to you.</small></form></section>

      <footer className="footer shell"><div><a className="brand" href="#top"><span className="logo">N</span><span>NetAITools</span></a><p>Clearer choices for useful AI software.</p></div><div className="footerLinks"><a href="#standards">How we review</a><a href="#newsletter">Newsletter</a><a href="#top">Privacy</a></div></footer>
    </main>
  );
}
