import React from "react";
import { Link } from "react-router-dom";

/**
 * Floating "Plan your event" button — appears on bottom-right on all pages.
 */
export const PlanFloatButton: React.FC = () => {
  return (
    <Link
      to="/plan-event"
      aria-label="Plan your event"
      className="fixed z-50 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 0 0 2-2V8H3v11a2 2 0 0 0 2 2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="sr-only">Plan your event</span>
    </Link>
  );
};

export default PlanFloatButton;


