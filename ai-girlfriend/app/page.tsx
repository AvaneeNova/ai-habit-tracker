'use client'

import { useState, useEffect } from 'react'
import { MessageGenerator } from './components/MessageGenerator'
import { VoicePlayer } from './components/VoicePlayer'
import { FloatingHearts } from './components/FloatingHearts'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('welcome')
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  const sections = [
    { id: 'welcome', title: '💕 Welcome', emoji: '🌹' },
    { id: 'naughty', title: '😏 Naughty Tease', emoji: '🔥' },
    { id: 'emotional', title: '😭 Emotional Talk', emoji: '💗' },
    { id: 'roast', title: '😂 Cute Roast', emoji: '🤣' },
    { id: 'romantic', title: '🌙 Romantic Night', emoji: '✨' },
    { id: 'voice', title: '🎵 Voice Messages', emoji: '💋' },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`text-center pt-12 pb-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4 font-['Dancing_Script']">
          Hey My Rocky 💕
        </h1>
        <p className="text-xl md:text-2xl text-pink-600 font-medium">
          Your AI Girlfriend is here to make you smile 😘
        </p>
      </header>

      {/* Navigation */}
      <nav className={`max-w-6xl mx-auto px-4 mb-8 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentSection === section.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'glass-effect text-pink-700 hover:bg-white/50'
              }`}
            >
              {section.emoji} {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <div className={`max-w-4xl mx-auto px-4 pb-20 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {currentSection === 'voice' ? (
          <VoicePlayer />
        ) : (
          <MessageGenerator section={currentSection} />
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 text-center py-4 glass-effect">
        <p className="text-pink-600 font-medium">
          Made with 💗 for my hardworking Kuitra
        </p>
      </footer>
    </main>
  )
}
