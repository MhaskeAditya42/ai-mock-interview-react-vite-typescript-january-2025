import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex-col w-full pb-24">
      {/* Header Section */}
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              About Us
            </span>
            <span className="text-gray-500 font-extrabold">
              - Empowering Your Career with AI
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Learn more about CareerForgerAI, an innovative AI-driven mock
            interview system developed for Rakibedynamics, designed to help you
            excel in your job interviews and land your dream role.
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full mt-8 rounded-xl bg-gray-100 p-6 drop-shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="mt-4 text-muted-foreground">
            At CareerForgeAI, we believe everyone deserves the opportunity to
            shine in their interviews. Our mission is to empower job seekers by
            providing personalized, AI-driven insights and practice opportunities
            that boost confidence and improve performance. Whether you're a fresh
            graduate or a seasoned professional, we’re here to help you forge a
            successful career path.
          </p>
        </div>

        {/* Rakibedynamics Sponsorship */}
        <div className="mt-12 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800">
            Proudly Sponsored by Rakibedynamics
          </h3>
          <p className="mt-4 text-muted-foreground">
            CareerForgerAI is a project developed in collaboration with
            Rakibedynamics, a company dedicated to innovation and technology. With
            their support, we’ve created a platform that leverages cutting-edge AI
            to transform the way candidates prepare for interviews, ensuring they
            stand out in a competitive job market.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/assets/img/team-member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                John Doe
              </h4>
              <p className="text-muted-foreground">Lead Developer</p>
              <p className="mt-2 text-sm text-center text-gray-600">
                John is passionate about using AI to create tools that make a
                real impact on people’s careers.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/assets/img/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Jane Smith
              </h4>
              <p className="text-muted-foreground">Product Manager</p>
              <p className="mt-2 text-sm text-center text-gray-600">
                Jane ensures that CareerForgerAI meets the needs of job seekers
                with a user-first approach.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/assets/img/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Alex Brown
              </h4>
              <p className="text-muted-foreground">AI Specialist</p>
              <p className="mt-2 text-sm text-center text-gray-600">
                Alex drives the AI innovation behind CareerForgerAI, making it
                smarter every day.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to take your interview skills to the next level? Start
            practicing with CareerForgerAI today!
          </p>
          <Link to="/take-an-interview" className="mt-4 inline-block">
            <Button>
              Take an Interview <Sparkles className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;