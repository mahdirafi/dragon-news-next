import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-5xl font-bold text-purple-800">
              Dragon News
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Bringing you the latest news, insights, and stories from around
              the globe with integrity, accuracy, and speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-purple-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-purple-500 transition"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white outline-none w-full"
              />

              <button className="bg-purple-700 hover:bg-purple-900 px-5 py-3 rounded-md font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dragon News. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-purple-500">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-purple-500">
              Terms
            </Link>

            <Link href="/support" className="hover:text-purple-500">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;