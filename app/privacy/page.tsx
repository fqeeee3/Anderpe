import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Anderpe",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Effective date: July 10, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              1. Who we are
            </h2>
            <p>
              Anderpe LLC (&quot;Anderpe&quot;, &quot;we&quot;, &quot;us&quot;)
              is a limited liability company registered in Wyoming, United
              States, with its registered office at 30 N. Gould St. Ste N,
              Sheridan, WY 82801. This policy explains how we collect, use, and
              protect information when you visit anderpe.com or contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              2. Information we collect
            </h2>
            <p>
              We collect information you provide directly, such as your name,
              email address, company name, and message when you submit our
              contact form. We also collect limited technical data
              automatically, such as pages visited, approximate location,
              device and browser type, collected through privacy-focused
              analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              3. How we use information
            </h2>
            <p>
              We use your information to respond to inquiries, provide and
              improve our services, understand how visitors use our site, and
              comply with legal obligations. We do not sell your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              4. Sharing
            </h2>
            <p>
              We share information only with service providers who help us
              operate our website and business (such as hosting and analytics
              providers), when required by law, or in connection with a
              business transfer. Service providers are bound to use your
              information only on our behalf.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              5. Cookies and analytics
            </h2>
            <p>
              Our website uses minimal cookies and similar technologies
              necessary for site functionality and anonymous usage analytics.
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              6. Data retention
            </h2>
            <p>
              We keep personal information only as long as needed for the
              purposes described above or as required by law, then delete or
              anonymize it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              7. Your rights
            </h2>
            <p>
              Depending on your location, you may have rights to access,
              correct, delete, or restrict the use of your personal
              information. To exercise these rights, contact us through the
              form on our website and we will respond within a reasonable
              timeframe.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              8. Children
            </h2>
            <p>
              Our services are directed at businesses and are not intended for
              children under 13. We do not knowingly collect information from
              children.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              9. Changes
            </h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page with an updated effective
              date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              10. Contact
            </h2>
            <p>
              Questions about this policy? Reach us through the contact form at
              anderpe.com or by mail at Anderpe LLC, 30 N. Gould St. Ste N,
              Sheridan, WY 82801.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
