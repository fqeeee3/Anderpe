import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Anderpe",
}

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              1. Agreement
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              anderpe.com and the services offered by Anderpe LLC
              (&quot;Anderpe&quot;, &quot;we&quot;, &quot;us&quot;), a Wyoming
              limited liability company. By using our website or engaging our
              services, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              2. Services
            </h2>
            <p>
              Anderpe provides e-commerce development, marketing, and related
              consulting services. Specific deliverables, timelines, and fees
              for client engagements are defined in separate written agreements
              or proposals, which take precedence over these Terms where they
              conflict.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              3. Acceptable use
            </h2>
            <p>
              You agree not to misuse our website, attempt to gain unauthorized
              access to our systems, interfere with the site&apos;s operation,
              or use our services for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              4. Intellectual property
            </h2>
            <p>
              All content on this website, including text, design, graphics,
              and logos, is owned by Anderpe LLC or its licensors and protected
              by applicable intellectual property laws. Client logos displayed
              on this site remain the property of their respective owners and
              are shown for portfolio purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              5. Disclaimers
            </h2>
            <p>
              Our website and its content are provided &quot;as is&quot;
              without warranties of any kind, express or implied. We do not
              guarantee specific business results from the use of our website
              or services unless expressly stated in a written agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              6. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, Anderpe LLC shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising out of or related to your use of our website or
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              7. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Wyoming,
              United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              8. Changes
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              website after changes take effect constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              9. Contact
            </h2>
            <p>
              Questions about these Terms? Email us at support@anderpe.com,
              reach us through the contact form at anderpe.com, or write to
              Anderpe LLC, 30 N. Gould St. Ste N, Sheridan, WY 82801.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
