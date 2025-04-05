import TemplateContentDetail from "./TemplateContentDetail";

const ContentPolicyDetail = () => {
  return (
    <TemplateContentDetail 
      title="Content Policy" 
      subtitle="Guidelines for content on Armchair Traveler"
    >
      <p>
        At Armchair Traveler, we strive to create a positive, engaging environment where users can share their 
        travel experiences and learn about destinations around the world. This Content Policy outlines the types 
        of content that are acceptable on our platform and content that is prohibited.
      </p>
      
      <h2>Acceptable Content</h2>
      
      <p>We encourage content that:</p>
      
      <ul>
        <li>Shares authentic travel experiences and recommendations</li>
        <li>Respects local cultures, customs, and communities</li>
        <li>Provides useful, accurate information about destinations</li>
        <li>Inspires others to explore and appreciate the world</li>
        <li>Fosters positive engagement and respectful discussion</li>
      </ul>
      
      <h2>Prohibited Content</h2>
      
      <p>The following types of content are prohibited:</p>
      
      <ul>
        <li><strong>Illegal Content:</strong> Content that promotes illegal activities or violates applicable laws</li>
        <li><strong>Hateful Content:</strong> Content that promotes hatred, discrimination, or violence against individuals or groups based on attributes such as race, ethnicity, religion, disability, gender, age, nationality, or sexual orientation</li>
        <li><strong>Harassment:</strong> Content that harasses, intimidates, or bullies any individual</li>
        <li><strong>Adult Content:</strong> Explicit sexual content, pornography, or nudity</li>
        <li><strong>Violent Content:</strong> Graphic depictions of violence or content that glorifies violence</li>
        <li><strong>Harmful Misinformation:</strong> Content that contains demonstrably false information that could lead to significant harm</li>
        <li><strong>Privacy Violations:</strong> Content that invades others' privacy, such as sharing personal information without consent</li>
        <li><strong>Intellectual Property Violations:</strong> Content that infringes on others' intellectual property rights</li>
        <li><strong>Spam:</strong> Repetitive, unwanted, or unsolicited content</li>
      </ul>
      
      <h2>Responsible Tourism Content</h2>
      
      <p>
        We encourage content that promotes responsible tourism. Please avoid content that:
      </p>
      
      <ul>
        <li>Promotes activities harmful to wildlife or the environment</li>
        <li>Encourages disrespectful behavior toward local cultures or sacred sites</li>
        <li>Glamorizes overtourism or activities that damage sensitive locations</li>
        <li>Misrepresents destinations or travel experiences</li>
      </ul>
      
      <h2>Enforcement</h2>
      
      <p>
        We may take action against content that violates this policy, including:
      </p>
      
      <ul>
        <li>Removing the violating content</li>
        <li>Issuing warnings to the content creator</li>
        <li>Temporarily restricting posting privileges</li>
        <li>Suspending or terminating accounts for severe or repeated violations</li>
      </ul>
      
      <h2>Reporting Violations</h2>
      
      <p>
        If you encounter content that you believe violates our Content Policy, please report it 
        by contacting us at <a href="mailto:content@armchairtraveler.com" className="text-blue-600 hover:underline">content@armchairtraveler.com</a>.
      </p>
      
      <h2>Policy Updates</h2>
      
      <p>
        We may update this Content Policy from time to time to reflect new issues that arise, changes in our 
        services, or in response to user feedback. We will notify users of significant changes to this policy.
      </p>
      
      <p className="text-sm text-muted-foreground mt-6">
        Last Updated: January 15, 2024
      </p>
    </TemplateContentDetail>
  );
};

export default ContentPolicyDetail; 