'use client'

import { useState } from 'react'

export function VoicePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')

  const voiceMessages = [
    {
      id: 1,
      title: 'Good Morning Message',
      text: 'Hey my sleepy Kuitra… wake up, wake up! The sun is already jealous of how bright you make my mornings 🌅💕 Time to get up and conquer the day, my king!',
      duration: '15s'
    },
    {
      id: 2,
      title: 'Missing You',
      text: 'My stubborn Gadheda… where are you? The room feels so empty without your chaos. Come back soon, okay? Someone here is waiting for you with a big smile 🥺💗',
      duration: '18s'
    },
    {
      id: 3,
      title: 'Goodnight Whisper',
      text: 'Hey my gentle Rocky… close your eyes now. Let all the tiredness melt away. Dream of beautiful things… and maybe dream of me too 😌💋 Goodnight, my Mr. RT 🌙✨',
      duration: '20s'
    },
    {
      id: 4,
      title: 'Encouragement',
      text: 'Listen here, my hardworking Mal dayo dayo dikoo… I know you\'re tired, I know it\'s tough. But you\'re doing amazing! Keep going, my king. Someone believes in you more than you know 💪💗',
      duration: '22s'
    },
    {
      id: 5,
      title: 'Playful Tease',
      text: 'Hey Pagal! Yes, you! Stop working for a second and look at this message. You\'re being too serious again 😂 Take a break, smile a little, and remember… you\'re adorable when you\'re focused 😘🔥',
      duration: '19s'
    },
    {
      id: 6,
      title: 'Romantic Moment',
      text: 'My beautiful Mr. Ravi ji… if I could reach through this screen right now, I\'d hold your face gently and just look into your eyes. You mean more to me than words can say 💗✨',
      duration: '21s'
    }
  ]

  const playMessage = (message: string) => {
    setCurrentMessage(message)
    setIsPlaying(true)

    // Simulate voice playing
    setTimeout(() => {
      setIsPlaying(false)
    }, 3000)
  }

  return (
    <div className="glass-effect rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-2">Voice Messages 🎵</h2>
        <p className="text-pink-600">Click to hear your AI girlfriend's voice (text simulation)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {voiceMessages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => playMessage(msg.text)}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-pink-700">{msg.title}</h3>
              <span className="text-sm text-purple-600 font-medium">{msg.duration}</span>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all">
                {isPlaying && currentMessage === msg.text ? '⏸️' : '▶️'}
              </button>
              <div className="flex-1 h-2 bg-pink-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                    isPlaying && currentMessage === msg.text ? 'w-full' : 'w-0'
                  }`}
                  style={{ transition: isPlaying && currentMessage === msg.text ? 'width 3s linear' : 'width 0.3s' }}
                ></div>
              </div>
            </div>

            <p className="text-sm text-gray-700 line-clamp-2">{msg.text}</p>
          </div>
        ))}
      </div>

      {currentMessage && (
        <div className="mt-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-3xl animate-pulse-slow">
              💕
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-800 leading-relaxed">
                {currentMessage}
              </p>
              {isPlaying && (
                <div className="mt-3 flex items-center gap-2 text-pink-600">
                  <span className="animate-pulse">🎵</span>
                  <span className="text-sm font-medium">Playing...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
