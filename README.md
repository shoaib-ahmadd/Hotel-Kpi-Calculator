# Hotel KPI Calculator

A simple, interactive dashboard to calculate key hotel performance indicators (KPIs) — built using **HTML, CSS, and vanilla JavaScript**.

## 🚀 Overview
This project allows users to input core hotel metrics and instantly see calculated KPIs such as:
- **Occupancy Rate (%)**
- **Average Daily Rate (ADR $)**
- **Revenue per Available Room (RevPAR $)**

The calculations update automatically in real-time whenever an input value changes.

## 📊 Formulas Used
- **Occupancy (%)** = (Rooms Sold / Total Rooms Available) × 100  
- **ADR ($)** = Total Room Revenue / Rooms Sold  
- **RevPAR ($)** = Total Room Revenue / Total Rooms Available

## ⚙️ Features
- Real-time calculations (auto updates as you type)
- Error handling for zero or missing values
- Clean and professional user interface
- Fully responsive layout
- Built using pure HTML, CSS, and JavaScript (no frameworks)

## 🧠 Edge Case Handling
- If *Rooms Sold* = 0 → ADR displays as **N/A**  
- If *Total Rooms Available* = 0 → Occupancy and RevPAR display as **N/A**

## 📂 Project Structure
hotel-kpi-calculator/
│
├── index.html
├── style.css
└── script.js


## 💡 Example Calculation
| Metric | Formula | Example Result |
|---------|----------|----------------|
| Occupancy | (80 / 100) × 100 | 80.00% |
| ADR | 12,000 / 80 | $150.00 |
| RevPAR | 12,000 / 100 | $120.00 |

## 🌐 Live Demo
[👉 https://hotel-kpi-calculator.netlify.app/](#)

## 🧑‍💻 Author
**Shoaib Ahmad**  
Web Developer Practical Assessment – Bezla.com  

## 💡 Example Calculation
| Metric | Formula | Example Result |
|---------|----------|----------------|
| Occupancy | (80 / 100) × 100 | 80.00% |
| ADR | 12,000 / 80 | $150.00 |
| RevPAR | 12,000 / 100 | $120.00 |

## 🌐 Live Demo
[👉 https://hotel-kpi-calculator.netlify.app/](#)

