const quizzes = [
  {
    title: "HTML",
    bg: "#fff1e9",
    color: "#ff7e35",
    icon: "<path d=\"M11 8 3 16l8 8m10-16 8 8-8 8M19 5l-6 22\"/>",
    questions: [
    
      [
  "What does HTML stand for?",
  "Hyper Text Markup Language",
  "Home Tool Markup Language",
  "Hyperlinks Text Machine Language",
  "High Text Markup Language",
  0
],
[
        "Which element creates a hyperlink?",
        "<link>",
        "<a>",
        "<href>",
        "<url>",
        1
      ],
      [
        "Which element represents the highest-level heading?",
        "<h6>",
        "<head>",
        "<h1>",
        "<header>",
        2
      ],
      [
        "Which attribute specifies an image URL?",
        "href",
        "alt",
        "title",
        "src",
        3
      ],
      [
        "Which element creates an unordered list?",
        "<ul>",
        "<ol>",
        "<li>",
        "<dl>",
        0
      ],
      [
        "Which element contains document metadata?",
        "<body>",
        "<head>",
        "<main>",
        "<footer>",
        1
      ],
      [
        "Which input type hides typed characters?",
        "text",
 "email",
        "password",
        "search",
        2
      ],
      [
        "Which element creates a table row?",
        "<td>",
        "<th>",
        "<table>",
        "<tr>",
        3
      ],
      [
        "Which element represents a paragraph?",
        "<p>",
        "<span>",
        "<div>",
        "<section>",
        0
      ],
      [
        "Which attribute associates a label with an input ID?",
        "name",
        "for",
        "value",
        "type",
        1
      ],
    ]
  },
  {
    title: "CSS",
    bg: "#e0fdef",
    color: "#16834f",
    icon: "<path d=\"M7 3h18v12H7zM11 15v5h10v-5m-5 5v9m-5-22v4m5-4v4m5-4v4\"/>",
    questions: [
      [
    "What does CSS stand for?",
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Syntax",
    "Color Style System",
    1
],
[
        "Which property changes text color?",
        "font-color",
        "text-style",
        "color",
        "background",
        2
      ],
      [
        "Which property controls outer spacing?",
        "padding",
        "border",
        "gap",
        "margin",
        3
      ],
      [
 "Which declaration enables flexbox?",
        "display: flex",
        "position: flex",
        "layout: flex",
        "float: flex",
        0
      ],
      [
        "Which selector targets an ID named menu?",
        ".menu",
        "#menu",
        "menu",
        "*menu",
        1
      ],
      [
        "Which property makes corners rounded?",
        "border-style",
        "outline",
        "border-radius",
        "box-shadow",
        2
      ],
      [
        "Which unit is relative to the root font size?",
        "px",
        "vh",
        "em",
        "rem",
        3
      ],
      [
        "Which property sets the space inside a border?",
        "padding",
        "margin",
        "outline",
        "width",
        0
      ],
      [
        "Which rule defines responsive conditions?",
        "@font-face",
        "@media",
        "@keyframes",
        "@import",
        1
      ],
      [
        "Which property controls text size?",
        "font-weight",
        "line-height",
        "font-size",
        "text-align",
        2
      ],
    ]
  },
  {
    title: "JavaScript",
    bg: "#ebf0ff",
    color: "#306aff",
    icon: "<rect x=\"3\" y=\"3\" width=\"26\" height=\"26\" rx=\"4\"/>" +
 "<path d=\"M13 10v12q0 4-5 2m17-13q-7-4-7 2 0 2 4 3t2 7q-3 3-7 0\"/>",
    questions: [
      [
        "Which keyword declares a block-scoped variable that can be " +
        "reassigned?",
        "var",
        "const",
        "let",
        "static",
        2
      ],
      [
        "Which operator checks strict equality?",
        "=",
        "==",
        "!=",
        "===",
        3
      ],
      [
        "Which method adds an item to the end of an array?",
        "push()",
        "pop()",
        "shift()",
        "slice()",
        0
      ],
      [
        "Which value is a Boolean?",
        "\"true\"",
        "false",
        "0",
        "undefined",
        1
      ],
      [
        "Which method selects the first matching CSS selector?",
        "getElementsByClassName()",
        "querySelectorAll()",
        "querySelector()",
        "createElement()",
        2
      ],
      [
        "Which event occurs when a button is clicked?",
        "load",
        "input",
        "change",
        "click",
        3
      ],
      [
        "Which method converts JSON text to a JavaScript value?",
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.read()",
        "JSON.convert()",
        0
      ],
      [
        "What is the first index of an array?",
        "1",
 "0",
        "-1",
        "2",
        1
      ],
      [
        "Which keyword exits a loop immediately?",
        "continue",
        "returnValue",
        "break",
        "skip",
        2
      ],
      [
        "Which expression creates an arrow function?",
        "function => {}",
        "=> function()",
        "function() -> {}",
        "() => {}",
        3
      ],
    ]
  },
  {
    title: "Accessibility",
    bg: "#f6e7ff",
    color: "#a729f5",
    icon: "<circle cx=\"16\" cy=\"5\" r=\"3\"/>" +
      "<path d=\"M4 11l12 3 12-3M16 14v7m0 0-7 9m7-9 7 9\"/>",
    questions: [
      [
    "What does WCAG stand for?",
    "Web Content Accessibility Guidelines",
    "Web Code Authoring Guide",
    "Website Color Access Guide",
    "Web Content Application Grammar",
    0
],
[
        "Which attribute provides a text alternative for an image?",
        "title",
        "alt",
        "src",
        "href",
        1
      ],
      [
        "Which key usually moves focus to the next interactive element?",
        "Escape",
        "Shift",
        "Tab",
        "Backspace",
        2
      ],
      [
        "Which element is best for a native clickable action?",
        "<div>",
        "<span>",
        "<p>",
        "<button>",
        3
      ],
 [
        "What should a decorative image usually have?",
        "alt=\"\"",
        "alt=\"image\"",
        "role=\"button\"",
        "tabindex=\"0\"",
        0
      ],
      [
        "Which of these color contrast ratios defines the minimum WCAG 2.1 " +
        "Level AA requirement for normal text?",
        "4.5 : 1",
        "3 : 1",
        "2.5 : 1",
        "5 : 1",
        0
      ],
      [
        "Which attribute declares the language of a page?",
        "dir",
        "lang",
        "charset",
        "name",
        1
      ],
      [
        "Which attribute can give an icon-only button an accessible name?",
        "aria-hidden",
        "aria-expanded",
        "aria-label",
        "aria-checked",
        2
      ],
      [
        "What should be provided for prerecorded video with meaningful " +
        "speech?",
        "A larger player",
        "A different font",
        "A background image",
        "Captions",
        3
      ],
      [
        "Which CSS pseudo-class helps show keyboard focus?",
        ":focus-visible",
        ":visited",
        ":empty",
        ":first-child",
        0
      ],
    ]
  },
];
