import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Smart Pro. Read our terms and conditions for using our appliance repair services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <>
      
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          
          <p className="mt-4 text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-foreground leading-relaxed">
                By accessing or using the Smart Pro website and services, 
                you agree to be bound by these Terms of Service. If you do not agree with 
                any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Description of Services
              </h2>
              <p className="text-foreground leading-relaxed">
                Smart Pro is a referral service that connects customers 
                with independent local appliance repair technicians. We facilitate the 
                scheduling and coordination of appliance repair services.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                <strong>Important:</strong> Repair services are performed by independent 
                contractors, not employees of Smart Pro. We are not 
                responsible for the quality of work performed by these technicians.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Booking and Scheduling
              </h2>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>
                  Service appointments are subject to technician availability.
                </li>
                <li>
                  Same-day service is not guaranteed and depends on availability.
                </li>
                <li>
                  You agree to provide accurate contact and location information.
                </li>
                <li>
                  You agree to be present at the service location during the scheduled 
                  appointment window.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pricing and Payment
              </h2>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>
                  Prices listed on our website are starting prices for service calls.
                </li>
                <li>
                  Final pricing depends on the specific repair needed and parts required.
                </li>
                <li>
                  The technician will provide a detailed quote before beginning any repair work.
                </li>
                <li>
                  Payment is made directly to the technician upon completion of service.
                </li>
                <li>
                  Accepted payment methods vary by technician.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Cancellation Policy
              </h2>
              <p className="text-foreground leading-relaxed">
                You may cancel or reschedule your appointment by calling us at least 2 hours 
                before your scheduled appointment time. Cancellations made with less than 
                2 hours notice may be subject to a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Warranties
              </h2>
              <p className="text-foreground leading-relaxed">
                Any warranties on repair work or parts are provided by the individual 
                technician, not Smart Pro. Please discuss warranty 
                terms directly with your technician before the repair.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-foreground leading-relaxed">
                Smart Pro acts as a referral service and is not liable for:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>The quality of repair work performed by technicians</li>
                <li>Any damage caused during the repair process</li>
                <li>Any injuries or accidents occurring during service</li>
                <li>The technician&apos;s licensing, insurance, or credentials</li>
                <li>Any disputes between you and the technician</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                We recommend verifying the technician&apos;s credentials and insurance 
                before allowing work to begin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                User Responsibilities
              </h2>
              <p className="text-foreground leading-relaxed">
                By using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>Provide accurate and truthful information</li>
                <li>Provide safe access to the appliance needing repair</li>
                <li>Be present during the scheduled service appointment</li>
                <li>Pay for services rendered in a timely manner</li>
                <li>Treat technicians with respect</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, 
                is the property of Smart Pro and is protected by 
                copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Governing Law
              </h2>
              <p className="text-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance 
                with the laws of the State of New York, without regard to its conflict 
                of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Changes to Terms
              </h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. 
                Changes will be posted on this page with an updated revision date. 
                Your continued use of our services after any changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <address className="not-italic mt-4 text-foreground">
                <p><strong>Smart Pro</strong></p>
                <p>Email: legal@fusionfame.tech</p>
                <p>Phone: 555-123-4567</p>
              </address>
            </section>
          </div>
          
          <div className="mt-12 border-t border-border pt-8">
            <Link 
              href="/"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      
    </>
  )
}
