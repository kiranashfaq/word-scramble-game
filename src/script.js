var refresh2 = document.getElementById("refresh-button");
var check = document.getElementById("check-button");
var input = document.getElementById("input");
var hint = document.getElementById("hint-div");
var time = document.getElementById("time-div");
var timer = document.getElementById("time");

var un_scrambled_word = document.getElementById("unscrambled-word");
var seconds = 30;
var interval;
var correct_word = []


//  var currentWordIndex = -1;
check.addEventListener("click", function () {
  var input_value = input.value.toLowerCase();
  for (let j = 0; j < technology_words.length; j++) {

    if (input_value === technology_words[j].toLowerCase()) {
      hint.textContent = "Correct!";
      un_scrambled_word.textContent = technology_words[j];
      clearInterval(interval);

      input.vale = ""
      break;
    } else {
      hint.textContent = "Incorrect!";
      input.vale = ""


    }

  }
});


var technology_words = [
  "interface",
  "Computer",
  "Internet",
  "Database",
  "Ethernet",
  "Firmware",
  "Firewall",
  "Gigabyte",
  "Hardware",
  "Software",
  "Hacker",
  "Processor",
  "Protocol",
  "Security",
  "Wireless",
  "Bluetooth",
  "Megabyte",
  "Keyboard",
  "Monitor",
  "Printer",
  "Router",
  "Storage",
  "Debugging",
  "Encryption",
  "Multimedia",
  "Notebook",
  "Password",
  "Peripheral",
  "Simulator",
  "Terabyte",
  "Username",
  "Virtual",
  "Webmaster",
  "Computer",
  "Database",
  "Ethernet",
  "Firmware",
  "Firewall",
  "Gigabyte",
  "Hardware",
  "Software",
  "Internet",
  "Security",
  "Wireless",
  "Bluetooth",
  "Megabyte",
  "Keyboard",
  "Monitor",
  "Notebook",
  "Password",
];

refresh2.addEventListener("click", function () {
  input.style.display = "block";

  seconds = 30
  // clearInterval(interval);
      interval = setInterval(() => {
     seconds--
      if (seconds === 0 ) {
        clearInterval(interval)
        hint.innerText = "Time's up!";
        input.value = "";
        time.style.color = "#413748";
input.style.display = "none"

      }
      if(seconds == 10){
        time.style.color = "red"

      }
  time.innerHTML = `Time Left: ${seconds} seconds`
     
    },1000)

  var number = Math.floor(Math.random() * scrambled_words.length);
  un_scrambled_word.innerText = scrambled_words[number].word;
   

  hint.innerText = `Hint :${scrambled_words[currentWordIndex].hint}`;
  input.value = "";
});

var scrambled_words = [
  {
    word: "m p t o e u r c",
    hint: "An electronic device for storing and processing data",
  },
  {
    word: "t n r e i e t n",
    hint: "A global network connecting millions of computers",
  },
  {
    word: "a e d t b a s a",
    hint: "An organized collection of structured information",
  },
  {
    word: "e n h t r e e t",
    hint: "A common method of networking computers in a LAN",
  },
  {
    word: "w m r i e f r a",
    hint: "Software that is embedded in a hardware device",
  },
  {
    word: "w l f r i a e l",
    hint: "A system designed to prevent unauthorized access",
  },
  {
    word: "g b y i g a e t",
    hint: "A unit of data storage equal to 1,024 megabytes",
  },
  {
    word: "h d a r e w r a",
    hint: "The physical components of a computer system",
  },
  {
    word: "t f s o e w a r",
    hint: "The programs and other operating information used by a computer",
  },
  {
    word: "c k r e a h a",
    hint: "A person who uses computers to gain unauthorized access",
  },
  {
    word: "p o c r e s o r s",
    hint: "The part of a computer that performs calculations",
  },
  {
    word: "t o l c o r p t o",
    hint: "A set of rules governing data communication",
  },
  {
    word: "t y i r c u e s",
    hint: "Measures taken to protect a computer or network",
  },
  {
    word: "e s e s i w r l",
    hint: "Using radio waves to transmit data without cables",
  },
  {
    word: "h o t o t l u e b",
    hint: "Wireless technology standard for exchanging data",
  },
  {
    word: "e g y b t a e m",
    hint: "A unit of data storage equal to 1,024 kilobytes",
  },
  { word: "e y k o a b r d", hint: "Input device with keys used to type text" },
  {
    word: "o r n t o m i",
    hint: "Output device that displays information in visual form",
  },
  {
    word: "t n r p i e r",
    hint: "Device that produces a hard copy of digital documents",
  },
  {
    word: "r e o t r u",
    hint: "Device that forwards data packets between networks",
  },
  { word: "o t r s a e g", hint: "The action or method of storing data" },
  {
    word: "g i n e b u g g d",
    hint: "The process of identifying and removing errors from software",
  },
  {
    word: "n c y r p i t n o e",
    hint: "The process of converting data into a code to prevent unauthorized access",
  },
  {
    word: "l m d u e i a t m",
    hint: "Content that uses a combination of different forms such as text, audio, and video",
  },
  { word: "t o o k n o b e", hint: "A small, portable personal computer" },
  {
    word: "s s w o r a p d",
    hint: "A string of characters used to gain access to a computer system",
  },
  {
    word: "r l e p h e i a r p",
    hint: "External devices connected to a computer",
  },
  {
    word: "r m o u a s i l t",
    hint: "A program that imitates real-world processes or systems",
  },
  {
    word: "t a r y e t e b",
    hint: "A unit of data storage equal to 1,024 gigabytes",
  },
  {
    word: "m s e u n r a e",
    hint: "An identifier used by a person to gain access to a computer system",
  },
  {
    word: "i u a t r v l",
    hint: "Not physically existing but made to appear by software",
  },
  {
    word: "m e w b t s a r e",
    hint: "A person responsible for maintaining a website",
  },
  {
    word: "m p t o e u r c",
    hint: "An electronic device for storing and processing data",
  },
  {
    word: "a e d t b a s a",
    hint: "An organized collection of structured information",
  },
  {
    word: "n h t r e e t",
    hint: "A common method of networking computers in a LAN",
  },
  {
    word: "w m r i e f r a",
    hint: "Software that is embedded in a hardware device",
  },
  {
    word: "w l f r i e a r",
    hint: "A system designed to prevent unauthorized access",
  },
  {
    word: "g b y i g a e t",
    hint: "A unit of data storage equal to 1,024 megabytes",
  },
  {
    word: "h d a r e w r",
    hint: "The physical components of a computer system",
  },
  {
    word: "t f s o e w a r",
    hint: "The programs and other operating information used by a computer",
  },
  {
    word: "t n r e i e t n",
    hint: "A global network connecting millions of computers",
  },
  {
    word: "t i y r c u e s",
    hint: "Measures taken to protect a computer or network",
  },
  {
    word: "e s i w r s e l",
    hint: "Using radio waves to transmit data without cables",
  },
  {
    word: "h o t o t l u e b",
    hint: "Wireless technology standard for exchanging data",
  },
  {
    word: "e g y b t a e m",
    hint: "A unit of data storage equal to 1,024 kilobytes",
  },
  { word: "e y k o a b r d", hint: "Input device with keys used to type text" },
  {
    word: "o r n t o m i",
    hint: "Output device that displays information in visual form",
  },
  { word: "t o o k n o b e", hint: "A small, portable personal computer" },
  {
    word: "s s w o r a p d",
    hint: "A string of characters used to gain access to a computer system",
  },
];
