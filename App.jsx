// App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CareerPlanner() {
  const [goal, setGoal] = useState("");
  const [education, setEducation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal && education) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const getRoadmap = () => {
    const g = goal.toLowerCase();

    if (g.includes("software engineer")) {
      return [
        "Learn programming fundamentals (Python, Java, etc.)",
        "Get a CS degree or complete a bootcamp",
        "Build real-world projects",
        "Contribute to open source or internships",
        "Apply for junior software engineer roles"
      ];
    }

    if (g.includes("data scientist")) {
      return [
        "Learn statistics, Python, and SQL",
        "Study data visualization and EDA",
        "Get a degree in Data Science or related field",
        "Practice with Kaggle datasets",
        "Apply for internships or entry-level data roles"
      ];
    }

    if (g.includes("product manager")) {
      return [
        "Understand product lifecycle and Agile methodologies",
        "Learn UX design basics and customer research",
        "Gain business or technical experience",
        "Build a portfolio of product case studies",
        "Apply for Associate PM roles"
      ];
    }

    if (g.includes("graphic designer")) {
      return [
        "Learn tools like Photoshop, Illustrator, Figma",
        "Study design principles (typography, color theory)",
        "Take a design course or degree",
        "Build a personal design portfolio",
        "Apply for internships or freelance gigs"
      ];
    }

    if (g.includes("ai") || g.includes("ml") || g.includes("machine learning")) {
      return [
        "Master Python and linear algebra",
        "Learn ML frameworks like TensorFlow or PyTorch",
        "Complete AI-related projects",
        "Study advanced topics (NLP, Computer Vision)",
        "Apply for AI research or engineer roles"
      ];
    }

    if (g.includes("entrepreneur")) {
      return [
        "Identify a problem worth solving",
        "Validate the idea with real users",
        "Build a minimal viable product (MVP)",
        "Learn basic business and marketing skills",
        "Launch and iterate based on feedback"
      ];
    }

    return ["General career steps will appear here."];
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6">
      <main className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Career Planning Roadmap</h1>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white shadow-2xl rounded-2xl p-8"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700">Career Goal</label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl mt-1"
                placeholder="e.g., Software Engineer, Data Scientist"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Education Level</label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl mt-1"
                required
              >
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Self-taught">Self-taught</option>
              </select>
            </div>
            <button type="submit" className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold">Generate Roadmap</button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-white shadow-2xl rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-700">Your Career Roadmap</h2>
            {getRoadmap().map((step, index) => (
              <div key={index} className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow-sm">
                <strong>Step {index + 1}:</strong> {step}
              </div>
            ))}
            <button onClick={() => setSubmitted(false)} className="w-full p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold">Start Over</button>
          </motion.div>
        )}
      </main>
    </div>
  );
}