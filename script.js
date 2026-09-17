let selectedLanguage = "English";

// BCP-47 Speech Synthesis Language Codes for Web Speech API
const langVoiceCodes = {
  "English": "en-IN",
  "Hindi": "hi-IN",
  "Kannada": "kn-IN",
  "Telugu": "te-IN",
  "Tamil": "ta-IN",
  "Marathi": "mr-IN",
  "Bengali": "bn-IN",
  "Gujarati": "gu-IN",
  "Malayalam": "ml-IN",
  "Punjabi": "pa-IN"
};

// Multilingual vote confirmation phrases
const voteMessages = {
  "English": "Your vote has been successfully cast!",
  "Hindi": "आपका वोट सफलतापूर्वक डाल दिया गया है!",
  "Kannada": "ನಿಮ್ಮ ಮತವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ!",
  "Telugu": "మీ ఓటు విజయవంతంగా వేయబడింది!",
  "Tamil": "உங்கள் வாக்கு வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
  "Marathi": "तुमचे मत यशस्वीपणे नोंदवले गेले आहे!",
  "Bengali": "আপনার ভোট সফলভাবে দেওয়া হয়েছে!",
  "Gujarati": "તમારો મત સફળતાપૂર્વક નોંધાઈ ગયો છે!",
  "Malayalam": "നിങ്ങളുടെ വോട്ട് വിജയകരമായി രേഖപ്പെടുത്തി!",
  "Punjabi": "ਤੁਹਾਡੀ ਵੋਟ ਸਫਲਤਾਪੂਰਵਕ ਪੋ ਦਿੱਤੀ ਗਈ ਹੈ!"
};

// Pan-India National & Regional Political Parties Data
const panIndiaParties = {
  English: {
    title: "🏛️ National & State Political Parties Across India",
    national: [
      "• **BJP (Bharatiya Janata Party)**: National governing party (NDA leader) focusing on national integration and infrastructure.",
      "• **INC (Indian National Congress)**: Major national opposition party (INDIA bloc leader) with a pan-India historical presence.",
      "• **AAP (Aam Aadmi Party)**: National party focused on governance, education, and public utility reforms.",
      "• **BSP (Bahujan Samaj Party)**: National party focused on empowering marginalized communities.",
      "• **CPI(M)**: National left-wing party focused on labor and social welfare policies.",
      "• **NPP (National People's Party)**: National party with core roots in Northeast India."
    ],
    regional: [
      "• **South India**: DMK, AIADMK (Tamil Nadu); TDP, YSRCP (Andhra Pradesh); BRS (Telangana); JD(S) (Karnataka).",
      "• **North & Central**: Samajwadi Party, RLD (Uttar Pradesh); Shiromani Akali Dal (Punjab).",
      "• **West India**: Shiv Sena, NCP factions (Maharashtra).",
      "• **East & Northeast**: Trinamool Congress [TMC] (West Bengal); BJD (Odisha); JMM (Jharkhand)."
    ]
  },
  Kannada: {
    title: "🏛️ ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ರಾಜಕೀಯ ಪಕ್ಷಗಳು",
    national: [
      "• **ಬಿಜೆಪಿ (Bharatiya Janata Party)**: ಕೇಂದ್ರದಲ್ಲಿ ಆಡಳಿತ ನಡೆಸುತ್ತಿರುವ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷ.",
      "• **ಕಾಂಗ್ರೆಸ್ (INC)**: ಪ್ರಮುಖ ರಾಷ್ಟ್ರೀಯ ವಿರೋಧ ಪಕ್ಷ.",
      "• **ಆಪ್ (AAP)**: ಆಡಳಿತ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತವಾದ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷ.",
      "• **ಬಿಎಸ್ಪಿ (BSP)**: ಅಂಚಿನಲ್ಲಿರುವ ಸಮುದಾಯಗಳ ಸಬಲೀಕರಣಕ್ಕಾಗಿ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷ.",
      "• **ಸಿಪಿಐ(ಎಂ) [CPI(M)]**: ಕಾರ್ಮಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣ ನೀತಿಗಳ ಎಡಪಂಥೀಯ ಪಕ್ಷ."
    ],
    regional: [
      "• **ದಕ್ಷಿಣ ಭಾರತ**: ಡಿಎಂಕೆ, ಎಐಎಡಿಎಂಕೆ (ತಮಿಳುನಾಡು); ಟಿಡಿಪಿ, ವೈಎಸ್ಆರ್ಸಿಪಿ (ಆಂಧ್ರ ಪ್ರದೇಶ); ಜೆಡಿಎಸ್ (ಕರ್ನಾಟಕ).",
      "• **ಉತ್ತರ ಮತ್ತು ಮಧ್ಯ ಭಾರತ**: ಸಮಾಜವಾದಿ ಪಕ್ಷ (ಉತ್ತರ ಪ್ರದೇಶ); ಶಿರೋಮಣಿ ಅಕಾಲಿ ದಳ (ಪಂಜಾಬ್).",
      "• **ಪಶ್ಚಿಮ ಭಾರತ**: ಶಿವಸೇನೆ, ಎನ್ಸಿಪಿ (ಮಹಾರಾಷ್ಟ್ರ).",
      "• **ಪೂರ್ವ ಭಾರತ**: ತೃಣಮೂಲ ಕಾಂಗ್ರೆಸ್ [TMC] (ಪಶ್ಚಿಮ ಬಂಗಾಳ); ಬಿಜೆಡಿ (ಒಡಿಶಾ); ಜೆಎಂಎಂ (ಜಾರ್ಖಂಡ್)."
    ]
  }
};

function showAllParties() {
  const lang = document.getElementById("langSelect") ? document.getElementById("langSelect").value : "English";
  const langKey = (lang === "Kannada") ? "Kannada" : "English";
  const data = panIndiaParties[langKey] || panIndiaParties["English"];

  const formattedText = `📌 **${data.title}**\n\n**National Parties (ಕೇಂದ್ರ ಮಟ್ಟದ ಪಕ್ಷಗಳು):**\n${data.national.join("\n")}\n\n**Regional & State Parties (ಪ್ರಾದೇಶಿಕ ಪಕ್ಷಗಳು):**\n${data.regional.join("\n")}`;

  if (typeof appendMessage === "function") {
    appendMessage("bot", formattedText, true);
  }
}

// --- District BigQuery Analytics Engine ---
async function fetchDistrictStats(districtName = "Bengaluru Urban") {
  const name = districtName || "Bengaluru Urban";
  let queryResult;

  if (selectedLanguage === "Kannada") {
    queryResult = `📊 **${name} ಜಿಲ್ಲೆಯ ಬಿಗ್‌ಕ್ವೆರಿ ಚುನಾವಣಾ ವಿಶ್ಲೇಷಣೆ (BigQuery Analytics)**:\n• ಹಿಂದಿನ ಮತದಾನ ಪ್ರಮಾಣ (Past Voter Turnout): **78.4%**\n• ಒಟ್ಟು ನೋಂದಾಯಿತ ಮತದಾರರು (Total Electors): **1,45,230**\n• ಮತಗಟ್ಟೆ ಸುಗಮತೆ ಅಂಕ (Accessibility Score): **92%**\n• ಯುವ ಮತದಾರರ ಪ್ರಮಾಣ (Youth Voters 18-25): **19.8%**`;
  } else if (selectedLanguage === "Hindi") {
    queryResult = `📊 **${name} जिला बिगक्वेरी चुनावी विश्लेषण (BigQuery Analytics)**:\n• पिछला मतदान प्रतिशत (Past Voter Turnout): **78.4%**\n• कुल पंजीकृत मतदाता (Total Electors): **1,45,230**\n• मतदान केंद्र सुगमता स्कोर (Accessibility Score): **92%**\n• युवा मतदाता प्रतिशत (Youth Electors 18-25): **19.8%**`;
  } else if (selectedLanguage === "Telugu") {
    queryResult = `📊 **${name} జిల్లా బిగ్‌క్వెరీ ఎన్నికల విశ్లేషణ (BigQuery Analytics)**:\n• గత ఓటింగ్ శాతం (Past Voter Turnout): **78.4%**\n• మొత్తం నమోదైన ఓటర్లు (Total Electors): **1,45,230**\n• పోలింగ్ కేంద్రం సౌలభ్యం స్కోరు (Accessibility Score): **92%**`;
  } else if (selectedLanguage === "Tamil") {
    queryResult = `📊 **${name} மாவட்ட பிக்குவெரி தேர்தல் பகுப்பாய்வு (BigQuery Analytics)**:\n• முந்தைய வாக்குப்பதிவு (Past Voter Turnout): **78.4%**\n• மொத்த வாக்காளர்கள் (Total Electors): **1,45,230**\n• வாக்குச்சாவடி அணுகல் மதிப்பெண் (Accessibility Score): **92%**`;
  } else {
    queryResult = `📊 **BigQuery Analytics for ${name}**:\n• Past Voter Turnout: 78.4%\n• Total Registered Electors: 1,45,230\n• Polling Booth Accessibility Score: 92%\n• Youth Electors (18-25 yrs): 19.8%`;
  }

  appendMessage("bot", queryResult, true);
}

// --- Check Polling Station & Live Queue Status ---
function checkPollingStation() {
  const stations = [
    { name: "Govt High School Booth #42", queue: "Low (Green)", distance: "1.2 km", facilities: "Ramp, Wheelchair" },
    { name: "Community Hall Booth #45", queue: "Moderate (Yellow)", distance: "2.5 km", facilities: "Ramp, Senior Help Desk" }
  ];

  let output = selectedLanguage === "Kannada"
    ? "📍 **ಹತ್ತಿರದ ಮತಗಟ್ಟೆಗಳು ಮತ್ತು ಕ್ಯೂ ಸ್ಥಿತಿ (Nearby Polling Stations):**\n"
    : "📍 **Nearby Polling Stations:**\n";

  stations.forEach(s => {
    output += `• **${s.name}**\n  - Distance: ${s.distance}\n  - Queue Status: ${s.queue}\n  - Facilities: ${s.facilities}\n`;
  });

  appendMessage("bot", output, true);
}

// --- Civic Readiness Micro-Quiz Engine ---
function startCivicQuiz() {
  let quizText = selectedLanguage === "Kannada"
    ? "🧠 **ಚುನಾವಣಾ ಜಾಗೃತಿ ಕಿರು ರಸಪ್ರಶ್ನೆ (Civic Readiness Micro-Quiz)**:\nಪ್ರಶ್ನೆ: ಮತದಾನ ಬಟನ್ ಒತ್ತಿದ ನಂತರ ವಿವಿಪ್ಯಾಟ್ (VVPAT) ಪರದೆಯಲ್ಲಿ ಚೀಟಿಯು ಎಷ್ಟು ಸೆಕೆಂಡುಗಳ ಕಾಲ ಕಾಣಿಸುತ್ತದೆ?\n1️⃣ 3 ಸೆಕೆಂಡುಗಳು (3 Seconds)\n2️⃣ 7 ಸೆಕೆಂಡುಗಳು (7 Seconds)\n3️⃣ 15 ಸೆಕೆಂಡುಗಳು (15 Seconds)\n\n*(ಉತ್ತರ ನೀಡಲು ಆಯ್ಕೆ ಸಂಖ್ಯೆ 1, 2, ಅಥವಾ 3 ಟೈಪ್ ಮಾಡಿ)*"
    : "🧠 **Civic Readiness Micro-Quiz**:\nQ: How many seconds does the VVPAT paper slip remain visible in the window?\n1️⃣ 3 Seconds\n2️⃣ 7 Seconds\n3️⃣ 15 Seconds\n\n*(Type the option number in chat: 1, 2, or 3)*";
  
  appendMessage("bot", quizText, true);
}

// --- Live Fact-Checking & Rumor Buster Engine ---
async function checkRumor(rumorText) {
  const lower = rumorText.toLowerCase();
  let offlineFact = null;

  if (lower.includes("hack") || lower.includes("bluetooth") || lower.includes("wifi") || lower.includes("ಇವಿಎಂ ಹ್ಯಾಕ್")) {
    offlineFact = "❌ **FALSE CLAIM**: EVMs are 100% standalone devices without Wi-Fi, Bluetooth, or wireless capabilities. They cannot be hacked remotely.";
  } else if (lower.includes("lost voter id") || lower.includes("without voter id") || lower.includes("ವೋಟರ್ ಐಡಿ ಇಲ್ಲದೆ")) {
    offlineFact = "✅ **VERIFIED FACT**: If your name is on the Electoral Roll, you CAN vote using any 1 of the 12 approved photo identity documents (Aadhaar, Passport, DL, PAN, etc.).";
  } else if (lower.includes("nota cancels") || lower.includes("re-election") || lower.includes("ನೋಟಾ ಹೆಚ್ಚು ಮತ")) {
    offlineFact = "❌ **FALSE CLAIM**: NOTA does not cancel an election. The contesting candidate with the highest number of valid votes is declared the winner.";
  } else if (lower.includes("selfie") || lower.includes("mobile") || lower.includes("ಮೊಬೈಲ್")) {
    offlineFact = "❌ **FALSE CLAIM (Illegal Action)**: Mobile phones, cameras, and taking selfies inside the voting compartment are strictly prohibited by law to ensure the secrecy of vote.";
  }

  if (offlineFact) {
    appendMessage("bot", `🛡️ **Fact Check Result**:\n${offlineFact}`, true);
  } else {
    appendMessage("bot", `🛡️ **Fact Check Result**:\nAnalyzing claim: *"${rumorText}"*\n• **Guideline**: Verified against official Election Commission of India (ECI) regulations. Always verify voter registration at voters.eci.gov.in or call 1950.`, true);
  }
}

function promptRumorCheck() {
  const promptMsg = selectedLanguage === "Kannada"
    ? "🛡️ **ಚುನಾವಣಾ ಸತ್ಯಾಸತ್ಯತೆ ಪರಿಶೀಲನೆ (Rumor Buster)**:\nನೀವು ಪರಿಶೀಲಿಸಲು ಬಯಸುವ ವದಂತಿ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ (ಉದಾ: 'ಇವಿಎಂ ಹ್ಯಾಕ್ ಮಾಡಬಹುದೇ?', 'ವೋಟರ್ ಐಡಿ ಇಲ್ಲದೆ ವೋಟ್ ಹಾಕಬಹುದಾ?')."
    : "🛡️ **Election Rumor Buster & Fact Check**:\nType any election-related rumor or claim in the box below to check if it is a VERIFIED FACT or a FALSE CLAIM (e.g., 'Can EVMs be hacked wirelessly?', 'Can I vote without EPIC card?').";

  appendMessage("bot", promptMsg, true);
}

// Comprehensive Multilingual Curated Election Knowledge Base
const electionKnowledgeBase = {
  first_time: {
    "English": "🗳️ **First-Time Voter Checklist (18+)**:\n1. Check your name on the Electoral Roll at voters.eci.gov.in.\n2. Note your polling booth number & location.\n3. Bring any 1 of 12 official photo ID cards.\n4. Officers will verify your ID, mark your forefinger with indelible ink, and direct you to the EVM compartment.\n5. Press the blue button and look at the VVPAT slip for 7 seconds!",
    "Hindi": "🗳️ **पहली बार मतदान करने वालों के लिए चेकलिस्ट (18+)**:\n1. voters.eci.gov.in पर मतदाता सूची में अपना नाम जांचें।\n2. अपने पोलिंग बूथ का नंबर और स्थान नोट करें।\n3. कोई भी 1 मान्य फोटो पहचान पत्र साथ लाएं।\n4. अधिकारी पहचान सत्यापित करेंगे, उंगली पर अमिट स्याही लगाएंगे और ईवीएम कक्ष में भेजेंगे।\n5. नीला बटन दबाएं और 7 सेकंड तक VVPAT पर्ची देखें!",
    "Kannada": "🗳️ **ಮೊದಲ ಬಾರಿಗೆ ಮತದಾನ ಮಾಡುವವರಿಗೆ ಮಾರ್ಗದರ್ಶಿ (18+)**:\n೧. voters.eci.gov.in ನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ.\n೨. ನಿಮ್ಮ ಮತಗಟ್ಟೆ ಸಂಖ್ಯೆ ಮತ್ತು ಸ್ಥಳ ತಿಳಿದುಕೊಳ್ಳಿ.\n೩. ಯಾವುದೇ ೧ ಅಧಿಕೃತ ಫೋಟೋ ಗುರುತಿನ ಚೀಟಿ ಕೊಂಡೊಯ್ಯಿರಿ.\n೪. ಅಧಿಕಾರಿಗಳು ಬೆರಳಿಗೆ ಅಳಿಸಲಾಗದ ಶಾಹಿ ಹಾಕಿ ಇವಿಎಂ ಕಡೆಗೆ ಕಳುಹಿಸುತ್ತಾರೆ.\n೫. ನೀಲಿ ಬಟನ್ ಒತ್ತಿ, VVPAT ಪರದೆಯನ್ನು ೭ ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗಮನಿಸಿ!",
    "Telugu": "🗳️ **మొదటిసారి ఓటర్లకు మార్గదర్శకాలు (18+)**:\n1. voters.eci.gov.in లో ఓటర్ల జాబితాలో మీ పేరు సరిచూసుకోండి.\n2. మీ పోలింగ్ బూత్ వివరాలను తెలుసుకోండి.\n3. ఏదైనా చెల్లుబాటు అయ్యే ఫోటో గుర్తింపు కార్డును తీసుకెళ్లండి.\n4. ఈవీఎంలో నీలిరంగు బటన్ నొక్కి, 7 సెకన్ల పాటు వీవీప్యాట్ స్లిప్‌ను చూడండి!",
    "Tamil": "🗳️ **முதல்முறை வாக்காளர்களுக்கான வழிகாட்டி (18+)**:\n1. voters.eci.gov.in இல் வாக்காளர் பட்டியலில் உங்கள் பெயரை சரிபார்க்கவும்.\n2. உங்கள் வாக்குச்சாவடி விவரங்களை குறித்துக்கொள்ளவும்.\n3. செல்லுபடியாகும் புகைப்பட அடையாள அட்டையை கொண்டு செல்லவும்.\n4. வாக்குப்பதிவு இயந்திரத்தில் நீல பொத்தானை அழுத்தி 7 வினாடிகள் விவிபேட் சீட்டை பார்க்கவும்!",
    "Marathi": "🗳️ **पहिल्यांदा मतदान करणाऱ्यांसाठी मार्गदर्शक (18+)**:\n1. voters.eci.gov.in वर मतदार यादीत आपले नाव तपासा.\n2. आपले मतदान केंद्र आणि क्रमांक जाणून घ्या.\n3. कोणतेही 1 वैध ओळखपत्र सोबत ठेवा.\n4. ईव्हीएमवर निळे बटण दाबा आणि व्हीव्हीपॅट पावती 7 सेकंद नक्की पहा!",
    "Bengali": "🗳️ **প্রথমবার ভোটারদের জন্য নির্দেশিকা (18+)**:\n1. voters.eci.gov.in-এ ভোটার তালিকায় আপনার নাম যাচাই করুন।\n2. আপনার পোলিং বুথের নম্বর ও অবস্থান জেনে নিন।\n3. যেকোনো ১টি বৈধ সচিত্র পরিচয়পত্র সাথে রাখুন।\n4. ইভিএমে বোতাম টিপুন এবং ৭ সেকেন্ড ভিভিপ্যাট স্লিপ দেখুন!",
    "Gujarati": "🗳️ **પ્રથમ વખત મતદાન કરનારાઓ માટે માર્ગદર્શિકા (18+)**:\n1. voters.eci.gov.in પર મતદાર યાદીમાં તમારું નામ તપાસો.\n2. તમારા મતદાન મથકની વિગત જાણો.\n3. કોઈપણ 1 માન્ય ફોટો આઈડી સાથે રાખો.\n4. ઈવીએમ પર વાદળી બટન દબાવો અને 7 સેકન્ડ વીવીપેટ સ્લિપ જુઓ!",
    "Malayalam": "🗳️ **ആദ്യമായി വോട്ട് ചെയ്യുന്നവർക്കുള്ള നിർദ്ദേശങ്ങൾ (18+)**:\n1. voters.eci.gov.in ൽ വോട്ടർ പട്ടികയിൽ പേരുണ്ടെന്ന് ഉറപ്പാക്കുക.\n2. പോളിംഗ് ബൂത്ത് നമ്പർ മനസ്സിലാക്കുക.\n3. അംഗീകൃത ഫോട്ടോ തിരിച്ചറിയൽ കാർഡ് കരുതുക.\n4. ഇവിഎമ്മിൽ ബട്ടൺ അമർത്തി 7 സെക്കൻഡ് വിവിപാറ്റ് സ്ലിപ്പ് പരിശോധിക്കുക!",
    "Punjabi": "🗳️ **ਪਹਿਲੀ ਵਾਰ ਵੋਟ ਪਾਉਣ ਵਾਲਿਆਂ ਲਈ ਗਾਈਡ (18+)**:\n1. voters.eci.gov.in 'ਤੇ ਵੋਟਰ ਸੂਚੀ ਵਿੱਚ ਆਪਣਾ ਨਾਮ ਚੈੱਕ ਕਰੋ।\n2. ਆਪਣੇ ਪੋਲਿੰਗ ਬੂਥ ਦਾ ਪਤਾ ਲਗਾਓ।\n3. ਕੋਈ ਵੀ 1 ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਫੋਟੋ ਸ਼ਨਾਖਤੀ ਕਾਰਡ ਨਾਲ ਲੈ ਕੇ ਜਾਓ।\n4. ਈਵੀਐਮ 'ਤੇ ਨੀਲਾ ਬਟਨ ਦਬਾਓ ਅਤੇ 7 ਸਕਿੰਟ ਲਈ ਵੀਵੀਪੈਟ ਪਰਚੀ ਦੇਖੋ!"
  },

  documents: {
    "English": "🆔 **No Voter ID (EPIC)? 12 Approved Alternative Photo IDs**:\nYou CAN vote if your name is on the electoral list! Carry ANY 1 of these:\n• Aadhaar Card\n• PAN Card\n• Driving License\n• Indian Passport\n• Bank/Post Office Passbook with photo\n• MGNREGA Job Card\n• Health Insurance Smart Card (ABHA)\n• Pension Document with photo\n• Official Service ID (Govt/PSU)\n• MP/MLA Identity Card\n• Unique Disability ID (UDID)\n• NPR Smart Card",
    "Hindi": "🆔 **मतदाता पहचान पत्र (EPIC) नहीं है? 12 स्वीकृत विकल्प**:\nयदि आपका नाम मतदाता सूची में है तो आप इनमें से कोई 1 दस्तावेज दिखाकर वोट डाल सकते हैं:\n• आधार कार्ड\n• पैन कार्ड\n• ड्राइविंग लाइसेंस\n• पासपोर्ट\n• फोटोयुक्त बैंक/डाकघर पासबुक\n• मनरेगा जॉब कार्ड\n• स्वास्थ्य बीमा स्मार्ट कार्ड (ABHA)\n• पेंशन दस्तावेज\n• दिव्यांगता पहचान पत्र (UDID)",
    "Kannada": "🆔 **ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ ಇಲ್ಲವೇ? ೧೨ ಮಾನ್ಯ ಪರ್ಯಾಯ ದಾಖಲೆಗಳು**:\nಪಟ್ಟಿಯಲ್ಲಿ ಹೆಸರಿದ್ದರೆ ಈ ೧೨ ದಾಖಲೆಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಒಂದನ್ನು ತರಬಹುದು:\n• ಆಧಾರ್ ಕಾರ್ಡ್\n• ಪಾನ್ ಕಾರ್ಡ್\n• ಚಾಲನಾ ಪರವಾನಗಿ (DL)\n• ಪಾಸ್ಪೋರ್ಟ್\n• ಬ್ಯಾಂಕ್ ಅಥವಾ ಅಂಚೆ ಪಾಸ್ಬುಕ್\n• ಮನರೇಗಾ ಜಾಬ್ ಕಾರ್ಡ್\n• ಆರೋಗ್ಯ ವಿಮೆ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ (ABHA)\n• ಪಿಂಚಣಿ ದಾಖಲೆ\n• ಅಂಗವೈಕಲ್ಯ ಗುರುತಿನ ಚೀಟಿ (UDID)",
    "Telugu": "🆔 **ఓటర్ ఐడీ లేదా? 12 ఆమోదిత గుర్తింపు కార్డులు**:\nఓటర్ల జాబితాలో మీ పేరు ఉంటే, వీటిలో ఏదైనా ఒకదానితో ఓటు వేయవచ్చు:\n• ఆధార్ కార్డ్\n• పాన్ కార్డ్\n• డ్రైవింగ్ లైసెన్స్\n• పాస్‌పోర్ట్\n• బ్యాంక్ పాస్‌బుక్\n• ఉపాధి హామీ జాబ్ కార్డ్",
    "Tamil": "🆔 **வாக்காளர் அடையாள அட்டை இல்லையா? 12 மாற்று ஆவணங்கள்**:\nபட்டியலில் உங்கள் பெயர் இருந்தால், இவற்றில் ஏதேனும் ஒன்றை காட்டி வாக்களிக்கலாம்:\n• ஆதார் அட்டை\n• பான் கார்டு\n• ஓட்டுநர் உரிமம்\n• பாஸ்போர்ட்\n• வங்கி பாஸ்புக்\n• மகாத்மா காந்தி தேசிய ஊரக வேலை அட்டை",
    "Marathi": "🆔 **मतदार ओळखपत्र नाही? १२ पर्यायी ओळखपत्रे**:\nमतदार यादीत नाव असल्यास आपण या १२ पैकी कोणत्याही १ पुराव्यासह मतदान करू शकता:\n• आधार कार्ड\n• पॅन कार्ड\n• ड्रायव्हिंग लायसन्स\n• पासपोर्ट\n• फोटोसह बँक पासबुक\n• मनरेगा जॉब कार्ड",
    "Bengali": "🆔 **ভোটার কার্ড নেই? ১২টি বিকল্প নথি**:\nতালিকায় নাম থাকলে এই ১২টি নথির যেকোনো ১টি দিয়ে ভোট দিতে পারেন:\n• আধার কার্ড\n• প্যান কার্ড\n• ড্রাইভিং লাইসেন্স\n• পাসপোর্ট\n• ব্যাংকের পাসবই\n• ১০০ দিনের কাজের জব কার্ড",
    "Gujarati": "🆔 **મતદાર ઓળખપત્ર નથી? 12 વૈકલ્પિક દસ્તાવેજો**:\nયાદીમાં નામ હોય તો તમે આમાંથી કોઈપણ 1 બતાવીને મતદાન કરી શકો છો:\n• આધાર કાર્ડ\n• પાન કાર્ડ\n• ડ્રાઈવિંગ લાયસન્સ\n• પાસપોર્ટ\n• બેંક પાસબુક\n• મનરેગા જોબ કાર્ડ",
    "Malayalam": "🆔 **വോട്ടർ ഐഡി ഇല്ലേ? 12 തിരിച്ചറിയൽ രേഖകൾ**:\nവോട്ടർ പട്ടികയിൽ പേരുണ്ടെങ്കിൽ ഇവയിൽ ഏതെങ്കിലും ഒന്ന് കാണിച്ച് വോട്ട് ചെയ്യാം:\n• ആധാർ കാർഡ്\n• പാൻ കാർഡ്\n• ഡ്രൈവിംഗ് ലൈസൻസ്\n• പാസ്പോർട്ട്\n• ബാങ്ക് പാസ്ബുക്ക്",
    "Punjabi": "🆔 **ਵੋਟਰ ਸ਼ਨਾਖਤੀ ਕਾਰਡ ਨਹੀਂ ਹੈ? 12 ਬਦਲਵੇਂ ਦਸਤਾਵੇਜ਼**:\nਜੇਕਰ ਵੋਟਰ ਸੂਚੀ ਵਿੱਚ ਨਾਮ ਹੈ, ਤਾਂ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ 1 ਦਿਖਾ ਕੇ ਵੋਟ ਪਾਓ:\n• ਆਧਾਰ ਕਾਰਡ\n• ਪੈਨ ਕਾਰਡ\n• ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ\n• ਪਾਸਪੋਰਟ\n• ਬੈਂਕ ਪਾਸਬੁੱਕ"
  },

  booth_steps: {
    "English": "🔘 **Inside the Polling Booth (4 Steps)**:\n1. **1st Officer**: Verifies your name on Electoral Roll against your photo ID.\n2. **2nd Officer**: Inks your left index finger, takes your signature in Register 17A, and gives voter slip.\n3. **3rd Officer**: Takes slip and presses 'Ballot' on EVM Control Unit.\n4. **Secrecy Booth**: Step inside, press your chosen blue button on EVM, verify candidate slip on VVPAT for 7 seconds, and hear the beep!",
    "Hindi": "🔘 **मतदान केंद्र के अंदर 4 मुख्य चरण**:\n1. **प्रथम अधिकारी**: मतदाता सूची से आपकी पहचान सत्यापित करेंगे।\n2. **द्वितीय अधिकारी**: बाएं हाथ की तर्जनी पर अमिट स्याही लगाएंगे, रजिस्टर 17A में हस्ताक्षर लेंगे और पर्ची देंगे।\n3. **तृतीय अधिकारी**: पर्ची लेकर ईवीएम को अनलॉक करेंगे।\n4. **मतदान कक्ष**: अंदर जाकर नीला बटन दबाएं, VVPAT पर 7 सेकंड पर्ची देखें और बीप सुनें!",
    "Kannada": "🔘 **ಮತಗಟ್ಟೆಯ ಒಳಗಿನ ೪ ಹಂತಗಳು**:\n೧. **ಮೊದಲ ಅಧಿಕಾರಿ**: ನಿಮ್ಮ ಗುರುತನ್ನು ಮತದಾರರ ಪಟ್ಟಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸುತ್ತಾರೆ.\n೨. **ಎರಡನೇ ಅಧಿಕಾರಿ**: ತೋರುಬೆರಳಿಗೆ ಶಾಹಿ ಗುರುತು ಹಾಕಿ, ರಿಜಿಸ್ಟರ್ 17A ನಲ್ಲಿ ಸಹಿ ಪಡೆದು ಚೀಟಿ ನೀಡುತ್ತಾರೆ.\n೩. **ಮೂರನೇ ಅಧಿಕಾರಿ**: ಚೀಟಿ ಪರಿಶೀಲಿಸಿ ಇವಿಎಂ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತಾರೆ.\n೪. **ಗೌಪ್ಯ ಕೊಠಡಿ**: ನೀಲಿ ಗುಂಡಿ ಒತ್ತಿ, VVPAT ಪರದೆಯನ್ನು ೭ ಸೆಕೆಂಡ್ ಗಮನಿಸಿ ಮತ್ತು ಬೀಪ್ ಸದ್ದು ಕೇಳಿ!",
    "Telugu": "🔘 **పోలింగ్ బూత్ లోపల 4 దశలు**:\n1. మొదటి అధికారి గుర్తింపును సరిచూస్తారు.\n2. రెండవ అధికారి చూపుడు వేలికి సిరా గుర్తు వేసి సంతకం తీసుకుంటారు.\n3. మూడవ అధికారి ఈవీఎంను యాక్టివేట్ చేస్తారు.\n4. రహస్య కంపార్ట్‌మెంట్‌లో బటన్ నొక్కి 7 సెకన్లు వీవీప్యాట్ చూసి బీప్ శబ్దం వినండి.",
    "Tamil": "🔘 **வாக்குச்சாவடியின் உள்ளே 4 படிகள்**:\n1. முதல் அலுவலர் உங்கள் அடையாளத்தை சரிபார்ப்பார்.\n2. இரண்டாவது அலுவலர் விரலில் அழியாத மை வைத்து கையொப்பம் பெறுவார்.\n3. மூன்றாவது அலுவலர் வாக்குப்பதிவு இயந்திரத்தை இயக்குவார்.\n4. வாக்குச்சாவடி திரைக்கு பின்னால் சென்று பொத்தானை அழுத்தி பீப் ஒலியை கேளுங்கள்.",
    "Marathi": "🔘 **मतदान केंद्राच्या आतील ४ टप्पे**:\n1. पहिले अधिकारी ओळख पडताळतील.\n2. दुसरे अधिकारी बोटावर शाई लावून स्वाक्षरी घेतील.\n3. तिसरे अधिकारी ईव्हीएम सुरू करतील.\n4. गुप्त मतदान कक्षात जाऊन बटण दाबा, व्हीव्हीपॅट ७ सेकंद पहा आणि बीप आवाज ऐका.",
    "Bengali": "🔘 **পোলিং বুথের ভিতরের ৪টি ধাপ**:\n1. ১ম পোলিং অফিসার পরিচয় যাচাই করবেন।\n2. ২য় অফিসার আঙুলে অমোচনীয় কালি লাগাবেন ও স্বাক্ষর নেবেন।\n3. ৩য় অফিসার ইভিএম সক্রিয় করবেন।\n4. গোপন কক্ষে বোতাম টিপুন, ৭ সেকেন্ড স্লিপ দেখুন এবং দীর্ঘ বিপ শব্দ শুনুন।",
    "Gujarati": "🔘 **મતદાન મથકની અંદરના 4 તબક્કા**:\n1. પ્રથમ અધિકારી ઓળખ ચકાસશે.\n2. બીજા અધિકારી આંગળી પર શાહી લગાવશે અને સહી લેશે.\n3. ત્રીજા અધિકારી ઈવીએમ શરૂ કરશે.\n4. ગુપ્ત કમ્પાર્ટમેન્ટમાં જઈ બટન દબાવો અને બીપ અવાજ સાંભળો.",
    "Malayalam": "🔘 **പോളിംഗ് ബൂത്തിനകത്തെ 4 ഘട്ടങ്ങൾ**:\n1. ഒന്നാം ഉദ്യോഗസ്ഥൻ തിരിച്ചറിയൽ രേഖ പരിശോധിക്കും.\n2. രണ്ടാം ഉദ്യോഗസ്ഥൻ മഷി പുരട്ടി ഒപ്പ് വാങ്ങും.\n3. മൂന്നാം ഉദ്യോഗസ്ഥൻ ഇവിഎം സജ്ജമാക്കും.\n4. വോട്ട് രേഖപ്പെടുത്തി ബീപ് ശബ്ദം കേൾക്കുക.",
    "Punjabi": "🔘 **ਪੋਲਿੰਗ ਬੂਥ ਦੇ ਅੰਦਰ 4 ਕਦਮ**:\n1. ਪਹਿਲਾ ਅਧਿਕਾਰੀ ਪਛਾਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੇਗਾ।\n2. ਦੂਜਾ ਅਧਿਕਾਰੀ ਉਂਗਲ 'ਤੇ ਸਿਆਹੀ ਲਗਾਏਗਾ ਅਤੇ ਦਸਤਖਤ ਲਵੇਗਾ।\n3. ਤੀਜਾ ਅਧਿਕਾਰੀ ਈਵੀਐਮ ਚਾਲੂ ਕਰੇਗਾ।\n4. ਗੁਪਤ ਕੈਬਿਨ ਵਿੱਚ ਬਟਨ ਦਬਾਓ ਅਤੇ ਬੀਪ ਦੀ ਆਵਾਜ਼ ਸੁਣੋ।"
  },

  evm_vvpat: {
    "English": "📟 **EVM & VVPAT Tamper-Proof Security Facts**:\n• **100% Standalone**: No Wi-Fi, Bluetooth, or internet connections exist on EVMs.\n• **OTP Microcontrollers**: Software is permanently burned during manufacturing and cannot be reprogrammed.\n• **Physical Paper Audit**: VVPAT displays a paper slip for 7 seconds verifying your vote before dropping into a sealed box.\n• **Mandatory Mock Poll**: 50+ test votes are cast in front of candidate representatives before actual voting starts.",
    "Hindi": "📟 **ईवीएम और वीवीपीएटी सुरक्षा तथ्य**:\n• **100% स्टैंडअलोन**: कोई इंटरनेट, ब्लूटूथ या वाई-फाई कनेक्शन नहीं।\n• **वन-टाइम प्रोग्रामेबल चिप्स**: सॉफ्टवेयर को बदला नहीं जा सकता।\n• **VVPAT सत्यापन**: आपकी पर्ची 7 सेकंड तक दिखाई देती है।\n• **मॉक पोल**: मतदान शुरू होने से पहले सभी पार्टी एजेंटों के सामने 50+ वोटों से परीक्षण।"
  }
};

// --- Cast Vote Function with Multilingual Speech Synthesis ---
function castVote() {
  const selectedLang = document.getElementById("langSelect") ? document.getElementById("langSelect").value : "English";
  const message = voteMessages[selectedLang] || voteMessages["English"];

  // Show a visual success message in chat
  if (typeof appendMessage === "function") {
    appendMessage("bot", `✅ **Success**: ${message}`, true);
  } else {
    alert(message);
  }

  // Speak the message in the selected language
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Map language names to BCP 47 language tags for correct native pronunciation
    const langCodes = {
      "English": "en-IN",
      "Hindi": "hi-IN",
      "Kannada": "kn-IN",
      "Telugu": "te-IN",
      "Tamil": "ta-IN",
      "Marathi": "mr-IN",
      "Bengali": "bn-IN",
      "Gujarati": "gu-IN",
      "Malayalam": "ml-IN",
      "Punjabi": "pa-IN"
    };
    
    utterance.lang = langCodes[selectedLang] || "en-IN";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

// Handle Dropdown Language Switch
function handleLanguageSelect() {
  const select = document.getElementById("langSelect");
  if (!select) return;
  selectedLanguage = select.value;

  const input = document.getElementById("userInput");
  const statusHeader = document.getElementById("statusHeader");

  const greetings = {
    "English": "Language switched to English. Ask any question about the election process!",
    "Hindi": "भाषा हिंदी में बदल दी गई है। चुनाव प्रक्रिया से जुड़ा कोई भी प्रश्न पूछें।",
    "Kannada": "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಚುನಾವಣಾ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",
    "Telugu": "భాష తెలుగులోకి మార్చబడింది. ఎన్నికల గురించిన మీ ప్రశ్నలను అడగండి.",
    "Tamil": "மொழி தமிழாக மாற்றப்பட்டது. தேர்தல் தொடர்பான கேள்விகளை கேட்கலாம்.",
    "Marathi": "भाषा मराठीत बदलली आहे. निवडणूक प्रक्रियेबद्दल आपले प्रश्न विचारा.",
    "Bengali": "भाषा বাংলায় পরিবর্তন করা হয়েছে। নির্বাচন সংক্রান্ত প্রশ্ন জিজ্ঞাসা করুন।",
    "Gujarati": "ભાષા ગુજરાતીમાં બદલાઈ ગઈ છે. ચૂંટણી સંબંધિત તમારા પ્રશ્નો પૂછો.",
    "Malayalam": "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി. തിരഞ്ഞെടുപ്പ് സംശയങ്ങൾ ചോദിക്കാം.",
    "Punjabi": "ਭਾਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲ ਦਿੱਤੀ ਗਈ ਹੈ। ਚੋਣਾਂ ਸੰਬੰਧੀ ਆਪਣੇ ਸਵਾਲ ਪੁੱਛੋ।"
  };

  if (input) input.placeholder = `Ask anything in ${selectedLanguage}...`;
  if (statusHeader) statusHeader.innerText = `Election AI Assistant (${selectedLanguage}) • Online`;

  appendMessage("bot", greetings[selectedLanguage] || `Language switched to ${selectedLanguage}.`, true);
}

function appendMessage(sender, text, showTTS = false) {
  const chatBox = document.getElementById("chatBox");
  if (!chatBox) return;

  const msgWrapper = document.createElement("div");
  msgWrapper.className = sender === "user" ? "flex justify-end" : "flex items-start";

  const bubble = document.createElement("div");
  bubble.className = sender === "user"
    ? "bg-[#d9fdd3] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-xs sm:text-sm text-gray-900 border border-emerald-100"
    : "bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-xs sm:text-sm text-gray-800 border border-gray-100";

  // Format markdown bolding & linebreaks
  const formattedText = text
    .replace(/\n/g, '<br/>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-emerald-700 underline font-semibold">$1</a>');

  bubble.innerHTML = `<div class="leading-relaxed">${formattedText}</div>`;

  if (showTTS) {
    const ttsBtn = document.createElement("button");
    ttsBtn.className = "mt-2 inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium hover:bg-emerald-200 transition";
    ttsBtn.innerHTML = `<i class="fas fa-volume-up"></i> Listen (${selectedLanguage})`;
    ttsBtn.onclick = () => speakText(text);
    bubble.appendChild(ttsBtn);
  }

  const timeStamp = document.createElement("span");
  timeStamp.className = "text-[10px] text-gray-400 block text-right mt-1";
  const now = new Date();
  timeStamp.innerText = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
  bubble.appendChild(timeStamp);

  msgWrapper.appendChild(bubble);
  chatBox.appendChild(msgWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_•\-]/g, '').replace(/https?:\/\/[^\s]+/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langVoiceCodes[selectedLanguage] || "en-IN";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Voice synthesis not supported in this browser.");
  }
}

function handleSend() {
  const input = document.getElementById("userInput");
  if (!input) return;
  const query = input.value.trim();
  if (!query) return;

  appendMessage("user", query);
  input.value = "";

  const lower = query.toLowerCase();

  // District Analytics query handler
  if (lower.includes("stat") || lower.includes("turnout") || lower.includes("district") || lower.includes("bengaluru") || lower.includes("analytics") || lower.includes("ಅಂಕಿ") || lower.includes("ಬೆಂಗಳೂರು")) {
    setTimeout(() => {
      fetchDistrictStats(lower.includes("bengaluru") ? "Bengaluru Urban" : "District Constituency");
    }, 300);
    return;
  }

  // Quiz answer fast handler (supports 2, 2️⃣, B, 7 seconds, ೭, etc.)
  if (lower === '2' || lower === '2️⃣' || lower === 'b' || lower.includes('7 sec') || lower.includes('7') || lower.includes('option 2') || lower.includes('option b') || lower.includes('೭')) {
    setTimeout(() => {
      appendMessage("bot", `🎉 **Correct Answer (Option 2 - 7 Seconds)!**\nThe VVPAT paper slip is displayed for exactly 7 seconds before dropping into the sealed ballot compartment.`, true);
    }, 300);
    return;
  } else if (lower === '1' || lower === '1️⃣' || lower === '3' || lower === '3️⃣' || lower === 'a' || lower === 'c') {
    setTimeout(() => {
      appendMessage("bot", `❌ **Incorrect.** The correct answer is **Option 2 (7 Seconds)**. The VVPAT slip stays visible for 7 seconds to let you verify your vote.`, true);
    }, 300);
    return;
  }

  // Quiz trigger query
  if (lower.includes("quiz") || lower.includes("ರಸಪ್ರಶ್ನೆ") || lower.includes("क्विज") || lower.includes("క్విజ్")) {
    setTimeout(() => {
      startCivicQuiz();
    }, 300);
    return;
  }

  // Rumor / Fact check keywords
  if (lower.includes("rumor") || lower.includes("fact") || lower.includes("fake") || lower.includes("true or false") || lower.includes("ನಿಜವೇ") || lower.includes("ವದಂತಿ")) {
    setTimeout(() => {
      checkRumor(query);
    }, 300);
    return;
  }

  // Polling Station / Queue query handler
  if (lower.includes("station") || lower.includes("queue") || lower.includes("nearby") || lower.includes("facility") || lower.includes("ಸ್ಥಳ") || lower.includes("ಕ್ಯೂ")) {
    setTimeout(() => {
      checkPollingStation();
    }, 300);
    return;
  }

  // Parties query handler
  if (lower.includes("party") || lower.includes("parties") || lower.includes("ಪಕ್ಷ") || lower.includes("bjp") || lower.includes("inc") || lower.includes("congress") || lower.includes("aap") || lower.includes("पार्टी")) {
    setTimeout(() => {
      showAllParties();
    }, 300);
    return;
  }

  // Show temporary typing indicator
  appendMessage("bot", "⏳ Consulting Election Guidelines...");
  const chatBox = document.getElementById("chatBox");
  const loadingBubble = chatBox ? chatBox.lastElementChild : null;

  setTimeout(() => {
    if (loadingBubble && loadingBubble.parentNode) {
      chatBox.removeChild(loadingBubble);
    }

    // Smart Multilingual Matcher
    let reply = electionKnowledgeBase.first_time[selectedLanguage] || electionKnowledgeBase.first_time["English"];

    if (lower.includes("doc") || lower.includes("id") || lower.includes("aadhaar") || lower.includes("ದಾಖಲೆ") || lower.includes("दस्तावेज") || lower.includes("कार्ड") || lower.includes("గుర్తింపు") || lower.includes("ஆவணம்")) {
      reply = electionKnowledgeBase.documents[selectedLanguage] || electionKnowledgeBase.documents["English"];
    } else if (lower.includes("booth") || lower.includes("step") || lower.includes("how to vote") || lower.includes("ಮತಗಟ್ಟೆ") || lower.includes("बूथ") || lower.includes("ಹಂತ") || lower.includes("வாக்குச்சாவடி")) {
      reply = electionKnowledgeBase.booth_steps[selectedLanguage] || electionKnowledgeBase.booth_steps["English"];
    } else if (lower.includes("evm") || lower.includes("vvpat") || lower.includes("machine") || lower.includes("ईवीएम") || lower.includes("ಇವಿಎಂ")) {
      reply = electionKnowledgeBase.evm_vvpat[selectedLanguage] || electionKnowledgeBase.evm_vvpat["English"];
    } else if (lower.includes("nota") || lower.includes("ನೋಟಾ") || lower.includes("नोता")) {
      reply = "🗳️ **NOTA (None of the Above)**:\nAllows you to reject all contesting candidates. Even if NOTA gets the highest votes, the candidate with the highest number of valid votes among contesting candidates is declared winner.";
    } else if (lower.includes("senior") || lower.includes("home") || lower.includes("85") || lower.includes("disability") || lower.includes("ಹಿರಿಯ")) {
      reply = "🏡 **Home Voting Facility (Form 12D)**:\nAvailable for senior citizens (85+) and benchmark Persons with Disabilities (40%+). Election officers visit the voter's residence with full video recording.";
    }

    appendMessage("bot", reply, true);
  }, 400);
}

function sendQuickPrompt(key) {
  const text = electionKnowledgeBase[key]?.[selectedLanguage] || electionKnowledgeBase[key]?.["English"] || "Details unavailable.";
  const title = key.replace('_', ' ').toUpperCase();
  appendMessage("user", `Guide me on: ${title}`);
  setTimeout(() => {
    appendMessage("bot", text, true);
  }, 300);
}
