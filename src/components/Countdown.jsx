import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown({ onBirthdayReached, birthdayReached }) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({
    hours: null,
    minutes: null,
    seconds: null,
  });

  // 🎉 Confetti trigger
  const fireConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  useEffect(() => {
    // If birthday already reached, don't start the countdown
    if (birthdayReached) {
      return;
    }

    // ═══════════════════════════════════════════════════════════════
    // 🎂 SET YOUR BIRTHDAY DATE & TIME HERE 🎂
    // ═══════════════════════════════════════════════════════════════

    const targetDate = new Date("2025-12-18T00:00:00");

    // ⏰ FORMAT: 'YYYY-MM-DDTHH:MM:SS'
    // Example: '2026-01-15T00:00:00'

    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ hours, minutes, seconds });

      // 🌙 Midnight Magic Mode
      if (hours === 0 && minutes === 0 && seconds === 0) {
        document.body.classList.add("celebration-mode");
      }

      if (diff <= 0 && !birthdayReached) {
        onBirthdayReached();
        fireConfetti();
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [onBirthdayReached, birthdayReached]);

  useEffect(() => {
    setPrevTime(time);
  }, [time]);

  const Digit = ({ value, label, prevValue }) => {
    const shouldFlip = prevValue !== null && prevValue !== value;

    return (
      <div className="digit time-box">
        <div className={`card ${shouldFlip ? "flip" : ""}`}>
          <div className="text">{String(value).padStart(2, "0")}</div>
        </div>
        <div className="label">{label}</div>
      </div>
    );
  };

  // 🎉 Birthday Reached Screen
  if (birthdayReached) {
    return (
      <section className="countdown">
        <h1>
          🎂 Happy Birthday{" "}
          <span className="name-highlight">Divyanshi</span> 🎂
        </h1>

        <div className="flip-timer">
          <span className="birthday-celebration">
            🎉 Wishing you a day filled with love, laughter & magic 🎉
          </span>
        </div>

        <button className="celebrate-btn" onClick={fireConfetti}>
          🎊 Celebrate Again
        </button>
      </section>
    );
  }

  return (
    <section className="countdown">
      <h1>
        Counting down to{" "}
        <span className="name-highlight">Divyanshi’s Birthday</span> 🎂
      </h1>

      <div className="flip-timer">
        <Digit value={time.hours} label="Hours" prevValue={prevTime.hours} />
        <Digit
          value={time.minutes}
          label="Minutes"
          prevValue={prevTime.minutes}
        />
        <Digit
          value={time.seconds}
          label="Seconds"
          prevValue={prevTime.seconds}
        />
      </div>

      <button className="celebrate-btn" onClick={fireConfetti}>
        🎉 Let's Celebrate
      </button>

      {/* ⚠️ TEST BUTTON - remove before final deploy ⚠️ */}
      <button
        className="test-button"
        onClick={onBirthdayReached}
        title="Skip countdown and see celebration"
      >
        🧪 Test Celebration
      </button>
    </section>
  );
}

export default Countdown;
