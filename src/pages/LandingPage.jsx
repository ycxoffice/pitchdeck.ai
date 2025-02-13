import React from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiBarChart2,
  FiDollarSign,
  FiTool,
} from "react-icons/fi";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Modern Glass Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Pitchdeck.ai
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Clients
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center">
                Get Started
                <FiArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Startup's Journey with AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need for funding, growth marketing, and sales
              success - powered by artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center shadow-lg hover:shadow-xl">
                Start Free Trial
                <FiArrowUpRight className="ml-2" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for Growth
            </h2>
            <p className="text-gray-600">
              Everything you need to accelerate your startup's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiDollarSign,
                title: "Smart Funding",
                text: "AI-powered investor matching & pitch optimization",
              },
              {
                icon: FiTool,
                title: "Growth Tools",
                text: "Automated marketing campaigns & analytics",
              },
              {
                icon: FiCheckCircle,
                title: "Sales Engine",
                text: "Predictive lead scoring & deal management",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="text-blue-600 text-4xl mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1M+", label: "Decks Created" },
              { number: "$10B+", label: "Raised" },
              { number: "95%", label: "Success Rate" },
              { number: "4.9/5", label: "Rating" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Pitchdeck.ai</h3>
              <p className="text-sm">
                Empowering startups with AI-driven growth solutions.
              </p>
            </div>
            {[
              ["Product", "Features", "Pricing", "Demo"],
              ["Company", "About", "Blog", "Careers"],
              ["Resources", "Help Center", "API Docs", "Contact"],
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{column[0]}</h4>
                <ul className="space-y-2">
                  {column.slice(1).map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Pitchdeck.ai. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
