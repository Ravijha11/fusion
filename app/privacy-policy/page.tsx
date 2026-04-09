import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for our appliance repair booking service. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <>
      
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          
          <p className="mt-4 text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Introduction
              </h2>
              <p className="text-foreground leading-relaxed">
                <strong>DigitalBull</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates this website and
                booking service at <strong>www.digitalbull.co.in</strong> and is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our site and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-foreground leading-relaxed">
                We may collect information about you in a variety of ways:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-foreground leading-relaxed">
                When you book a service or contact us, we collect:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address (optional)</li>
                <li>Service address</li>
                <li>Description of your appliance issue</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your 
                browsing activities. You can control cookies through your browser settings.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our site.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and 
                  measure their effectiveness.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Microsoft Advertising and UET
              </h2>
              <p className="text-foreground leading-relaxed">
                We use Microsoft Advertising Universal Event Tracking (UET) to measure the 
                effectiveness of our advertising campaigns. UET may collect:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>Information about your device and browser</li>
                <li>Pages you visit on our website</li>
                <li>Actions you take (such as booking a service)</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                <strong>Important:</strong> We do NOT share your personal information (name, phone 
                number, email, or address) with Microsoft Advertising or any other advertising platform. 
                Only anonymized conversion data is shared.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Remarketing
              </h3>
              <p className="text-foreground leading-relaxed">
                We may use remarketing features to show you relevant ads on other websites based on 
                your previous visit to our site. You can opt out of personalized advertising at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                How to Opt Out
              </h2>
              <p className="text-foreground leading-relaxed">
                You have several options to control or limit how we and our partners use cookies:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>
                  <strong>Cookie Consent:</strong> Use our cookie consent banner to accept or reject 
                  non-essential cookies when you first visit our site.
                </li>
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies.
                </li>
                <li>
                  <strong>Microsoft Opt-Out:</strong> Visit{' '}
                  <a 
                    href="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Microsoft&apos;s ad settings
                  </a>{' '}
                  to opt out of personalized advertising.
                </li>
                <li>
                  <strong>AdChoices:</strong> Visit{' '}
                  <a 
                    href="https://youradchoices.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    YourAdChoices.com
                  </a>{' '}
                  to opt out of interest-based advertising from participating companies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>Schedule and provide appliance repair services</li>
                <li>Communicate with you about your service appointment</li>
                <li>Send you service reminders and follow-ups</li>
                <li>Improve our website and services</li>
                <li>Measure the effectiveness of our advertising</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-foreground leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>
                  <strong>Service Technicians:</strong> Independent technicians who perform repairs 
                  need your contact information and address to complete the service.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third parties who help us operate our business 
                  (e.g., payment processors, scheduling software).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights.
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                We do NOT sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information. However, no method of transmission over the Internet is 
                100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Your Rights
              </h2>
              <p className="text-foreground leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2 mt-3">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request a copy of your information in a portable format</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <address className="not-italic mt-4 text-foreground">
                <p><strong>Appliance repair service</strong></p>
                <p>Email: privacy@digitalbull.co.in</p>
                <p>Phone: 555-123-4567</p>
              </address>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
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
