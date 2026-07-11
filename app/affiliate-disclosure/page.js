export const metadata = {
  title: 'Affiliate Disclosure | NetAITools',
  description: 'Read the NetAITools affiliate disclosure and learn how affiliate links may be used on the site.',
};

export default function AffiliateDisclosurePage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="logo">N</span>
          <span>NetAITools</span>
        </a>
        <div className="links">
          <a href="/#tools">Browse tools</a>
          <a href="/articles">Articles</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a className="navButton" href="/#newsletter">Weekly picks</a>
        </div>
      </nav>

      <article className="legalPage shell">
        <p className="kicker">Affiliate Disclosure</p>
        <h1>Affiliate Disclosure</h1>
        <p className="updated">Last updated July 9, 2026</p>

        <section>
          <h2>Our Relationship With Affiliate Partners</h2>
          <p>
            NetAITools may include affiliate links to AI tools, software products, and related services. If you click an affiliate link and make a purchase or start a paid plan, we may earn a commission at no extra cost to you.
          </p>
          <p>
            For example, our ElevenLabs recommendation may use a referral link. The link does not change the price you pay, and it does not guarantee a positive review or placement.
          </p>
        </section>

        <section>
          <h2>How Affiliate Links Affect Recommendations</h2>
          <p>
            Affiliate relationships do not guarantee a positive review, ranking, or placement. Our goal is to explain what a tool is useful for, who it may fit, and what readers should consider before signing up.
          </p>
        </section>

        <section>
          <h2>Reader Responsibility</h2>
          <p>
            Product pricing, features, limits, and terms can change. Review the provider's current details before making a purchase decision.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            If you have questions about an affiliate relationship or a recommendation on NetAITools, contact the NetAITools team through the contact method provided on the website.
          </p>
        </section>
      </article>
    </main>
  );
}
