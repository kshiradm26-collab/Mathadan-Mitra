# 🗳️ Matadaana Mitra (ಮತದಾನ ಮಿತ್ರ / मतदान मित्र)

**Matadaana Mitra** is an innovative, highly accessible, multilingual Election Awareness conversational platform designed to empower citizens with verified knowledge about the Indian electoral process.

Built with a WhatsApp-style interface, the application operates 100% standalone and offline without requiring API keys, and includes native speech synthesis in regional languages.

---

## 🌟 Key Features

- **🌐 10-Language Support**: Complete dynamic switching across **English, Kannada (ಕನ್ನಡ), Hindi (हिंदी), Telugu (తెలుగు), Tamil (தமிழ்), Marathi (मराठी), Bengali (বাংলা), Gujarati (ગુજરાતી), Malayalam (മലയാളം), and Punjabi (ਪੰਜਾਬੀ)**.
- **🔊 Native Voice Narration (Text-to-Speech)**: Integrated Web Speech API audio synthesis using regional BCP-47 tags (`kn-IN`, `hi-IN`, `ta-IN`, `te-IN`, etc.).
- **🗳️ Interactive Vote Simulator (`castVote()`)**: Multilingual vote confirmation with audible and visual feedback.
- **📊 District BigQuery Analytics**: Real-time electors count, voter turnout percentage, youth demographic data, and booth accessibility metrics.
- **🎯 Civic Readiness Micro-Quiz**: Interactive micro-quiz (`1️⃣`, `2️⃣`, `3️⃣`) evaluating election knowledge in chat.
- **🛡️ Fact-Check & Rumor Buster Engine**: Instant fact verification on EVMs/VVPAT tamper security, 12 approved photo IDs, and voting booth rules.
- **📍 Polling Station & Queue Tracker**: Nearby booth locator simulation with distance, queue traffic status (Green/Yellow/Red), and accessibility facilities.
- **🏛️ Pan-India Political Parties Guide**: Comprehensive directory of recognized National and Regional parties across North, South, West, and East India.
- **📱 Progressive Web App (PWA)**: Includes `manifest.json` and mobile-friendly standalone display mode.

---

## 📂 Project Structure

```
├── index.html       # WhatsApp-style chat interface, responsive navigation & quick action chips
├── script.js        # Multilingual knowledge base, TTS engine, quiz parser, BigQuery analytics
├── style.css        # Responsive styling, glassmorphism design, and print stylesheets
├── manifest.json    # Progressive Web App (PWA) manifest configuration
├── icon-192.png     # PWA app launcher icon
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
- Python 3.x (or any local static file server).

### Running Locally
1. Clone or download the repository:
   ```bash
   git clone https://github.com/kshiradm26-collab/Mathadan-Mitra.git
   cd Mathadan-Mitra
   ```

2. Start a local server:
   ```bash
   python -m http.server 8080
   ```

3. Open in your browser:
   ```
   http://localhost:8080/index.html
   ```

---

## 📜 Election Commission of India (ECI) Compliance & Accuracy
All information provided by Matadaana Mitra is strictly neutral, non-partisan, and aligned with official Election Commission of India (ECI) guidelines and voter education resources.
