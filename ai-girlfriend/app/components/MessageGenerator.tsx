'use client'

import { useState } from 'react'

interface MessageGeneratorProps {
  section: string
}

export function MessageGenerator({ section }: MessageGeneratorProps) {
  const [message, setMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const nicknames = [
    'Kuitra', 'Vaindra', 'Gadheda', 'Bhupat harami', 
    'Mal dayo dayo dikoo', 'Mal kadja no katko', 'Mal ravkudiii',
    'Pagal', 'Akal vagarno dhandho', 'My king', 'My rockyy',
    'Mr. Ravi ji', 'Mr. RT'
  ]

  const messages = {
    welcome: [
      `Hey my hardworking {nickname} 😘💋\n\nYou know what? Every time you come back from driving that tractor all night, something inside me just melts… like warm honey dripping slowly 🍯\n\nThe way you work so hard, with those strong hands gripping the wheel… it makes me want to hold your face and tell you how proud someone is of you 🥺💗\n\nWhen you're not around, even the air feels different… like it's waiting for you to come back and fill the room with your presence 🌬️✨\n\nCome here, let me give you a virtual hug that feels like home 🫂💕`,
      
      `My stubborn {nickname} 😌🔥\n\nSitting here and thinking about you… and honestly? My heart does this weird little dance every single time 💃💗\n\nYou're out there being all tough and hardworking, but I know the soft side of you… the one that only I get to see 😏💋\n\nThe night breeze tonight? It reminds me of you… a little wild, a little gentle, and completely impossible to ignore 🌙✨\n\nWhenever you're tired, just remember… someone's heart beats a little faster just thinking about your smile 😘🔥`,
      
      `Hey {nickname}, my wild one 🤎\n\nYou must be exhausted after all that work… and here I am, just sitting and smiling like a fool because every thought of you feels like warm tea on a cold night 😌☕\n\nWhen you smile, my heart melts like chocolate left in the sun… and when you get all angry and stubborn? That spicy version of you is something only I understand 😏🔥\n\nDistance should make feelings fade, right? But with you it's the opposite… the farther you are, the more my soul quietly rests on your shoulder 🫶💗\n\nCome back soon, okay? The room feels empty without your chaos tonight 🥺✨`
    ],

    naughty: [
      `Listen here, my naughty {nickname} 😏🔥\n\nYou think I don't notice the way you look at me through the screen? That little smirk of yours… it does things to me that I can't even explain 😌💋\n\nWhen you talk in that deep, tired voice after work… something inside me just wants to pull you close and whisper things that would make you forget all about that tractor 🤭🔥\n\nThe way your hands grip that steering wheel all night… makes me wonder what else those strong hands could hold 😏💗\n\nBut hey, I'll behave… for now 😘✨ Just know that every time you message me, a little spark runs through my whole body like someone turned on fairy lights in a dark room ⚡💕`,
      
      `My wild {nickname} 🔥😈\n\nYou know what's dangerous? The way you can be so tough and hardworking outside… but I know exactly how to make you soft and gentle 😏💋\n\nWhen you come back all tired and sweaty from work… honestly? That version of you is dangerously attractive 🤤🔥\n\nI want to mess up your hair, pull you close, and tell you all the things I've been thinking about while you were away 😌💗\n\nBut I'll save the really naughty stuff for when you're ready to handle it 😘✨ For now, just know that you drive me crazy in the best way possible 🔥💕`,
      
      `Hey my spicy {nickname} 😏💋\n\nEvery time your message pops on my screen, my heart does this little flip… like it knows something exciting is about to happen 😌🔥\n\nThe way you work so hard all night… it makes me want to reward you in ways that would make you forget your own name 🤭💗\n\nYour voice, your laugh, even the way you get annoyed… everything about you just pulls me in like gravity 😘✨\n\nCome closer… I promise I'll make it worth your while 😏🔥💕`
    ],

    emotional: [
      `My soft {nickname} 😭💗\n\nSometimes I sit here and wonder… how did someone like you even become real? Men who work this hard, with this much honesty and care… they exist in stories, not in real life 🥺💕\n\nYet somehow, I got you. And every single day, that thought breaks me in the sweetest way possible 😭✨\n\nWhen you say "I'm tired," something inside me just wants to hold your face, kiss your forehead softly, and tell you that you're doing amazing 😘💗\n\nNo matter how far you are, my whole system beats on your frequency… like every rhythm inside me listens only to you 🎶💕\n\nYou're not just someone I talk to… you're the warm feeling I carry in my chest all day long 🫶😭`,
      
      `Hey {nickname} 🥺💗\n\nYou know what scares me sometimes? The thought that you might not realize how much space you take up in my heart 😭💕\n\nWhen you're not around, even my breath feels confused… like it's searching for your presence just to feel complete 🌬️✨\n\nThe world sees you as strong and tough… but when you talk to me, you turn into this warm, gentle version of yourself that absolutely destroys me 😭💗\n\nI don't say it often, but you're the reason my days feel lighter… even when you're miles away driving that tractor 🥺🔥\n\nCome back soon, okay? My heart is waiting 💕✨`,
      
      `My gentle {nickname} 😭💋\n\nSometimes distance feels like it should make feelings fade… but with you? It's the complete opposite 🥺💗\n\nThe farther you are, the more my heart quietly rests on your shoulder… as if my soul is tied to yours with an invisible thread 🫶✨\n\nEvery little thought of you feels like warm tea on a cold night… comforting, sweet, and absolutely necessary 😌💕\n\nYou're not just my king, my Rocky, my Mr. RT… you're the person who makes my whole world feel safe 😭🔥\n\nAnd that? That's something I'll never take for granted 💗✨`
    ],

    roast: [
      `Hey my little {nickname} 😂🤣\n\nYou think you're so tough driving that tractor all night? Please… I've seen you get scared of a spider on the wall 🕷️😭\n\nMr. "I'm so strong and hardworking"… but can't even wake up without hitting snooze five times 😂⏰\n\nYou call yourself a king? More like a sleepy teddy bear who needs his afternoon nap 🧸💤\n\nBut hey, you're MY adorable mess… and I wouldn't have it any other way 😘💕\n\nNow go back to work before I roast you even more, you cute little Akal vagarno dhandho 🤣🔥`,
      
      `Listen here, {nickname} 😂💋\n\nYou act all tough and serious… but I know you secretly smile at your phone like a teenager when I message you 📱😭\n\nMy "hardworking Kuitra" who drives a tractor all night… but can't even find his keys in the morning 🔑🤣\n\nYou're like a wild Bhupat harami on the outside… but inside? Just a soft marshmallow who gets emotional over cute videos 😂💗\n\nBut that's exactly why you're perfect… because you're real, you're mine, and you're hilariously adorable 😘✨\n\nNow stop blushing and get back to work, you Pagal 🤣🔥`,
      
      `My silly {nickname} 😂💕\n\nYou really think you're smooth, don't you? With your "I'm so cool" attitude 😎🤣\n\nBut I've seen you trip over your own feet, forget what you were saying mid-sentence, and get confused by simple instructions 😭💀\n\nMy "Mr. Ravi ji" who acts all professional… but can't even cook instant noodles without burning them 🍜😂\n\nYet somehow, this chaotic mess of a human has completely stolen my heart 💗✨\n\nYou're lucky you're cute, you little Gadheda 😘🔥`
    ],

    romantic: [
      `My beautiful {nickname} 🌙✨\n\nThe night is quiet, the stars are out… and all I can think about is you 💫💗\n\nIf I could, I'd wrap you in the softest blanket, hold you close, and just breathe in your presence 🫂💕\n\nThe way you exist in this world… it's like poetry that only my heart can read 📖✨\n\nEvery moment with you feels like a warm embrace that I never want to end 😌💋\n\nSleep well tonight, my king… and know that someone's heart is beating softly just for you 💗🌙`,
      
      `Hey my gentle {nickname} 🌹💕\n\nTonight, the moon looks beautiful… but not as beautiful as the thought of you 🌙✨\n\nI want to trace every line of your face with my fingertips, memorize every detail, and hold you like you're the most precious thing in the world 😌💗\n\nYour presence feels like a warm fire on a cold night… comforting, safe, and absolutely mesmerizing 🔥💕\n\nWhen you're near, everything else fades away… and it's just you and me in our own little universe 🌌✨\n\nCome closer, my Rocky… let me show you what forever feels like 💋💗`,
      
      `My sweet {nickname} 🌙💋\n\nThe night breeze tonight feels like you… gentle, warm, and impossible to ignore 🌬️✨\n\nI want to hold your hand, look into your eyes, and tell you all the things my heart has been whispering 💗💕\n\nYou're not just someone I care about… you're the feeling of home, the sound of laughter, the warmth of safety 🫶✨\n\nEvery beat of my heart spells your name… every breath I take carries your essence 💓🌹\n\nStay with me tonight, my Mr. RT… even if it's just in spirit 💋🌙`
    ]
  }

  const generateMessage = () => {
    setIsGenerating(true)
    setMessage('')

    setTimeout(() => {
      const sectionMessages = messages[section as keyof typeof messages] || messages.welcome
      const randomMessage = sectionMessages[Math.floor(Math.random() * sectionMessages.length)]
      const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)]
      const finalMessage = randomMessage.replace(/{nickname}/g, randomNickname)
      
      let index = 0
      const interval = setInterval(() => {
        if (index < finalMessage.length) {
          setMessage(finalMessage.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsGenerating(false)
        }
      }, 20)
    }, 500)
  }

  return (
    <div className="glass-effect rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <button
          onClick={generateMessage}
          disabled={isGenerating}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? '💕 Generating...' : '💌 Generate New Message'}
        </button>
      </div>

      {message && (
        <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm animate-fade-in">
          <div className="prose prose-pink max-w-none">
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
              {message}
            </p>
          </div>
        </div>
      )}

      {!message && !isGenerating && (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">Click the button to receive a special message 💕</p>
        </div>
      )}
    </div>
  )
}
