'use client'

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, CheckCircle, AlertCircle, BarChart3, Settings, Shield, LogOut, MessageSquare, Calendar, Users, Plus, Mail } from "lucide-react"

// Animation keyframes for word cycling
const sliderStyles = `
@keyframes slideInOut {
  0% { opacity: 0; transform: translateX(-60%); }
  10% { opacity: 1; transform: translateX(0); }
  80% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(60%); }
}
.slide-in-out {
  animation: slideInOut 2s cubic-bezier(0.4,0,0.2,1) both;
}
`;

export default function Landing() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["interview", "sale", "meeting", "session", "job", "talk", "pitch", "chat", "deal", "hearing", "review"]
  const notifyMeRef = useRef<HTMLFormElement | null>(null)

  // Cycle through words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  const handleScrollToNotify = () => {
    notifyMeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="min-h-screen bg-stone-100 font-sans relative overflow-hidden">
      <style>{sliderStyles}</style>
      
      {/* Background noise overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.06\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.4,
        }}
      />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-20 w-full bg-white/30 backdrop-blur-md border-b border-white/40 shadow-lg">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent truncate">
              Conversarium
            </span>
          </div>
          <div className="flex items-center space-x-2">
            
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6"
              onClick={handleScrollToNotify}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-12 min-h-[70vh]">

        {/* Main content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

          
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
            Build any conversation,
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 leading-tight">
            engage in natural dialogue
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-8 leading-tight bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Level Up.
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-stone-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Master sales calls based on your product, sharpen your elevator pitch, practice legal depositions, and more.
          </p>

          {/* Animated word cycling and CTA card */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{
              background: 'radial-gradient(ellipse, rgba(34,197,94,0.25) 0%, rgba(16,185,129,0.15) 40%, rgba(34,197,94,0.08) 70%, transparent 100%)'
            }}></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 max-w-lg mx-auto">
              {/* Animated word cycling */}
              <div className="mb-6 text-lg text-stone-700 font-medium text-center">
                Prepare for your next
              </div>
              <div className="mb-8 h-8 flex items-center justify-center w-[140px] mx-auto">
                <span
                  key={currentWordIndex}
                  className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold slide-in-out text-2xl"
                >
                  {words[currentWordIndex]}
                </span>
              </div>

              {/* Call to Action */}
              <form
                ref={notifyMeRef}
                action="https://formsubmit.co/contact@conversarium.app"
                method="POST"
                className="flex flex-col items-center space-y-2"
              >
                <input type="text" name="name" required placeholder="Name" className="p-2 rounded border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full" />
                <input type="email" name="email" required placeholder="Email" className="p-2 rounded border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full" />
                <Button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                  Join the Waitlist
                </Button>
              </form>
            </div>
          </div>
          {/* Blurb */}
          <div className="mt-16 mb-6">
            <p className="text-lg sm:text-lg text-stone-600 font-medium max-w-2xl mx-auto">
              Structured & deterministic conversation trees.<br />
              <span className="text-stone-600 font-medium">Powered by generative AI. Served in real-time.</span>
            </p>
          </div>
         
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative py-18">
        <div className="w-full max-w-2xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        {/* Background gradient for features */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[1000px] h-[600px] rounded-full opacity-60 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(16,185,129,0.06) 40%, rgba(34,197,94,0.04) 70%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Make conversations
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              second nature
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Create and organize */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Create and organize your conversations</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Design and organize your conversation flows seamlessly, with the ability to template, save and organize your dialogue configurations
                  </p>
                </div>
                
                {/* Mock UI */}
                <div className="bg-stone-900/80 backdrop-blur-sm rounded-xl p-4 border border-stone-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 text-sm font-medium">My Workspace</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 text-xs text-stone-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">📁</span>
                      <span>Collections</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">📁</span>
                        <span>Interview Prep</span>
                      </div>
                      <div className="ml-4 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-emerald-400">💬</span>
                          <span>Technical Interview</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-emerald-400">💬</span>
                          <span>Behavioral Q&A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Test and evaluate */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Automatic evaluations</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Receive instant feedback and get comprehensive action items, helping you save time elevating your confidence
                  </p>
                </div>
                
                {/* Mock UI */}
                <div className="bg-stone-900/80 backdrop-blur-sm rounded-xl p-4 border border-stone-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 text-sm font-medium">Test Results</span>
                    <Play className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      <span className="text-xs text-green-400">Response time</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      <span className="text-xs text-green-400">Clarity check</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                      <span className="text-xs text-red-400">Words Per Minute (248)</span>
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Monitor and improve */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Track progress and improve</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Monitor overall performance with detailed insights to continuously improve your skills
                  </p>
                </div>
                
                {/* Mock UI */}
                <div className="bg-stone-900/80 backdrop-blur-sm rounded-xl p-4 border border-stone-700/50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg p-3 border border-green-500/30">
                      <div className="text-xs text-green-400 mb-1">Success Rate</div>
                      <div className="text-lg font-bold text-white">94.2%</div>
                      <div className="w-full bg-stone-700 rounded-full h-1 mt-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg p-3 border border-green-500/30">
                      <div className="text-xs text-green-400 mb-1">Practice Time</div>
                      <div className="text-lg font-bold text-white">12.5h</div>
                      <div className="w-full bg-stone-700 rounded-full h-1 mt-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative py-18">
        <div className="w-full max-w-2xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
      </div>

      {/* Real Talk Section */}
      <section className="relative py-20 px-4">
        {/* Background gradient for real talk */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[1000px] h-[600px] rounded-full opacity-60 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(16,185,129,0.06) 40%, rgba(34,197,94,0.04) 70%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900">
              Real talk. Not just talk.
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Modular Graph-Based Flows */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Modular Graph-Based Flows</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Build conversation trees that branch based on responses. Practice every possible scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Instant AI Feedback */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Instant AI Feedback</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Get real-time analysis of your responses. Tone, clarity, persuasiveness – we measure what matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Build The Flow You Need */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0 1 1 0 002 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Build The Flow You Need</h3>
                  <p className="text-stone-700 leading-relaxed">
                    SPIN selling, therapy sessions, legal cross-examination. Practice the conversations that matter.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Voice Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Voice Input</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Practice how you'll speak. Full voice recognition with natural speech patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Analytics & Reporting */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Analytics & Reporting</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Track progress over time. Perfect for training teams, onboarding, and measuring improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6: Works in Browser */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Practice Anywhere</h3>
                  <p className="text-stone-700 leading-relaxed">
                    No downloads, no installs. Just open and start speaking, right in your browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative py-18">
        <div className="w-full max-w-2xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
      </div>

      {/* Dashboard Showcase Section */}
      <section className="relative py-20 px-4">
        {/* Background gradient for dashboard showcase */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[1200px] h-[700px] rounded-full opacity-60 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(16,185,129,0.06) 40%, rgba(34,197,94,0.04) 70%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Everything you need to
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              succeed
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto mt-8 leading-relaxed">
              A powerful dashboard designed for real conversation practice. Track progress, manage sessions, and see your improvement in real-time.
            </p>
          </div>

          {/* Dashboard Showcase */}
          <div className="relative group">
            {/* Glow effect behind the dashboard */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            
            {/* Main dashboard container */}
            <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60 p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">Dashboard</h3>
                    <p className="text-stone-600">Welcome back, Username</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <LogOut className="w-4 h-4 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "Total Conversations", value: "24", icon: MessageSquare, trend: "+12%" },
                  { title: "Practice Sessions", value: "156", icon: Calendar, trend: "+8%" },
                  { title: "Success Rate", value: "94.2%", icon: BarChart3, trend: "+2.1%" },
                  { title: "Team Members", value: "8", icon: Users }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-stone-600 mb-1">{stat.title}</p>
                        <p className="text-lg font-bold text-stone-900">{stat.value}</p>
                        {stat.trend && (
                          <p className="text-xs font-medium text-green-600">↗ {stat.trend}</p>
                        )}
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main content area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-lg font-bold text-stone-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Start New Conversation", icon: Plus },
                      { title: "View Analytics", icon: BarChart3 },
                      { title: "Team Management", icon: Users },
                      { title: "Settings", icon: Settings }
                    ].map((action, index) => (
                      <div key={index} className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/60 transition-colors cursor-pointer">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-sm font-bold text-stone-900">{action.title}</h5>
                            <p className="text-xs text-stone-600 mt-1">Click to access</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-stone-900 mb-4">Recent Activity</h4>
                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/50 h-64 overflow-y-auto">
                    <div className="space-y-3">
                      {[
                        { name: "Sales Call Practice", time: "2 hours ago", color: "green", percent: "+15%" },
                        { name: "Interview Prep", time: "1 day ago", color: "blue", percent: "+8%" },
                        { name: "Team Session", time: "3 days ago", color: "purple", percent: "+22%" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/20 transition-colors">
                          <div className={`w-2 h-2 bg-${activity.color}-500 rounded-full flex-shrink-0`}></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-stone-900">{activity.name}</p>
                            <p className="text-xs text-stone-600">{activity.time}</p>
                          </div>
                          <span className={`text-xs font-medium text-${activity.color}-600 flex-shrink-0`}>{activity.percent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action below dashboard */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={handleScrollToNotify}
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-stone-900 text-white py-6 px-4">
        {/* Background gradient for footer */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[800px] h-[400px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(16,185,129,0.10) 40%, rgba(34,197,94,0.05) 70%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Section - Brand */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/simple.png" alt="Conversarium Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-white">Conversarium</span>
            </div>

            {/* Middle Section - Contact */}
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-stone-400" />
              <span className="text-stone-300">Contact: contact@conversarium.app</span>
            </div>

            {/* Right Section - Copyright */}
            <div className="text-stone-400 text-sm">
              © 2025 Conversarium. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}