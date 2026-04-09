import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund and Return Policy',
  description: 'Refund and Return Policy for DigitalBull appliance repair services.',
  alternates: {
    canonical: '/refund',
  },
}

export default function RefundPolicyPage() {
  const lastUpdated = 'April 1, 2026'

  return (
    <>
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-secondary">
            Refund and Return Policy
          </h1>
          
          <p className="mt-4 text-gray-500">
            Last updated: {lastUpdated}
          </p>
          
          <div className="mt-12 prose prose-lg max-w-none text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Service & Refund Policy Overview
              </h2>
              <p className="leading-relaxed mb-4">
                This page explains when service-call fees may be refundable and how warranty concerns
                are handled. Warranty terms (if offered) are provided by the individual technician who
                performs the repair and can vary by repair type and parts used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Refunds for Service Calls
              </h2>
              <p className="leading-relaxed mb-4">
                The initial service call and diagnostic fee is non-refundable once our technician 
                has arrived at your location and completed the diagnostic assessment, regardless of 
                whether you choose to proceed with the recommended repair.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Refunds for Completed Repairs
              </h2>
              <p className="leading-relaxed mb-4">
                If you experience the same issue again after a completed repair, contact us with your
                invoice details. The assigned technician will review the situation and advise next
                steps based on the work performed and any applicable warranty terms.
              </p>
              <p className="leading-relaxed mb-4">
                Refunds for completed repairs are evaluated on a case-by-case basis. If we are unable 
                to successfully repair the appliance after a reasonable number of attempts, a partial 
                or full refund of the labor charges may be issued. Parts already installed generally 
                cannot be returned or refunded unless the parts themselves are proven defective from 
                the manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Cancellation Policy
              </h2>
              <p className="leading-relaxed mb-4">
                You may cancel your scheduled appointment up to 24 hours in advance without any 
                penalty. Cancellations made less than 24 hours before the scheduled appointment 
                may be subject to a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Requesting a Refund
              </h2>
              <p className="leading-relaxed mb-4">
                To request a refund or report a warranty issue, please contact our support team. 
                You will need to provide your service invoice number, date of service, and a detailed 
                explanation of the issue.
              </p>
              <address className="not-italic mt-4 text-gray-500">
                <p><strong>DigitalBull</strong></p>
                <p>Email: support@digitalbull.co.in</p>
                <p>Phone: 555-123-4567</p>
              </address>
            </section>
          </div>
          
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link 
              href="/"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
