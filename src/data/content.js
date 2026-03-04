// src/data/content.js — ALL app content lives here

export const skillLevels = [
  {
    id: 'beginner',
    displayName: 'Just Getting Started',
    emoji: '\u{1F331}',
    tagline: 'Exploring for the first time',
    description: 'Technology feels new or confusing. We\'ll start from the very beginning with simple, step-by-step guidance.',
    accentColor: '#FAC206',
  },
  {
    id: 'intermediate',
    displayName: 'Getting the Hang of It',
    emoji: '\u{1F4A1}',
    tagline: 'I know a little, want to learn more',
    description: 'You can do the basics but some things still trip you up. We\'ll fill in the gaps and build your confidence.',
    accentColor: '#16C0FF',
  },
  {
    id: 'confident',
    displayName: 'Feeling Pretty Confident',
    emoji: '\u{1F680}',
    tagline: 'I get most things, ready to go deeper',
    description: 'You\'re comfortable with technology. We\'ll teach you smarter ways to use it and tackle trickier topics.',
    accentColor: '#FB4B5F',
  },
];

export const topics = [
  // ==================== LEVEL 1: BEGINNER ====================
  {
    id: 'using-your-phone',
    title: 'Using Your Phone',
    emoji: '\u{1F4F1}',
    skillLevel: 'beginner',
  },
  {
    id: 'sending-messages',
    title: 'Sending Messages',
    emoji: '\u{1F4AC}',
    skillLevel: 'beginner',
  },
  {
    id: 'taking-sharing-photos',
    title: 'Taking & Sharing Photos',
    emoji: '\u{1F4F7}',
    skillLevel: 'beginner',
  },
  {
    id: 'using-internet-safely',
    title: 'Using the Internet Safely',
    emoji: '\u{1F310}',
    skillLevel: 'beginner',
  },
  {
    id: 'email-basics',
    title: 'Email Basics',
    emoji: '\u{1F4E7}',
    skillLevel: 'beginner',
  },
  {
    id: 'keeping-device-healthy',
    title: 'Keeping Your Device Healthy',
    emoji: '\u{1F50B}',
    skillLevel: 'beginner',
  },

  // ==================== LEVEL 2: INTERMEDIATE ====================
  {
    id: 'video-calling',
    title: 'Video Calling Family',
    emoji: '\u{1F3A5}',
    skillLevel: 'intermediate',
  },
  {
    id: 'spotting-scams',
    title: 'Spotting Scams',
    emoji: '\u{1F6E1}\u{FE0F}',
    skillLevel: 'intermediate',
  },
  {
    id: 'understanding-apps',
    title: 'Understanding Apps',
    emoji: '\u{2601}\u{FE0F}',
    skillLevel: 'intermediate',
  },
  {
    id: 'wifi-connections',
    title: 'Wi-Fi & Connections',
    emoji: '\u{1F4E1}',
    skillLevel: 'intermediate',
  },
  {
    id: 'passwords-security',
    title: 'Passwords & Security',
    emoji: '\u{1F510}',
    skillLevel: 'intermediate',
  },
  {
    id: 'staying-organized',
    title: 'Staying Organized Digitally',
    emoji: '\u{1F5D3}\u{FE0F}',
    skillLevel: 'intermediate',
  },

  // ==================== LEVEL 3: CONFIDENT ====================
  {
    id: 'online-banking-shopping',
    title: 'Online Banking & Shopping',
    emoji: '\u{1F3E6}',
    skillLevel: 'confident',
  },
  {
    id: 'telehealth-health-apps',
    title: 'Telehealth & Health Apps',
    emoji: '\u{1F3E5}',
    skillLevel: 'confident',
  },
  {
    id: 'news-entertainment',
    title: 'Getting News & Entertainment',
    emoji: '\u{1F4F0}',
    skillLevel: 'confident',
  },
  {
    id: 'when-something-goes-wrong',
    title: 'When Something Goes Wrong',
    emoji: '\u{1F527}',
    skillLevel: 'confident',
  },
  {
    id: 'ewaste-device-lifespan',
    title: 'E-Waste & Device Lifespan',
    emoji: '\u{267B}\u{FE0F}',
    skillLevel: 'confident',
  },
  {
    id: 'ai-tools-everyday',
    title: 'AI Tools for Everyday Life',
    emoji: '\u{1F916}',
    skillLevel: 'confident',
  },
];

export const lessons = [
  // =====================================================
  // LEVEL 1 — BEGINNER LESSONS
  // =====================================================

  // --- Using Your Phone ---
  {
    id: 'turning-it-on-off',
    topicId: 'using-your-phone',
    title: 'Turning Your Phone On and Off',
    whyItMatters: 'Have you ever picked up your phone and the screen was completely dark? It can be confusing if you\'re not sure how to wake it up. Knowing how to turn your phone on and off is the very first step to using it with confidence.',
    steps: [
      { number: 1, instruction: 'Find the button on the right side of your phone. It\'s usually a small, slightly raised button.', tip: 'On most phones, it\'s the button by itself on the right side.' },
      { number: 2, instruction: 'Press and hold that button for about 3 seconds. You\'ll feel a little vibration and the screen will light up.', tip: 'If nothing happens, your phone might need to be charged first.' },
      { number: 3, instruction: 'Wait a moment for your phone to start up. You\'ll see the phone\'s logo appear on screen.', tip: 'This can take 30 seconds to a minute — that\'s normal!' },
      { number: 4, instruction: 'To turn your phone off, press and hold the same button again for 3 seconds.', tip: null },
      { number: 5, instruction: 'A screen will appear asking you to confirm. Slide or tap the option that says "Power Off" or "Slide to power off."', tip: 'Don\'t worry — turning your phone off won\'t delete anything.' },
    ],
    keyPoints: [
      'The power button is usually on the right side of your phone.',
      'Press and hold for 3 seconds to turn it on or off.',
      'If the screen stays dark, try charging your phone first.',
      'Turning your phone off and on again can fix many small problems.',
    ],
    tryItYourself: 'Now you try! Practice turning your phone off, waiting 10 seconds, and turning it back on. Ask someone nearby if you need help finding the button.',
  },
  {
    id: 'volume-and-brightness',
    topicId: 'using-your-phone',
    title: 'Adjusting Volume and Brightness',
    whyItMatters: 'Have you ever missed a phone call because the ringer was too quiet, or had trouble reading the screen in bright sunlight? Learning to adjust your volume and brightness puts you in control of how your phone looks and sounds.',
    steps: [
      { number: 1, instruction: 'Find the volume buttons on the left side of your phone. There are two buttons — one turns the volume up, the other turns it down.', tip: 'The top button makes it louder, the bottom button makes it quieter.' },
      { number: 2, instruction: 'Press the top volume button a few times. You\'ll see a volume bar appear on your screen and hear the volume get louder.', tip: null },
      { number: 3, instruction: 'Press the bottom volume button to make it quieter.', tip: 'If you press the bottom button all the way down, your phone will go silent or vibrate only.' },
      { number: 4, instruction: 'To change brightness, swipe down from the very top of your screen. You\'ll see a brightness slider — it usually looks like a sun icon.', tip: null },
      { number: 5, instruction: 'Slide your finger left to make the screen dimmer, or right to make it brighter.', tip: 'A brighter screen is easier to read outdoors but uses more battery.' },
    ],
    keyPoints: [
      'Volume buttons are on the left side of most phones.',
      'Top button = louder, bottom button = quieter.',
      'Swipe down from the top of the screen to find brightness controls.',
      'Brighter screens are easier to read but use more battery.',
    ],
    tryItYourself: 'Try it now! Press the volume buttons and watch the bar on your screen. Then swipe down from the top and try adjusting the brightness slider.',
  },
  {
    id: 'making-a-phone-call',
    topicId: 'using-your-phone',
    title: 'Making a Phone Call',
    whyItMatters: 'Your phone is first and foremost a way to talk to the people you care about. Whether you\'re calling a family member, a doctor\'s office, or a friend, knowing how to make a call is one of the most important things your phone can do.',
    steps: [
      { number: 1, instruction: 'Look for the Phone app on your home screen. It usually looks like a green icon with a white phone handset inside.', tip: 'It\'s often at the bottom of your screen.' },
      { number: 2, instruction: 'Tap on it to open the phone app.', tip: null },
      { number: 3, instruction: 'You\'ll see a keypad with numbers — just like an old telephone. Tap the numbers to dial the phone number you want to call.', tip: 'Take your time. If you make a mistake, look for a delete or backspace button.' },
      { number: 4, instruction: 'Tap the green call button (it usually looks like a phone handset) to start the call.', tip: null },
      { number: 5, instruction: 'Hold the phone up to your ear, just like a regular telephone. You\'ll hear it ring, then the other person will answer.', tip: 'If you can\'t hear well, try tapping the speaker button to put the call on speakerphone.' },
    ],
    keyPoints: [
      'The Phone app is the green icon with a phone handset.',
      'Tap the numbers to dial, then tap the green button to call.',
      'Use the speaker button if you need the sound louder.',
      'To end a call, tap the red button on your screen.',
    ],
    tryItYourself: 'Try calling a family member right now! Open the Phone app, type their number, and tap the green button. You can also try calling your own home phone to practice.',
  },

  // --- Sending Messages ---
  {
    id: 'what-is-a-text-message',
    topicId: 'sending-messages',
    title: 'What Is a Text Message?',
    whyItMatters: 'Text messages are one of the easiest ways to stay in touch with family and friends. They\'re like short letters you can send instantly from your phone. Many people find texting more convenient than calling — especially for quick notes like "I\'m on my way!" or "Happy birthday!"',
    steps: [
      { number: 1, instruction: 'A text message is a short written note you send from your phone to someone else\'s phone.', tip: null },
      { number: 2, instruction: 'You type the message using the keyboard that appears on your phone\'s screen.', tip: 'Don\'t worry about typing speed — take your time!' },
      { number: 3, instruction: 'The message arrives on the other person\'s phone within seconds — much faster than regular mail!', tip: null },
      { number: 4, instruction: 'You can text one person or a group of people at the same time.', tip: null },
      { number: 5, instruction: 'To find your messages, look for the Messages app — it usually has a green speech bubble icon.', tip: 'On some phones it might be blue or purple.' },
    ],
    keyPoints: [
      'A text message is a short written note sent from one phone to another.',
      'Messages arrive in seconds.',
      'Look for the speech bubble icon on your phone to find your messages.',
      'You can take as long as you need to type — there\'s no rush.',
    ],
    tryItYourself: 'Look for the Messages app on your phone. Tap it and see if you have any messages waiting for you!',
  },
  {
    id: 'sending-your-first-text',
    topicId: 'sending-messages',
    title: 'Sending Your First Text',
    whyItMatters: 'Once you know how to send a text, you can reach anyone at any time. It\'s a wonderful way to let your family know you\'re thinking of them, even if they\'re too busy to pick up the phone.',
    steps: [
      { number: 1, instruction: 'Open the Messages app by tapping the speech bubble icon on your home screen.', tip: null },
      { number: 2, instruction: 'Tap the button to create a new message. It usually looks like a pencil or a "+" symbol in the corner.', tip: null },
      { number: 3, instruction: 'Type the name or phone number of the person you want to text in the "To" field at the top.', tip: 'If the person is in your contacts, their name should pop up as you type.' },
      { number: 4, instruction: 'Tap the text field at the bottom of the screen. Your keyboard will appear.', tip: null },
      { number: 5, instruction: 'Type your message. Something simple is perfect: "Hi, just thinking of you!"', tip: 'Don\'t worry about capital letters or perfect grammar — the goal is to communicate!' },
      { number: 6, instruction: 'Tap the send button — it usually looks like an arrow pointing up or to the right.', tip: 'Once you tap send, your message will appear in a colored bubble on your screen.' },
    ],
    keyPoints: [
      'Tap the Messages app to get started.',
      'Create a new message with the pencil or "+" button.',
      'Type the person\'s name or number at the top.',
      'Write your message at the bottom, then tap send.',
      'Your sent message will appear in a colored bubble.',
    ],
    tryItYourself: 'Send a text to a family member right now! Try writing "Hello from my phone!" and tap send. You\'ll see your message appear on screen.',
  },

  // --- Taking & Sharing Photos ---
  {
    id: 'how-to-open-the-camera',
    topicId: 'taking-sharing-photos',
    title: 'How to Open the Camera',
    whyItMatters: 'Your phone has a camera built right in — no need to carry a separate one. It\'s perfect for capturing moments with family, taking a photo of something you want to remember, or even snapping a picture of a recipe.',
    steps: [
      { number: 1, instruction: 'Find the Camera app on your home screen. It looks like a small camera icon.', tip: 'On iPhones, it\'s a gray camera icon. On Android, it\'s usually a colorful camera icon.' },
      { number: 2, instruction: 'Tap the Camera icon to open it.', tip: null },
      { number: 3, instruction: 'Your screen will now show what your camera sees — just like looking through a window.', tip: 'If the image looks blurry, gently wipe the camera lens on the back of your phone with a soft cloth.' },
      { number: 4, instruction: 'The camera is ready! You\'ll learn how to take a photo in the next lesson.', tip: null },
    ],
    keyPoints: [
      'The Camera app looks like a small camera icon.',
      'Tap it once to open it.',
      'Your screen becomes your viewfinder — it shows what the camera sees.',
      'If photos look blurry, gently clean the camera lens on the back of your phone.',
    ],
    tryItYourself: 'Open your Camera app right now and point it at something nearby. See how the screen shows what the camera sees? That\'s your viewfinder!',
  },
  {
    id: 'taking-a-photo',
    topicId: 'taking-sharing-photos',
    title: 'Taking a Photo',
    whyItMatters: 'A photo can capture a beautiful sunset, a grandchild\'s smile, or even a doctor\'s instructions you want to remember later. Learning to take clear photos means you\'ll never miss a moment worth saving.',
    steps: [
      { number: 1, instruction: 'Open the Camera app (tap the camera icon on your screen).', tip: null },
      { number: 2, instruction: 'Hold your phone steady with both hands. Point it at what you want to photograph.', tip: 'Rest your elbows against your body to keep steady.' },
      { number: 3, instruction: 'Make sure the thing you\'re photographing is centered on the screen and well-lit.', tip: 'Natural light from a window works wonderfully.' },
      { number: 4, instruction: 'Tap the big round button at the bottom center of the screen. That\'s the shutter button — it takes the photo!', tip: 'You\'ll hear a click sound or see a brief flash on screen.' },
      { number: 5, instruction: 'Your photo is saved automatically! You can find it in the Photos app later.', tip: null },
    ],
    keyPoints: [
      'Hold your phone with both hands for a steady shot.',
      'Make sure your subject is well-lit.',
      'Tap the big round button to take the photo.',
      'Photos are saved automatically — you won\'t lose them.',
    ],
    tryItYourself: 'Take a photo of something near you right now — a cup, a flower, or even your hand. Then open the Photos app to see it!',
  },

  // --- Using the Internet Safely ---
  {
    id: 'what-is-the-internet',
    topicId: 'using-internet-safely',
    title: 'What Is the Internet?',
    whyItMatters: 'You\'ve probably heard people talk about "the internet" all the time. Understanding what it is helps you feel more confident when someone says "just look it up online." The internet is simply a way for computers and phones around the world to share information with each other.',
    steps: [
      { number: 1, instruction: 'Think of the internet like a giant library that you can visit from your phone or computer. Instead of walking to a building, you open an app.', tip: null },
      { number: 2, instruction: 'The internet has websites — these are like different books in the library. Each website has its own address (like "google.com").', tip: null },
      { number: 3, instruction: 'You use an app called a "browser" to visit websites. Common browsers include Safari (iPhone), Chrome, and Firefox.', tip: 'Think of a browser as the door to the internet library.' },
      { number: 4, instruction: 'To use the internet, your phone needs to be connected — either through Wi-Fi at home or through your cell phone plan.', tip: 'If you\'re not sure whether you\'re connected, look for the Wi-Fi symbol at the top of your screen.' },
    ],
    keyPoints: [
      'The internet is like a giant library you access from your phone.',
      'Websites are like books — each has its own address.',
      'A browser app is what you use to visit websites.',
      'Your phone needs a connection (Wi-Fi or cell service) to use the internet.',
    ],
    tryItYourself: 'Look for the Safari or Chrome app on your phone. That\'s your browser — your door to the internet! Try tapping it to see what happens.',
  },
  {
    id: 'recognizing-safe-sites',
    topicId: 'using-internet-safely',
    title: 'Recognizing Safe vs. Suspicious Sites',
    whyItMatters: 'Just like in the real world, not every place on the internet is safe. Some websites try to trick people into giving away personal information or money. Knowing how to spot a suspicious website can protect you from scams.',
    steps: [
      { number: 1, instruction: 'Look at the website address at the top of your browser. Safe websites usually start with "https://" — the "s" stands for "secure."', tip: 'You might also see a small padlock icon next to the address.' },
      { number: 2, instruction: 'Be cautious of websites with strange or misspelled addresses. For example, "amaz0n.com" instead of "amazon.com."', tip: null },
      { number: 3, instruction: 'If a website asks you for your Social Security number, bank password, or other very personal information — be very careful. Legitimate sites rarely ask for this.', tip: 'When in doubt, close the website and ask someone you trust.' },
      { number: 4, instruction: 'Watch out for pop-up messages that say "You\'ve won a prize!" or "Your phone has a virus!" These are almost always scams.', tip: 'Close these pop-ups by tapping the X in the corner. Don\'t tap anything else on them.' },
      { number: 5, instruction: 'If something feels off, trust your instinct. It\'s always okay to close a website and walk away.', tip: null },
    ],
    keyPoints: [
      'Look for "https://" and a padlock icon — these mean the site is more secure.',
      'Watch for misspelled website addresses — scammers use these to trick you.',
      'Never give your Social Security number or bank password to a website unless you\'re certain it\'s legitimate.',
      'Pop-ups saying you\'ve "won" something are almost always scams.',
      'When in doubt, close the website and ask someone you trust.',
    ],
    tryItYourself: 'Open your browser and go to a website you use often (like google.com). Look at the top of the screen — can you see the padlock icon and "https://"?',
  },

  // --- Email Basics ---
  {
    id: 'what-is-email',
    topicId: 'email-basics',
    title: 'What Is Email?',
    whyItMatters: 'Email is like sending a letter, but it arrives in seconds instead of days. Doctors, banks, and family members all use email to stay in touch. Understanding email opens up a whole new way to communicate.',
    steps: [
      { number: 1, instruction: 'Email stands for "electronic mail." It\'s a way to send messages through the internet — like digital letters.', tip: null },
      { number: 2, instruction: 'Every person who uses email has an "email address" — it looks like a name, then the "@" symbol, then a service name. For example: jane.smith@gmail.com.', tip: null },
      { number: 3, instruction: 'To send or read email, you use an email app. Common ones include Gmail, Yahoo Mail, and the Mail app on iPhones.', tip: 'Look for an envelope icon on your phone.' },
      { number: 4, instruction: 'Your "inbox" is where new emails arrive — think of it as your mailbox.', tip: null },
      { number: 5, instruction: 'Unlike regular mail, email is free to send and arrives almost instantly!', tip: null },
    ],
    keyPoints: [
      'Email is like a digital letter that arrives in seconds.',
      'Email addresses have an "@" symbol in them (like name@gmail.com).',
      'Your inbox is where new emails arrive.',
      'Email is free and much faster than regular mail.',
    ],
    tryItYourself: 'Do you have an email app on your phone? Look for an envelope icon and tap it. If you have an email account, you\'ll see your inbox!',
  },
  {
    id: 'reading-and-replying',
    topicId: 'email-basics',
    title: 'Reading and Replying to an Email',
    whyItMatters: 'When a family member or your doctor sends you an email, you\'ll want to know how to read it and write back. Replying to emails keeps the conversation going — just like writing back to a letter.',
    steps: [
      { number: 1, instruction: 'Open your email app (look for the envelope icon).', tip: null },
      { number: 2, instruction: 'Your inbox shows a list of emails. Newer ones are at the top. Tap on any email to read it.', tip: 'Unread emails are usually shown in bold.' },
      { number: 3, instruction: 'Read the email on your screen. You can scroll down if the message is long.', tip: null },
      { number: 4, instruction: 'To reply, look for a "Reply" button or an arrow icon pointing backwards. Tap it.', tip: 'The reply button is usually at the bottom of the email.' },
      { number: 5, instruction: 'A new screen will open where you can type your response. The person\'s address is already filled in for you.', tip: null },
      { number: 6, instruction: 'Type your reply, then tap the Send button (usually a paper airplane or arrow icon).', tip: 'Take your time typing. There\'s no rush!' },
    ],
    keyPoints: [
      'Tap an email in your inbox to read it.',
      'Unread emails usually appear in bold.',
      'Tap "Reply" to write back to someone.',
      'The send button usually looks like a paper airplane or arrow.',
    ],
    tryItYourself: 'Open your email app and read your newest email. If it\'s from someone you know, try tapping Reply and writing a short response!',
  },

  // --- Keeping Your Device Healthy ---
  {
    id: 'charging-your-phone',
    topicId: 'keeping-device-healthy',
    title: 'Charging Your Phone Correctly',
    whyItMatters: 'Your phone needs to be charged regularly, just like any rechargeable device. Knowing how to charge it properly helps your battery last longer and means your phone is always ready when you need it.',
    steps: [
      { number: 1, instruction: 'Find your charging cable. One end plugs into your phone, the other end plugs into a wall adapter or a USB port.', tip: 'Use the cable that came with your phone for best results.' },
      { number: 2, instruction: 'Plug the small end of the cable into the bottom of your phone. It should click gently into place.', tip: 'Don\'t force it — if it doesn\'t fit easily, you might have it upside down.' },
      { number: 3, instruction: 'Plug the other end into a wall outlet (using the adapter) or a USB port on your computer.', tip: null },
      { number: 4, instruction: 'You\'ll see a small lightning bolt or battery icon on your phone\'s screen — this means it\'s charging!', tip: null },
      { number: 5, instruction: 'Try to charge your phone before the battery drops below 20%. You don\'t need to wait until it\'s completely dead.', tip: 'Charging it overnight is fine — modern phones stop charging when they\'re full.' },
    ],
    keyPoints: [
      'Use the cable that came with your phone.',
      'A lightning bolt icon means your phone is charging.',
      'Try to charge before the battery drops below 20%.',
      'It\'s safe to charge your phone overnight.',
    ],
    tryItYourself: 'Check your phone\'s battery right now. Look at the top corner of your screen for the battery icon. If it\'s below 50%, plug it in to charge!',
  },
  {
    id: 'why-updates-matter',
    topicId: 'keeping-device-healthy',
    title: 'Why Updates Matter',
    whyItMatters: 'You\'ve probably seen those little pop-ups asking you to update your phone. They might seem annoying, but updates are actually your phone\'s way of getting healthier and safer. They fix problems and protect you from security threats.',
    steps: [
      { number: 1, instruction: 'Updates are improvements made by the people who built your phone\'s software. Think of them like tune-ups for your car.', tip: null },
      { number: 2, instruction: 'When your phone says "Software Update Available," it\'s a good idea to install it.', tip: 'Your phone usually asks at a convenient time.' },
      { number: 3, instruction: 'Before updating, make sure your phone is connected to Wi-Fi and has at least 50% battery (or is plugged in).', tip: null },
      { number: 4, instruction: 'Tap "Install" or "Update" when you\'re ready. Your phone may restart during the process — this is completely normal.', tip: 'Updates can take 10-30 minutes. Don\'t worry if it takes a while.' },
      { number: 5, instruction: 'After the update finishes, your phone will turn back on and everything will be right where you left it.', tip: 'Your photos, messages, and apps are not deleted during updates.' },
    ],
    keyPoints: [
      'Updates fix problems and improve your phone\'s security.',
      'Always update when your phone asks you to.',
      'Make sure you\'re on Wi-Fi and have enough battery before updating.',
      'Updates don\'t delete your photos, messages, or apps.',
      'Your phone may restart during an update — that\'s normal.',
    ],
    tryItYourself: 'Go to Settings on your phone and look for "Software Update" or "System Update." Check if any updates are waiting for you!',
  },

  // =====================================================
  // LEVEL 2 — INTERMEDIATE LESSONS
  // =====================================================

  // --- Video Calling Family ---
  {
    id: 'what-is-video-calling',
    topicId: 'video-calling',
    title: 'What Is Video Calling?',
    whyItMatters: 'Imagine being able to see your grandchildren\'s faces while you talk to them, even if they live far away. Video calling makes this possible. It\'s like a phone call, but you can see each other on your screens.',
    steps: [
      { number: 1, instruction: 'A video call is a phone call where you can see the other person on your screen, and they can see you too.', tip: null },
      { number: 2, instruction: 'Common video calling apps include FaceTime (for iPhones), Zoom, and Google Meet. You might already have one on your phone!', tip: 'FaceTime comes pre-installed on all iPhones.' },
      { number: 3, instruction: 'Video calls use your phone\'s front camera — the one on the same side as your screen — so the other person can see your face.', tip: null },
      { number: 4, instruction: 'You\'ll need a good internet connection (Wi-Fi works best) for clear video calls.', tip: 'Sit near your Wi-Fi router for the best connection.' },
    ],
    keyPoints: [
      'Video calls let you see and hear the other person at the same time.',
      'FaceTime, Zoom, and Google Meet are popular video calling apps.',
      'Your phone uses the front camera to show your face.',
      'A strong Wi-Fi connection gives you the clearest video.',
    ],
    tryItYourself: 'Check if you have FaceTime or Zoom on your phone. If you see the app, tap it and explore what it looks like!',
  },
  {
    id: 'setting-up-a-video-call',
    topicId: 'video-calling',
    title: 'Setting Up a Video Call',
    whyItMatters: 'The first video call can feel a little nerve-wracking, but once you\'ve done it once, it becomes easy. Being able to video call means you can see family, join community groups, and even visit with your doctor — all from your home.',
    steps: [
      { number: 1, instruction: 'Open your video calling app (FaceTime, Zoom, or Google Meet).', tip: null },
      { number: 2, instruction: 'For FaceTime: tap the "+" button, type the person\'s name or phone number, then tap the video camera icon.', tip: null },
      { number: 3, instruction: 'For Zoom: tap "New Meeting" to start a call, or tap "Join" and enter the meeting ID someone sent you.', tip: 'Meeting IDs are usually 9-11 digit numbers.' },
      { number: 4, instruction: 'Position your phone so the front camera can see your face. Prop it against something if needed.', tip: 'A stack of books or a coffee mug works great as a phone stand!' },
      { number: 5, instruction: 'Make sure you\'re in a well-lit area. Face a window if possible — natural light helps the other person see you clearly.', tip: null },
      { number: 6, instruction: 'Speak in your normal voice. The microphone on your phone will pick up your voice just fine.', tip: null },
    ],
    keyPoints: [
      'Open your video calling app and tap the option to start or join a call.',
      'Prop your phone up so the camera can see your face.',
      'Sit in a well-lit area facing a window for the best picture.',
      'Speak in your normal voice — the microphone will pick it up.',
    ],
    tryItYourself: 'Ask a family member to set up a practice video call with you. Take turns calling each other so you both get comfortable with the process!',
  },

  // --- Spotting Scams ---
  {
    id: 'what-is-a-scam',
    topicId: 'spotting-scams',
    title: 'What Is a Scam?',
    whyItMatters: 'Scams are tricks that dishonest people use to steal your money or personal information. They often target seniors because they know many older adults are still learning about technology. Knowing what a scam looks like is the best way to protect yourself.',
    steps: [
      { number: 1, instruction: 'A scam is when someone pretends to be a person or company you trust in order to steal from you.', tip: null },
      { number: 2, instruction: 'Scams can come as phone calls, text messages, emails, or pop-up windows on your screen.', tip: null },
      { number: 3, instruction: 'Common scams include messages saying "You\'ve won a prize!", "Your account has been locked!", or "The IRS is going to arrest you."', tip: 'The IRS, Medicare, and Social Security will never call or text to threaten you.' },
      { number: 4, instruction: 'Scammers try to scare you or excite you so you act quickly without thinking. That\'s their strategy.', tip: null },
      { number: 5, instruction: 'The golden rule: if something feels rushed, scary, or too good to be true — stop, think, and ask someone you trust.', tip: 'It\'s always okay to hang up, close the message, or walk away.' },
    ],
    keyPoints: [
      'A scam is a trick to steal your money or personal information.',
      'Scams come through calls, texts, emails, and pop-ups.',
      'Government agencies will never call to threaten or pressure you.',
      'If something feels rushed or too good to be true, it\'s probably a scam.',
      'When in doubt, stop and ask someone you trust.',
    ],
    tryItYourself: 'Think about the last unusual message or call you received. Did it ask for personal information? Did it try to rush you? Those are red flags!',
  },
  {
    id: 'common-senior-scams',
    topicId: 'spotting-scams',
    title: 'The 5 Most Common Senior Scams',
    whyItMatters: 'Knowing the most common tricks scammers use makes you much harder to fool. These five scams target seniors more than anyone else. Once you know the patterns, you\'ll be able to spot them quickly.',
    steps: [
      { number: 1, instruction: 'The Grandchild Scam: Someone calls pretending to be your grandchild, saying they\'re in trouble and need money right away. They\'ll say "Don\'t tell mom and dad."', tip: 'Always call your grandchild\'s real phone number to check before sending anything.' },
      { number: 2, instruction: 'The Tech Support Scam: A pop-up or phone call says your computer has a virus and asks you to pay for a "fix" or give them remote access to your device.', tip: 'Real tech companies like Apple and Microsoft will never call you out of the blue.' },
      { number: 3, instruction: 'The Government Impersonation Scam: Someone claims to be from the IRS, Medicare, or Social Security and threatens arrest or fines if you don\'t pay immediately.', tip: 'The government contacts you by mail first — never by phone threats.' },
      { number: 4, instruction: 'The Prize Scam: You receive a call, email, or message saying you\'ve won a prize or lottery, but you need to pay a "fee" to collect it.', tip: 'You can\'t win a contest you didn\'t enter. Real prizes are free to claim.' },
      { number: 5, instruction: 'The Romance Scam: Someone you met online quickly professes love and eventually asks for money, gift cards, or personal information.', tip: 'Never send money to someone you haven\'t met in person.' },
    ],
    keyPoints: [
      'Scammers pretend to be grandchildren, tech support, or the government.',
      'They create urgency to stop you from thinking clearly.',
      'Never send money, gift cards, or personal information to someone pressuring you.',
      'Always verify by calling the real person or organization directly.',
      'If targeted, call the FTC at 1-877-382-4357 or tell a trusted family member.',
    ],
    tryItYourself: 'Talk to a friend or family member about these 5 scams. Sharing this knowledge helps protect everyone!',
  },

  // --- Understanding Apps ---
  {
    id: 'what-is-an-app',
    topicId: 'understanding-apps',
    title: 'What Is an App?',
    whyItMatters: 'You may hear the word "app" a lot, but what does it actually mean? An app is simply a program on your phone that does a specific job — just like tools in a toolbox. Your phone already has several apps on it, and you\'ve probably been using them without even realizing it!',
    steps: [
      { number: 1, instruction: 'An "app" is short for "application." It\'s a small program that lives on your phone and does a specific thing.', tip: null },
      { number: 2, instruction: 'The Camera on your phone? That\'s an app. The Clock? That\'s an app too. Even your Phone dialer is an app.', tip: null },
      { number: 3, instruction: 'Apps are the little icons you see on your phone\'s home screen. Each one opens a different tool.', tip: null },
      { number: 4, instruction: 'You can get new apps from the App Store (iPhone) or Google Play Store (Android). There are apps for weather, recipes, games, health, news, and much more.', tip: null },
      { number: 5, instruction: 'Many apps are free! Some cost a small amount, and the price is always shown before you download.', tip: 'You won\'t be charged anything without your permission.' },
    ],
    keyPoints: [
      'An app is a small program on your phone that does one specific job.',
      'You already use apps every day — Camera, Clock, Phone, and Messages are all apps.',
      'You can find new apps in the App Store or Google Play Store.',
      'Many apps are free, and you\'ll always see the price before downloading.',
    ],
    tryItYourself: 'Look at your phone\'s home screen. How many apps can you count? Try to name what each one does!',
  },
  {
    id: 'downloading-apps',
    topicId: 'understanding-apps',
    title: 'How to Find and Download Apps',
    whyItMatters: 'Being able to download apps opens up a whole world of useful tools — from checking the weather to playing word games. Once you know how to find and download apps, you can customize your phone to do exactly what you need.',
    steps: [
      { number: 1, instruction: 'Open the App Store (iPhone — blue icon with an "A") or Google Play Store (Android — colorful triangle icon).', tip: null },
      { number: 2, instruction: 'Tap the search bar at the top or bottom of the screen.', tip: null },
      { number: 3, instruction: 'Type the name of the app you want — for example, "Weather" or "Zoom."', tip: 'If you\'re not sure what to search for, try describing what you want: "recipe app" or "word game."' },
      { number: 4, instruction: 'Look through the results. The app you want will usually be near the top. Check that it\'s from a trusted company.', tip: 'Look for apps with high ratings (4+ stars) and many reviews.' },
      { number: 5, instruction: 'Tap "Get" (iPhone) or "Install" (Android) to download the app. It\'s free if it says "Get" or "Install" with no price listed.', tip: null },
      { number: 6, instruction: 'Wait a moment for the app to download. When it\'s done, the app\'s icon will appear on your home screen.', tip: 'You may need to confirm with your fingerprint, face, or password.' },
    ],
    keyPoints: [
      'Use the App Store (iPhone) or Google Play Store (Android) to find apps.',
      'Search by name or by what you need.',
      'Look for high ratings and many reviews.',
      '"Get" or "Install" with no price means it\'s free.',
      'The new app\'s icon will appear on your home screen when it\'s done.',
    ],
    tryItYourself: 'Open your app store and search for "Weather." Look at the results — can you find a free weather app with good reviews?',
  },

  // --- Wi-Fi & Connections ---
  {
    id: 'what-is-wifi',
    topicId: 'wifi-connections',
    title: 'What Is Wi-Fi?',
    whyItMatters: 'Wi-Fi is what connects your phone to the internet when you\'re at home, at a library, or at a coffee shop. Understanding Wi-Fi helps you stay connected and saves you from using too much of your phone plan\'s data.',
    steps: [
      { number: 1, instruction: 'Wi-Fi is an invisible signal that lets your phone connect to the internet without using cables.', tip: 'Think of it like invisible radio waves carrying internet to your phone.' },
      { number: 2, instruction: 'At home, your Wi-Fi signal comes from a small box called a "router." It\'s usually provided by your internet company.', tip: null },
      { number: 3, instruction: 'When you\'re connected to Wi-Fi, you can browse the internet, watch videos, and video call without using your phone plan\'s data.', tip: 'This is especially helpful if your phone plan has a data limit.' },
      { number: 4, instruction: 'The Wi-Fi symbol looks like a fan or a series of curved lines. You\'ll see it at the top of your phone\'s screen when you\'re connected.', tip: null },
    ],
    keyPoints: [
      'Wi-Fi connects your phone to the internet without cables.',
      'Your home router creates a Wi-Fi signal.',
      'Using Wi-Fi saves your phone plan\'s data.',
      'The Wi-Fi symbol looks like curved lines at the top of your screen.',
    ],
    tryItYourself: 'Look at the top of your phone\'s screen. Do you see the Wi-Fi symbol (curved lines)? If so, you\'re connected to Wi-Fi right now!',
  },
  {
    id: 'connecting-to-wifi',
    topicId: 'wifi-connections',
    title: 'Connecting to Your Home Wi-Fi',
    whyItMatters: 'Once your phone is connected to your home Wi-Fi, it will remember the connection and join automatically every time you\'re home. You\'ll only need to do this once!',
    steps: [
      { number: 1, instruction: 'Open the Settings app on your phone (it looks like a gear icon).', tip: null },
      { number: 2, instruction: 'Tap "Wi-Fi" — it\'s usually near the top of the Settings list.', tip: null },
      { number: 3, instruction: 'Make sure Wi-Fi is turned on. The switch should be green or blue.', tip: 'If it\'s gray, tap the switch to turn it on.' },
      { number: 4, instruction: 'You\'ll see a list of nearby Wi-Fi networks. Find your home network\'s name and tap on it.', tip: 'Your network name is usually printed on a sticker on your router.' },
      { number: 5, instruction: 'Type the Wi-Fi password when asked. This is also usually on the sticker on your router.', tip: 'Wi-Fi passwords are case-sensitive — capital and lowercase letters matter!' },
      { number: 6, instruction: 'Tap "Join" or "Connect." A checkmark will appear next to your network name, and the Wi-Fi symbol will show at the top of your screen.', tip: null },
    ],
    keyPoints: [
      'Go to Settings, then tap Wi-Fi.',
      'Find your home network and tap it.',
      'Enter the password from the sticker on your router.',
      'Once connected, your phone will remember and reconnect automatically.',
    ],
    tryItYourself: 'If you\'re at home, check if your phone is connected to Wi-Fi. Go to Settings and tap Wi-Fi — do you see a checkmark next to your network?',
  },

  // --- Passwords & Security ---
  {
    id: 'why-passwords-matter',
    topicId: 'passwords-security',
    title: 'Why Passwords Matter',
    whyItMatters: 'Passwords are like the locks on your front door — they keep unwanted people out. Your email, bank account, and personal information are all protected by passwords. Using good passwords is one of the most important things you can do to stay safe online.',
    steps: [
      { number: 1, instruction: 'A password is a secret word or phrase that only you should know. It proves that you are who you say you are when you sign in to an account.', tip: null },
      { number: 2, instruction: 'Think of your password as the key to your digital home. If someone else has your key, they can get into your stuff.', tip: null },
      { number: 3, instruction: 'Every account you have — email, bank, shopping — should have a different password.', tip: 'Using the same password everywhere is like using one key for your house, car, and office — if someone gets it, they get into everything.' },
      { number: 4, instruction: 'A strong password is long (12 or more characters), uses a mix of letters, numbers, and symbols, and isn\'t easy to guess.', tip: null },
      { number: 5, instruction: 'Never share your password with anyone you don\'t fully trust. No company will ever call and ask for your password.', tip: 'If someone calls asking for your password, hang up. It\'s a scam.' },
    ],
    keyPoints: [
      'A password is like a key that protects your accounts.',
      'Use a different password for each account.',
      'Strong passwords are long and use a mix of characters.',
      'No legitimate company will ever call and ask for your password.',
    ],
    tryItYourself: 'Think about how many accounts you have that need passwords. Can you count them? Email, bank, maybe a shopping site?',
  },
  {
    id: 'creating-strong-password',
    topicId: 'passwords-security',
    title: 'Creating a Strong Password',
    whyItMatters: 'A strong password is the best shield you have against people trying to break into your accounts. Learning to create one that\'s both strong and memorable means you won\'t have to worry about someone guessing their way in.',
    steps: [
      { number: 1, instruction: 'Start with a phrase you\'ll remember — something personal that others wouldn\'t guess. For example: "I love walking my dog in the park."', tip: null },
      { number: 2, instruction: 'Take the first letter of each word: "IlwmditP"', tip: null },
      { number: 3, instruction: 'Add some numbers — maybe a year that\'s meaningful to you: "IlwmditP47"', tip: 'Don\'t use your birth year — that\'s too easy to guess.' },
      { number: 4, instruction: 'Add a special character or two: "IlwmditP47!@"', tip: null },
      { number: 5, instruction: 'You now have a strong password! It\'s 12 characters long, mixes upper and lowercase letters, numbers, and symbols.', tip: null },
      { number: 6, instruction: 'Write this password down and keep it somewhere safe — like a notebook in a locked drawer. Don\'t keep it on a sticky note on your desk.', tip: 'A physical notebook for passwords is perfectly fine, as long as you keep it in a safe place.' },
    ],
    keyPoints: [
      'Use a memorable phrase and take the first letters of each word.',
      'Add numbers and special characters to make it stronger.',
      'Never use easy-to-guess information like birthdays or "password123."',
      'Write your passwords in a notebook kept in a safe place.',
      'Use a different password for each account.',
    ],
    tryItYourself: 'Try creating a strong password using a phrase you\'ll remember! Write it down and keep it somewhere safe.',
  },

  // --- Staying Organized Digitally ---
  {
    id: 'using-phone-calendar',
    topicId: 'staying-organized',
    title: 'Using Your Phone\'s Calendar',
    whyItMatters: 'Your phone can help you remember appointments, birthdays, and important dates — all in one place. No more forgetting a doctor\'s appointment or missing a grandchild\'s birthday. Your phone\'s calendar can remind you ahead of time!',
    steps: [
      { number: 1, instruction: 'Find the Calendar app on your phone. It usually shows today\'s date as its icon.', tip: null },
      { number: 2, instruction: 'Tap on the Calendar app to open it. You\'ll see a view of the current month with today\'s date highlighted.', tip: null },
      { number: 3, instruction: 'To add an event, tap the "+" button or tap on the date you want.', tip: null },
      { number: 4, instruction: 'Type the name of the event — for example, "Doctor\'s appointment" or "Sarah\'s birthday."', tip: null },
      { number: 5, instruction: 'Set the date and time by tapping on them and scrolling to the right ones.', tip: null },
      { number: 6, instruction: 'Add a reminder — choose how far in advance you want to be notified. "1 hour before" or "1 day before" are popular choices.', tip: 'You can add multiple reminders for the same event.' },
      { number: 7, instruction: 'Tap "Save" or "Done." Your event is now on your calendar, and your phone will remind you when it\'s time!', tip: null },
    ],
    keyPoints: [
      'Your phone\'s calendar can remember appointments and important dates for you.',
      'Tap the "+" button to add a new event.',
      'Set reminders so your phone alerts you ahead of time.',
      'Once saved, the event shows up on your calendar automatically.',
    ],
    tryItYourself: 'Open your Calendar app and add an upcoming appointment or birthday. Set a reminder for 1 day before!',
  },
  {
    id: 'setting-reminders',
    topicId: 'staying-organized',
    title: 'Setting Reminders for Medications and Appointments',
    whyItMatters: 'Keeping track of medications, doctor visits, and other important tasks can be stressful. Your phone can handle the remembering for you — it\'ll send you a gentle reminder right when you need it.',
    steps: [
      { number: 1, instruction: 'You can set reminders using your phone\'s Clock app (for alarms) or the Reminders app (for tasks).', tip: 'iPhones have a dedicated Reminders app. Android phones can use Google Keep or the Clock app.' },
      { number: 2, instruction: 'For a daily medication reminder, open the Clock app and go to Alarms.', tip: null },
      { number: 3, instruction: 'Tap "+" to create a new alarm. Set the time you take your medication.', tip: null },
      { number: 4, instruction: 'Give the alarm a label like "Take morning pills" so you know what it\'s for.', tip: null },
      { number: 5, instruction: 'Set it to repeat every day (or certain days of the week).', tip: null },
      { number: 6, instruction: 'Tap "Save." Your phone will now alert you at the same time every day!', tip: 'For multiple medications at different times, just create separate alarms for each one.' },
    ],
    keyPoints: [
      'Use alarms in the Clock app for daily reminders like medications.',
      'Label each alarm so you know what it\'s for.',
      'Set reminders to repeat daily or on certain days.',
      'Create separate alarms for different medications or tasks.',
    ],
    tryItYourself: 'Set an alarm on your phone for your next dose of medication or your next appointment. Label it clearly!',
  },

  // =====================================================
  // LEVEL 3 — CONFIDENT LESSONS
  // =====================================================

  // --- Online Banking & Shopping ---
  {
    id: 'checking-bank-account',
    topicId: 'online-banking-shopping',
    title: 'Checking Your Bank Account Online',
    whyItMatters: 'Being able to check your bank balance and recent transactions from your phone means you don\'t have to drive to the bank or wait for a paper statement. It\'s safe, quick, and available anytime — day or night.',
    steps: [
      { number: 1, instruction: 'Download your bank\'s official app from the App Store or Google Play Store. Search for your bank\'s name (e.g., "Bank of America" or "Chase").', tip: 'Make sure it\'s the official app — check that it has the bank\'s logo and high ratings.' },
      { number: 2, instruction: 'Open the app and sign in with your online banking username and password. If you don\'t have one, your bank can help you set it up.', tip: 'You may be able to set up your account by visiting a branch or calling the bank\'s customer service.' },
      { number: 3, instruction: 'Once signed in, you\'ll see your accounts listed. Tap on one to see the balance and recent transactions.', tip: null },
      { number: 4, instruction: 'You can scroll through your transactions to see what\'s been charged, deposited, or withdrawn.', tip: 'If you see a charge you don\'t recognize, contact your bank right away.' },
      { number: 5, instruction: 'Always sign out when you\'re done. Look for "Sign Out" or "Log Out" usually at the bottom of the menu.', tip: 'This is especially important if others use your phone.' },
    ],
    keyPoints: [
      'Use your bank\'s official app — always download it from the app store.',
      'Your bank can help you set up online banking if you haven\'t already.',
      'Check your transactions regularly for any charges you don\'t recognize.',
      'Always sign out when you\'re done.',
    ],
    tryItYourself: 'If you have your bank\'s app, open it and check your recent transactions. Notice anything you don\'t recognize? Your bank can help investigate.',
  },
  {
    id: 'shopping-safely-online',
    topicId: 'online-banking-shopping',
    title: 'Shopping Safely on Amazon and Other Sites',
    whyItMatters: 'Online shopping means you can buy groceries, gifts, household items, and more — all delivered to your door. It\'s especially helpful when getting to a store is difficult. But it\'s important to shop safely.',
    steps: [
      { number: 1, instruction: 'Stick to well-known, trusted websites for shopping: Amazon, Walmart, and Target are common examples.', tip: null },
      { number: 2, instruction: 'Before entering any payment information, check that the website address starts with "https://" and shows a padlock icon.', tip: 'The "s" means the site is using a secure connection to protect your information.' },
      { number: 3, instruction: 'When you find an item you want, tap "Add to Cart." You can keep shopping or proceed to checkout.', tip: null },
      { number: 4, instruction: 'At checkout, you\'ll enter your shipping address and payment information. The site will save this for next time if you choose.', tip: 'Only save your payment information on trusted sites.' },
      { number: 5, instruction: 'Review your order carefully before clicking "Place Order" — check the item, quantity, price, and shipping address.', tip: null },
      { number: 6, instruction: 'You\'ll receive a confirmation email with your order details. Save this email until your order arrives.', tip: 'If something seems wrong with your order, contact the store\'s customer service right away.' },
    ],
    keyPoints: [
      'Shop on trusted, well-known websites.',
      'Look for "https://" and the padlock icon before entering payment info.',
      'Always review your order before clicking "Place Order."',
      'Save confirmation emails until your order arrives.',
      'If a deal seems too good to be true, it probably is.',
    ],
    tryItYourself: 'Visit Amazon or another trusted shopping site and practice browsing for an item. You don\'t have to buy anything — just explore how the site works!',
  },

  // --- Telehealth & Health Apps ---
  {
    id: 'what-is-telehealth',
    topicId: 'telehealth-health-apps',
    title: 'What Is Telehealth?',
    whyItMatters: 'Telehealth lets you visit your doctor without leaving home — using your phone or computer for a video appointment. It\'s perfect for routine check-ups, follow-up visits, and times when getting to the office is difficult.',
    steps: [
      { number: 1, instruction: 'Telehealth is a video or phone call with your doctor. You talk to them from home instead of going to the office.', tip: null },
      { number: 2, instruction: 'Your doctor\'s office will tell you which app to use for your visit. Common ones include MyChart, Doxy.me, or Zoom.', tip: null },
      { number: 3, instruction: 'Before your appointment, make sure you have the app downloaded and your phone is charged.', tip: 'Test the app a day before your appointment so you\'re not rushing.' },
      { number: 4, instruction: 'At the scheduled time, open the app and join your appointment. It\'s just like a video call with family.', tip: 'Find a quiet, well-lit spot. Have your medications and questions ready.' },
      { number: 5, instruction: 'Speak clearly and don\'t be afraid to ask your doctor to repeat something or slow down.', tip: 'Write down any instructions your doctor gives you during the call.' },
    ],
    keyPoints: [
      'Telehealth is a doctor\'s visit from home using video.',
      'Download and test the app before your appointment.',
      'Have your medications and questions ready.',
      'It\'s okay to ask your doctor to repeat or slow down.',
    ],
    tryItYourself: 'Ask your doctor\'s office if they offer telehealth visits. If they do, ask which app they use and download it!',
  },
  {
    id: 'using-patient-portals',
    topicId: 'telehealth-health-apps',
    title: 'Using Patient Portals Like MyChart',
    whyItMatters: 'Patient portals let you see your test results, message your doctor, request prescription refills, and schedule appointments — all from your phone. It\'s like having a direct line to your healthcare team.',
    steps: [
      { number: 1, instruction: 'Ask your doctor\'s office if they use a patient portal (like MyChart). They\'ll help you sign up if you haven\'t already.', tip: null },
      { number: 2, instruction: 'Download the portal app from your app store. For MyChart, search for "MyChart" in the App Store or Google Play.', tip: null },
      { number: 3, instruction: 'Sign in with the username and password your doctor\'s office gave you.', tip: 'If you forgot your login information, the app usually has a "Forgot Password" option.' },
      { number: 4, instruction: 'Once inside, you can see your upcoming appointments, view test results, and send messages to your doctor.', tip: 'Test results may take a few days to appear after a visit.' },
      { number: 5, instruction: 'To message your doctor, look for the "Messages" section and tap "New Message." Type your question and send it.', tip: 'This isn\'t for emergencies — if something is urgent, call your doctor\'s office or 911.' },
    ],
    keyPoints: [
      'Patient portals give you access to your health information anytime.',
      'Ask your doctor\'s office to help you get set up.',
      'You can view test results, message doctors, and schedule appointments.',
      'For emergencies, always call your doctor or 911 instead.',
    ],
    tryItYourself: 'If you have a MyChart or patient portal account, log in and explore. Can you find your most recent test results or upcoming appointments?',
  },

  // --- News & Entertainment ---
  {
    id: 'finding-trustworthy-news',
    topicId: 'news-entertainment',
    title: 'Finding Trustworthy News Online',
    whyItMatters: 'The internet is full of news — some reliable, some misleading. Knowing how to find trustworthy news sources means you can stay informed without being tricked by false information.',
    steps: [
      { number: 1, instruction: 'Stick to well-known, established news sources: your local newspaper\'s website, AP News, NPR, BBC, or Reuters are all reliable.', tip: null },
      { number: 2, instruction: 'Be cautious of articles with very emotional or sensational headlines like "SHOCKING!" or "They don\'t want you to know this!"', tip: 'Trustworthy news is usually calm and factual, not designed to scare or outrage you.' },
      { number: 3, instruction: 'Check who wrote the article. Reliable news identifies the author. If there\'s no author listed, be cautious.', tip: null },
      { number: 4, instruction: 'If a story sounds unbelievable, check if other trusted news sources are reporting the same thing. If only one unknown site is reporting it, it may not be true.', tip: null },
      { number: 5, instruction: 'Be especially careful with news shared on social media. Anyone can post anything — it doesn\'t mean it\'s accurate.', tip: 'Before sharing a story, ask yourself: Is this from a reliable source? Have I seen it confirmed elsewhere?' },
    ],
    keyPoints: [
      'Stick to well-known, established news sources.',
      'Emotional or sensational headlines are a red flag.',
      'Check if other trusted sources report the same story.',
      'Be extra careful with news shared on social media.',
    ],
    tryItYourself: 'Next time you see a surprising news story, check two other trusted news sources to see if they\'re reporting the same thing.',
  },
  {
    id: 'youtube-for-beginners',
    topicId: 'news-entertainment',
    title: 'YouTube for Beginners',
    whyItMatters: 'YouTube is like having a free library of videos on every topic imaginable — from cooking recipes to gardening tips to music concerts. Once you know how to use it, you\'ll have endless entertainment and learning at your fingertips.',
    steps: [
      { number: 1, instruction: 'Find the YouTube app on your phone (it has a red play button icon). Tap to open it.', tip: 'If you don\'t have it, download it free from the App Store or Google Play.' },
      { number: 2, instruction: 'At the top of the screen, you\'ll see a search bar with a magnifying glass icon. Tap on it.', tip: null },
      { number: 3, instruction: 'Type what you want to watch — for example, "easy pasta recipe" or "chair exercises for seniors."', tip: 'YouTube will suggest popular searches as you type.' },
      { number: 4, instruction: 'Tap on a video from the results to start watching. The video will play automatically.', tip: null },
      { number: 5, instruction: 'You can pause the video by tapping the screen once, then tapping the pause button (two vertical lines).', tip: 'Tap once on the video to see the controls, then tap again to hide them.' },
      { number: 6, instruction: 'To make the video full-screen, turn your phone sideways (landscape). It will fill the whole screen.', tip: null },
    ],
    keyPoints: [
      'YouTube has free videos on almost any topic.',
      'Use the search bar to find what interests you.',
      'Tap the video to play, tap again to see controls.',
      'Turn your phone sideways for a bigger view.',
    ],
    tryItYourself: 'Open YouTube and search for something that interests you — a cooking recipe, a song you love, or an exercise video. Watch it and practice pausing and resuming!',
  },

  // --- When Something Goes Wrong ---
  {
    id: 'device-not-turning-on',
    topicId: 'when-something-goes-wrong',
    title: 'Device Not Turning On — What to Try',
    whyItMatters: 'It can be scary when your phone won\'t turn on. But don\'t panic — most of the time, the fix is simple. Your phone might just need to be charged, or it might need a simple restart.',
    steps: [
      { number: 1, instruction: 'First, try plugging your phone into its charger. If the battery is completely drained, it may take a few minutes before anything appears on screen.', tip: 'Wait at least 10-15 minutes before trying to turn it on again.' },
      { number: 2, instruction: 'If the screen stays dark after charging for 15 minutes, try pressing and holding the power button for 10 seconds (longer than usual).', tip: null },
      { number: 3, instruction: 'On some phones, you may need to press the power button AND the volume down button at the same time for 10 seconds. This forces a restart.', tip: 'This is safe to do and won\'t delete anything.' },
      { number: 4, instruction: 'If your phone still won\'t turn on after these steps, try a different charging cable or outlet — the issue might be the charger, not the phone.', tip: null },
      { number: 5, instruction: 'If nothing works, it\'s time to visit your phone carrier\'s store (like AT&T, Verizon, or T-Mobile) or an electronics repair shop. They can help diagnose the issue.', tip: 'Don\'t try to open or repair the phone yourself.' },
    ],
    keyPoints: [
      'The most common reason a phone won\'t turn on is a dead battery.',
      'Charge it for at least 15 minutes before trying to turn it on.',
      'Press and hold the power button for 10 seconds to force a restart.',
      'Try a different cable or outlet if charging doesn\'t work.',
      'Visit your phone carrier\'s store if the problem continues.',
    ],
    tryItYourself: 'Make sure you know where your phone\'s power button is and practice holding it for 10 seconds. This is your "reset" move when things go wrong!',
  },
  {
    id: 'forgot-my-password',
    topicId: 'when-something-goes-wrong',
    title: 'Forgot My Password',
    whyItMatters: 'Everyone forgets a password sometimes — it doesn\'t mean you did anything wrong! Almost every app and website has a way to reset your password. Once you know the process, it\'s easy.',
    steps: [
      { number: 1, instruction: 'On the sign-in screen, look for a link that says "Forgot Password?" or "Reset Password." Tap on it.', tip: 'It\'s usually below the password field, in small blue text.' },
      { number: 2, instruction: 'You\'ll be asked to enter your email address or phone number. Type it in.', tip: null },
      { number: 3, instruction: 'Check your email or text messages for a reset link or code. It usually arrives within a minute or two.', tip: 'Check your spam or junk folder if you don\'t see the email.' },
      { number: 4, instruction: 'Tap the link or enter the code to verify it\'s really you.', tip: null },
      { number: 5, instruction: 'Create a new password. Make it strong: at least 12 characters with letters, numbers, and a symbol.', tip: 'Use the technique from the "Creating a Strong Password" lesson!' },
      { number: 6, instruction: 'Write your new password down in a safe place (like a notebook stored securely).', tip: null },
    ],
    keyPoints: [
      'Almost every site has a "Forgot Password?" option.',
      'You\'ll need access to your email or phone to reset it.',
      'Check your spam folder if the reset email doesn\'t arrive.',
      'Create a strong new password and write it down somewhere safe.',
    ],
    tryItYourself: 'Can you find the "Forgot Password?" link on an app or site you use? Try looking for it — just so you know where it is if you ever need it.',
  },

  // --- E-Waste & Device Lifespan ---
  {
    id: 'how-long-should-device-last',
    topicId: 'ewaste-device-lifespan',
    title: 'How Long Should a Phone or Tablet Last?',
    whyItMatters: 'You don\'t need to buy a new phone every year. Understanding how long your device should last — and the signs that it might need replacing — helps you save money and make better decisions.',
    steps: [
      { number: 1, instruction: 'A smartphone should last 3 to 5 years with good care. Some last even longer!', tip: null },
      { number: 2, instruction: 'A tablet (like an iPad) can last 4 to 6 years.', tip: null },
      { number: 3, instruction: 'Signs your device might need replacing: the battery drains very quickly even after charging, apps crash frequently, the screen is cracked, or it can no longer get software updates.', tip: 'A slow device doesn\'t always need replacing — sometimes clearing old apps helps.' },
      { number: 4, instruction: 'If your phone just feels slow, try restarting it, deleting apps you don\'t use, and making sure it\'s updated. This often fixes the problem.', tip: null },
      { number: 5, instruction: 'When you do need a new device, consider asking a trusted family member or visiting your phone carrier\'s store for recommendations suited to your needs.', tip: 'You don\'t need the most expensive phone — mid-range models often do everything most people need.' },
    ],
    keyPoints: [
      'Smartphones last 3-5 years; tablets 4-6 years.',
      'A slow phone doesn\'t always need replacing — try restarting and updating first.',
      'Signs it\'s time for a new phone: fast battery drain, frequent crashes, or no more updates.',
      'You don\'t need the most expensive model.',
    ],
    tryItYourself: 'How old is your current phone? Go to Settings and look for "About Phone" or "General > About" to see when it was made.',
  },
  {
    id: 'recycling-old-devices',
    topicId: 'ewaste-device-lifespan',
    title: 'How to Donate or Recycle Old Devices Safely',
    whyItMatters: 'Old phones and tablets contain materials that can be harmful to the environment if thrown in the trash. They also contain your personal information! Learning to safely prepare and recycle your old device protects both the planet and your privacy.',
    steps: [
      { number: 1, instruction: 'Before getting rid of an old device, back up any photos or contacts you want to keep.', tip: 'Ask a family member to help you transfer photos to a computer or cloud service.' },
      { number: 2, instruction: 'Sign out of all your accounts — email, bank apps, social media. Go to Settings and look for each account to sign out.', tip: null },
      { number: 3, instruction: 'Erase all data from the device. On iPhone: Settings > General > Reset > Erase All Content and Settings. On Android: Settings > System > Reset > Factory Data Reset.', tip: 'This permanently deletes everything on the phone — make sure you\'ve backed up first!' },
      { number: 4, instruction: 'Find a safe place to recycle: many phone stores (Apple, Best Buy, Verizon) accept old devices for free recycling. Some even give store credit!', tip: null },
      { number: 5, instruction: 'You can also donate working devices to organizations like Tech Awareness Association that refurbish and redistribute them to people in need.', tip: null },
    ],
    keyPoints: [
      'Back up photos and contacts before getting rid of a device.',
      'Sign out of all accounts and erase all data.',
      'Never throw electronics in the regular trash.',
      'Phone stores and organizations like TAA accept old devices.',
      'Donating your old device helps someone else get connected!',
    ],
    tryItYourself: 'Do you have an old phone or tablet sitting in a drawer? Check if a local store or organization accepts electronics for recycling!',
  },

  // --- AI Tools for Everyday Life ---
  {
    id: 'what-is-ai',
    topicId: 'ai-tools-everyday',
    title: 'What Is AI?',
    whyItMatters: 'You\'ve probably heard the term "AI" or "artificial intelligence" on the news. It sounds futuristic, but you may already be using it without knowing! AI is behind voice assistants like Siri and Alexa, email spam filters, and even the suggestions your phone gives you when you\'re typing.',
    steps: [
      { number: 1, instruction: 'AI stands for "Artificial Intelligence." It means a computer that\'s been taught to do tasks that normally require human thinking — like answering questions or recognizing speech.', tip: null },
      { number: 2, instruction: 'AI is not a robot or a person — it\'s software (a program) that runs on your phone or computer.', tip: null },
      { number: 3, instruction: 'Common AI you might already use: Siri (on iPhones), Google Assistant (on Android), and Alexa (on Amazon devices).', tip: 'When you say "Hey Siri, what\'s the weather?" — that\'s AI helping you!' },
      { number: 4, instruction: 'AI can be helpful for setting reminders, answering questions, reading text aloud, and translating languages.', tip: null },
      { number: 5, instruction: 'AI is a tool — it\'s helpful, but it\'s not perfect. It can make mistakes, so always double-check important information.', tip: 'Think of AI as a helpful assistant, not an expert.' },
    ],
    keyPoints: [
      'AI is software that can do things that usually need human thinking.',
      'You may already use AI — Siri, Google Assistant, and Alexa are all AI.',
      'AI is great for quick questions, reminders, and simple tasks.',
      'AI can make mistakes, so always verify important information.',
    ],
    tryItYourself: 'Try asking your phone\'s voice assistant a question! Say "Hey Siri" (iPhone) or "Hey Google" (Android) and ask "What\'s the weather today?"',
  },
  {
    id: 'using-voice-assistants',
    topicId: 'ai-tools-everyday',
    title: 'Using Voice Assistants (Siri, Alexa, Google)',
    whyItMatters: 'Voice assistants let you control your phone or smart speaker just by talking to it. Instead of typing or tapping, you can simply say what you need. This is especially helpful when your hands are busy or when reading small text is difficult.',
    steps: [
      { number: 1, instruction: 'To activate the voice assistant on your phone, say "Hey Siri" (iPhone) or "Hey Google" (Android). On an Amazon device, say "Alexa."', tip: 'You can also press and hold the home button or side button on some phones.' },
      { number: 2, instruction: 'Try asking a simple question: "What time is it?" or "What\'s the weather today?"', tip: null },
      { number: 3, instruction: 'You can ask it to set reminders: "Remind me to take my pills at 8 AM."', tip: null },
      { number: 4, instruction: 'You can ask it to make calls: "Call Sarah." It will look up the name in your contacts and dial for you.', tip: null },
      { number: 5, instruction: 'You can ask it to play music: "Play some jazz music" or "Play songs by Frank Sinatra."', tip: null },
      { number: 6, instruction: 'If it doesn\'t understand you, try again slowly and clearly. It\'s okay to repeat yourself!', tip: 'Speak in your normal voice — you don\'t need to shout or whisper.' },
    ],
    keyPoints: [
      'Voice assistants respond to "Hey Siri," "Hey Google," or "Alexa."',
      'You can ask questions, set reminders, make calls, and play music.',
      'Speak clearly and at a normal volume.',
      'It\'s okay if it doesn\'t understand the first time — just try again.',
    ],
    tryItYourself: 'Try three things with your voice assistant right now: ask for the weather, set a reminder for later today, and ask it to tell you a joke!',
  },
];

// Helper functions
export function getTopicsForLevel(levelId) {
  return topics.filter(t => t.skillLevel === levelId);
}

export function getLessonsForTopic(topicId) {
  return lessons.filter(l => l.topicId === topicId);
}

export function getLessonById(lessonId) {
  return lessons.find(l => l.id === lessonId);
}

export function getTopicById(topicId) {
  return topics.find(t => t.id === topicId);
}

export function getLevelById(levelId) {
  return skillLevels.find(l => l.id === levelId);
}

// Glossary data
export const glossary = [
  { term: 'App', definition: 'A small program on your phone that does a specific job, like taking photos or checking the weather.' },
  { term: 'Browser', definition: 'The app you use to visit websites on the internet. Common browsers are Safari, Chrome, and Firefox.' },
  { term: 'Cloud', definition: 'A way to store your files (like photos) on the internet instead of just on your device. This means you can access them from anywhere.' },
  { term: 'Data', definition: 'The information your phone sends and receives when it\'s not on Wi-Fi. Your phone plan may have a monthly data limit.' },
  { term: 'Download', definition: 'To save something from the internet onto your phone or computer, like an app or a photo.' },
  { term: 'Email', definition: 'Electronic mail — a way to send and receive digital letters instantly through the internet.' },
  { term: 'FaceTime', definition: 'Apple\'s video calling app that lets you see and talk to someone face-to-face on your screen.' },
  { term: 'Google', definition: 'A search engine — a website where you can type questions and find information on the internet.' },
  { term: 'Home Screen', definition: 'The main screen you see when you turn on or unlock your phone. It shows your app icons.' },
  { term: 'Icon', definition: 'A small picture on your phone\'s screen that represents an app. Tap it to open the app.' },
  { term: 'Internet', definition: 'A worldwide network that connects computers and phones, letting them share information with each other.' },
  { term: 'Link', definition: 'Text or a button you can tap to go to a website or another page. Links are often blue and underlined.' },
  { term: 'Lock Screen', definition: 'The screen you see before unlocking your phone. It usually shows the time and notifications.' },
  { term: 'Notification', definition: 'A message or alert that pops up on your phone to tell you about something, like a new text or a reminder.' },
  { term: 'Password', definition: 'A secret word or phrase you use to sign in to your accounts. It keeps your information safe from others.' },
  { term: 'Router', definition: 'A small box from your internet company that creates the Wi-Fi signal in your home.' },
  { term: 'Scam', definition: 'A trick used by dishonest people to steal your money or personal information.' },
  { term: 'Screenshot', definition: 'A picture of what\'s currently showing on your phone\'s screen. Useful for saving information.' },
  { term: 'Settings', definition: 'The area on your phone where you can change how it works — like adjusting brightness, sound, and Wi-Fi.' },
  { term: 'Software Update', definition: 'An improvement to your phone\'s software that fixes problems and adds new features. Always install these!' },
  { term: 'Swipe', definition: 'To slide your finger across the screen. Swipe up, down, left, or right to navigate your phone.' },
  { term: 'Tap', definition: 'To touch the screen briefly with your finger — like clicking a mouse on a computer.' },
  { term: 'Telehealth', definition: 'A doctor\'s visit done through video call from home instead of going to the office in person.' },
  { term: 'Text Message', definition: 'A short written message sent from one phone to another. Also called SMS or just "a text."' },
  { term: 'Upload', definition: 'To send a file (like a photo) from your phone to the internet or to another device.' },
  { term: 'URL', definition: 'The address of a website, like "google.com" or "amazon.com." You type it into your browser to visit the site.' },
  { term: 'Video Call', definition: 'A phone call where you can see the other person on your screen. FaceTime and Zoom are video calling apps.' },
  { term: 'Volume', definition: 'How loud or quiet the sound is on your phone. Use the buttons on the side to adjust it.' },
  { term: 'Wi-Fi', definition: 'An invisible signal from your router that connects your phone to the internet without cables.' },
  { term: 'Zoom', definition: 'A popular video calling app used for talking to family, friends, and even doctors.' },
];
