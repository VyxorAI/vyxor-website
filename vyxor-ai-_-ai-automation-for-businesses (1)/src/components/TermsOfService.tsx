import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-blue font-medium mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <h1 className="text-4xl font-bold text-brand-navy mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Effective Date: 19 March 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, services, and digital solutions provided by Vyxor AI ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Description of Services</h2>
            <p>
              Vyxor AI is an AI automation and digital solutions company. Our services include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-powered communication tools (e.g., AI receptionists, chatbots).</li>
              <li>Workflow and business process automations.</li>
              <li>Lead management and CRM integration systems.</li>
              <li>Customer interaction and engagement tools.</li>
              <li>Digital integrations and operational efficiency solutions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Eligibility and Permitted Use</h2>
            <p>
              You must be at least 18 years old to use our services. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with all applicable local, national, and international laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Client Responsibilities</h2>
            <p>As a client of Vyxor AI, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information as required for the delivery of services.</li>
              <li>Maintain the confidentiality of any account credentials provided to you.</li>
              <li>Ensure that any data you provide to us for processing complies with relevant data protection laws (e.g., POPIA).</li>
              <li>Cooperate with us in a timely manner to facilitate the implementation of digital solutions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Quotes, Pricing, Payments, and Refunds</h2>
            <p>
              All quotes provided by Vyxor AI are valid for a period of 30 days unless otherwise specified. Pricing for services will be as set out in our formal proposals or service agreements. Payments are due as per the agreed schedule. Unless otherwise stated in a specific service agreement, all payments are non-refundable once services have commenced or digital solutions have been implemented.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Intellectual Property</h2>
            <p>
              All content, software, designs, algorithms, and intellectual property created or provided by Vyxor AI remain the exclusive property of Vyxor AI or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the digital solutions provided to you solely for your internal business operations during the term of our engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of our business relationship. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Third-Party Platforms and Integrations</h2>
            <p>
              Our services may integrate with or rely on third-party platforms (e.g., CRM systems, hosting providers, AI model providers). We are not responsible for the availability, performance, or security of these third-party platforms. Your use of such platforms is subject to their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Service Availability and No Guarantees</h2>
            <p>
              While we strive for excellence, Vyxor AI does not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uninterrupted or error-free service availability.</li>
              <li>Specific business outcomes, such as revenue increases or lead volume.</li>
              <li>The absolute accuracy of AI-generated responses or automated actions.</li>
            </ul>
            <p className="mt-4">Our services are provided on an "as is" and "as available" basis.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by South African law, Vyxor AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or in connection with your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim in the three months preceding the event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Vyxor AI, its directors, employees, and agents from any claims, damages, or expenses arising out of your breach of these Terms or your misuse of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Suspension or Termination of Service</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to our business interests or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Changes to Services</h2>
            <p>
              We continuously improve our digital solutions and may modify, update, or discontinue certain features or services at any time. We will provide reasonable notice of any material changes where possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">15. Changes to the Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website and updating the "Effective Date" at the top. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">16. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p className="mt-2">Email: <strong>info@aivyxor.com</strong></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
