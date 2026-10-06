(() => {
  const meetingAt = new Date("2026-10-09T23:15:46Z").getTime();
  const fields = {
    days: document.getElementById("countdown-days"),
    hours: document.getElementById("countdown-hours"),
    minutes: document.getElementById("countdown-minutes"),
    seconds: document.getElementById("countdown-seconds"),
  };
  let timer = null;

  function updateCountdown() {
    const remaining = Math.max(0, meetingAt - Date.now());
    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000),
    };

    for (const [unit, value] of Object.entries(values)) {
      fields[unit].textContent = String(value).padStart(2, "0");
    }

    if (remaining === 0) {
      if (timer !== null) window.clearInterval(timer);
    }
  }

  updateCountdown();
  if (meetingAt > Date.now()) {
    timer = window.setInterval(updateCountdown, 1000);
  }
})();
