## 🌡️ Temperature Conversion Program

### 🧩 Overview

This is a simple **Temperature Conversion Web App** built using **HTML, CSS, and JavaScript**.
It allows users to easily convert temperatures between **Celsius** and **Fahrenheit** using a clean, responsive interface.

---

### 🎯 Features

* 🔁 Convert **Celsius → Fahrenheit** and **Fahrenheit → Celsius**
* 🧮 Instant conversion with one click
* 💡 Input validation to ensure a unit is selected
* 🎨 User-friendly and clean design using HTML & CSS
* ⚡ Built with pure JavaScript — no libraries required

---

### 🧠 How It Works

1. Enter a temperature value in the input field.
2. Select the desired conversion type:

   * **Celsius to Fahrenheit**
   * **Fahrenheit to Celsius**
3. Click **Submit** to view the converted result instantly.

---

### 🧮 Formulae Used

* **Celsius → Fahrenheit:**
  [
  F = (C \times \frac{9}{5}) + 32
  ]

* **Fahrenheit → Celsius:**
  [
  C = (F - 32) \times \frac{5}{9}
  ]

---

### 🧱 Project Structure

```
📂 Temperature-Conversion-Program
├── tempreure conversion peogram.html
├── tempreture conversion program script.js
└── Tempreture conersion program style.css
```

---

### 💻 Code Explanation

#### 🟩 HTML (`tempreure conversion peogram.html`)

Defines the form layout and connects the CSS and JS files:

* Input field for temperature
* Two radio buttons for conversion type
* Button to trigger conversion
* Paragraph element to display result

#### 🟦 CSS (`Tempreture conersion program style.css`)

Handles design and layout:

* Centered form card with shadow and rounded corners
* Stylish button hover effects
* Bold and readable fonts

#### 🟨 JavaScript (`tempreture conversion program script.js`)

Implements the conversion logic:

```js
if (fahrenheit.checked) {
    convertedTemp = (temperature * 9/5) + 32; // C → F
}
else if (celsius.checked) {
    convertedTemp = (temperature - 32) * (5/9); // F → C
}
```

Updates the `#result` paragraph dynamically after calculation.

---

### 📸 Preview (Concept)

```
-----------------------------
|  Temperature Conversion   |
|---------------------------|
|   [ 25 ]                  |
|  ( ) Celsius → Fahrenheit |
|  ( ) Fahrenheit → Celsius |
|  [ Submit ]               |
|  Result: 77 °F            |
-----------------------------
```

---

### ⚙️ Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Conversion logic

---

### 🚀 How to Run

1. Download all three project files into the same folder.
2. Open `tempreure conversion peogram.html` in any browser.
3. Start converting temperatures instantly!

---

### 🧑‍💻 Developer

**Belal Nasr**
A Computer Science student passionate about web development and interactive projects.

