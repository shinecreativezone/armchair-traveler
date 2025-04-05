import TemplateContentDetail from "./TemplateContentDetail";

const CookiesDetail = () => {
  return (
    <TemplateContentDetail 
      title="Cookies Policy" 
      subtitle="How we use cookies and similar technologies"
    >
      <p>
        This Cookies Policy explains how Armchair Traveler uses cookies and similar technologies to recognize 
        you when you visit our website. It explains what these technologies are and why we use them, as well 
        as your rights to control our use of them.
      </p>
      
      <h2>What Are Cookies?</h2>
      
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
        Cookies are widely used by website owners to make their websites work, or to work more efficiently, as 
        well as to provide reporting information.
      </p>
      
      <h2>Types of Cookies We Use</h2>
      
      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They enable basic functions like page 
        navigation and access to secure areas of the website. The website cannot function properly without these cookies.
      </p>
      
      <h3>Preference Cookies</h3>
      <p>
        These cookies enable the website to remember information that changes the way the website behaves or looks, 
        like your preferred language or the region you are in.
      </p>
      
      <h3>Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting and reporting information 
        anonymously. They help us improve the way our website works.
      </p>
      
      <h3>Marketing Cookies</h3>
      <p>
        These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
        and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
      </p>
      
      <h2>How to Control Cookies</h2>
      
      <p>
        You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
        you may still use our website though your access to some functionality and areas of our website may be restricted.
      </p>
      
      <h2>Third-Party Cookies</h2>
      
      <p>
        In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the 
        website and deliver advertisements on and through the website.
      </p>
      
      <h2>Updates to This Policy</h2>
      
      <p>
        We may update this Cookies Policy from time to time in order to reflect changes to the cookies we use or for 
        other operational, legal, or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to 
        stay informed about our use of cookies and related technologies.
      </p>
      
      <p className="text-sm text-muted-foreground mt-6">
        Last Updated: January 15, 2024
      </p>
      
      <h2>Contact Us</h2>
      
      <p>
        If you have any questions about our use of cookies or other technologies, please contact us at 
        <a href="mailto:privacy@armchairtraveler.com" className="text-blue-600 hover:underline"> privacy@armchairtraveler.com</a>.
      </p>
    </TemplateContentDetail>
  );
};

export default CookiesDetail; 