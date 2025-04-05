import TemplateContentDetail from "./TemplateContentDetail";

const TermsDetail = () => {
  return (
    <TemplateContentDetail 
      title="Terms of Service" 
      subtitle="Please read these terms carefully before using our platform"
    >
      <p>
        By accessing or using the Armchair Traveler website and services, you agree to be bound by these Terms of Service.
        If you do not agree to all the terms and conditions, you should not use our service.
      </p>
      
      <h2>1. Account Registration</h2>
      
      <p>
        To access certain features of our platform, you may need to create an account. You are responsible for maintaining 
        the confidentiality of your account credentials and for all activities that occur under your account.
      </p>
      
      <h2>2. Content</h2>
      
      <p>
        Our platform contains content provided by us, users, and third parties. All content must comply with our Content Policy.
        We reserve the right to remove any content that violates these terms or that we find objectionable.
      </p>
      
      <h2>3. User Conduct</h2>
      
      <p>You agree not to:</p>
      
      <ul>
        <li>Use our services for any illegal purpose</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with or disrupt our services</li>
        <li>Collect or harvest data from our services without permission</li>
        <li>Post content that is offensive, harmful, or violates others' rights</li>
      </ul>
      
      <h2>4. Intellectual Property</h2>
      
      <p>
        The content, features, and functionality of our platform are owned by Armchair Traveler and protected by copyright, 
        trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works 
        without our express permission.
      </p>
      
      <h2>5. Third-Party Links</h2>
      
      <p>
        Our services may contain links to third-party websites or services that are not owned or controlled by us. 
        We have no control over, and assume no responsibility for, the content, privacy policies, or practices of 
        any third-party websites or services.
      </p>
      
      <h2>6. Limitation of Liability</h2>
      
      <p>
        To the maximum extent permitted by law, Armchair Traveler shall not be liable for any indirect, incidental, 
        special, consequential, or punitive damages resulting from your use of or inability to use our services.
      </p>
      
      <h2>7. Modifications to Terms</h2>
      
      <p>
        We may modify these Terms at any time by posting the updated terms on our website. Your continued use of our 
        services after any such changes constitutes your acceptance of the new Terms.
      </p>
      
      <h2>8. Termination</h2>
      
      <p>
        We may terminate or suspend your account and access to our services at our sole discretion, without notice, 
        for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
      </p>
      
      <h2>9. Governing Law</h2>
      
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
        Armchair Traveler is established, without regard to its conflict of law provisions.
      </p>
      
      <p className="text-sm text-muted-foreground mt-6">
        Last Updated: January 15, 2024
      </p>
      
      <h2>Contact Us</h2>
      
      <p>
        If you have any questions about these Terms, please contact us at 
        <a href="mailto:legal@armchairtraveler.com" className="text-blue-600 hover:underline"> legal@armchairtraveler.com</a>.
      </p>
    </TemplateContentDetail>
  );
};

export default TermsDetail; 