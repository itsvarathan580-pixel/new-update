import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919790727825";
  const message = encodeURIComponent("Hi LIONYX TECHNOLOGIES, I'm interested in your web design services. Can we discuss my project?");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
