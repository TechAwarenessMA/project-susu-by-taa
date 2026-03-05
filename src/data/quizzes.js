// src/data/quizzes.js — Knowledge check questions for each lesson
// Each lesson has 3 multiple-choice questions with 4 options.
// `correct` is the 0-based index of the right answer.

export const quizzes = {
  'turning-it-on-off': {
    questions: [
      {
        question: 'Where is the power button usually located on a smartphone?',
        options: ['On the left side', 'On the right side', 'On the bottom', 'On the screen'],
        correct: 1,
      },
      {
        question: 'How long do you hold the power button to turn a phone on?',
        options: ['About 1 second', 'About 10 seconds', 'About 3 seconds', 'About 30 seconds'],
        correct: 2,
      },
      {
        question: 'If your phone screen stays completely dark, what should you try first?',
        options: ['Take it to a repair shop', 'Press every button at once', 'Charge the phone first', 'Shake the phone'],
        correct: 2,
      },
    ],
  },

  'volume-and-brightness': {
    questions: [
      {
        question: 'On most phones, where are the volume buttons located?',
        options: ['On the right side', 'On the left side', 'On the bottom', 'On the back'],
        correct: 1,
      },
      {
        question: 'Which volume button makes the sound louder?',
        options: ['The bottom button', 'The right button', 'The back button', 'The top button'],
        correct: 3,
      },
      {
        question: 'How do you access brightness controls on most phones?',
        options: ['Press the volume button', 'Hold the power button', 'Swipe down from the top of the screen', 'Tap the screen three times'],
        correct: 2,
      },
    ],
  },

  'making-a-phone-call': {
    questions: [
      {
        question: 'What does the Phone app icon usually look like?',
        options: ['A red icon with a white camera', 'A blue icon with a white envelope', 'A green icon with a white phone handset', 'A yellow icon with a phone'],
        correct: 2,
      },
      {
        question: 'How do you dial a new phone number on your phone?',
        options: ['Write it on paper and give it to someone', 'Tap the keypad icon and type the number', 'Take a photo of the number', 'Whisper the number'],
        correct: 1,
      },
      {
        question: 'How do you end a phone call?',
        options: ['Turn off the phone', 'Press the volume button', 'Tap the red button to hang up', 'Wait and do nothing'],
        correct: 2,
      },
    ],
  },

  'what-is-a-text-message': {
    questions: [
      {
        question: 'What is a text message?',
        options: ['A phone call that is recorded', 'A short written message sent between phones', 'An email sent to a phone', 'A photo sent online'],
        correct: 1,
      },
      {
        question: 'What is another name for a text message?',
        options: ['A voicemail', 'An email', 'An SMS', 'A download'],
        correct: 2,
      },
      {
        question: 'Do you need the internet to send a text message?',
        options: ['Yes, always', 'No, texts use your phone\'s cellular signal', 'Only on iPhones', 'Only if the other person has Wi-Fi'],
        correct: 1,
      },
    ],
  },

  'sending-your-first-text': {
    questions: [
      {
        question: 'Which app do you open to send a text message?',
        options: ['The Phone app', 'The Camera app', 'The Messages or Text app', 'The Email app'],
        correct: 2,
      },
      {
        question: 'Where do you type your message before sending?',
        options: ['In the contact list', 'In the text box at the bottom of the screen', 'In the Settings app', 'In the top bar'],
        correct: 1,
      },
      {
        question: 'How do you send a message after you\'ve typed it?',
        options: ['Press the power button', 'Tap the send button (usually an arrow icon)', 'Close the app', 'Wait for it to send automatically'],
        correct: 1,
      },
    ],
  },

  'how-to-open-the-camera': {
    questions: [
      {
        question: 'How do you open the Camera app on most phones?',
        options: ['Call the camera company', 'Find and tap the Camera icon on your home screen', 'Go to Settings', 'Turn the phone off and on'],
        correct: 1,
      },
      {
        question: 'What is the shortcut to open the camera from the lock screen on many phones?',
        options: ['Press the volume button twice', 'Swipe left or tap the camera icon on the lock screen', 'Hold the home button', 'Type "camera" on the keyboard'],
        correct: 1,
      },
      {
        question: 'What should you avoid covering when using the camera?',
        options: ['The volume buttons', 'The power button', 'The camera lens with your finger', 'The charging port'],
        correct: 2,
      },
    ],
  },

  'taking-a-photo': {
    questions: [
      {
        question: 'What do you tap to take a photo?',
        options: ['The power button', 'The large round shutter button on screen', 'The home button', 'The volume button'],
        correct: 1,
      },
      {
        question: 'How can you make something appear larger in a photo?',
        options: ['Move the camera farther away', 'Use two fingers to pinch inward', 'Use two fingers to spread outward (zoom in)', 'Shake the phone'],
        correct: 2,
      },
      {
        question: 'Where do your photos get saved automatically?',
        options: ['To the internet only', 'They aren\'t saved', 'To the Photos or Gallery app on your phone', 'To your email'],
        correct: 2,
      },
    ],
  },

  'what-is-the-internet': {
    questions: [
      {
        question: 'What is the internet?',
        options: ['A phone company', 'A worldwide network connecting computers and phones', 'A type of television channel', 'The name of an app'],
        correct: 1,
      },
      {
        question: 'What app do you use to visit websites?',
        options: ['The Camera app', 'The Settings app', 'A web browser like Safari or Chrome', 'The Messages app'],
        correct: 2,
      },
      {
        question: 'How do you search for something on the internet?',
        options: ['Call your phone company', 'Type your question into a search engine like Google', 'Turn the phone off and on', 'Ask a nearby store'],
        correct: 1,
      },
    ],
  },

  'recognizing-safe-sites': {
    questions: [
      {
        question: 'What does a padlock icon in the address bar mean?',
        options: ['The site is locked and you can\'t use it', 'The website uses a secure connection', 'The site has been blocked', 'You need to log in'],
        correct: 1,
      },
      {
        question: 'Which of these is a sign that a website may NOT be safe?',
        options: ['It has a padlock icon', 'It starts with "https://"', 'Many spelling mistakes and urgent warnings', 'It has a simple design'],
        correct: 2,
      },
      {
        question: 'What should you do if a website asks for your Social Security Number unexpectedly?',
        options: ['Enter it quickly to get your reward', 'Close the site immediately and do not enter it', 'Call the website\'s customer service first', 'Refresh the page and try again'],
        correct: 1,
      },
    ],
  },

  'what-is-email': {
    questions: [
      {
        question: 'What is email?',
        options: ['A type of text message', 'Electronic mail sent through the internet', 'A phone call over Wi-Fi', 'A photo sharing app'],
        correct: 1,
      },
      {
        question: 'What do you need to send or receive email?',
        options: ['A special phone plan', 'An email address and internet connection', 'A credit card', 'A printer'],
        correct: 1,
      },
      {
        question: 'Which is NOT a common email provider?',
        options: ['Gmail', 'Outlook', 'Safari', 'Yahoo Mail'],
        correct: 2,
      },
    ],
  },

  'reading-and-replying': {
    questions: [
      {
        question: 'How do you open an email to read it?',
        options: ['Swipe left on it', 'Tap on the email subject or sender name', 'Long-press for 5 seconds', 'Double-tap the screen'],
        correct: 1,
      },
      {
        question: 'Which button do you tap to write a response to an email?',
        options: ['The forward button', 'The delete button', 'The reply button (usually an arrow)', 'The star button'],
        correct: 2,
      },
      {
        question: 'What should you do if you receive an email from an unknown sender with a suspicious link?',
        options: ['Click the link right away', 'Reply and ask who they are', 'Don\'t click any links — delete it or mark it as spam', 'Forward it to everyone you know'],
        correct: 2,
      },
    ],
  },

  'charging-your-phone': {
    questions: [
      {
        question: 'Where is the charging port usually located on a phone?',
        options: ['On the top', 'On the left side', 'On the bottom of the phone', 'On the back'],
        correct: 2,
      },
      {
        question: 'What does the battery percentage tell you?',
        options: ['How much storage space is left', 'How much battery power is remaining', 'How strong your Wi-Fi is', 'How many apps are open'],
        correct: 1,
      },
      {
        question: 'Is it okay to charge your phone overnight?',
        options: ['No, it will always damage the battery', 'Yes, modern phones are designed to handle overnight charging safely', 'Only if you unplug at exactly 100%', 'Only with the original charger'],
        correct: 1,
      },
    ],
  },

  'why-updates-matter': {
    questions: [
      {
        question: 'What does a software update do for your phone?',
        options: ['Deletes your photos', 'Fixes problems and adds security improvements', 'Resets your contacts', 'Makes the phone slower'],
        correct: 1,
      },
      {
        question: 'Why is it important to install security updates?',
        options: ['They make the phone look nicer', 'They add new games', 'They protect against hackers and security threats', 'They cost money and are optional'],
        correct: 2,
      },
      {
        question: 'Where do you usually go to check for and install updates?',
        options: ['The App Store only', 'Settings → General → Software Update (or similar)', 'The Camera app', 'You must call your phone company'],
        correct: 1,
      },
    ],
  },

  'what-is-video-calling': {
    questions: [
      {
        question: 'What is a video call?',
        options: ['A regular phone call with loud music', 'A phone call where you can see and hear the other person on screen', 'Watching a video on YouTube', 'Recording a message to send'],
        correct: 1,
      },
      {
        question: 'Which of these is a popular video calling app?',
        options: ['Calculator', 'Clock', 'FaceTime or Zoom', 'Notes'],
        correct: 2,
      },
      {
        question: 'What do you need to make a video call?',
        options: ['A TV and cable subscription', 'A device with a camera and internet connection', 'A special video phone plan', 'A computer only — phones can\'t do video calls'],
        correct: 1,
      },
    ],
  },

  'setting-up-a-video-call': {
    questions: [
      {
        question: 'On FaceTime, how do you start a video call with someone?',
        options: ['Mail them a letter first', 'Open FaceTime, find the person, and tap the video camera icon', 'Call them on a regular phone first', 'Send them an email'],
        correct: 1,
      },
      {
        question: 'Where should you position yourself before a video call?',
        options: ['In a very dark room', 'With a bright light behind you', 'With good lighting on your face, ideally facing a window', 'With your back to the camera'],
        correct: 2,
      },
      {
        question: 'How do you mute your microphone during a video call?',
        options: ['Cover the phone with a pillow', 'Tap the microphone icon to mute', 'Turn down the volume buttons', 'Turn off Wi-Fi'],
        correct: 1,
      },
    ],
  },

  'what-is-a-scam': {
    questions: [
      {
        question: 'What is a scam?',
        options: ['A helpful government program', 'A trick used by dishonest people to steal your money or information', 'A type of phone app', 'A free prize you\'ve won'],
        correct: 1,
      },
      {
        question: 'Which of these is a common warning sign of a scam?',
        options: ['The caller knows your name', 'You\'re told you must act immediately or lose a prize', 'You receive a bill from a known company', 'A friend calls to chat'],
        correct: 1,
      },
      {
        question: 'If someone you don\'t know calls asking for personal information, what should you do?',
        options: ['Give them the information to be polite', 'Hang up and call the organization back using a number from their official website', 'Give them your name only', 'Ask them to text you instead'],
        correct: 1,
      },
    ],
  },

  'common-senior-scams': {
    questions: [
      {
        question: 'What is the "grandparent scam"?',
        options: ['A scammer pretends to be a grandchild in trouble and asks for money', 'A scammer sells overpriced grandparent gifts', 'A scammer offers cheap retirement plans', 'A scammer sends fake holiday cards'],
        correct: 0,
      },
      {
        question: 'If you get a call saying you\'ve won a lottery you never entered, what should you do?',
        options: ['Send the required fee to claim your prize', 'Hang up — it\'s almost certainly a scam', 'Ask for their address and visit in person', 'Give them your bank account number to deposit winnings'],
        correct: 1,
      },
      {
        question: 'Which payment method do scammers often demand because it\'s hard to trace?',
        options: ['Check from your bank', 'Credit card', 'Gift cards or wire transfers', 'PayPal'],
        correct: 2,
      },
    ],
  },

  'what-is-an-app': {
    questions: [
      {
        question: 'What is an app?',
        options: ['A physical book about technology', 'A small program on your phone that does a specific job', 'A type of phone call', 'The name for your phone\'s battery'],
        correct: 1,
      },
      {
        question: 'Where do apps come from?',
        options: ['You must buy a CD from a store', 'You download them from the App Store or Google Play Store', 'They\'re all built into your phone and can\'t be added', 'You receive them by email only'],
        correct: 1,
      },
      {
        question: 'What is a free app?',
        options: ['An app that costs nothing to download', 'An app made by the government', 'An app without any features', 'An app that deletes after one use'],
        correct: 0,
      },
    ],
  },

  'downloading-apps': {
    questions: [
      {
        question: 'Where do iPhone users download apps?',
        options: ['Google Play Store', 'Microsoft Store', 'The App Store', 'The Apple Website'],
        correct: 2,
      },
      {
        question: 'What should you check before downloading an app?',
        options: ['How colorful the icon is', 'The number of downloads and user reviews', 'Whether your friend likes it', 'How long the app name is'],
        correct: 1,
      },
      {
        question: 'If an app asks for permission to access your contacts or location, what should you do?',
        options: ['Always say yes to all permissions', 'Think about whether the app really needs that access before agreeing', 'Say no to every permission always', 'Delete the app immediately'],
        correct: 1,
      },
    ],
  },

  'what-is-wifi': {
    questions: [
      {
        question: 'What is Wi-Fi?',
        options: ['A type of phone call', 'A wireless internet connection signal from a router', 'A brand of smartphone', 'A type of charging cable'],
        correct: 1,
      },
      {
        question: 'What creates the Wi-Fi signal in most homes?',
        options: ['Your phone itself', 'A router connected to an internet service', 'The telephone wire', 'The TV'],
        correct: 1,
      },
      {
        question: 'What is an advantage of using Wi-Fi instead of cellular data?',
        options: ['Wi-Fi is always faster everywhere', 'Wi-Fi typically doesn\'t count against your data plan', 'Wi-Fi is free from the phone company', 'Wi-Fi works everywhere, even outdoors'],
        correct: 1,
      },
    ],
  },

  'connecting-to-wifi': {
    questions: [
      {
        question: 'Where do you go on your phone to connect to Wi-Fi?',
        options: ['The Camera app', 'Settings → Wi-Fi', 'The Phone app', 'The App Store'],
        correct: 1,
      },
      {
        question: 'What do you need to connect to a password-protected Wi-Fi network?',
        options: ['Your phone number', 'The Wi-Fi network name and password', 'A credit card', 'Your email address'],
        correct: 1,
      },
      {
        question: 'How do you know your phone is connected to Wi-Fi?',
        options: ['The screen gets brighter', 'A Wi-Fi icon appears at the top of the screen', 'The battery percentage increases', 'You receive a text message'],
        correct: 1,
      },
    ],
  },

  'why-passwords-matter': {
    questions: [
      {
        question: 'Why is it important to have a strong password?',
        options: ['Passwords help your phone charge faster', 'Passwords protect your accounts from being accessed by others', 'Passwords are required by law', 'Passwords make your phone look more professional'],
        correct: 1,
      },
      {
        question: 'Which of these is an example of a WEAK password?',
        options: ['Tr0ub4dor&3', 'password123', 'Purple!Banana#82', 'MySunshine@2024'],
        correct: 1,
      },
      {
        question: 'Should you share your passwords with others?',
        options: ['Yes, share with everyone so they can help', 'Yes, but only with family members', 'No, keep passwords private — never share them', 'Yes, write them on sticky notes so you don\'t forget'],
        correct: 2,
      },
    ],
  },

  'creating-strong-password': {
    questions: [
      {
        question: 'What makes a password strong?',
        options: ['Using your name and birthday', 'Using a mix of letters, numbers, and symbols that is hard to guess', 'Using the word "password"', 'Using only lowercase letters'],
        correct: 1,
      },
      {
        question: 'Is it okay to use the same password for all your accounts?',
        options: ['Yes, it\'s easier to remember one password', 'No, if one account is hacked, all others become vulnerable too', 'Yes, as long as it\'s a strong password', 'It depends on how important the accounts are'],
        correct: 1,
      },
      {
        question: 'What is a safe way to store and remember your passwords?',
        options: ['Email all your passwords to yourself', 'Write them on a note and stick it on your computer screen', 'Use a trusted password manager app or keep a secure private notebook', 'Use only one simple password so it\'s easy to remember'],
        correct: 2,
      },
    ],
  },

  'using-phone-calendar': {
    questions: [
      {
        question: 'What can you use your phone\'s Calendar app for?',
        options: ['Making phone calls', 'Tracking appointments, events, and reminders', 'Taking photos', 'Browsing the internet'],
        correct: 1,
      },
      {
        question: 'How do you add a new event to your phone\'s calendar?',
        options: ['Ask someone else to add it', 'Tap the "+" or "New Event" button and fill in the details', 'Text yourself the date', 'Go to Settings'],
        correct: 1,
      },
      {
        question: 'Can your phone\'s calendar send you a reminder before an appointment?',
        options: ['No, calendars just show events but can\'t send alerts', 'Yes, you can set reminders so your phone alerts you in advance', 'Only if you pay extra', 'Only on iPhones'],
        correct: 1,
      },
    ],
  },

  'setting-reminders': {
    questions: [
      {
        question: 'What is the Reminders (or Clock/Alarm) app used for?',
        options: ['Playing music', 'Setting alerts to remind you of things at specific times', 'Taking photos', 'Checking the weather'],
        correct: 1,
      },
      {
        question: 'What can you ask your voice assistant to do with reminders?',
        options: ['Nothing — voice assistants can\'t set reminders', '"Remind me to take my medication at 8 AM" and it will set it for you', 'Only set alarms, not reminders', 'Send a reminder to someone else'],
        correct: 1,
      },
      {
        question: 'Where do reminders usually appear on your phone?',
        options: ['Only in the Reminders app', 'On a special reminder screen you have to find', 'As notifications that pop up on your screen at the set time', 'As a phone call at the set time'],
        correct: 2,
      },
    ],
  },

  'checking-bank-account': {
    questions: [
      {
        question: 'What is the safest way to check your bank account on your phone?',
        options: ['Use your bank\'s official app downloaded from the App Store', 'Click a link from an email saying it\'s from your bank', 'Use any banking website you find from Google', 'Give your login info to someone who can check for you'],
        correct: 0,
      },
      {
        question: 'What should you do after checking your bank account on a shared device?',
        options: ['Leave it open so it\'s easy to check again', 'Log out of your account before closing the app', 'Just close the app — logging out is unnecessary', 'Take a screenshot of your balance'],
        correct: 1,
      },
      {
        question: 'How often should you check your bank account for suspicious activity?',
        options: ['Only when you\'re worried something happened', 'Never — just trust your bank', 'Regularly, at least once a week, to catch anything unusual quickly', 'Once a year is enough'],
        correct: 2,
      },
    ],
  },

  'shopping-safely-online': {
    questions: [
      {
        question: 'Which payment method offers the best protection when shopping online?',
        options: ['Cash sent in the mail', 'A wire transfer', 'Your credit card or PayPal', 'Gift cards'],
        correct: 2,
      },
      {
        question: 'What should you check before entering payment information on a shopping website?',
        options: ['How pretty the website design is', 'That the URL starts with "https://" and there\'s a padlock icon', 'That the prices are very low', 'That the website has many colorful images'],
        correct: 1,
      },
      {
        question: 'What is one sign that an online deal might be a scam?',
        options: ['The website has contact information', 'The price seems too good to be true', 'The website shows customer reviews', 'The company has been around for many years'],
        correct: 1,
      },
    ],
  },

  'what-is-telehealth': {
    questions: [
      {
        question: 'What is telehealth?',
        options: ['A health food store', 'A doctor\'s visit done by video call from your home', 'A type of health insurance', 'A medical device you wear'],
        correct: 1,
      },
      {
        question: 'What do you need for a telehealth appointment?',
        options: ['A special medical device', 'A device with a camera (phone/tablet), internet, and the telehealth app or link', 'A prescription from a doctor first', 'You must be in a hospital'],
        correct: 1,
      },
      {
        question: 'What is an advantage of telehealth?',
        options: ['You can only do it in an emergency', 'You don\'t need to travel to the doctor\'s office', 'The doctor can\'t prescribe medications via telehealth', 'Telehealth is always less accurate than in-person visits'],
        correct: 1,
      },
    ],
  },

  'using-patient-portals': {
    questions: [
      {
        question: 'What is a patient portal?',
        options: ['The front entrance of a hospital', 'A secure online system to access your medical records and communicate with your doctor', 'A type of health insurance plan', 'A wearable health tracker'],
        correct: 1,
      },
      {
        question: 'What can you do on a patient portal?',
        options: ['Only schedule appointments', 'View test results, message your doctor, and request prescription refills', 'Only pay medical bills', 'Nothing — you still need to call the office for everything'],
        correct: 1,
      },
      {
        question: 'How do you get access to your doctor\'s patient portal?',
        options: ['It\'s automatically set up without any steps', 'Ask your doctor\'s office — they will give you a login or send an invite', 'Buy a subscription online', 'Only younger patients can use patient portals'],
        correct: 1,
      },
    ],
  },

  'finding-trustworthy-news': {
    questions: [
      {
        question: 'What is "fake news"?',
        options: ['News from another country', 'False or misleading stories made to look like real news', 'News that is very old', 'News from small local newspapers'],
        correct: 1,
      },
      {
        question: 'Which of these is a sign that a news story might not be trustworthy?',
        options: ['It\'s from a well-known news organization', 'The headline is shocking and seems designed to make you angry or scared', 'It includes the author\'s name', 'It was published on the organization\'s official website'],
        correct: 1,
      },
      {
        question: 'What is a good way to check if a story is true?',
        options: ['Share it immediately if it surprises you', 'Look for the same story reported by multiple reliable news organizations', 'Trust any story that has photos', 'Believe it if many of your friends shared it'],
        correct: 1,
      },
    ],
  },

  'youtube-for-beginners': {
    questions: [
      {
        question: 'What is YouTube?',
        options: ['A music streaming service', 'A video-sharing website where anyone can watch and upload videos', 'An email service owned by Google', 'A social media platform for photos only'],
        correct: 1,
      },
      {
        question: 'How do you find a video on YouTube?',
        options: ['Call YouTube customer service', 'Type what you\'re looking for in the search bar at the top', 'Browse only the home page', 'You must have an account to search'],
        correct: 1,
      },
      {
        question: 'Is YouTube free to use?',
        options: ['No, it costs $10 a month', 'Yes, watching most videos on YouTube is free', 'Only the first 10 videos are free', 'It\'s only free for students'],
        correct: 1,
      },
    ],
  },

  'device-not-turning-on': {
    questions: [
      {
        question: 'What should you try first if your phone won\'t turn on?',
        options: ['Take it to a repair shop immediately', 'Plug it in and charge it for at least 15 minutes', 'Press every button repeatedly', 'Put it in water to clean it'],
        correct: 1,
      },
      {
        question: 'What is a "force restart"?',
        options: ['Dropping the phone to reset it', 'A way to restart a frozen phone using a specific button combination', 'Turning the Wi-Fi off and on', 'Removing and replacing the battery'],
        correct: 1,
      },
      {
        question: 'If your phone is stuck on a loading screen after trying to restart, what\'s a good next step?',
        options: ['Leave it alone forever', 'Try charging it, doing a force restart, or contacting your carrier or manufacturer for help', 'Hit the phone gently on a table', 'Install new apps through another phone'],
        correct: 1,
      },
    ],
  },

  'forgot-my-password': {
    questions: [
      {
        question: 'What should you do if you forget your email or app password?',
        options: ['Create a completely new account', 'Use the "Forgot Password" link to reset it via email or phone number', 'Call the government', 'Guess repeatedly until it works'],
        correct: 1,
      },
      {
        question: 'What does the "Forgot Password" process typically require?',
        options: ['A visit to the company\'s office', 'Your phone number or backup email address to send a reset code', 'Your bank card details', 'A friend\'s account to verify'],
        correct: 1,
      },
      {
        question: 'After resetting your password, what should you do?',
        options: ['Use the same old password again', 'Create a new, strong password that\'s different from before', 'Tell your family what the new password is', 'Write the new password in an email to yourself'],
        correct: 1,
      },
    ],
  },

  'how-long-should-device-last': {
    questions: [
      {
        question: 'On average, how long does a smartphone typically last before needing replacement?',
        options: ['About 6 months', 'About 1 year', 'About 3–5 years', 'About 20 years'],
        correct: 2,
      },
      {
        question: 'What is a sign that your phone may be nearing the end of its useful life?',
        options: ['The screen gets brighter', 'The battery drains very quickly and the phone runs slowly', 'You get a new phone model notification', 'More apps become available'],
        correct: 1,
      },
      {
        question: 'What can you do to extend your phone\'s lifespan?',
        options: ['Leave it charging all day, every day', 'Keep the software updated and use a protective case', 'Turn it on and off multiple times a day', 'Keep it in the refrigerator'],
        correct: 1,
      },
    ],
  },

  'recycling-old-devices': {
    questions: [
      {
        question: 'Why shouldn\'t you throw old phones or tablets in the regular trash?',
        options: ['Because they are too heavy for garbage trucks', 'Because they contain toxic materials that can harm the environment', 'Because the garbage company won\'t accept them', 'Because they might still have value as collectibles'],
        correct: 1,
      },
      {
        question: 'What should you do with your personal data before recycling or donating an old device?',
        options: ['Nothing — the recycling company will handle it', 'Delete only your photos', 'Do a factory reset to wipe all personal data from the device', 'Remove the battery yourself'],
        correct: 2,
      },
      {
        question: 'Where can you responsibly recycle old electronics?',
        options: ['In a regular recycling bin', 'At an e-waste collection event, electronics store drop-off, or manufacturer take-back program', 'In the compost bin', 'Bury them in the backyard'],
        correct: 1,
      },
    ],
  },

  'what-is-ai': {
    questions: [
      {
        question: 'What does "AI" stand for?',
        options: ['Automatic Internet', 'Artificial Intelligence', 'Advanced iPhone', 'Assisted Information'],
        correct: 1,
      },
      {
        question: 'Which of these is an example of AI you might already use?',
        options: ['A light switch', 'Siri, Google Assistant, or Alexa', 'A television remote', 'A standard calculator'],
        correct: 1,
      },
      {
        question: 'Can AI make mistakes?',
        options: ['No, AI is always 100% accurate', 'Yes, AI can make mistakes, so you should always verify important information', 'Only older AI makes mistakes', 'AI only makes mistakes on weekends'],
        correct: 1,
      },
    ],
  },

  'using-voice-assistants': {
    questions: [
      {
        question: 'How do you typically activate a voice assistant on an iPhone?',
        options: ['Type "Siri" on the keyboard', 'Say "Hey Siri"', 'Shake the phone three times', 'Go to Settings and tap Activate'],
        correct: 1,
      },
      {
        question: 'Which of these can you do with a voice assistant?',
        options: ['Pay your bills automatically without any input', 'Ask questions, set reminders, make calls, and play music by speaking', 'Replace your doctor for medical advice', 'Fix hardware problems with your phone'],
        correct: 1,
      },
      {
        question: 'If the voice assistant doesn\'t understand you the first time, what should you do?',
        options: ['Never use it again', 'Speak louder and faster', 'Try again speaking clearly at a normal volume', 'Type the request instead, since voice never works'],
        correct: 2,
      },
    ],
  },
};

// Helper to get quiz for a lesson
export function getQuizForLesson(lessonId) {
  return quizzes[lessonId] || null;
}
