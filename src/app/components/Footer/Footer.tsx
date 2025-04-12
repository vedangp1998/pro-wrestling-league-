import Link from "next/link";
import { Instagram, Twitter, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
            <div className="flex space-x-3 mb-4">
              <Link
                href="#"
                className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Phone size={20} />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="#"
                className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="space-y-1">
              <p>info@prowrestlingleague.in</p>
              <p>0120-4369400</p>
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <h3 className="text-lg font-medium mb-4">Latest Updates</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-medium mb-4">Teams</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏆</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  NCR Punjab Royals
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">🔨</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Haryana Hammers
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏅</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  MP Yodha
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">🔶</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  UP Dangal
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">👑</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Delhi Sultans
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Mumbai Maharathi
                </Link>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-lg font-medium mb-4">Others</h3>
            <ul className="space-y-2">
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

      <div className="border-t border-gray-800 mt-6">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-2 md:mb-0">
            <span>© Pro Wrestling League | </span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <span> | </span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div>
            <p>B/4, Sector 3, Noida Uttar Pradesh - 201301</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
