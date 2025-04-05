import TemplateContentDetail from "./TemplateContentDetail";

const PrivacyDetail = () => {
  return (
    <TemplateContentDetail 
      title="Privacy Policy" 
      subtitle="How we protect and handle your data"
    >
      <p>
        At Armchair Traveler, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
        and protect your personal information when you use our website and services.
      </p>
      
      <h2>Information We Collect</h2>
      
      <p>We may collect the following types of information:</p>
      
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, and profile details when you create an account</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website and services</li>
        <li><strong>Device Information:</strong> Browser type, IP address, and device details</li>
        <li><strong>Cookies:</strong> Small data files stored on your device to improve your experience</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      
      <p>We use your information to:</p>
      
      <ul>
        <li>Provide and improve our services</li>
        <li>Personalize your experience</li>
        <li>Communicate with you about our services</li>
        <li>Process transactions</li>
        <li>Analyze usage patterns to improve our website</li>
      </ul>
      
      <h2>Data Protection</h2>
      
      <p>
        We implement appropriate security measures to protect your personal information against unauthorized 
        access, alteration, disclosure, or destruction.
      </p>
      
      <h2>Your Rights</h2>
      
      <p>You have the right to:</p>
      
      <ul>
        <li>Access and receive a copy of your personal data</li>
        <li>Rectify inaccurate or incomplete information</li>
        <li>Request deletion of your personal data</li>
        <li>Object to or restrict processing of your data</li>
        <li>Data portability</li>
      </ul>
      
      <h2>Third-Party Services</h2>
      
      <p>
        Our website may contain links to third-party websites or services that are not owned or controlled 
        by Armchair Traveler. We have no control over and assume no responsibility for the content, 
        privacy policies, or practices of any third-party sites or services.
      </p>
      
      <h2>Changes to This Policy</h2>
      
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
        the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>
      
      <p className="text-sm text-muted-foreground mt-6">
        Last Updated: January 15, 2024
      </p>
      
      <h2>Contact Us</h2>
      
      <p>
        If you have any questions about this Privacy Policy, please contact us at 
        <a href="mailto:privacy@armchairtraveler.com" className="text-blue-600 hover:underline"> privacy@armchairtraveler.com</a>.
      </p>
    </TemplateContentDetail>
  );
};

export default PrivacyDetail; 