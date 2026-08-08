import Icon from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Hello SolidCore, I'd like to request a quotation for:")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:block">Chat / Quote</span>
    </a>
  );
}
