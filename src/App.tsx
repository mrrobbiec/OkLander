import React from 'react';
import { Spotlight } from './components/ui/Spotlight';
import { AsciiHero } from './components/ui/AsciiAnimation';
import { NavigationMenuDemo } from './components/NavigationMenuDemo';
import { BrowserRouter as Router } from 'react-router-dom';
import { TypewriterLogo } from './components/ui/TypewriterLogo';
import CodeExamplesSection from './components/CodeExamplesSection';
import WorkflowAnimation from './components/WorkflowAnimation';
import OkEngineBackground from './components/ui/OkEngineBackground';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
<header className="fixed top-0 left-0 right-0 z-50 bg-slate-950">
  <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="relative">
              {/* Logo positioned absolutely on the left */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <TypewriterLogo text="OkEngine" typingSpeed={120} cursorBlinkSpeed={600} />
              </div>
              
              {/* Navigation centered regardless of logo */}
              <div className="flex justify-center">
                <NavigationMenuDemo />
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
          <AsciiHero />
        </section>

        {/* What is OkEngine Section */}
        <section id="about" className="py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
          <OkEngineBackground />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Content on the left */}
              <div className="order-2 md:order-1">
                <p className="text-white/80 text-lg leading-relaxed">
                  OkEngine is a next-generation data platform crafted to simplify Business Intelligence in the age of real-time machine learning. By championing an "agentic" approach to data, OkEngine takes the complexity out of everything from ingestion and transformation to deployment and interactive analytics. Our mission is straightforward: free you from the constraints of archaic data stacks and empower your team to unlock actionable insights—without spinning up heavy infrastructure or hiring a small army of specialists.
                </p>
              </div>
              
              {/* Title on the right */}
              <div className="order-1 md:order-2">
                <div className="mb-8 md:text-right">
                  <h2 className="text-3xl font-bold mb-1">What is OkEngine?</h2>
                  <div className="h-1 w-16 bg-blue ml-auto mb-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem vs. Solution Comparison Section */}
        <section id="comparison" className="py-20 px-4 bg-slate-950 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Panel (Old Way) */}
              <div className="p-6 border border-blue/30 rounded-lg bg-dark-blue-accent/10">
                <h3 className="text-2xl font-bold mb-6">The Old BI Struggle</h3>
                
                {/* Bullet Point 1 */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small close"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Time-consuming manual setup</h4>
                    <p className="text-white/80">Lengthy implementation processes requiring extensive configuration and setup time.</p>
                  </div>
                </div>
                
                {/* Bullet Point 2 */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small close"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Multiple teams needed</h4>
                    <p className="text-white/80">Requiring data engineering, data science, and DevOps teams just to keep the basics running.</p>
                  </div>
                </div>
                
                {/* Bullet Point 3 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small close"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Static dashboards</h4>
                    <p className="text-white/80">Inflexible visualisations that can't adapt to changing business questions or data needs.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Panel (New Way) */}
              <div className="p-6 border border-blue/30 rounded-lg bg-dark-blue-accent/10">
                <h3 className="text-2xl font-bold mb-6">Enter OkEngine</h3>
                
                {/* Bullet Point 1 */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small star"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Rapid deployment through streamlined flows</h4>
                    <p className="text-white/80">Get up and running in minutes with low-code decorators and automated deployments.</p>
                  </div>
                </div>
                
                {/* Bullet Point 2 */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small star"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">One integrated platform to replace multiple tools</h4>
                    <p className="text-white/80">No more juggling separate tools or dealing with compatibility headaches.</p>
                  </div>
                </div>
                
                {/* Bullet Point 3 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="nes-icon is-small star"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Interactive, AI-driven "datarticles"</h4>
                    <p className="text-white/80">Leverage live data and AI-driven predictions for real-time insights and decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Billboard */}
        <section id="value-proposition" className="py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
          {/* Scan lines overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 0.5px, transparent 0.5px, transparent 3px)',
                backgroundSize: '100% 3.5px',
                opacity: 0.7,
                filter: 'blur(0.2px)',
              }}
            ></div>
            <div 
              className="absolute inset-0 w-full h-full bg-grid-dark"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px, transparent 7px)',
                backgroundSize: '100% 7.5px',
                animation: 'scanline-animation 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
                opacity: 0.8,
                filter: 'blur(0.3px)',
              }}
            ></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Your AI-Powered Insights—Without the Overhead</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1: Speed */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="nes-icon is-medium coin"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-white/80">Deploy in minutes, not months</p>
              </div>
              
              {/* Benefit 2: Simplicity */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="nes-icon is-medium star"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                <p className="text-white/80">Low/No DevOps overhead</p>
              </div>
              
              {/* Benefit 3: Real-Time ML */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="nes-icon is-medium trophy"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time ML</h3>
                <p className="text-white/80">Always up-to-date insights</p>
              </div>
              
              {/* Benefit 4: Scalable */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="nes-icon is-medium heart"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Scalable</h3>
                <p className="text-white/80">Grows with your data</p>
              </div>
            </div>
        </div>
      </section>

        {/* Workflow Animation Section */}
        <WorkflowAnimation />

        {/* Code Examples Section */}
        <CodeExamplesSection />

        {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-dark-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-1">Powerful Features</h2>
            <p className="text-white opacity-80 mb-4">Everything you need to make accurate predictions</p>
            <div className="h-1 w-16 bg-blue mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small star"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Advanced Analytics</h3>
              <p className="text-white/80">Leverage powerful data analysis tools to uncover hidden patterns and trends.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small like"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Real-time Predictions</h3>
              <p className="text-white/80">Get instant forecasts based on the latest data and market conditions.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small heart"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Platform</h3>
              <p className="text-white/80">Your data is protected with enterprise-grade security and encryption.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small coin"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Customizable Dashboards</h3>
              <p className="text-white/80">Create personalized views that focus on the metrics that matter to you.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small trophy"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Collaborative Tools</h3>
              <p className="text-white/80">Share insights and work together with your team in real-time.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="p-6 border border-blue/30 rounded-lg hover:shadow-md transition-shadow bg-dark-blue-accent/10">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mb-4">
                <i className="nes-icon is-small star"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">AI-Powered Insights</h3>
              <p className="text-white/80">Leverage machine learning to uncover insights and make better predictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-900 text-white bg-grid-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-1 text-white">What Our Clients Say</h2>
            <p className="text-white/80 mb-4">Trusted by industry leaders worldwide</p>
            <div className="h-1 w-16 bg-blue mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-blue p-6 rounded-lg shadow-md border border-blue/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Jane Doe</h4>
                  <p className="text-sm text-dark-grey">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                "OkDash has transformed how we make strategic decisions. The accuracy of the predictions has given us a competitive edge in our market."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-dark-blue p-6 rounded-lg shadow-md border border-blue/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-sm text-dark-grey">CFO, Finance Plus</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                "The insights we've gained from OkDash have helped us optimize our investment strategy and increase returns by over 30%."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-dark-blue p-6 rounded-lg shadow-md border border-blue/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AJ
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Alex Johnson</h4>
                  <p className="text-sm text-dark-grey">Director, Global Retail</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                "We've been able to anticipate market trends with remarkable accuracy. OkDash is now an essential part of our planning process."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
        {/* Scan lines overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 0.5px, transparent 0.5px, transparent 3px)',
              backgroundSize: '100% 3.5px',
              opacity: 0.7,
              filter: 'blur(0.2px)',
            }}
          ></div>
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px, transparent 7px)',
              backgroundSize: '100% 7.5px',
              animation: 'scanline-animation 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
              opacity: 0.8,
              filter: 'blur(0.3px)',
            }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Forecasting?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses making better decisions with OkDash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded bg-blue text-white font-medium hover:bg-dark-blue-accent transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded bg-transparent text-white border border-white font-medium hover:bg-dark-blue-accent/20 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 text-sm opacity-80">No credit card required. 14-day free trial.</p>
        </div>
      </section>
      </div>
    </Router>
  );
};

export default App;
