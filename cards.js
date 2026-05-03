// ==============================
// Flashcard Data — Software Security
// ==============================
const FLASHCARDS = [
  // --- Category: Why This Topic Matters ---
  {
    week: 2, category: "Fundamentals",
    q: "Why does understanding how programs run at OS level matter for security?",
    a: "It helps explain <strong>how vulnerabilities arise</strong>. Knowing memory layout, CPU execution, and how C handles data reveals why exploits like buffer overflows are possible."
  },
  {
    week: 2, category: "Fundamentals",
    q: "Where is C widely used, and why does that matter for security?",
    a: "<ul><li><strong>OS kernels</strong> (Linux)</li><li><strong>Servers</strong> (Apache, MySQL)</li><li><strong>Embedded systems</strong></li></ul>C is fast with low-level control, <strong>but</strong> has high risk of memory errors — making these critical systems vulnerable."
  },
  {
    week: 2, category: "Fundamentals",
    q: "What is the key trade-off of using C?",
    a: "<strong>Fast + low-level control</strong> — but a <strong>high risk of memory errors</strong> (no bounds checking, manual memory management)."
  },

  // --- Category: How C Programs Execute ---
  {
    week: 2, category: "C Execution",
    q: "What are the steps from C source code to execution?",
    a: "<ol><li>Write C code</li><li><strong>Compile</strong> → machine code (binary)</li><li>CPU executes instructions</li></ol>"
  },
  {
    week: 2, category: "C Execution",
    q: "How does code execution flow in a C program?",
    a: "Code runs <strong>function-by-function</strong>. Each function gets its own <strong>stack frame</strong> on the call stack."
  },

  // --- Category: C Basics ---
  {
    week: 2, category: "C Basics",
    q: "What are the three categories of data types in C?",
    a: "<ul><li><strong>Primitive:</strong> <code>int</code>, <code>short</code>, <code>float</code>, <code>char</code></li><li><strong>Derived:</strong> arrays, strings, pointers</li><li><strong>User-defined:</strong> <code>struct</code></li></ul>The type determines <strong>memory size &amp; operations</strong>."
  },
  {
    week: 2, category: "C Basics",
    q: "What is the final value of <code>a</code> after this code?<pre>int a = 2173;\nint *addr = &a;\n*addr = 3712;</pre>",
    a: "<strong>a = 3712</strong><br><br><code>&a</code> gets the address of <code>a</code>. <code>*addr = 3712</code> dereferences the pointer and writes directly to that memory location."
  },
  {
    week: 2, category: "C Basics",
    q: "What do the <code>&</code> and <code>*</code> operators do with pointers?",
    a: "<ul><li><code>&</code> → <strong>address-of</strong> operator (gets the memory address)</li><li><code>*</code> → <strong>dereference</strong> operator (accesses value at the address)</li></ul>Pointers allow <strong>direct memory access</strong>."
  },
  {
    week: 2, category: "C Basics",
    q: "What is the difference in memory between these?<pre>char arr[3] = {'a','b','c'};\nchar str[] = \"abc\";</pre>",
    a: "<ul><li><code>arr</code> = <strong>3 bytes</strong> (just the characters)</li><li><code>str</code> = <strong>4 bytes</strong> (<code>a b c \\0</code>)</li></ul>Strings end with <code>\\0</code> (null terminator), arrays do not."
  },
  {
    week: 2, category: "C Basics",
    q: "What is dynamic memory allocation in C and when is it used?",
    a: "<pre>char *str = malloc(N * sizeof(char));</pre>Used when <strong>size is unknown at compile time</strong>. Memory is allocated on the <strong>heap</strong>."
  },

  // --- Category: Memory Layout ---
  {
    week: 2, category: "Memory Layout",
    q: "What are the 5 memory segments of a C program?",
    a: "<ul><li><strong>Text</strong> — compiled code</li><li><strong>Data</strong> — initialised globals</li><li><strong>BSS</strong> — uninitialised globals</li><li><strong>Heap</strong> — dynamic memory (grows ↑)</li><li><strong>Stack</strong> — function calls &amp; locals (grows ↓)</li></ul>"
  },
  {
    week: 2, category: "Memory Layout",
    q: "Which direction do the stack and heap grow?",
    a: "<strong>Stack grows downwards</strong> (high → low addresses)<br><strong>Heap grows upwards</strong> (low → high addresses)<br><br>They grow <em>toward</em> each other."
  },
  {
    week: 2, category: "Memory Layout",
    q: "What is stored in the Text segment?",
    a: "The <strong>compiled machine code</strong> (the program's instructions). It is typically <strong>read-only</strong>."
  },
  {
    week: 2, category: "Memory Layout",
    q: "What is the difference between the Data and BSS segments?",
    a: "<ul><li><strong>Data</strong> — stores <strong>initialised</strong> global/static variables</li><li><strong>BSS</strong> — stores <strong>uninitialised</strong> global/static variables (zeroed out)</li></ul>"
  },

  // --- Category: Registers ---
  {
    week: 2, category: "Registers",
    q: "What are ESP and EBP, and what do they do?",
    a: "<ul><li><strong>ESP</strong> (stack pointer) — points to the <strong>top of the stack</strong></li><li><strong>EBP</strong> (frame pointer) — points to the <strong>base of the current function's stack frame</strong></li></ul>Used to manage function execution."
  },

  // --- Category: Function Calls & Stack Frames ---
  {
    week: 2, category: "Stack Frames",
    q: "What happens during a function call (caller side)?",
    a: "<ol><li><strong>Push arguments</strong> onto the stack</li><li><strong>Push return address</strong></li><li><strong>Jump</strong> to the function</li></ol>"
  },
  {
    week: 2, category: "Stack Frames",
    q: "What happens during a function call (callee side)?",
    a: "<ol><li><strong>Save old EBP</strong> (push it onto stack)</li><li><strong>Set new frame pointer</strong> (EBP = ESP)</li><li><strong>Allocate local variables</strong> (decrement ESP)</li></ol>"
  },
  {
    week: 2, category: "Stack Frames",
    q: "What happens when a function returns?",
    a: "<ol><li><strong>Restore old frame</strong> (pop saved EBP)</li><li><strong>Jump back</strong> to the saved return address</li></ol>"
  },
  {
    week: 2, category: "Stack Frames",
    q: "What does a stack frame contain?",
    a: "<ul><li>Local variables</li><li>Function arguments</li><li>Saved frame pointer (old EBP)</li><li><strong>Return address</strong></li></ul>This structure is <strong>critical for buffer overflow attacks</strong>."
  },

  // --- Category: Buffer Overflow ---
  {
    week: 2, category: "Buffer Overflow",
    q: "What is a buffer overflow?",
    a: "A buffer overflow occurs when a program <strong>writes data beyond the bounds of allocated memory</strong>, potentially overwriting adjacent memory such as variables, frame pointers, or return addresses, leading to crashes or <strong>arbitrary code execution</strong>."
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "What are the two types of buffer overflow?",
    a: "<ul><li><strong>Overwrite</strong> — writing past the buffer boundary</li><li><strong>Over-read</strong> — reading past the buffer boundary</li></ul>"
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "Why is this code a buffer overflow?<pre>char buf[6];\nbuf[6] = 'o';</pre>",
    a: "Valid indices are <strong>0–5</strong> (6 elements). Index <code>6</code> is <strong>out of bounds</strong> — it writes past the allocated buffer."
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "Why do buffer overflows happen in C?",
    a: "<ul><li><strong>No bounds checking</strong> in C</li><li>Use of <strong>unsafe functions</strong> (e.g., <code>strcpy</code>)</li><li><strong>User input not validated</strong></li></ul>"
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "What are the 4 possible consequences of a buffer overflow?",
    a: "<ol><li><strong>No effect</strong> (small overflow)</li><li><strong>Segmentation fault</strong> (crash)</li><li><strong>Data corruption</strong></li><li><strong>Arbitrary code execution</strong> (most dangerous!)</li></ol>"
  },
  {
    week: 2, category: "Buffer Overflow",
    q: "What critical things can a buffer overflow overwrite?",
    a: "<ul><li>Variables</li><li>Function pointers</li><li><strong>Return address</strong> (most critical — can redirect execution to malicious code)</li></ul>"
  },

  // --- Category: Real Attacks ---
  {
    week: 2, category: "Real Attacks",
    q: "Name 4 real-world buffer overflow attacks.",
    a: "<ul><li><strong>Morris Worm</strong> (1988)</li><li><strong>Code Red</strong> (2001)</li><li><strong>SQL Slammer</strong> (2003)</li><li><strong>Stagefright</strong> (Android)</li></ul>These demonstrate the <strong>real-world impact</strong> of buffer overflows."
  },

  // --- Category: Stack-Based Overflow ---
  {
    week: 2, category: "Stack Overflow",
    q: "Why is this code vulnerable?<pre>void foo(char *str) {\n    char buffer[12];\n    strcpy(buffer, str);\n}</pre>",
    a: "<code>strcpy</code> copies <code>str</code> into <code>buffer</code> with <strong>no length check</strong>. If <code>str</code> is longer than 12 bytes, it overflows <code>buffer</code> and overwrites the <strong>saved EBP and return address</strong>."
  },
  {
    week: 2, category: "Stack Overflow",
    q: "What is the stack layout from bottom to top during a function call?",
    a: "<pre>[ buffer          ]\n[ other variables  ]\n[ saved EBP        ]\n[ return address   ]</pre>Overflow from <code>buffer</code> can overwrite everything above it, including the <strong>return address</strong>."
  },
  {
    week: 2, category: "Stack Overflow",
    q: "What happens if an attacker controls the return address?",
    a: "They can <strong>redirect execution</strong> to any memory address — typically pointing to <strong>malicious shellcode</strong> they've injected. This gives them <strong>arbitrary code execution</strong>."
  },
  {
    week: 2, category: "Stack Overflow",
    q: "In the slides example, a 16-byte buffer receives 17 characters. What happens?",
    a: "The extra byte overflows into the adjacent <code>auth_flag</code> variable, <strong>changing its value</strong>. This can bypass login checks or change program logic."
  },
  {
    week: 2, category: "Stack Overflow",
    q: "Why is <code>strcpy</code> dangerous?",
    a: "<code>strcpy</code> copies characters until it finds <code>\\0</code> with <strong>no bounds checking</strong>. If the source string is longer than the destination buffer, it causes a <strong>buffer overflow</strong>. Use <code>strncpy</code> instead."
  },

  // --- Category: Risk Assessment ---
  {
    week: 2, category: "Risk Assessment",
    q: "What are the possible security impacts of a buffer overflow?",
    a: "<ul><li><strong>Code execution</strong></li><li><strong>Privilege escalation</strong></li><li><strong>Denial of Service</strong></li><li><strong>Information leak</strong></li><li><strong>Security bypass</strong></li></ul>"
  },

  // --- Category: Exam Prep ---
  {
    week: 2, category: "Exam Prep",
    q: "What are the 'MUST KNOW' topics for the exam?",
    a: "<ul><li>Memory layout (stack, heap, text, data, BSS)</li><li>Stack frame structure</li><li>Function call steps (caller &amp; callee)</li><li>Pointer basics (<code>&</code> and <code>*</code>)</li><li>What a buffer overflow is</li></ul>"
  },
  {
    week: 2, category: "Exam Prep",
    q: "What are the 'HIGH VALUE' topics for the exam?",
    a: "<ul><li>How overflow overwrites the return address</li><li>Why <code>strcpy</code> is dangerous</li><li>Real consequences of buffer overflow</li><li>Real-world attack examples</li></ul>"
  },
  {
    week: 2, category: "Exam Prep",
    q: "Write a model exam answer: 'What is a buffer overflow?'",
    a: "\"A buffer overflow occurs when a program writes data beyond the bounds of allocated memory, potentially overwriting adjacent memory such as variables, frame pointers, or return addresses, leading to crashes or <strong>arbitrary code execution</strong>.\""
  },

  // ============================
  // WEEK 3 — Buffer Overflow Exploits & Defences
  // ============================

  // --- Exploitation Overview ---
  {
    week: 3, category: "Exploitation",
    q: "What does Week 3 build on from Week 2?",
    a: "Week 2 = <strong>what</strong> a buffer overflow is.<br>Week 3 = <strong>how attackers exploit it</strong> + <strong>how we defend</strong> against it.<br><br>Buffer overflow → control memory → control execution → run attacker code."
  },
  {
    week: 3, category: "Exploitation",
    q: "What is the main attack vector in a stack-based buffer overflow?",
    a: "Overwriting the <strong>return address</strong> stored in the stack frame. When the function returns, <code>ret</code> jumps to the attacker-controlled address instead of the legitimate caller."
  },
  {
    week: 3, category: "Exploitation",
    q: "What are the 3 steps of a buffer overflow exploit?",
    a: "<ol><li><strong>Overflow buffer</strong> — input longer than buffer size overwrites buffer, saved EBP, and return address</li><li><strong>Overwrite return address</strong> — replace with attacker-controlled address</li><li><strong>Redirect execution</strong> — when function returns, <code>ret</code> jumps to attacker address</li></ol>"
  },
  {
    week: 3, category: "Exploitation",
    q: "What are the possible outcomes when the return address is changed?",
    a: "<ul><li><strong>Invalid address</strong> → crash</li><li><strong>Kernel/other protected memory</strong> → crash</li><li><strong>Valid instruction</strong> → program runs attacker logic</li></ul>The attacker wants a <strong>valid instruction address</strong> pointing to their malicious code."
  },

  // --- Payload Construction ---
  {
    week: 3, category: "Payload",
    q: "What are the two key challenges in constructing a buffer overflow payload?",
    a: "<ol><li><strong>Find the offset</strong> — the distance from the buffer to the return address</li><li><strong>Find the target address</strong> — where to jump (location of the payload in memory)</li></ol>"
  },
  {
    week: 3, category: "Payload",
    q: "What is a NOP sled and why is it used?",
    a: "<pre>[NOP NOP NOP NOP][shellcode]</pre><strong>NOP</strong> = 'No Operation' (do nothing).<br>The CPU 'slides' through the NOPs into the shellcode.<br><br>It makes the exploit <strong>more reliable</strong> because the return address doesn't need to land exactly on the shellcode — anywhere in the sled works."
  },
  {
    week: 3, category: "Payload",
    q: "What does a complete malicious payload look like?",
    a: "<pre>[padding][new return addr][NOP sled][shellcode]</pre>Goal: <strong>overwrite the return address</strong> to point into the NOP sled, which slides into the <strong>shellcode</strong> for execution."
  },

  // --- Shellcode ---
  {
    week: 3, category: "Shellcode",
    q: "What is shellcode?",
    a: "A small piece of <strong>malicious machine code</strong> injected by the attacker. Common actions:<ul><li>Spawn a shell (<code>/bin/sh</code>)</li><li>Run arbitrary commands</li><li>Escalate privileges</li></ul>"
  },

  // --- Privilege Escalation ---
  {
    week: 3, category: "Privilege Escalation",
    q: "How can a buffer overflow lead to privilege escalation?",
    a: "If the vulnerable program runs as <strong>setuid root</strong>, the exploit executes with <strong>root privileges</strong>.<br><br>➡️ Full system compromise — the attacker gains complete control."
  },

  // --- Function Chaining ---
  {
    week: 3, category: "Advanced Attacks",
    q: "What is a function chaining attack?",
    a: "Instead of injecting code, the attacker <strong>redirects execution to existing functions</strong> in the program.<br><br>Example: overwrite return address → address of <code>bar()</code><br><br>The program executes <strong>unintended functions</strong>. This is the foundation for modern attacks like return-to-libc."
  },

  // --- Return-to-libc ---
  {
    week: 3, category: "Advanced Attacks",
    q: "What is a return-to-libc attack?",
    a: "<strong>Problem:</strong> NX bit prevents executing injected code.<br><strong>Solution:</strong> Redirect to <strong>existing library functions</strong>.<br><br>Example: <code>return → system(\"/bin/sh\")</code><br><br>libc is already loaded in memory — no shellcode needed. Reuses <strong>trusted existing code</strong>."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "Why does return-to-libc bypass the NX bit?",
    a: "The NX bit prevents <strong>executing code on the stack</strong>. Return-to-libc doesn't inject new code — it calls <strong>existing executable functions</strong> (like <code>system()</code>) that are already in legitimate memory regions."
  },

  // --- ROP ---
  {
    week: 3, category: "Advanced Attacks",
    q: "What is Return-Oriented Programming (ROP)?",
    a: "An attack using small instruction sequences (<strong>gadgets</strong>) already in memory. Each gadget ends in <code>ret</code>.<br><br>Chain multiple gadgets together to build <strong>complex malicious behaviour</strong> without injecting any new code."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "What is a ROP gadget?",
    a: "A short sequence of <strong>existing instructions</strong> in the program's memory that ends with a <code>ret</code> instruction. Gadgets are chained together by placing their addresses on the stack."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "Why is ROP so powerful?",
    a: "ROP bypasses multiple defences:<ul><li><strong>NX</strong> (non-executable memory) — uses existing code, not injected code</li><li><strong>ASLR</strong> (partially) — with info leaks</li></ul>It uses <strong>trusted existing code</strong> — a modern real-world exploit technique."
  },
  {
    week: 3, category: "Advanced Attacks",
    q: "What is the difference between shellcode, return-to-libc, and ROP?",
    a: "<ul><li><strong>Shellcode</strong> — inject + execute <em>new</em> malicious code on the stack</li><li><strong>Return-to-libc</strong> — call a <em>single existing function</em> (e.g., <code>system()</code>)</li><li><strong>ROP</strong> — chain <em>many small existing instruction sequences</em> (gadgets) for complex behaviour</li></ul>Each is progressively harder to defend against."
  },

  // --- Defences: Secure Coding ---
  {
    week: 3, category: "Defences",
    q: "What is the best defence against buffer overflows?",
    a: "<strong>Secure coding</strong> — prevent the bug entirely.<ul><li>❌ Avoid: <code>gets()</code>, <code>strcpy()</code></li><li>✅ Use: <code>fgets()</code>, <code>strncpy()</code></li><li>Always <strong>check bounds</strong> and <strong>validate input</strong></li></ul>"
  },
  {
    week: 3, category: "Defences",
    q: "Why are gets() and strcpy() unsafe?",
    a: "They perform <strong>no bounds checking</strong>:<ul><li><code>gets()</code> reads input until newline with no size limit</li><li><code>strcpy()</code> copies until <code>\\0</code> with no size limit</li></ul>Both allow writing past the buffer. Use <code>fgets()</code> and <code>strncpy()</code> instead."
  },

  // --- Defences: ASLR ---
  {
    week: 3, category: "Defences",
    q: "What is ASLR?",
    a: "<strong>Address Space Layout Randomization</strong> — an OS-level defence that <strong>randomises memory locations</strong> of:<ul><li>Stack</li><li>Heap</li><li>Libraries</li></ul>The attacker <strong>cannot predict addresses</strong>, making exploitation unreliable."
  },
  {
    week: 3, category: "Defences",
    q: "How can ASLR be bypassed?",
    a: "<ul><li><strong>Brute force</strong> — try many addresses (feasible on 32-bit systems)</li><li><strong>Information leak</strong> — exploit another bug to reveal memory addresses</li></ul>ASLR alone is <strong>not sufficient</strong>."
  },

  // --- Defences: Stack Canary ---
  {
    week: 3, category: "Defences",
    q: "What is a stack canary (StackGuard)?",
    a: "A compiler-level defence that places a <strong>random value (canary)</strong> between the buffer and the return address:<pre>[buffer][CANARY][saved EBP][return addr]</pre>Before returning, the program <strong>checks if the canary changed</strong>. If it did → overflow detected → <strong>crash</strong>."
  },
  {
    week: 3, category: "Defences",
    q: "What is StackShield?",
    a: "A compiler-level defence that <strong>stores a copy of the return address</strong> in a separate protected location. Before returning, it <strong>checks integrity</strong> by comparing the stored copy to the stack value."
  },

  // --- Defences: NX Bit ---
  {
    week: 3, category: "Defences",
    q: "What is the NX bit?",
    a: "A <strong>hardware-level</strong> defence (No Execute bit) that marks memory regions as <strong>non-executable</strong>. The stack cannot run code, so injected <strong>shellcode won't execute</strong>."
  },
  {
    week: 3, category: "Defences",
    q: "What defence does the NX bit provide, and what bypasses it?",
    a: "<strong>Provides:</strong> Prevents execution of injected code on the stack.<br><br><strong>Bypassed by:</strong><ul><li><strong>Return-to-libc</strong> — calls existing functions</li><li><strong>ROP</strong> — chains existing instruction gadgets</li></ul>Neither injects new executable code."
  },

  // --- Bypass Summary ---
  {
    week: 3, category: "Defences",
    q: "How do attackers bypass each major defence?",
    a: "<ul><li><strong>NX bit</strong> → Return-to-libc / ROP</li><li><strong>ASLR</strong> → Brute force / information leak</li><li><strong>Stack canary</strong> → Overwrite without detection (rare)</li></ul><strong>No single defence is enough</strong> — use defence in depth."
  },

  // --- Exam Prep ---
  {
    week: 3, category: "Exam Prep",
    q: "What are the 'MUST KNOW' topics from Week 3?",
    a: "<ul><li>How the return address is overwritten</li><li>The 3 steps of exploitation</li><li>NOP sled purpose</li><li>Difference between shellcode vs return-to-libc vs ROP</li></ul>"
  },
  {
    week: 3, category: "Exam Prep",
    q: "What are the 'HIGH VALUE' topics from Week 3?",
    a: "<ul><li>ASLR, NX bit, StackGuard (how each works)</li><li>Why ROP works and what it bypasses</li><li>Function chaining concept</li><li>Defence bypass table</li></ul>"
  },
  {
    week: 3, category: "Exam Prep",
    q: "Write a model exam answer: 'What is ASLR?'",
    a: "\"ASLR (Address Space Layout Randomization) is a defence mechanism that <strong>randomises the memory addresses</strong> of the stack, heap, and libraries each time a program runs, preventing attackers from predicting target locations for exploitation.\""
  },
  {
    week: 3, category: "Exam Prep",
    q: "Write a model exam answer: 'What is ROP?'",
    a: "\"Return-Oriented Programming (ROP) is an exploitation technique that chains together small instruction sequences (<strong>gadgets</strong>) already present in a program's memory, each ending in a <code>ret</code> instruction, to perform malicious actions <strong>without injecting new code</strong>.\""
  },
  {
    week: 3, category: "Exam Prep",
    q: "Write a model exam answer: 'What is a buffer overflow exploit?'",
    a: "\"Exploiting a buffer overflow to overwrite control data (e.g., the return address) and <strong>redirect execution</strong> to malicious code, whether injected shellcode, an existing library function (return-to-libc), or chained gadgets (ROP).\""
  },

  // ============================
  // WEEK 4 — Format Strings, Memory Safety & Command Injection
  // ============================

  // --- Format String Basics ---
  {
    week: 4, category: "Format Strings",
    q: "What causes a format string vulnerability?",
    a: "Passing <strong>user-controlled input</strong> as the format string to functions like <code>printf</code>. The attacker can inject format specifiers to read or write memory."
  },
  {
    week: 4, category: "Format Strings",
    q: "What does <code>%x</code> do in printf?",
    a: "Reads and prints a <strong>4-byte value from the stack</strong> as hexadecimal."
  },
  {
    week: 4, category: "Format Strings",
    q: "Why is <code>printf(buf)</code> dangerous?",
    a: "<code>buf</code> may contain format specifiers (like <code>%x</code>, <code>%n</code>) that <strong>read or write memory</strong> unintentionally. The user controls the format string."
  },
  {
    week: 4, category: "Format Strings",
    q: "What is the role of <code>va_list</code> in printf?",
    a: "It tracks the <strong>next argument to read from the stack</strong>. Each format specifier advances the pointer, reading successive stack values."
  },
  {
    week: 4, category: "Format Strings",
    q: "What happens if printf expects more arguments than provided?",
    a: "It reads <strong>unintended stack values</strong> (overflow read) — leaking data that was never meant to be printed."
  },

  // --- Format String Exploitation ---
  {
    week: 4, category: "Format String Exploits",
    q: "How can <code>%s</code> crash a program?",
    a: "It treats a stack value as a <strong>pointer to a string</strong>. If that value is an invalid address, dereferencing it causes a <strong>segmentation fault</strong>."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "How do attackers leak stack data?",
    a: "By printing many <code>%x</code> specifiers. Each one reads the next 4-byte value from the stack, <strong>dumping memory contents</strong>."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "What does <code>%n</code> do?",
    a: "<strong>Writes</strong> the number of characters printed so far <strong>to a memory address</strong> (pointed to by the next argument on the stack). This is what makes format string attacks dangerous."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "How do attackers control where <code>%n</code> writes?",
    a: "By placing the <strong>target address in the input</strong> so it appears on the stack. When <code>%n</code> reads the next 'argument', it uses that address as the write destination."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "Why use padding like <code>%1000x</code>?",
    a: "To <strong>control the exact value</strong> written by <code>%n</code>. Since <code>%n</code> writes the count of characters printed, padding with <code>%1000x</code> increases that count to exactly 1000."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "Why split a 4-byte address into two <code>%hn</code> writes?",
    a: "<code>%hn</code> writes only <strong>2 bytes</strong> at a time. This avoids having to print <strong>billions of characters</strong> to reach a large 4-byte value — making the exploit practical."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "What is required to inject shellcode via format strings?",
    a: "Overwriting the <strong>return address</strong> (using <code>%n</code>) to point to <strong>attacker-controlled code</strong> — similar to buffer overflow exploitation but using format specifiers."
  },
  {
    week: 4, category: "Format String Exploits",
    q: "Why does ASLR not fully stop format string attacks?",
    a: "Attackers can <strong>leak addresses first</strong> using <code>%x</code> or <code>%s</code> to read stack values, then use those leaked addresses to craft their exploit."
  },

  // --- Memory Safety ---
  {
    week: 4, category: "Memory Safety",
    q: "What is spatial memory safety?",
    a: "Ensuring memory accesses <strong>stay within allocated bounds</strong>. Violations include buffer overflows and out-of-bounds array access."
  },
  {
    week: 4, category: "Memory Safety",
    q: "What is temporal memory safety?",
    a: "Ensuring memory is accessed <strong>only while it is allocated</strong>. Violations include use-after-free and dangling pointers."
  },
  {
    week: 4, category: "Memory Safety",
    q: "Give an example of a temporal safety violation.",
    a: "<strong>Use-after-free</strong> — accessing memory after it has been freed. The memory may have been reallocated for a different purpose, leading to data corruption or code execution."
  },
  {
    week: 4, category: "Memory Safety",
    q: "Why is C not memory safe?",
    a: "It lacks <strong>automatic bounds checks</strong> and <strong>safe memory management</strong>. Programmers must manually manage memory allocation, deallocation, and bounds — which is error-prone."
  },
  {
    week: 4, category: "Memory Safety",
    q: "How can integer overflow cause buffer overflow?",
    a: "Overflowed size calculations may produce a <strong>very small value</strong>, causing the program to <strong>allocate too little memory</strong>. Subsequent writes then overflow the undersized buffer."
  },

  // --- Command Injection ---
  {
    week: 4, category: "Command Injection",
    q: "Why is <code>system(\"time ./\" + user_input)</code> unsafe?",
    a: "The user can append commands using shell metacharacters, e.g.:<br><code>; cat /etc/shadow</code><br><br>This executes <strong>arbitrary commands</strong> with the program's privileges."
  },
  {
    week: 4, category: "Command Injection",
    q: "How do you prevent command injection?",
    a: "<ul><li>Use <strong>exec functions</strong> (which don't invoke a shell)</li><li><strong>Sanitize</strong> dangerous characters (<code>;</code>, <code>|</code>, <code>&</code>, etc.)</li><li>Use <strong>allowlists</strong> for valid input</li></ul>"
  },

  // --- Function Frames ---
  {
    week: 4, category: "Function Frames",
    q: "What does <code>%ebp</code> store?",
    a: "The <strong>saved frame pointer</strong> of the previous stack frame. It allows the program to restore the caller's stack frame when the current function returns."
  },
  {
    week: 4, category: "Function Frames",
    q: "What is pushed onto the stack before a function call?",
    a: "<ol><li><strong>Arguments</strong> (in reverse order)</li><li><strong>Return address</strong></li></ol>The callee then saves the old EBP and sets up its own frame."
  },
  {
    week: 4, category: "Function Frames",
    q: "Why does variable order on the stack vary?",
    a: "It is <strong>compiler-dependent</strong>. Different compilers (and optimisation levels) may arrange local variables in different orders on the stack."
  },

  // --- Mitigations ---
  {
    week: 4, category: "Mitigations",
    q: "What is the safest way to use printf with user input?",
    a: "<pre>printf(\"%s\", user_input);</pre>The format string is <strong>hardcoded</strong>, so the user cannot inject format specifiers."
  },
  {
    week: 4, category: "Mitigations",
    q: "What compiler flag warns about format string issues?",
    a: "<code>-Wformat=2</code> — enables <strong>stricter format string warnings</strong> at compile time, catching potential vulnerabilities early."
  },
  {
    week: 4, category: "Mitigations",
    q: "Why don't stack canaries stop format string attacks?",
    a: "Stack canaries detect <strong>stack smashing</strong> (sequential overwrite). Format string attacks use <code>%n</code> to perform <strong>controlled writes to arbitrary locations</strong> — bypassing the canary entirely."
  },
  {
    week: 4, category: "Mitigations",
    q: "Why doesn't NX (non-executable stack) stop format string exploits?",
    a: "Attackers can use <strong>return-to-libc</strong> instead of injecting shellcode. NX only prevents execution of <em>injected</em> code, not calls to <em>existing</em> functions."
  },

  // --- General Security Concepts ---
  {
    week: 4, category: "Security Concepts",
    q: "What is the difference between memory safety and type safety?",
    a: "<strong>Type safety</strong> prevents misinterpreting data types (e.g., treating an int as a pointer). It <strong>implies memory safety</strong>.<br><br><strong>Memory safety</strong> ensures valid bounds and lifetime — but doesn't guarantee correct type usage."
  },
  {
    week: 4, category: "Security Concepts",
    q: "Why are dynamically typed languages considered type safe?",
    a: "All objects share a <strong>single dynamic type</strong> that is <strong>checked at runtime</strong>. Invalid operations raise exceptions rather than silently corrupting memory."
  },
  {
    week: 4, category: "Security Concepts",
    q: "Name three common C vulnerabilities covered in the lecture.",
    a: "<ol><li><strong>Buffer overflow</strong></li><li><strong>Format string vulnerability</strong></li><li><strong>Integer overflow</strong></li></ol>"
  },

  // ============================
  // WEEK 5 — Race Conditions & Malware
  // ============================

  // --- Race Conditions ---
  {
    week: 5, category: "Race Conditions",
    q: "What is a race condition?",
    a: "When <strong>multiple threads modify shared data</strong> and the <strong>execution order affects the outcome</strong>. The result depends on which thread runs first — making behaviour unpredictable."
  },
  {
    week: 5, category: "Race Conditions",
    q: "Why are race conditions dangerous?",
    a: "<ul><li><strong>Unpredictable behaviour</strong></li><li><strong>Data corruption</strong></li><li><strong>Security vulnerabilities</strong></li></ul>"
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is multithreading?",
    a: "Running <strong>multiple threads within one process</strong>. They <strong>share memory and resources</strong>, which is efficient but creates the potential for race conditions."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What causes non-deterministic output in multithreaded programs?",
    a: "The <strong>interleaving of thread instructions</strong> — the OS scheduler can switch between threads at any point, so the order of operations varies between runs."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is a critical section?",
    a: "A section of code that <strong>accesses shared data</strong> and <strong>must be protected</strong> so that only one thread executes it at a time."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is TOCTTOU?",
    a: "<strong>Time-Of-Check To Time-Of-Use</strong> — a race condition where a resource <strong>changes between the check and the use</strong>. The program checks a condition, but by the time it acts, the condition is no longer true."
  },
  {
    week: 5, category: "Race Conditions",
    q: "Give an example of a TOCTTOU attack.",
    a: "Swap <code>/tmp/X</code> to a <strong>symlink pointing to <code>/etc/passwd</code></strong> between the program's access check and its file write. The program writes to the password file instead."
  },
  {
    week: 5, category: "Race Conditions",
    q: "Why is TOCTTOU hard to exploit?",
    a: "The <strong>timing window is very small</strong> — the attacker must make the swap in the brief gap between the check and the use."
  },
  {
    week: 5, category: "Race Conditions",
    q: "How do attackers win a TOCTTOU race?",
    a: "<ul><li><strong>Loop the vulnerable program</strong> many times</li><li><strong>Rapidly toggle the symlink</strong> in parallel</li></ul>Eventually the timing aligns and the exploit succeeds."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is a mutex?",
    a: "A <strong>lock</strong> that ensures <strong>only one thread</strong> can enter a critical section at a time. Other threads block until the mutex is released."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is a semaphore?",
    a: "A synchronisation primitive that <strong>controls access to a limited number of resources</strong>. Unlike a mutex (binary), a semaphore can allow N threads to access a resource concurrently."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What are atomic operations?",
    a: "<strong>Single, indivisible operations</strong> that complete without interruption. They <strong>remove the race window</strong> because no other thread can interleave during the operation."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is sticky symlink protection?",
    a: "An OS feature that <strong>prevents symlink abuse in shared directories</strong> (like <code>/tmp</code>). Only the file owner or root can follow symlinks in sticky-bit directories."
  },
  {
    week: 5, category: "Race Conditions",
    q: "What is the principle of least privilege?",
    a: "Granting only the <strong>minimal required permissions</strong> for a task. <strong>Reduces damage</strong> if the program is exploited — limits what an attacker can do."
  },
  {
    week: 5, category: "Race Conditions",
    q: "In the lecture example, what values could <code>theValue</code> end up as?",
    a: "<strong>49, 50, or 51</strong> — depending on how the thread instructions interleave. This demonstrates the non-deterministic nature of race conditions."
  },

  // --- Malware ---
  {
    week: 5, category: "Malware",
    q: "Define malware.",
    a: "<strong>Malicious software</strong> — any software <strong>designed to harm, exploit, or compromise</strong> a system, its data, or its users."
  },
  {
    week: 5, category: "Malware",
    q: "What is a virus?",
    a: "<strong>Attaches to a host file</strong> and requires <strong>user action</strong> (e.g., opening the file) to spread. Cannot self-replicate without a host."
  },
  {
    week: 5, category: "Malware",
    q: "What is a worm?",
    a: "<strong>Self-replicating</strong> malware that <strong>spreads automatically</strong> across networks without user interaction — unlike viruses."
  },
  {
    week: 5, category: "Malware",
    q: "What is a Trojan?",
    a: "Malware <strong>disguised as legitimate software</strong>. Requires the user to <strong>install it voluntarily</strong>. Does not self-replicate."
  },
  {
    week: 5, category: "Malware",
    q: "What is ransomware?",
    a: "Malware that <strong>encrypts the victim's files</strong> and <strong>demands payment</strong> (ransom) for the decryption key."
  },
  {
    week: 5, category: "Malware",
    q: "What is spyware?",
    a: "Malware that <strong>steals data</strong> from the victim — including <strong>keylogging, screenshots, and browsing history</strong>."
  },
  {
    week: 5, category: "Malware",
    q: "What is adware?",
    a: "Software that <strong>displays unwanted advertisements</strong>. Often installed unknowingly alongside other software."
  },
  {
    week: 5, category: "Malware",
    q: "What is a botnet?",
    a: "A <strong>network of compromised machines</strong> (bots) <strong>controlled by an attacker</strong>. Used for DDoS attacks, spam, and credential theft."
  },
  {
    week: 5, category: "Malware",
    q: "What is a rootkit?",
    a: "Malware that <strong>hides its own activity</strong> by <strong>modifying OS internals</strong>. Makes detection extremely difficult by hooking system calls."
  },
  {
    week: 5, category: "Malware",
    q: "What is an example of early ransomware?",
    a: "<strong>AIDS.exe / PC Cyborg (1989)</strong> — one of the first known ransomware programs. It encrypted file names and demanded payment to restore access."
  },
  {
    week: 5, category: "Malware",
    q: "How did WannaCry spread?",
    a: "Using the <strong>EternalBlue exploit</strong> — a <strong>Windows SMB vulnerability</strong>. It spread as a worm, automatically infecting unpatched machines across networks."
  },
  {
    week: 5, category: "Malware",
    q: "What is a reverse shell?",
    a: "The <strong>victim connects back to the attacker</strong> (outbound connection). This <strong>bypasses firewalls</strong> that typically block inbound connections."
  },
  {
    week: 5, category: "Malware",
    q: "What is a RAT?",
    a: "<strong>Remote Access Trojan</strong> — gives the attacker <strong>full remote control</strong> over the victim's machine (file access, camera, keylogging, etc.)."
  },
  {
    week: 5, category: "Malware",
    q: "How do Trojans get detected?",
    a: "<ul><li><strong>Checksums</strong> (file hash changes)</li><li><strong>File timestamps</strong> (modification dates)</li><li><strong>Size changes</strong> (unexpected growth)</li></ul>"
  },
  {
    week: 5, category: "Malware",
    q: "What is the best way to avoid malware?",
    a: "<ul><li><strong>Don't run untrusted executables</strong></li><li><strong>Avoid unexpected attachments</strong></li><li>Use <strong>firewalls</strong> and <strong>limited privileges</strong></li></ul>"
  },

  // ============================
  // WEEK 6 — Web Security & SQL Injection
  // ============================

  // --- Web Architecture ---
  {
    week: 6, category: "Web Architecture",
    q: "What are the three tiers of a typical web application architecture?",
    a: "<ol><li><strong>Interface tier</strong> (client/browser)</li><li><strong>Logic tier</strong> (web server)</li><li><strong>Storage tier</strong> (database server)</li></ol>"
  },
  {
    week: 6, category: "Web Architecture",
    q: "What is the difference between HTTP GET and POST requests?",
    a: "<strong>GET</strong> passes parameters in the <strong>URL</strong> with no message body.<br><br><strong>POST</strong> includes parameters in the <strong>message body</strong> and is used to perform actions."
  },
  {
    week: 6, category: "Web Architecture",
    q: "Why is HTTP considered a stateless protocol, and how is this limitation addressed?",
    a: "Each request/response is <strong>independent</strong> with no memory of prior interactions. <strong>Cookies</strong> are used to store session state on the client side."
  },
  {
    week: 6, category: "Web Architecture",
    q: "What is a cookie and what are its three main use cases?",
    a: "A cookie is a <strong>key-value pair</strong> stored by the browser on behalf of the server.<br><br>Use cases:<ol><li><strong>Session identification</strong></li><li><strong>Personalisation</strong></li><li><strong>User tracking</strong></li></ol>"
  },
  {
    week: 6, category: "Web Architecture",
    q: "What does the Same Origin Policy enforce?",
    a: "A browser page from domain X can only <strong>read/write data</strong> from another page on domain Y if both share the <strong>same domain and protocol</strong>."
  },
  {
    week: 6, category: "Web Architecture",
    q: "What is the Document Object Model (DOM)?",
    a: "A <strong>live, programmable object representation</strong> of a web page's HTML, accessible via JavaScript APIs (e.g. <code>document.getElementById()</code>)."
  },
  {
    week: 6, category: "Web Architecture",
    q: "Why does HTTPS not fully protect a web application?",
    a: "HTTPS <strong>encrypts browser-server traffic</strong> and prevents eavesdropping, but does <strong>not prevent</strong> server-side attacks like <strong>SQL injection</strong> or client-side attacks like <strong>XSS</strong>."
  },

  // --- SQL Injection ---
  {
    week: 6, category: "SQL Injection",
    q: "What is SQL injection and what is its root cause?",
    a: "SQLi is an attack where <strong>malicious SQL code is inserted</strong> into user input and executed by the database. The root cause is the application <strong>treating user-supplied data as executable code</strong>."
  },
  {
    week: 6, category: "SQL Injection",
    q: "Given the vulnerable PHP code below, what query is produced when a user enters username <code>john' --</code> and password <code>guess</code>?<pre>\"SELECT * FROM accounts WHERE username='\" . $user . \"' AND password='\" . $pass . \"'\"</pre>",
    a: "<pre>SELECT * FROM accounts WHERE username='john' -- ' AND password='guess'</pre>The <code>--</code> comments out the password check, <strong>logging in without a valid password</strong>."
  },
  {
    week: 6, category: "SQL Injection",
    q: "What does <code>--</code> mean in SQL?",
    a: "It marks the beginning of a <strong>comment</strong>; everything after it on the same line is <strong>ignored by the SQL interpreter</strong>."
  },
  {
    week: 6, category: "SQL Injection",
    q: "How does the attack <code>bob' OR 5=5 --</code> work?",
    a: "The injected <code>OR 5=5</code> is <strong>always true</strong>, so the WHERE clause matches <strong>every row</strong> in the table, bypassing authentication without needing a valid username."
  },
  {
    week: 6, category: "SQL Injection",
    q: "What is the effect of injecting <code>bob'; DROP TABLE accounts --</code> into a login field?",
    a: "It terminates the original query with <code>;</code> and executes a second command that <strong>permanently deletes the entire accounts table</strong>."
  },
  {
    week: 6, category: "SQL Injection",
    q: "Why is the CardSystems breach (2005) significant in the context of SQLi?",
    a: "Attackers exploited an SQLi vulnerability to inject code that ran <strong>every four days</strong>, collecting and FTPing credit card data — over <strong>40 million card details</strong> were stolen, ultimately destroying the company."
  },
  {
    week: 6, category: "SQL Injection",
    q: "What rank did code injection hold on the OWASP Top 10 list in 2021?",
    a: "<strong>Number 3</strong>."
  },

  // --- SQLi Defences ---
  {
    week: 6, category: "SQLi Defences",
    q: "What is the simple escaping countermeasure for SQLi and why is it insufficient?",
    a: "Replacing <code>'</code> with <code>''</code> so SQL treats it as a literal character, not a string delimiter. It is insufficient because it can be bypassed by <strong>numeric injection</strong> (no quotes needed) and <strong>second-order injection</strong> attacks."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "How does numeric SQL injection bypass the single-quote escaping defence?",
    a: "Numeric values are inserted into queries <strong>without quotes</strong>, so an attacker can inject <code>1 OR 5=5 --</code> directly without needing any quote characters."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What is a second-order SQL injection attack?",
    a: "An attack in <strong>two phases</strong>:<ol><li><strong>Phase 1:</strong> stores malicious input in the database (where it may be escaped)</li><li><strong>Phase 2:</strong> retrieves that input and uses it <strong>unsanitised</strong> in a new query, triggering the injection</li></ol>"
  },
  {
    week: 6, category: "SQLi Defences",
    q: "Why does second-order SQLi bypass escaping countermeasures?",
    a: "When data is <strong>retrieved from the database</strong>, it is assumed to be trusted, so <strong>no escaping is applied</strong> before it is used in a new query."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What is a parameterised query (prepared statement) and how does it work?",
    a: "It <strong>separates SQL code from data</strong> in two phases:<ol><li><strong>Phase 1:</strong> sends the query structure with <code>?</code> placeholders</li><li><strong>Phase 2:</strong> binds the actual data values</li></ol>The database <strong>always treats bound values as data, never as code</strong>."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What PHP functions are used to implement a parameterised query?",
    a: "<ol><li><code>$mysqli->prepare()</code> — create the statement with placeholders</li><li><code>$stmt->bind_param()</code> — bind data values</li><li><code>$stmt->execute()</code> — run it</li></ol>"
  },
  {
    week: 6, category: "SQLi Defences",
    q: "Should parameterised queries only be used for inputs that directly accept user data? Why or why not?",
    a: "<strong>No</strong> — they should be used for <strong>every database query</strong>. Malicious data can be stored (second-order attacks) and it is easy to misjudge which data is user-controllable."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What are the limitations of parameterised queries?",
    a: "<strong>Table names, column names, and SQL keywords</strong> (e.g. <code>ASC</code>, <code>DESC</code>) <strong>cannot be parameterised</strong>. Whitelists or strict validation must be used for those parts of the query."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "What is a whitelist in the context of SQLi defence?",
    a: "A <strong>predefined set of acceptable values</strong> that user input is checked against. Only values on the list are permitted, <strong>rejecting anything else</strong>."
  },
  {
    week: 6, category: "SQLi Defences",
    q: "How can a penetration tester quickly detect a potential SQLi vulnerability?",
    a: "Enter a <strong>single quote <code>'</code></strong> into an input field. If a <strong>database error</strong> occurs, it suggests the input is being concatenated into a SQL query unsafely."
  },

  // --- Browser Security ---
  {
    week: 6, category: "Browser Security",
    q: "What is a browser sandbox and what does it prevent?",
    a: "A security mechanism that <strong>restricts JavaScript's access</strong> to the OS, file system, and other browser contexts, preventing malicious websites from reading local files or interfering with other open pages."
  },
  {
    week: 6, category: "Browser Security",
    q: "What is the difference between a server-side attack and a client-side attack in the web threat model?",
    a: "A <strong>server-side attack</strong> (e.g. SQLi) targets the web server and database by injecting code through the web app.<br><br>A <strong>client-side attack</strong> (e.g. XSS) targets the <strong>user's browser</strong> by injecting malicious scripts."
  },
  {
    week: 6, category: "Browser Security",
    q: "What is Remote Code Execution (RCE) and what are its risks?",
    a: "RCE allows an attacker to <strong>execute arbitrary code on a remote machine</strong>. Risks include:<ul><li>Installing malware</li><li>Compromising the system</li><li>Stealing passwords</li><li>Reading private data</li></ul>"
  },
  {
    week: 6, category: "Browser Security",
    q: "What does Chrome's security architecture use to isolate different websites?",
    a: "Separate <strong>renderer sandboxes</strong> for each site, plus a <strong>browser process</strong> managing all components, following the <strong>principle of least privilege</strong>."
  },

  // --- SQL Fundamentals ---
  {
    week: 6, category: "SQL Fundamentals",
    q: "What SQL command would return the age of a user named 'Dee' from a Users table?",
    a: "<pre>SELECT Age FROM Users WHERE Name='Dee';</pre>"
  },

  // --- Security Principles ---
  {
    week: 6, category: "Security Principles",
    q: "What is the key principle that unifies defences against both memory safety vulnerabilities (buffer overflow) and web vulnerabilities (SQLi, XSS)?",
    a: "<strong>Validate untrusted input</strong> — both vulnerability classes stem from <strong>confusion between code and data</strong>, and both are mitigated by ensuring user-supplied input is <strong>never treated as executable code</strong>."
  },

  // ============================
  // WEEK 7 — XSS, CSRF & Session Management
  // ============================

  // --- SOP & HTTP ---
  {
    week: 7, category: "SOP & HTTP",
    q: "Why is HTTP considered a \"stateless\" protocol?",
    a: "Every request and response is <strong>independent</strong> of those that came before it."
  },
  {
    week: 7, category: "SOP & HTTP",
    q: "What mechanism allows a web server to store a session ID on a client's browser?",
    a: "<strong>Cookies</strong>."
  },
  {
    week: 7, category: "SOP & HTTP",
    q: "What is the main goal of the Same Origin Policy (SOP)?",
    a: "To ensure that a script in one site <strong>cannot read or write data</strong> to an open page from a <strong>different site</strong>."
  },
  {
    week: 7, category: "SOP & HTTP",
    q: "Under SOP, would a script at <code>http://monash.edu/IT/</code> be allowed to access <code>https://monash.edu/ENG/</code>?",
    a: "<strong>No</strong>, because they use <strong>different protocols</strong> (HTTP vs. HTTPS)."
  },

  // --- XSS Attacks ---
  {
    week: 7, category: "XSS Attacks",
    q: "What is the core definition of a Cross-Site Scripting (XSS) attack?",
    a: "An attacker injects <strong>malicious script</strong> (usually JavaScript) into a web page to be <strong>run inside the victim's browser</strong>."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "List three common consequences of a successful XSS attack.",
    a: "<ol><li><strong>Session hijacking</strong></li><li><strong>Unauthorized actions</strong></li><li><strong>Disclosure of personal data</strong></li></ol>"
  },
  {
    week: 7, category: "XSS Attacks",
    q: "Which type of XSS involves data being permanently saved in a back-end database?",
    a: "<strong>Stored XSS</strong> (also called <strong>Persistent XSS</strong>)."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "How does Reflected XSS typically reach a victim?",
    a: "Through a <strong>crafted URL</strong> containing embedded JavaScript that the victim is <strong>tricked into clicking</strong>."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "What is the difference between Reflected and DOM-based XSS regarding the server's response?",
    a: "In <strong>Reflected XSS</strong>, the server response contains the malicious script.<br><br>In <strong>DOM-based XSS</strong>, the server response is legitimate, but <strong>client-side script processes the URL unsafely</strong>."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "Approximately what percentage of real-world XSS vulnerabilities are \"Reflected\"?",
    a: "<strong>75%</strong>."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "Why can't an attacker simply host a malicious script on their own site to steal cookies, rather than using an XSS bug?",
    a: "Browsers <strong>restrict cookie access to the domain that issued them</strong>; the script must run from the <strong>vulnerable domain</strong> to access that domain's cookies."
  },
  {
    week: 7, category: "XSS Attacks",
    q: "What is \"Second-order XSS\" another name for?",
    a: "<strong>Stored XSS</strong>."
  },

  // --- XSS Defences ---
  {
    week: 7, category: "XSS Defences",
    q: "What is the \"root cause\" of all XSS vulnerabilities?",
    a: "<strong>Lack of input validation and sanitization</strong>."
  },
  {
    week: 7, category: "XSS Defences",
    q: "What is HTML-encoding (escaping) used for in XSS defence?",
    a: "It <strong>sanitizes script characters</strong> so the browser treats them as <strong>data content</strong> rather than executable tags."
  },
  {
    week: 7, category: "XSS Defences",
    q: "Give an example of how <code>&lt;script&gt;</code> is rendered after HTML-encoding.",
    a: "<code>&amp;lt;script&amp;gt;</code>"
  },
  {
    week: 7, category: "XSS Defences",
    q: "Why is simple HTML-encoding sometimes ineffective for attribute values like <code>src</code>?",
    a: "Browsers may <strong>decode the attribute values</strong> before interpreting the tag (e.g., decoding <code>&amp;#58;</code> to a colon)."
  },
  {
    week: 7, category: "XSS Defences",
    q: "What is \"Defense in Depth\" in the context of DOM-based XSS?",
    a: "Using <strong>both client-side validation and server-side validation</strong> to ensure that even if one layer fails, the malicious input is blocked elsewhere."
  },

  // --- CSRF ---
  {
    week: 7, category: "CSRF",
    q: "How does Cross-Site Request Forgery (CSRF) differ from XSS in terms of credentials?",
    a: "CSRF uses the victim's <strong>existing credentials/session</strong> automatically sent by the browser <strong>without needing to \"steal\" the cookie</strong>."
  },
  {
    week: 7, category: "CSRF",
    q: "What is the fundamental root cause of CSRF?",
    a: "The server <strong>cannot distinguish</strong> whether a request is <strong>\"same-site\" (trusted)</strong> or <strong>\"cross-site\" (untrusted)</strong>."
  },
  {
    week: 7, category: "CSRF",
    q: "How can an attacker execute a POST request for CSRF without the user clicking \"Submit\"?",
    a: "By using JavaScript, such as an <code>onload=\"document.forms[0].submit()\"</code> attribute in the body tag."
  },
  {
    week: 7, category: "CSRF",
    q: "What does the <code>SameSite=Strict</code> cookie attribute do?",
    a: "It tells the browser <strong>never to send the cookie</strong> along with <strong>cross-site requests</strong>."
  },
  {
    week: 7, category: "CSRF",
    q: "How does a \"secret token\" prevent CSRF?",
    a: "The server embeds a <strong>random value</strong> in the page; since the attacker <strong>cannot read this value</strong> (due to SOP), they cannot include it in a forged request."
  },

  // --- Session Management ---
  {
    week: 7, category: "Session Management",
    q: "What is the goal of session management?",
    a: "To <strong>maintain a user's context</strong> over multiple requests so they don't have to <strong>re-authenticate every time</strong>."
  },
  {
    week: 7, category: "Session Management",
    q: "Why is it dangerous to send session tokens as URL parameters?",
    a: "They can be leaked via <strong>browser history</strong>, <strong>shared links</strong>, or the HTTP <strong>\"Referrer\" field</strong>."
  },
  {
    week: 7, category: "Session Management",
    q: "What are the requirements for a secure session token?",
    a: "It should be generated using a <strong>strong cryptographic pseudorandom generator</strong> and be at least <strong>128 bits long</strong>."
  },
  {
    week: 7, category: "Session Management",
    q: "What happens in a Session Fixation attack?",
    a: "The attacker provides a <strong>known session ID</strong> to a victim; if the server doesn't change the ID upon login, the attacker can <strong>hijack the authenticated session</strong>."
  },
  {
    week: 7, category: "Session Management",
    q: "What is the primary defence against Session Fixation?",
    a: "Issuing a <strong>new, random session token</strong> immediately after the user authenticates."
  },
  {
    week: 7, category: "Session Management",
    q: "What was the \"Firesheep\" extension used for?",
    a: "<strong>Stealing unencrypted session tokens</strong> over open WiFi."
  },

  // --- Cookie Security ---
  {
    week: 7, category: "Cookie Security",
    q: "What does the <code>HttpOnly</code> flag on a cookie prevent?",
    a: "It prevents <strong>client-side scripts</strong> (like those in an XSS attack) from <strong>accessing the cookie</strong>."
  },
  {
    week: 7, category: "Cookie Security",
    q: "What does the <code>Secure</code> flag on a cookie ensure?",
    a: "That the cookie is only transferred via <strong>encrypted HTTPS connections</strong>."
  }
];
