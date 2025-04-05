import TemplateContentDetail from "./TemplateContentDetail";

const CareersDetail = () => {
  return (
    <TemplateContentDetail 
      title="Join Our Team" 
      subtitle="Career opportunities at Armchair Traveler"
    >
      <p>
        We're always looking for passionate, creative individuals to join our team and help us inspire people to explore the world.
      </p>
      
      <h2>Why Work With Us</h2>
      
      <ul>
        <li>Remote-first global team with flexible work arrangements</li>
        <li>Competitive compensation and benefits</li>
        <li>Travel perks and opportunities to explore destinations</li>
        <li>Collaborative, inclusive work culture</li>
        <li>Cutting-edge technologies and tools</li>
      </ul>
      
      <h2>Open Positions</h2>
      
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-semibold">Senior Frontend Developer</h3>
        <p className="text-sm text-muted-foreground mb-2">Remote • Full-time</p>
        <p>
          We're looking for an experienced frontend developer with React expertise to help us create immersive travel experiences.
        </p>
      </div>
      
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-semibold">Content Writer - Travel Specialist</h3>
        <p className="text-sm text-muted-foreground mb-2">Remote • Full-time/Part-time</p>
        <p>
          Join our content team to create engaging, informative travel content that inspires and educates our users.
        </p>
      </div>
      
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-semibold">Travel Photographer/Videographer</h3>
        <p className="text-sm text-muted-foreground mb-2">Remote • Contract</p>
        <p>
          We're expanding our visual content team and looking for talented photographers and videographers with a passion for travel.
        </p>
      </div>
      
      <h2 className="mt-8">How to Apply</h2>
      
      <p>
        Send your resume, portfolio (if applicable), and a brief cover letter explaining why you're interested in joining Armchair Traveler to 
        <a href="mailto:careers@armchairtraveler.com" className="text-blue-600 hover:underline"> careers@armchairtraveler.com</a>.
      </p>
      
      <p className="text-sm text-muted-foreground mt-4">
        Armchair Traveler is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
      </p>
    </TemplateContentDetail>
  );
};

export default CareersDetail; 