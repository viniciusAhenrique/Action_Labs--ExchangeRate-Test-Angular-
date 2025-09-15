# Action_Labs--Exchange Rate Test Angular

**Description:**  
This project was developed as part of a Front-end Developer assessment for Action Labs.  
It is a web application built with **Angular** and **Tailwind CSS** that allows users to check the exchange rate of the **BRL** (Brazilian Real) against other currencies, including a 30-day historical view.

---

## Features

- Enter a currency code (e.g., USD, EUR) into the input field  
- Fetch the current exchange rate of BRL against the selected currency  
- View the last 30 days of exchange rate history  
- Clean, responsive interface styled with Tailwind CSS  
- Error handling and loading indicators for better UX

---

## Technologies Used

- **Angular** (TypeScript)  
- **Tailwind CSS** for styling  
- **RxJS** for reactive programming  
- **HttpClient** for API communication  
- **Standalone Components** for modular architecture  
- **External API** for real-time exchange rate data

---

## Requirements

To run this project locally, you need:

1. **Node.js** and **npm**  
   - [Download Node.js](https://nodejs.org/en/download/)  
   - Recommended: Node 18+

2. **Angular CLI**  
   - Install globally:  
     ```bash
     npm install -g @angular/cli
     ```

3. **Code Editor**  
   - Recommended: **Visual Studio Code**

---

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/Action_Labs--ExchangeRate-Test-Angular-.git
   cd Action_Labs--ExchangeRate-Test-Angular-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

---

## Folder Structure

```bash
src/
│
├─ app/
│   ├─ components/
│   │   └─ exchange-rate.component/
│   │       ├─ exchange-history/
│   │          ├─ exchange-history.html
│   │          ├─ exchange-history.scss
│   │          ├─ exchange-history.spec.ts
│   │          └─ exchange-history.ts
│   │       ├─ exchange-rate.component.html
│   │       ├─ exchange-rate.component.scss
│   │       ├─ exchange-rate.component.spec.ts
│   │       └─ exchange-rate.component.ts
│   │
│   │
│   │
│   ├─ models/
│   │   └─ exchange-rate_daily.ts
│   │
│   ├─ services/
│   │   └─ exchange-rate_services.ts
│   │
│   ├─ app.config.ts
│   ├─ app.html
│   ├─ app.routes.ts
│   ├─ app.scss
│   └─ app.ts
│
├─ assets/
│   ├─ ActionLabs.png
│   └─ logo.png
│
├─ environments/
│   ├─ environment.development.ts
│   └─ environment.ts
│
├─ index.html
└─ main.ts
```

---

**Author:** Vinicius Andrade Henrique
