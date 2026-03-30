# ⭕ 2-Player Tic Tac Toe

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-blue?style=for-the-badge)

A clean, fast, and fully functional **2-Player Tic Tac Toe** game that runs entirely in the browser — no installs, no frameworks, just pure HTML, CSS, and JavaScript.

---

## 🌐 Live Demo

🔗 **[Play Now → marutsharma.github.io/Tic-Tac-Toe](https://marutsharma.github.io/Tic-Tac-Toe/)**
*(Activate via GitHub Pages in your repo Settings → Pages)*

---

## 🎮 About The Game

This is a classic **two-player game** played on a 3×3 grid. Players sit on the same device and take turns — Player 1 places **X** and Player 2 places **O**. The first one to line up 3 marks in a row, column, or diagonal wins. If the board fills up with no winner, it's a draw!

Built as a front-end fundamentals project to demonstrate real-world JavaScript logic, DOM interaction, and responsive UI design.

---

## 🖥️ Preview

```
┌───┬───┬───┐
│ X │ O │ X │
├───┼───┼───┤
│ O │ X │   │
├───┼───┼───┤
│   │ O │ X │  ✅  Player X Wins!
└───┴───┴───┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 👥 2-Player Local | Two players share one device and alternate turns |
| 🏆 Win Detection | Checks all 8 winning patterns after every move |
| 🤝 Draw Detection | Detects a full board with no winner |
| 📢 Live Result Display | Announces the winner or draw instantly |
| 🔄 Reset Button | Clears the board and restarts without a page reload |
| 📱 Responsive UI | Playable on both desktop and mobile |

---

## 🛠️ Built With

- **HTML5** — Semantic page structure and 3×3 button grid
- **CSS3** — Grid layout, styling, and responsive design
- **JavaScript (ES6)** — Turn logic, win/draw detection, and DOM updates

No libraries. No build tools. No package manager.

---

## 💡 Key Concepts Demonstrated

> What this project shows a recruiter or interviewer:

- **DOM Manipulation** — Selecting elements, updating text content, toggling classes dynamically
- **Game State Management** — Maintaining and evaluating a board state array on each turn
- **Win Algorithm** — Checking 8 hardcoded winning patterns `[0,1,2], [3,4,5]...` against live board state
- **Event Handling** — Adding click listeners to multiple elements and managing shared state across them
- **Separation of Concerns** — HTML handles structure, CSS handles presentation, JS handles all logic
- **UX Design** — Clear turn indicators, result messages, and a one-click reset experience

---

## 📁 Project Structure

```
Tic-Tac-Toe/
│
├── index.html     ← Game layout: 3×3 grid, player headings, reset button, result box
├── style.css      ← Styling: grid, button states, result display, responsive rules
└── app.js         ← Logic: turn tracking, win/draw checking, board reset, DOM updates
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser

```bash
git clone https://github.com/MarutSharma/Tic-Tac-Toe.git
cd Tic-Tac-Toe
# Double-click index.html or run:
open index.html
```

### Option 2 — Use Live Server (VS Code)

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Game opens at `http://127.0.0.1:5500`

---

## 📖 How to Play

```
Step 1 → Player X clicks any empty cell to place their mark
Step 2 → Player O clicks any empty cell to place their mark
Step 3 → Keep alternating until someone gets 3 in a line
Step 4 → The winner is announced below the board
Step 5 → Click "Reset Game 🔄" to play again
```

---

## 🗺️ Winning Combinations

The game checks these **8 patterns** after every move:

```
Rows:       [0,1,2]   [3,4,5]   [6,7,8]
Columns:    [0,3,6]   [1,4,7]   [2,5,8]
Diagonals:  [0,4,8]   [2,4,6]
```

---

## 🔮 Planned Improvements

- [ ] 🤖 Single-player mode vs AI (Minimax algorithm)
- [ ] 🌙 Dark Mode toggle *(already scaffolded in the HTML)*
- [ ] 🔢 Persistent score tracker across rounds
- [ ] 🎉 Win animation / confetti effect
- [ ] 🔊 Sound effects on move and win

---

## 👤 Author

**Marut Sharma**
GitHub → [@MarutSharma](https://github.com/MarutSharma)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using vanilla HTML, CSS & JavaScript</p>
