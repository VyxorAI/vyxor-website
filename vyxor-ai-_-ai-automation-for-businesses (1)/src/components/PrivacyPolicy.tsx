import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-blue font-medium mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <h1 className="text-4xl font-bold text-brand-navy mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Effective Date: 19 March 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p>
              Welcome to Vyxor AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, inquire about our services, or interact with our AI-powered automation solutions.
            </p>
            <p>
              As a South African business, we align our data processing practices with the Protection of Personal Information Act (POPIA) and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out contact or inquiry forms on our website.</li>
              <li>Communicate with us via email, phone, or messaging platforms.</li>
              <li>Interact with our AI-powered communication tools (e.g., AI receptionists or chatbots).</li>
              <li>Subscribe to our newsletters or marketing materials.</li>
              <li>Request a quote or engage us for digital solutions.</li>
            </ul>
            <p className="mt-4">The types of information we may collect include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and business name.</li>
              <li><strong>Interaction Data:</strong> Records of your communications with us or our AI systems.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage patterns collected via cookies and analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Information</h2>
            <p>We use the information we collect for various business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our AI automation and digital solutions.</li>
              <li>Responding to inquiries, providing quotes, and managing client relationships.</li>
              <li>Improving our website, services, and customer experience.</li>
              <li>Processing leads and automating business workflows for our clients.</li>
              <li>Sending administrative information, such as updates to our terms or policies.</li>
              <li>Marketing and promotional communications (where you have consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Legal Basis for Processing</h2>
            <p>Under POPIA, we process personal information only when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have given us explicit consent.</li>
              <li>Processing is necessary for the conclusion or performance of a contract with you.</li>
              <li>Processing complies with a legal obligation.</li>
              <li>Processing protects your legitimate interests or our legitimate business interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. AI Tools and Third-Party Service Providers</h2>
            <p>
              Vyxor AI utilizes advanced AI-powered systems to deliver our services. These systems may process data to facilitate communication, lead handling, and workflow automation. We also engage trusted third-party service providers to assist in our operations, such as hosting providers, CRM systems, and communication platforms. These providers are contractually obligated to protect your data and are prohibited from using it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. How We Share Information</h2>
            <p>
              <strong>Vyxor AI does not sell your personal information.</strong> We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers to monitor and analyze the use of our service.</li>
              <li>To comply with legal obligations or respond to valid requests by public authorities.</li>
              <li>In connection with a merger, sale of company assets, or acquisition.</li>
              <li>With your explicit consent for any other purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Data Security</h2>
            <p>
              The security of your data is important to us. We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. International Data Transfers</h2>
            <p>
              Your information, including personal information, may be transferred to and maintained on computers located outside of South Africa where data protection laws may differ. We ensure that any such transfers comply with POPIA requirements for cross-border data flows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request the correction of inaccurate or incomplete information.</li>
              <li>Request the deletion of your personal information (subject to legal requirements).</li>
              <li>Object to the processing of your data for marketing purposes.</li>
              <li>Withdraw your consent at any time.</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us at info@aivyxor.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Third-Party Links</h2>
            <p>
              Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">14. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">15. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p className="mt-2">Email: <strong>info@aivyxor.com</strong></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
