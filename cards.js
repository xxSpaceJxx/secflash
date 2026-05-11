// ==============================
// REDUCED FLASHCARDS (15 per week)
// ==============================

const FLASHCARDS = [

  // =========================================
  // WEEK 2 — Fundamentals & Buffer Overflows
  // =========================================

  {
    week: 2, category: "Fundamentals",
    q: "Why does understanding how programs run at OS level matter for security?",
    a: "It explains <strong>how vulnerabilities arise</strong>. Understanding memory layout, CPU execution, and stack behaviour shows why exploits like <strong>buffer overflows</strong> are possible."
  },
  {
    week: 2, category: "Fundamentals",
    q: "What is the key trade-off of using C?",
    a: "<strong>Fast + low-level control</strong> — but a <strong>high risk of memory errors</strong> due to no bounds checking and manual memory management."
  },
  {
    week: 2, category: "C Basics",
    q: "What do the <code>&</code> and <code>*</code> operators do with pointers?",
    a: "<ul><li><code>&</code> → gets the <strong>memory address</strong></li><li><code>*</code> → <strong>dereferences</strong> the pointer to access the value</li></ul>"
  },
  {
    week: 2, category: "Memory Layout",
    q: "What are the 5 memory segments of a C program?",
    a: "<ul><li><strong>Text</strong> — compiled code</li><li><strong>Data</strong> — initialised globals</li><li><strong>BSS</strong> — uninitialised globals</li><li><strong>Heap</strong> — dynamic memory</li><li><strong>Stack</strong> — function calls & locals</li></ul>"
  },
  {
    week: 2, category: "Memory Layout",
    q: "Which direction do the stack and heap grow?",
    a: "<strong>Stack grows downward</strong> (high → low addresses).<br><strong>Heap grows upward</strong> (low → high addresses)."
  },
  {
    week: 2, category: "Registers",
    q: "What are ESP and EBP?",
    a: "<ul><li><strong>ESP</strong> — stack pointer (top of stack)</li><li><strong>EBP</strong> — frame pointer (base of current stack frame)</li></ul>"
  },
  {
    week: 2, category: "Stack Frames",
    q: "What happens during a function call?",
    a: "<ol><li>Arguments pushed onto stack</li><li>Return address pushed</li><li>Old EBP saved</li><li>New stack frame created</li></ol>"
  },
  {
    week: 2, category: "Stack Frames",
    q: "What does a stack frame contain?",
    a: "<ul><li>Local variables</li><li>Arguments</li><li>Saved EBP</li><li><strong>Return address</strong></li></ul>"
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "What is a buffer overflow?",
    a: "Writing <strong>beyond allocated memory bounds</strong>, potentially overwriting nearby memory such as variables or the <strong>return address</strong>."
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "Why do buffer overflows happen in C?",
    a: "<ul><li>No bounds checking</li><li>Unsafe functions like <code>strcpy()</code></li><li>Unvalidated user input</li></ul>"
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "What are the possible consequences of a buffer overflow?",
    a: "<ol><li>Crash (segmentation fault)</li><li>Data corruption</li><li>Security bypass</li><li><strong>Arbitrary code execution</strong></li></ol>"
  },
  {
    week: 2, category: "Stack Overflow",
    q: "Why is this code vulnerable?<pre>char buffer[12];\nstrcpy(buffer, str);</pre>",
    a: "<code>strcpy()</code> performs <strong>no bounds checking</strong>. If <code>str</code> exceeds 12 bytes, it overwrites adjacent stack data including the <strong>return address</strong>."
  },
  {
    week: 2, category: "Stack Overflow",
    q: "What is the stack layout during a function call?",
    a: "<pre>[ buffer ]\n[ variables ]\n[ saved EBP ]\n[ return address ]</pre>"
  },
  {
    week: 2, category: "Stack Overflow",
    q: "What happens if an attacker controls the return address?",
    a: "They can <strong>redirect execution</strong> to malicious code, leading to <strong>arbitrary code execution</strong>."
  },


  // =========================================
  // WEEK 3 — Exploits & Defences
  // =========================================

  {
    week: 3, category: "Exploitation",
    q: "What is the main attack vector in a stack-based buffer overflow?",
    a: "Overwriting the <strong>return address</strong> so execution jumps to an attacker-controlled address."
  },
  {
    week: 3, category: "Exploitation",
    q: "What are the 3 steps of a buffer overflow exploit?",
    a: "<ol><li>Overflow the buffer</li><li>Overwrite the return address</li><li>Redirect execution</li></ol>"
  },
  {
    week: 3, category: "Payload",
    q: "What is a NOP sled and why is it used?",
    a: "A sequence of <strong>NOP instructions</strong> that lets the CPU 'slide' into shellcode, making exploits more reliable."
  },
  {
    week: 3, category: "Payload",
    q: "What does a malicious payload look like?",
    a: "<pre>[padding][new return address][NOP sled][shellcode]</pre>"
  },
  {
    week: 3, category: "Shellcode",
    q: "What is shellcode?",
    a: "Small <strong>malicious machine code</strong> injected by an attacker, often used to spawn a shell or run commands."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "What is a return-to-libc attack?",
    a: "An attack that redirects execution to <strong>existing library functions</strong> like <code>system()</code> instead of injected shellcode."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "Why does return-to-libc bypass the NX bit?",
    a: "Because it uses <strong>existing executable code</strong> rather than executing injected stack code."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "What is Return-Oriented Programming (ROP)?",
    a: "An attack chaining together small existing instruction sequences (<strong>gadgets</strong>) ending in <code>ret</code>."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "What is the difference between shellcode, return-to-libc, and ROP?",
    a: "<ul><li><strong>Shellcode</strong> — inject new code</li><li><strong>Return-to-libc</strong> — call existing function</li><li><strong>ROP</strong> — chain existing gadgets</li></ul>"
  },
  {
    week: 3, category: "Defences",
    q: "What is ASLR?",
    a: "<strong>Address Space Layout Randomization</strong> randomises memory addresses to make exploits unreliable."
  },
  {
    week: 3, category: "Defences",
    q: "How can ASLR be bypassed?",
    a: "<ul><li>Brute force</li><li>Information leaks</li></ul>"
  },
  {
    week: 3, category: "Defences",
    q: "What is a stack canary?",
    a: "A <strong>random value</strong> placed before the return address. If overwritten, the program detects the overflow and crashes."
  },
  {
    week: 3, category: "Defences",
    q: "What is the NX bit?",
    a: "A hardware defence marking memory regions as <strong>non-executable</strong>, preventing stack shellcode execution."
  },
  {
    week: 3, category: "Defences",
    q: "How are major defences bypassed?",
    a: "<ul><li><strong>NX</strong> → return-to-libc / ROP</li><li><strong>ASLR</strong> → leaks / brute force</li><li><strong>Canaries</strong> → bypass or leak canary</li></ul>"
  },
  {
    week: 3, category: "Defences",
    q: "What is the best defence against buffer overflows?",
    a: "<strong>Secure coding</strong>: bounds checking, input validation, and avoiding unsafe functions like <code>gets()</code> and <code>strcpy()</code>."
  },

  // =========================================
  // WEEK 4 — Format Strings & Memory Safety
  // =========================================

  {
    week: 4, category: "Format Strings",
    q: "What causes a format string vulnerability?",
    a: "Passing <strong>user-controlled input</strong> directly as the format string to functions like <code>printf()</code>."
  },
  {
    week: 4, category: "Format Strings",
    q: "Why is <code>printf(buf)</code> dangerous?",
    a: "Because attackers can inject format specifiers like <code>%x</code> and <code>%n</code> to read or write memory."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "What does <code>%x</code> do?",
    a: "Reads and prints a <strong>4-byte stack value</strong> in hexadecimal."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "What does <code>%n</code> do?",
    a: "Writes the number of characters printed so far to a memory address."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "How do attackers leak stack data using format strings?",
    a: "By printing many <code>%x</code> specifiers to dump successive stack values."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "Why use padding like <code>%1000x</code>?",
    a: "To control the exact value written by <code>%n</code>."
  },
  {
    week: 4, category: "Memory Safety",
    q: "What is spatial memory safety?",
    a: "Ensuring accesses stay <strong>within allocated bounds</strong>."
  },
  {
    week: 4, category: "Memory Safety",
    q: "What is temporal memory safety?",
    a: "Ensuring memory is accessed only while it is <strong>still allocated</strong>."
  },
  {
    week: 4, category: "Memory Safety",
    q: "What is a use-after-free vulnerability?",
    a: "Accessing memory after it has been <strong>freed</strong>."
  },
  {
    week: 4, category: "Memory Safety",
    q: "Why is C not memory safe?",
    a: "Because it lacks automatic bounds checking and safe memory management."
  },
  {
    week: 4, category: "Memory Safety",
    q: "How can integer overflow lead to buffer overflow?",
    a: "Overflowed size calculations may allocate <strong>too little memory</strong>, causing later writes to overflow."
  },
  {
    week: 4, category: "Command Injection",
    q: "Why is <code>system(\"time ./\" + user_input)</code> unsafe?",
    a: "Attackers can inject shell commands using characters like <code>;</code> or <code>|</code>."
  },
  {
    week: 4, category: "Command Injection",
    q: "How do you prevent command injection?",
    a: "<ul><li>Use exec functions instead of shells</li><li>Sanitize dangerous characters</li><li>Use allowlists</li></ul>"
  },
  {
    week: 4, category: "Mitigations",
    q: "What is the safest way to use printf with user input?",
    a: "<pre>printf(\"%s\", user_input);</pre>"
  },
  {
    week: 4, category: "Security Concepts",
    q: "What is the difference between memory safety and type safety?",
    a: "<strong>Type safety</strong> prevents incorrect type interpretation.<br><strong>Memory safety</strong> ensures valid bounds and lifetime."
  },

  // =========================================
  // WEEK 5 — Race Conditions & Malware
  // =========================================

  {
    week: 5, category: "Race Conditions",
    q: "What is a race condition?",
    a: "When multiple threads access shared data and the outcome depends on execution timing."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is multithreading?",
    a: "Running multiple threads within one process that share memory and resources."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is a critical section?",
    a: "Code accessing shared data that must only be executed by one thread at a time."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is TOCTTOU?",
    a: "<strong>Time-Of-Check To Time-Of-Use</strong> — a race where a resource changes between checking and using it."
  },
  {
    week: 5, category: "Race Conditions",
    q: "Give an example of a TOCTTOU attack.",
    a: "Replacing a checked file with a symlink to <code>/etc/passwd</code> before the program writes to it."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is a mutex?",
    a: "A lock allowing only one thread into a critical section at a time."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What are atomic operations?",
    a: "Indivisible operations that complete without interruption."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is the principle of least privilege?",
    a: "Giving only the minimum permissions required."
  },
  {
    week: 5, category: "Malware",
    q: "What is malware?",
    a: "Software designed to harm, exploit, or compromise systems."
  },
  {
    week: 5, category: "Malware",
    q: "What is the difference between a virus and a worm?",
    a: "<strong>Virus</strong> requires a host file/user action.<br><strong>Worm</strong> self-replicates automatically."
  },
  {
    week: 5, category: "Malware",
    q: "What is a Trojan?",
    a: "Malware disguised as legitimate software."
  },
  {
    week: 5, category: "Malware",
    q: "What is ransomware?",
    a: "Malware that encrypts files and demands payment."
  },
  {
    week: 5, category: "Malware",
    q: "What is a botnet?",
    a: "A network of compromised machines controlled by an attacker."
  },
  {
    week: 5, category: "Malware",
    q: "What is a rootkit?",
    a: "Malware that hides itself by modifying OS internals."
  },


  // =========================================
  // WEEK 6 — Web Security & SQL Injection
  // =========================================

  {
    week: 6, category: "Web Architecture",
    q: "What are the three tiers of a web application?",
    a: "<ol><li>Client/browser</li><li>Web server</li><li>Database server</li></ol>"
  },
  {
    week: 6, category: "Web Architecture",
    q: "What is the difference between GET and POST?",
    a: "<strong>GET</strong> sends data in the URL.<br><strong>POST</strong> sends data in the request body."
  },
  {
    week: 6, category: "Web Architecture",
    q: "What does the Same Origin Policy enforce?",
    a: "Scripts can only access data from the <strong>same domain and protocol</strong>."
  },
  {
    week: 6, category: "SQL Injection",
    q: "What is SQL injection?",
    a: "Injecting malicious SQL through user input because the application treats input as executable SQL code."
  },
  {
    week: 6, category: "SQL Injection",
    q: "How does <code>bob' OR 5=5 --</code> bypass login?",
    a: "<code>OR 5=5</code> is always true, so the WHERE clause matches every row."
  },
  {
    week: 6, category: "SQL Injection",
    q: "What is the effect of <code>DROP TABLE</code> injection?",
    a: "It permanently deletes the targeted table."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "Why is escaping quotes insufficient against SQLi?",
    a: "Numeric injection and second-order SQLi can bypass it."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What is a parameterised query?",
    a: "A query separating SQL code from user data using placeholders."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "Why are parameterised queries effective?",
    a: "The database treats bound values strictly as <strong>data</strong>, never executable code."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What is a second-order SQL injection attack?",
    a: "Malicious data is stored safely, then later reused unsafely in another query."
  },

  {
    week: 6, category: "Browser Security",
    q: "What is a browser sandbox?",
    a: "A restriction system limiting JavaScript's access to the OS and other browser contexts."
  },
  {
    week: 6, category: "Security Principles",
    q: "What security principle unifies buffer overflow and SQLi defences?",
    a: "<strong>Never treat untrusted input as executable code.</strong>"
  },

  // =========================================
  // WEEK 7 — XSS, CSRF & Sessions
  // =========================================

  {
    week: 7, category: "SOP & HTTP",
    q: "Why is HTTP considered stateless?",
    a: "Each request/response is independent with no memory of previous interactions."
  },
  {
    week: 7, category: "SOP & HTTP",
    q: "What is the purpose of the Same Origin Policy?",
    a: "Preventing scripts from one site accessing data from another site."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "What is Cross-Site Scripting (XSS)?",
    a: "Injecting malicious JavaScript into a page so it runs in the victim's browser."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "What are common consequences of XSS?",
    a: "<ul><li>Session hijacking</li><li>Unauthorized actions</li><li>Data theft</li></ul>"
  },
  {
    week: 7, category: "XSS Attacks",
    q: "What is the difference between stored and reflected XSS?",
    a: "<strong>Stored XSS</strong> is saved in the database.<br><strong>Reflected XSS</strong> comes from crafted requests/URLs."
  },
  {
    week: 7, category: "XSS Defences",
    q: "What is the root cause of XSS?",
    a: "Lack of proper input validation and sanitization."
  },
  {
    week: 7, category: "XSS Defences",
    q: "What is HTML encoding used for?",
    a: "Making browsers treat dangerous characters as data rather than executable HTML/JS."
  },
  {
    week: 7, category: "CSRF",
    q: "What is CSRF?",
    a: "Tricking a victim's browser into sending authenticated requests using their existing session."
  },
  {
    week: 7, category: "CSRF",
    q: "What is the root cause of CSRF?",
    a: "Servers cannot distinguish trusted same-site requests from forged cross-site requests."
  },
  {
    week: 7, category: "CSRF",
    q: "What does <code>SameSite=Strict</code> do?",
    a: "Prevents cookies being sent with cross-site requests."
  },
  {
    week: 7, category: "CSRF",
    q: "How does a secret token prevent CSRF?",
    a: "Attackers cannot read the random token due to SOP, so forged requests fail."
  },
  {
    week: 7, category: "Session Management",
    q: "What is the goal of session management?",
    a: "Maintaining user state across multiple requests."
  },
  {
    week: 7, category: "Session Management",
    q: "Why are session tokens in URLs dangerous?",
    a: "They leak through browser history, shared links, and referrer headers."
  },
  {
    week: 7, category: "Session Management",
    q: "What is session fixation?",
    a: "An attacker forces a victim to use a known session ID before login."
  },
  {
    week: 7, category: "Cookie Security",
    q: "What do the HttpOnly and Secure cookie flags do?",
    a: "<ul><li><strong>HttpOnly</strong> — blocks JavaScript access</li><li><strong>Secure</strong> — HTTPS only</li></ul>"
  },


  {
    week: 8, category: "Security Testing",
    q: "What is the difference between functional testing and security testing?",
    a: "<strong>Functional testing</strong> checks whether software behaves correctly.<br><br><strong>Security testing</strong> checks whether the program can enter a <strong>dangerous state</strong> such as crashes, memory corruption, or code execution."
  },

  {
    week: 8, category: "Security Testing",
    q: "What are the three levels of security testing?",
    a: "<ol><li><strong>Risk-based security testing</strong></li><li><strong>Source code review (White-box)</strong></li><li><strong>Fuzz testing / Penetration testing (Black-box)</strong></li></ol>"
  },

  {
    week: 8, category: "Source Code Review",
    q: "What kinds of issues are commonly found during source code review?",
    a: "<ul><li>Hardcoded passwords/keys</li><li>Improper input validation</li><li>Dangerous functions like <code>strcpy()</code></li><li>Resource leaks</li><li>Memory safety issues</li></ul>"
  },

  {
    week: 8, category: "Static Analysis",
    q: "What is Static Analysis Security Testing (SAST)?",
    a: "A method of analysing source code <strong>without executing the program</strong> to detect potential security vulnerabilities."
  },

  {
    week: 8, category: "Static Analysis",
    q: "What are the advantages of static code analysers?",
    a: "<ul><li>Quickly find common vulnerabilities</li><li>Automate repetitive analysis</li><li>Help developers focus on risky code sections</li></ul>"
  },

  {
    week: 8, category: "Static Analysis",
    q: "What are false positives and false negatives in static analysis?",
    a: "<ul><li><strong>False positive</strong> — tool reports a vulnerability that is not actually a bug</li><li><strong>False negative</strong> — tool misses a real vulnerability</li></ul>"
  },

  {
    week: 8, category: "Control Flow Graphs",
    q: "What is a Control Flow Graph (CFG)?",
    a: "A representation of the <strong>possible execution paths</strong> in a program.<br><br>Nodes are <strong>basic blocks</strong>, and edges represent possible control flow between them."
  },

  {
    week: 8, category: "Control Flow Integrity",
    q: "What is Control Flow Integrity (CFI)?",
    a: "A security defence that ensures a program only follows <strong>valid execution paths</strong> defined by a Control Flow Graph (CFG)."
  },

  {
    week: 8, category: "Control Flow Integrity",
    q: "How does Control Flow Integrity (CFI) prevent attacks?",
    a: "CFI checks indirect jumps/calls at runtime and aborts the program if execution attempts to follow an <strong>invalid control-flow path</strong>, preventing attacks like <strong>ROP</strong> and <strong>return-to-libc</strong>."
  },

  {
    week: 8, category: "Static Analysis",
    q: "What are the limitations of SAST tools?",
    a: "<ul><li>Cannot detect all vulnerabilities</li><li>Miss design-level flaws</li><li>Depend on predefined rules</li><li>Can produce false positives and false negatives</li></ul>"
  },


  // ============================
  // WEEK 9 — Dynamic Analysis Security Testing
  // MOST IMPORTANT EXAM QUESTIONS
  // ============================

  {
    week: 9, category: "Security Testing",
    q: "What is the difference between Static Analysis Security Testing and Dynamic Analysis Security Testing?",
    a: "<strong>Static Analysis</strong> examines source code without running the program (e.g. code review, static analysis tools).<br><br><strong>Dynamic Analysis</strong> tests the program while it is running (e.g. penetration testing, fuzzing)."
  },
  {
    week: 9, category: "Security Testing",
    q: "Why must dynamic analysis be used in addition to static analysis?",
    a: "Dynamic analysis finds vulnerabilities that may only appear <strong>during execution</strong>, such as crashes, race conditions, memory errors, and runtime logic flaws. It complements static analysis."
  },

  // --- Penetration Testing ---
  {
    week: 9, category: "Penetration Testing",
    q: "What is penetration testing?",
    a: "A security testing approach that <strong>simulates real-world attacks</strong> against a system to identify vulnerabilities that an attacker could exploit."
  },
  {
    week: 9, category: "Penetration Testing",
    q: "What is the difference between functional testing and penetration testing?",
    a: "<strong>Functional testing</strong> checks whether the system works correctly for legitimate users.<br><br><strong>Penetration testing</strong> tests from the perspective of an <strong>attacker</strong>, looking for ways to break or exploit the system."
  },
  {
    week: 9, category: "Penetration Testing",
    q: "Why does penetration testing not prove a system is secure?",
    a: "Because failing to find vulnerabilities only proves that <strong>none were found under those specific test conditions</strong>. It does <strong>not guarantee</strong> that no vulnerabilities exist."
  },

  // --- Fuzz Testing ---
  {
    week: 9, category: "Fuzz Testing",
    q: "What is fuzz testing (fuzzing)?",
    a: "An automated testing technique that sends <strong>unexpected, malformed, or random inputs</strong> to a program to discover crashes, hangs, or vulnerabilities."
  },
  {
    week: 9, category: "Fuzz Testing",
    q: "What are the six basic steps of fuzz testing?",
    a: "<ol><li>Identify the target system</li><li>Identify inputs</li><li>Generate fuzz data</li><li>Execute tests</li><li>Monitor behaviour</li><li>Log defects</li></ol>"
  },
  {
    week: 9, category: "Fuzz Testing",
    q: "What is the difference between mutation-based and generation-based fuzzing?",
    a: "<ul><li><strong>Mutation-based</strong> fuzzing modifies existing valid inputs</li><li><strong>Generation-based</strong> fuzzing creates inputs from protocol/specification rules</li></ul>"
  },
  {
    week: 9, category: "Fuzz Testing",
    q: "What kinds of problems can fuzzing detect?",
    a: "<ul><li><strong>Segmentation faults</strong> (invalid memory access)</li><li><strong>Use-after-free</strong></li><li><strong>Null pointer dereference</strong></li><li><strong>Race conditions</strong></li><li><strong>Infinite loops / hangs</strong></li></ul>"
  },

  // --- Advanced Fuzzing ---
  {
    week: 9, category: "Advanced Fuzzing",
    q: "How does white-box or grey-box fuzzing improve over random fuzzing?",
    a: "It uses <strong>instrumentation</strong> to observe which program paths are executed, helping the fuzzer generate inputs that explore <strong>new code paths</strong> instead of repeating the same ones."
  },

  // --- Security Testing Plans ---
  {
    week: 9, category: "Security Testing Plans",
    q: "What is a security testing plan?",
    a: "A document describing <strong>what</strong> will be tested, <strong>why</strong>, <strong>how</strong>, <strong>when</strong>, and <strong>who</strong> is responsible for the testing activities."
  },

  // --- Pattern-Based Testing ---
  {
    week: 9, category: "Pattern-Based Testing",
    q: "What vulnerabilities are targeted by the Input Validation Vulnerability Test pattern?",
    a: "<ul><li><strong>SQL Injection</strong></li><li><strong>Path Traversal</strong></li><li><strong>PHP File Inclusion</strong></li></ul>"
  },

  // ============================
  // WEEK 10 — Secure Software Development & Threat Modelling
  // MOST IMPORTANT EXAM QUESTIONS ONLY (7)
  // ============================

  {
    week: 10, category: "SSDLC",
    q: "What is meant by 'Secure by Design' in the Secure Software Development Lifecycle (SSDLC)?",
    a: "Security should be integrated into <strong>every phase</strong> of software development rather than added later as an afterthought. The goal is to build software that remains secure even under malicious attack."
  },

  {
    week: 10, category: "Risk Management",
    q: "What are the key steps in applied risk management?",
    a: "<ol><li><strong>Identify assets/business context</strong></li><li><strong>Identify technical and business risks</strong></li><li><strong>Prioritise risks</strong></li><li><strong>Define mitigation strategies</strong></li><li><strong>Implement and validate fixes</strong></li></ol>"
  },

  {
    week: 10, category: "Threat Modelling",
    q: "What is threat modelling?",
    a: "A <strong>structured process</strong> used to identify, analyse, and mitigate threats against a system. It creates a model of the system and explicitly defines what attackers are capable of doing."
  },

  {
    week: 10, category: "STRIDE",
    q: "What does STRIDE stand for?",
    a: "<ul><li><strong>S</strong>poofing</li><li><strong>T</strong>ampering</li><li><strong>R</strong>epudiation</li><li><strong>I</strong>nformation Disclosure</li><li><strong>D</strong>enial of Service</li><li><strong>E</strong>levation of Privilege</li></ul>"
  },

  {
    week: 10, category: "Secure Design Principles",
    q: "What is the principle of least privilege?",
    a: "Every user and process should operate with the <strong>minimum privileges necessary</strong> to perform its task. This limits the damage possible if the system is compromised."
  },

  {
    week: 10, category: "Secure Design Principles",
    q: "What is defence in depth?",
    a: "Using <strong>multiple layers of security controls</strong> so that if one defence fails, another can still protect the system or reduce the impact of an attack."
  },

  {
    week: 10, category: "Secure Coding",
    q: "What are the three key techniques for securely handling user input?",
    a: "<ol><li><strong>Input validation</strong> — ensure input is acceptable</li><li><strong>Canonicalization</strong> — convert data into a standard form before validation</li><li><strong>Sanitization</strong> — remove, encode, or escape dangerous input</li></ol>"
  },

];
