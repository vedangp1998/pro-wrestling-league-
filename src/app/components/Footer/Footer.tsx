import Link from "next/link";
import { Instagram, Twitter, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex space-x-3 mb-4">
              <Link
                href="#"
                className="bg-[#C72200] rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#C72200] rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Phone size={20} />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="#"
                className="bg-[#C72200] rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-[#C72200] rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="text-sm space-y-1">
              <p>info@prowrestlingleague.in</p>
              <p>0120-4369400</p>
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Latest Updates</h3>
            <ul className="space-y-2 text-sm">
              {["Videos", "Photos", "News", "Features"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Wrestling League
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Management Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Teams</h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  name: "NCR Punjab Royals",
                  icon: "🏆",
                  color: "text-yellow-500",
                },
                { name: "Haryana Hammers", icon: "🔨", color: "text-blue-500" },
                { name: "MP Yodha", icon: "🏅", color: "text-yellow-500" },
                { name: "UP Dangal", icon: "🔶", color: "text-orange-500" },
                { name: "Delhi Sultans", icon: "👑", color: "text-red-500" },
                {
                  name: "Mumbai Maharathi",
                  icon: "👑",
                  color: "text-yellow-500",
                },
              ].map((team) => (
                <li key={team.name} className="flex items-center gap-2">
                  <span className={team.color}>{team.icon}</span>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Others</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Social Media Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Franchise Partners Advisory
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <span>© Pro Wrestling League </span>
            <span className="hidden sm:inline">|</span>{" "}
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>{" "}
            <span className="hidden sm:inline">|</span>{" "}
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p>B/4, Sector 3, Noida Uttar Pradesh - 201301</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
