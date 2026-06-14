import ContactForm from "@/components/contact-us/contact-form";
import ContactHero from "@/components/contact-us/contact-hero";
import ContactInfo from "@/components/contact-us/contact-info";
import LocationMap from "@/components/contact-us/location-map";
import SocialLinks from "@/components/contact-us/social-links";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <SocialLinks />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
    </div>
  );
}
