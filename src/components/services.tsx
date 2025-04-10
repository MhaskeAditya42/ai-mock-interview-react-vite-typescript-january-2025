import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import interview from "../assets/interview_1.png";
import feedback from "../assets/feedback.png";
import preparation from "../assets/preparation.png";

const Services = () => {
  return (
    <div className="flex-col w-full pb-24">
      {/* Header Section */}
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Our Services
            </span>
            <span className="text-gray-500 font-extrabold">
              - Ace Your Interviews with AI
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Discover how CareerForgerAI, developed for Rakibedynamics, can help
            you prepare, practice, and succeed in your job interviews with our
            AI-driven tools and personalized insights.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Service 1: AI-Powered Mock Interviews */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md text-center flex flex-col justify-between h-full">
            <div>
              <img
                src={interview}
                alt="AI-Powered Mock Interviews"
                className="w-full h-48 rounded-md object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                AI-Powered Mock Interviews
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Practice with realistic, AI-generated interview questions tailored
                to your industry and role. Get instant feedback to improve your
                responses and confidence.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/take-an-interview">
                <Button
                  variant="outline"
                  className="transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  Try Now <Sparkles className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Service 2: Personalized Feedback */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md text-center flex flex-col justify-between h-full">
            <div>
              <img
                src={feedback}
                alt="Personalized Feedback"
                className="w-full h-48 rounded-md object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Personalized Feedback
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Receive detailed, AI-driven feedback on your interview performance,
                including tips on body language, tone, and answer structure to help
                you stand out.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/generate">
                <Button
                  variant="outline"
                  className="transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  Learn More <Sparkles className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Service 3: Industry-Specific Preparation */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md text-center flex flex-col justify-between h-full">
            <div>
              <img
                src={preparation}
                alt="Industry-Specific Preparation"
                className="w-full h-48 rounded-md object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Industry-Specific Preparation
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Prepare with questions and scenarios specific to your target
                industry, whether it's tech, finance, healthcare, or more, ensuring
                you're ready for any challenge.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/generate">
                <Button
                  variant="outline"
                  className="transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  Explore <Sparkles className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 p-6 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            Why Choose CareerForgerAI?
          </h3>
          <p className="mt-4 text-muted-foreground text-center">
            CareerForgerAI, developed for Rakibedynamics, combines cutting-edge
            AI technology with a user-focused approach to help you succeed. With
            over 250k+ offers received and 1.2M+ interviews aced, our platform
            is trusted by job seekers worldwide to deliver results.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <p className="text-3xl font-semibold text-gray-900 text-center">
             100+
              <span className="block text-xl text-muted-foreground font-normal">
                Offers Received
              </span>
            </p>
            <p className="text-3xl font-semibold text-gray-900 text-center">
             150+
              <span className="block text-xl text-muted-foreground font-normal">
                Interviews Aced
              </span>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to transform your interview skills and land your dream job?
            Start with CareerForgerAI today!
          </p>
          <Link to="/take-an-interview" className="mt-4 inline-block">
            <Button>
              Get Started <Sparkles className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Services;