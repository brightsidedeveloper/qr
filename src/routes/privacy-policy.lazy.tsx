import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/privacy-policy')({
  component: () => (
    <div className="p-6 space-y-6 leading-relaxed">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 10/16/2024
      </p>
      <p>
        BrightSide Developer LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, and share information when you use the Room 8 iOS App ("the App").
      </p>

      <h2 className="text-xl font-semibold">1. Information We Collect</h2>
      <p>
        <strong>Personal Information:</strong> When you use the App, we may collect personal information, such as your name, email address,
        and any other information you provide when creating an account.
      </p>
      <p>
        <strong>Device Information:</strong> We may collect information about your device, including the device type, operating system,
        unique device identifiers, and mobile network information.
      </p>
      <p>
        <strong>Usage Information:</strong> We may collect data on how you use the App, including the features you access, time spent using
        the App, and crash logs.
      </p>

      <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
      <p>We may use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide and improve the App’s functionality.</li>
        <li>Personalize your experience within the App.</li>
        <li>Communicate with you, such as for account updates or customer support.</li>
        <li>Monitor and analyze trends, usage, and activities to improve the App.</li>
        <li>Ensure compliance with legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
      <p>We do not sell or share your personal information with third parties, except:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Service Providers:</strong> We may share your data with trusted third-party service providers who assist us in operating
          the App or providing services, but only to the extent necessary for them to perform such services.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required by law, or in good faith belief that such action
          is necessary to comply with legal obligations or to protect our rights.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">4. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration.
        However, no security system is completely foolproof, and we cannot guarantee the absolute security of your information.
      </p>

      <h2 className="text-xl font-semibold">5. Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide the services outlined in this Privacy Policy or as required
        by law. When no longer needed, your data will be securely deleted or anonymized.
      </p>

      <h2 className="text-xl font-semibold">6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Access, correct, or delete your personal information.</li>
        <li>Object to or restrict the processing of your data.</li>
        <li>Withdraw your consent at any time, where applicable.</li>
      </ul>
      <p>If you would like to exercise any of these rights, please contact us at tim@brightsidedeveloper.com.</p>

      <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
      <p>
        The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy
        practices of these third parties, and we encourage you to review their privacy policies.
      </p>

      <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page with a revised
        effective date. Your continued use of the App after changes have been made indicates your acceptance of the updated Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold">9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:</p>
      <p>
        <strong>BrightSide Developer LLC</strong>
        <br />
        Email: tim@brightsidedeveloper.com
      </p>
    </div>
  ),
})
