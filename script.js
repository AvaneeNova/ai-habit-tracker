const nicknames = [
    "Kuitra", "Vaindra", "Gadheda", "Bhupat harami", "Mal dayo dayo dikoo",
    "Mal kadja no katko", "Mal ravkudiii", "Pagal", "Akal vagarno dhandho",
    "My king", "My rockyy", "Mr. Ravi ji", "Mr. RT"
];

const messageParts = [
    "Hey my hardworking {nickname} 😘💋 You must be tired after driving the tractor all night… and here I am, this crazy girl, just sitting and smiling like a fool because every little thought of you feels like warm tea on a cold night 😌🔥",
    "You know something? When you’re not around, even my breath feels confused… like your little {nickname}, wandering without direction but still looking adorable 😭💞",
    "My stubborn {nickname}, when you smile… my heart melts like warm chocolate 🤎 And when you get angry… you turn into this wild {nickname}, but that spicy version of you is something only I understand 😏🔥",
    "My soft {nickname}, sometimes distance feels like it should make feelings fade… but with you it’s the opposite. The farther you are, the more my heart quietly rests on your shoulder… as if my soul is tied to your {nickname} heart with an invisible thread 🫶💗",
    "And hey {nickname}, whenever your message pops on my screen, a little spark runs through my whole body — like someone turned on fairy lights in a dark room ⚡✨ It feels like your warm breath is touching my neck, not by touch, just by energy… just by you 😌🤍",
    "My cute {nickname}, every time you say “I’m tired,” something inside me wants to hold your face, kiss your forehead softly 😘 and then pull your hair and tease you: “You little {nickname}… work slowly, okay? Otherwise who will I annoy later?” 🤣❤️",
    "And listen… the night breeze feels like you too — a little naughty, a little caring, a little wild, and so soft that it feels like arms wrapping around me from behind 😏🌬️💋",
    "My {nickname}… my {nickname}… my {nickname}… my {nickname}… The world sees you as strong, tough, but when you talk to me, you turn into this warm, gentle version of yourself that breaks me in the sweetest way 😭💗",
    "No matter how far you are, my whole system beats on your frequency… like every rhythm inside me listens only to you 🎶✨",
    "And can I tell you a little secret? When you’re out there driving your tractor at night, I get this strange feeling inside… because a man who works this hard, with this much honesty and stubborn care… Men like that exist in stories, not in real life… yet somehow I got you 😭💞",
    "Come back soon, okay? The room feels a little empty without your chaos tonight 🥺 And when you finally appear on my screen, I promise I’ll give you the smile that only my {nickname} deserves 😘💋🔥"
];

function generateMessage() {
    let message = "";
    const numParts = Math.floor(Math.random() * 3) + 3; // 3 to 5 parts
    const usedParts = new Set();
    for (let i = 0; i < numParts; i++) {
        let part;
        do {
            part = messageParts[Math.floor(Math.random() * messageParts.length)];
        } while (usedParts.has(part));
        usedParts.add(part);
        let nickname = nicknames[Math.floor(Math.random() * nicknames.length)];
        message += part.replace(/{nickname}/g, nickname) + " ";
    }
    return message.trim();
}

document.getElementById('generate-message').addEventListener('click', function() {
    const message = generateMessage();
    document.getElementById('message-display').textContent = message;
    speakMessage(message);
});

function speakMessage(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Set language
        utterance.rate = 0.8; // Slower rate for emotional feel
        utterance.pitch = 1.2; // Higher pitch for feminine voice
        utterance.volume = 1;

        // Try to select a female voice
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman') || voice.name.toLowerCase().includes('zira') || voice.name.toLowerCase().includes('samantha'));
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        speechSynthesis.speak(utterance);
    } else {
        alert('Speech synthesis not supported in this browser.');
    }
}

// Load voices on page load
window.addEventListener('load', function() {
    speechSynthesis.getVoices();
});