export const metadata = {
  title: 'Privacy Policy | NetAITools',
  description: 'Read the NetAITools privacy policy, including what information may be collected and how it may be used.',
};

export default function PrivacyPage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="logo">N</span>
          <span>NetAITools</span>
        </a>
        <div className="links">
          <a href="/#tools">Browse tools</a>
          <a href="/about">About</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
          <a className="navButton" href="/#newsletter">Weekly picks</a>
        </div>
      </nav>

      <article className="legalPage shell">
        <p className="kicker">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated July 9, 2026</p>

        <section>
          <h2>Information We May Collect</h2>
          <p>
            NetAITools may collect information you choose to provide, such as an email address submitted through a newsletter form. We may also receive basic technical information, such as browser type, referring pages, and general usage activity, through analytics or hosting tools.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            We use information to operate the website, understand what content is useful, improve recommendations, send requested updates, and protect the site from abuse.
          </p>
        </section>

        <section>
          <h2>Cookies and Analytics</h2>
          <p>
            The site may use cookies, analytics, affiliate tracking, or similar technologies to measure visits, remember preferences, and understand when readers click outbound links.
          </p>
        </section>

        <section>
          <h2>Affiliate and Third-Party Links</h2>
          <p>
            NetAITools links to third-party websites. Their privacy practices are controlled by those websites, not by NetAITools. Review their policies before providing personal information or purchasing a product.
          </p>
        </section>

        <section>
          <h2>Your Choices</h2>
          <p>
            You can avoid submitting personal information, disable cookies in your browser, or unsubscribe from emails using the instructions included in those messages.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact the NetAITools team through the contact method provided on the website.
          </p>
        </section>
      </article>
    </main>
  );
}
