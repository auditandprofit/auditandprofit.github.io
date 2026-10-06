(() => {
  const scenarios = [
    {
      state: "ERR 503 · REGISTRY TIMEOUT",
      values: ["∞", "88", "88", "88"],
      message: "Error contacting the meeting registry. First meeting delayed pending strategic alignment with the concept of time.",
      footnote: "RETRY POLICY: INFINITE · CONFIDENCE: NOT COVERED BY SLA",
    },
    {
      state: "ERR 404 · TIME NOT FOUND",
      values: ["404", "??", "13", "37"],
      message: "The calendar says “soon™.” Legal confirms that soon™ is nonbinding.",
      footnote: "ETA: N/A · PLEASE MANAGE EXPECTATIONS PROACTIVELY",
    },
    {
      state: "SYNC LOST · CLOCK DECLINED",
      values: ["NaN", "-1", "??", "∞"],
      message: "The time server set a boundary. We respect that and have no new meeting time.",
      footnote: "ESCALATION OWNER: VIBES · TICKET STATUS: CIRCLE BACK",
    },
    {
      state: "AUTO-RESCHEDULE · NEXT QUARTER",
      values: ["99", "99", "99", "99"],
      message: "First meeting moved to next quarter. Leadership has not selected which quarter.",
      footnote: "ROADMAP: VISIONARY · CALENDAR: NOT ALIGNED",
    },
    {
      state: "REGISTRY SAYS · CIRCLE BACK",
      values: ["03", "∞", "00", "13"],
      message: "We circled back. The circle is still circling. No meeting time was harmed.",
      footnote: "MEETINGS HELD: 0 · CIRCLES CLOSED: ALSO 0",
    },
    {
      state: "LIVE STATUS · ALLEGEDLY",
      values: ["01", "01", "01", "??"],
      message: "This schedule is maintained on a best-effort basis by an unlicensed kitchen timer.",
      footnote: "PROVIDER: UNKNOWN · UPTIME: VIBES",
    },
    {
      state: "SLA BREACH · NO SLA FOUND",
      values: ["404", "∞", "NaN", "00"],
      message: "The countdown is now an enterprise feature. Please upgrade your expectations.",
      footnote: "PLAN: FREE TRIAL · BILLING CONTACT: THE VOID",
    },
    {
      state: "STAKEHOLDER ALIGNMENT · 2%",
      values: ["??", "88", "??", "88"],
      message: "First meeting delayed until all stakeholders agree what a meeting is.",
      footnote: "NEXT UPDATE: AFTER THE NEXT UPDATE",
    },
  ];

  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  const fields = ["days", "hours", "minutes", "seconds"];

  fields.forEach((unit, index) => {
    const value = scenario.values[index];
    const field = document.getElementById(`countdown-${unit}`);
    field.textContent = value;
    field.dataset.glitch = value;
  });

  document.getElementById("meeting-registry-state").textContent = scenario.state;
  document.getElementById("meeting-status-message").textContent = scenario.message;
  document.getElementById("meeting-status-footnote").textContent = scenario.footnote;
})();
