```markdown
# 🚇 Delhi Metro Guide App

A smart, user-friendly web application to help commuters easily navigate the **Delhi Metro network**. This project finds the **shortest route**, displays **line changes**, and distinguishes similar metro lines such as **Pink**, **Magenta**, and **Violet** using color-coded paths and direction info.

---

## ✨ Features

- ✅ **Shortest Route Calculation** between any two stations  
- 🔄 **Intelligent Interchange Detection**  
- 🎨 **Color-coded Line Visualization**  
- 👁️ **Visual Route Display** with icons and labels  
- 📍 **Station Count & Direction Info**  
- ⚙️ **Interactive Dropdown Selection**  
- ⚠️ Validation to prevent selecting the same station as source & destination  

---

## 🖥️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Styling**: CSS (Dark Theme & Responsive)  
- **Icons**: [Remix Icon](https://remixicon.com/)  
- **Routing Logic**: Custom BFS-style recursive pathfinder  

---

## 📁 Project Structure

```
├── index.html           # Homepage with input and route display
├── aboutProject.html    # About page with project info
├── style.css            # Styling for the app
├── index.js             # Main routing logic and metro map
├── index2.js            # DOM rendering and interaction logic
```

---

## 🚦 How It Works

1. Select a `Start` and `End` station.
2. Click on **Search** to compute:
   - Shortest possible path
   - Any required line interchanges
   - Directional info (e.g. "Start BLUE LINE towards Noida City Centre")
3. Output is styled with line-specific colors and station highlights.

---

## 📷 Preview

> *(You can add screenshots here if hosted, or attach UI snapshots)*

---

## 🛠️ Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/delhi-metro-guide.git
cd delhi-metro-guide
```

2. Run Locally:
   - Open `index.html` in your browser, or
   - Use a static server:
```bash
npx serve .
```

---

## 🚧 Roadmap / Future Enhancements

- [ ] Live Delhi Metro Timings (DMRC API)
- [ ] Reverse Route Toggle
- [ ] Route Overview Map (SVG/Leaflet.js)
- [ ] Progressive Web App (PWA) Support

---

## 📄 License

MIT © 2025 [Archit Goel](https://www.linkedin.com/in/archit-goel-04a3b2312)

---

## 🙋‍♂️ Disclaimer

> This project is **not affiliated** with Delhi Metro Rail Corporation (DMRC).  
> Built independently for educational and demonstration purposes.

---

## 💬 Feedback

Have suggestions? Found a bug?  
Reach out via [LinkedIn](https://www.linkedin.com/in/archit-goel-04a3b2312) or open an issue.
```
