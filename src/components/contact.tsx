import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Contact Us
            </span>
            <span className="text-gray-500 font-extrabold">
              - Get in Touch with CareerForgeAI
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Have questions or need assistance? Reach out to the CareerForgerAI
            team, proudly developed for Rakibedynamics. We're here to help you
            succeed!
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-xl shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="mt-1 w-full h-32"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message <Sparkles className="ml-2" />
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
          <p className="mt-2 text-muted-foreground">
            <strong>Email:</strong> support@careerforgerai.com
            <br />
            <strong>Phone:</strong> +1-800-CAREERAI
            <br />
            <strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345
            <br />
            <strong>Company:</strong> Rakibedynamics
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to ace your next interview? Start practicing with our AI-driven
            mock interviews today!
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

export default Contact;