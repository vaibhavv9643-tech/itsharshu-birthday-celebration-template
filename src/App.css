/* ===============================
   GLOBAL APP LAYOUT
================================ */
.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffd1dc, #ffe6f0);
}

/* ===============================
   PAGE SYSTEM
================================ */
.page {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}

/* ===============================
   GLASS CARD STYLE
================================ */
.glass-card {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 36px;
  padding: 65px 75px;
  max-width: 720px;
  width: 90%;
  text-align: center;
  box-shadow:
    0 35px 70px rgba(255, 105, 180, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.45);
  animation: floatCard 5s ease-in-out infinite;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* ===============================
   ICON ANIMATION
================================ */
.slide-icon {
  font-size: 3.2rem;
  margin-bottom: 25px;
  animation: sparkle 2s infinite ease-in-out;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* ===============================
   HEADINGS
================================ */
.slide-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #ff2d75, #a445ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===============================
   BUTTON GROUP
================================ */
.button-group {
  display: flex;
  justify-content: center;
  gap: 28px;
}

/* ===============================
   PRIMARY BUTTON
================================ */
.primary-btn {
  background: linear-gradient(135deg, #ff2d75, #ff8db3);
  border: none;
  color: white;
  padding: 18px 46px;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 40px rgba(255, 45, 117, 0.5);
  transition: all 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 28px 60px rgba(255, 45, 117, 0.7);
}

/* ===============================
   SECONDARY BUTTON
================================ */
.secondary-btn {
  background: linear-gradient(135deg, #7b2cff, #c18cff);
  border: none;
  color: white;
  padding: 18px 46px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 40px rgba(150, 90, 255, 0.45);
  transition: all 0.25s ease;
}

.secondary-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 28px 60px rgba(150, 90, 255, 0.65);
}

/* ===============================
   PROGRESS DOTS
================================ */
.progress-dots {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 12px;
}

.dot {
  width: 14px;
  height: 14px;
  background: #ddd;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #ff2d75, #ff8db3);
  transform: scale(1.5);
  box-shadow: 0 0 16px rgba(255, 45, 117, 0.8);
}

/* ===============================
   MOBILE OPTIMIZATION
================================ */
@media (max-width: 600px) {
  .glass-card {
    padding: 45px 30px;
  }

  .slide-title {
    font-size: 1.9rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 14px 32px;
    font-size: 1.05rem;
  }

  .button-group {
    flex-direction: column;
  }
}
