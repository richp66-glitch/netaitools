import { Search, Star, ArrowRight, Zap, PenTool, Image, Code, Video, Briefcase, Megaphone } from 'lucide-react';

const tools = [
  { name: 'ChatGPT', category: 'AI Assistant', rating: '4.9', price: 'Free / Paid', bestFor: 'Everyday AI help, writing, research, and productivity' },
  { name: 'Claude', category: 'AI Assistant', rating: '4.8', price: 'Free / Paid', bestFor: 'Long-form writing, analysis, and document work' },
  { name: 'Canva AI', category: 'Design', rating: '4.7', price: 'Free / Paid', bestFor: 'Fast graphics, social posts, and marketing designs' },
  { name: 'Grammarly', category: 'Writing', rating: '4.7', price: 'Free / Paid', bestFor: 'Editing, grammar, and professional writing' },
  { name: 'Perplexity', category: 'Research', rating: '4.6', price: 'Free / Paid', bestFor: 'AI search, research, and quick answers with sources' },
  { name: 'ElevenLabs', category: 'Audio', rating: '4.6', price: 'Free / Paid', bestFor: 'AI voiceovers, narration, and audio content' },
];

const categories = [
  { icon: PenTool, title: 'Writing', text: 'AI writing tools for blogs, emails, resumes, and marketing copy.' },
  { icon: Image, title: 'Image Generation', text: 'Create graphics, product images, and social media visuals.' },
  { icon: Code, title: 'Coding', text: 'AI coding assistants for developers and beginners.' },
  { icon: Video, title: 'Video', text: 'Turn ideas into videos, clips, avatars, and ads.' },
  { icon: Briefcase, title: 'Business', text: 'Tools for sales, operations, meetings, and productivity.' },
  { icon: Megaphone, title: 'Marketing', text: 'AI tools for ads, SEO, social media, and content growth.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="logo">N</span> NetAITools</div>
        <div className="links">
          <a href="#tools">Tools</a>
          <a href="#categories">Categories</a>
          <a href="#reviews">Reviews</a>
          <a href="#newsletter" className="navBtn">Get Updates</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge"><Zap size={16}/> New AI tools added weekly</div>
        <h1>Find the Best AI Tools in Minutes</h1>
        <p>Compare AI tools, read simple reviews, and discover the perfect software for writing, coding, design, marketing, productivity, and more.</p>
        <div className="searchBox">
          <Search size={20}/>
          <input placeholder="Search AI tools, categories, or use cases..." />
          <button>Search</button>
        </div>
        <div className="heroBtns">
          <a href="#tools" className="primary">Browse Top Tools <ArrowRight size={18}/></a>
          <a href="#categories" className="secondary">Explore Categories</a>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="sectionTop">
          <div>
            <p className="eyebrow">Featured picks</p>
            <h2>Top AI Tools to Start With</h2>
          </div>
          <a href="#newsletter">Get weekly picks →</a>
        </div>
        <div className="toolGrid">
          {tools.map((tool) => (
            <div className="card" key={tool.name}>
              <div className="cardTop">
                <h3>{tool.name}</h3>
                <span><Star size={15} fill="currentColor"/> {tool.rating}</span>
              </div>
              <p className="category">{tool.category}</p>
              <p>{tool.bestFor}</p>
              <div className="cardBottom">
                <small>{tool.price}</small>
                <button>Read Review</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt" id="categories">
        <p className="eyebrow">Browse by need</p>
        <h2>AI Tool Categories</h2>
        <div className="categoryGrid">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div className="catCard" key={cat.title}>
                <Icon size={26}/>
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section split" id="reviews">
        <div>
          <p className="eyebrow">Our promise</p>
          <h2>Simple AI reviews that help you choose faster</h2>
          <p>NetAITools is built to help real people decide which AI tools are worth trying. We focus on practical use cases, pricing, pros, cons, and who each tool is best for.</p>
        </div>
        <div className="reviewBox">
          <h3>Next articles to publish</h3>
          <ul>
            <li>The 25 Best AI Tools for 2026</li>
            <li>Best Free AI Tools for Beginners</li>
            <li>ChatGPT vs Claude vs Gemini</li>
            <li>Best AI Tools for Small Business</li>
            <li>Best AI Writing Tools</li>
          </ul>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <h2>Get the best AI tools each week</h2>
        <p>Join the NetAITools newsletter for new tools, deals, comparisons, and beginner-friendly AI tips.</p>
        <div className="emailBox">
          <input placeholder="Enter your email" />
          <button>Join Free</button>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="logo">N</span> NetAITools</div>
        <p>Discover, compare, and choose better AI tools.</p>
      </footer>
    </main>
  );
}
