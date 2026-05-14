const FLASHCARDS = [

  /* ================= WEEK 2 ================= */
  {
    week: 2, category: "Fundamentals",
    q: "Why does understanding how programs run at OS level matter for security?",
    a: "It explains <strong>how vulnerabilities arise</strong>."
  },

  {
    week: 2, category: "Memory Layout",
    q: "What are the 5 memory segments of a C program?",
    a: "Text, Data, BSS, Heap, Stack."
  },

  {
    week: 2, category: "Stack Frames",
    q: "What happens during a function call?",
    a: "Args → return addr → saved EBP → new frame."
  },

  {
    week: 2, category: "Buffer Overflow",
    q: "What is a buffer overflow?",
    a: "Writing beyond allocated memory bounds."
  },

  {
    week: 2, category: "Stack Overflow",
    q: "What happens if an attacker controls the return address?",
    a: "They redirect execution → arbitrary code execution."
  },

  // rest low
  { week: 2, category: "Fundamentals", q: "What is the key trade-off of using C?", a: "Fast but unsafe memory." },
  { week: 2, category: "C Basics", q: "What do & and * do?", a: "& address, * dereference." },
  { week: 2, category: "Memory Layout", q: "Stack vs heap growth?", a: "Stack down, heap up." },
  { week: 2, category: "Registers", q: "ESP vs EBP?", a: "ESP stack top, EBP frame base." },

  /* ================= WEEK 3 ================= */
  {
    week: 3, category: "Exploitation",
    q: "What are the 3 steps of a buffer overflow exploit?",
    a: "Overflow → overwrite return → redirect execution."
  },

  {
    week: 3, category: "Payload",
    q: "What is a NOP sled?",
    a: "NOPs that slide execution into shellcode."
  },

  {
    week: 3, category: "Advanced Attacks",
    q: "What is return-to-libc?",
    a: "Use existing functions like system()."
  },

  {
    week: 3, category: "Defences",
    q: "What is ASLR?",
    a: "Randomises memory addresses."
  },

  {
    week: 3, category: "Defences",
    q: "What is the NX bit?",
    a: "Marks memory as non-executable."
  },

  // rest low
  { week: 3, category: "Shellcode", q: "What is shellcode?", a: "Injected malicious code." },
  { week: 3, category: "Advanced Attacks", q: "What is ROP?", a: "Chain gadgets ending in ret." },

  /* ================= WEEK 4 ================= */
  {
    week: 4, category: "Format Strings",
    q: "What causes a format string vulnerability?",
    a: "User input used as format string."
  },

  {
    week: 4, category: "Format String Exploits",
    q: "What does %n do?",
    a: "Writes number of printed chars to memory."
  },

  {
    week: 4, category: "Memory Safety",
    q: "Spatial vs temporal memory safety?",
    a: "Bounds vs lifetime correctness."
  },

  {
    week: 4, category: "Memory Safety",
    q: "What is use-after-free?",
    a: "Using memory after it is freed."
  },

  {
    week: 4, category: "Command Injection",
    q: "Why is system(user_input) unsafe?",
    a: "Allows command injection."
  },

  // rest low
  { week: 4, category: "Format String Exploits", q: "What does %x do?", a: "Prints stack values." },

  /* ================= WEEK 5 ================= */
  {
    week: 5, category: "Race Conditions",
    q: "What is a race condition?",
    a: "Outcome depends on execution timing."
  },

  {
    week: 5, category: "Race Conditions",
    q: "What is TOCTTOU?",
    a: "Time-of-check to time-of-use race."
  },

  {
    week: 5, category: "Race Conditions",
    q: "What is a mutex?",
    a: "Lock for critical section."
  },

  {
    week: 5, category: "Race Conditions",
    q: "What is least privilege?",
    a: "Minimum permissions only."
  },

  {
    week: 5, category: "Malware",
    q: "What is malware?",
    a: "Malicious software."
  },

  // rest low
  { week: 5, category: "Malware", q: "Virus vs worm?", a: "Virus needs host, worm spreads." },

  /* ================= WEEK 6 ================= */
  {
    week: 6, category: "SQL Injection",
    q: "What is SQL injection?",
    a: "User input executed as SQL."
  },

  {
    week: 6, category: "SQL Injection",
    q: "How does OR 5=5 bypass login?",
    a: "Condition always true."
  },

  {
    week: 6, category: "SQLi Defences",
    q: "What is a parameterised query?",
    a: "Separates SQL from data."
  },

  {
    week: 6, category: "SQLi Defences",
    q: "Why are parameterised queries effective?",
    a: "Input treated as data only."
  },

  {
    week: 6, category: "SQLi Defences",
    q: "What is second-order SQLi?",
    a: "Stored input later exploited."
  },

  /* ================= WEEK 7 ================= */
  {
    week: 7, category: "XSS Attacks",
    q: "What is XSS?",
    a: "Inject JS into browser."
  },

  {
    week: 7, category: "XSS Attacks",
    q: "Stored vs reflected XSS?",
    a: "Stored = DB, reflected = request."
  },

  {
    week: 7, category: "CSRF",
    q: "What is CSRF?",
    a: "Forces victim to send requests."
  },

  {
    week: 7, category: "CSRF",
    q: "How do tokens prevent CSRF?",
    a: "Attacker can't read token."
  },

  {
    week: 7, category: "Session Management",
    q: "What is session fixation?",
    a: "Attacker sets session ID."
  },

  /* ================= WEEK 8 ================= */
  {
    week: 8, category: "Security Testing",
    q: "Functional vs security testing?",
    a: "Correctness (does it do what it's supposed to) vs safety (does it enter a dangerous state)."
  },

  {
    week: 8, category: "Security Testing",
    q: "Three levels of testing?",
    a: "Risk, white-box, black-box."
  },

  {
    week: 8, category: "Static Analysis",
    q: "What is SAST?",
    a: "Analyse code without running."
  },

  {
    week: 8, category: "Control Flow Graphs",
    q: "What is a CFG?",
    a: "A graph that represents all possible execution paths"
  },

  {
    week: 8, category: "Control Flow Integrity",
    q: "What is CFI?",
    a: "Ensures that a program only follows valid control paths."
  },

  /* ================= WEEK 9 ================= */
  {
    week: 9, category: "Security Testing",
    q: "Static vs dynamic analysis?",
    a: "Code vs runtime testing."
  },

  {
    week: 9, category: "Penetration Testing",
    q: "What is penetration testing?",
    a: "Conducting Simulated attacks to find vulnerabilities."
  },

  {
    week: 9, category: "Penetration Testing",
    q: "Why doesn't pen testing prove security?",
    a: "Only shows what's found."
  },

  {
    week: 9, category: "Fuzz Testing",
    q: "What is fuzzing?",
    a: "An testing technique that sends Random/malformed inputs."
  },

  {
    week: 9, category: "Fuzz Testing",
    q: "Mutation vs generation fuzzing?",
    a: "Modify vs create inputs."
  },

  /* ================= WEEK 10 ================= */
  {
    week: 10, category: "SSDLC",
    q: "What is secure by design?",
    a: "Security in every phase."
  },

  {
    week: 10, category: "Risk Management",
    q: "Risk management steps?",
    a: "Identify → prioritise → mitigate."
  },

  {
    week: 10, category: "Threat Modelling",
    q: "What is threat modelling?",
    a: "A structured proccess that is used to identify, analyse and mititgate threats."
  },

  {
    week: 10, category: "STRIDE",
    q: "What is STRIDE?",
    a: "Spoofing, Tampering, Repudiation, Info Disclosure, DoS, EoP."
  },

  {
    week: 10, category: "Secure Coding",
    q: "Secure input handling?",
    a: "Validate, canonicalize, sanitize."
  },

  {
    week: 10, category: "Secure Coding",
    q: "Secure design principles? (eg.)",
    a: "Economy of Mechanism, Least Privilege, Defence in Depth, fail-safe defaults"
  }

];
