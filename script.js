const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const heartBtn = document.getElementById("heart-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const valentine = document.getElementById("valentine-content");
const heartContent = document.getElementById("heart-content");

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");

let count = 0;

const gifs = [
  "https://media4.giphy.com/media/901mxGLGQN2PyCQpoc/giphy.gif",
  "https://c.tenor.com/J3XKVY7E-SoAAAAM/cats-cute-cats.gif",
  "https://media.tenor.com/lfDATg4Bhc0AAAAM/happy-cat.gif",
  "https://media.tenor.com/5yh3QvAIQosAAAAM/cat-heart.gif"
];

heartBtn.onclick = toggleEnvelope;
closeBtn.onclick = toggleEnvelope;

function toggleEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  heartsRow.forEach(h => h.classList.toggle("animated"));

  if (valentine.classList.contains("hide")) {
    valentine.classList.remove("hide");
    valentine.classList.add("show-slide");
  } else {
    valentine.classList.add("hide");
    valentine.classList.remove("show-slide");
  }
  if (heartContent.classList.contains("hide")) {
    heartContent.classList.remove("hide");
    heartContent.classList.add("show-slide");
  } else {
    heartContent.classList.add("hide");
    heartContent.classList.remove("show-slide");
  }
}



no.addEventListener("click", () => {
  if (count < gifs.length) gif.src = gifs[count];

  const messages = [
    "Namisclick ka lang diba? 😅",
    "Legit na yan ayaw mo? 🤨",
    "Malaki na yung yes oh 🥺",
    "One date lang 🥰🥰"
  ];

  text.innerHTML = messages[count] || messages[2];
  count++;

  const yesSize = Math.min(16 + count * 4, 28);
  const yesPadding = Math.min(10 + count * 6, 30);
  
  yes.style.fontSize = `${yesSize}px`;
  yes.style.padding = `${yesPadding}px ${yesPadding * 1.2}px`;
  
  const noSize = Math.max(12 - count * 1.5, 8);
  const noPadding = Math.max(8 - count * 1.5, 4);
  
  no.style.fontSize = `${noSize}px`;
  no.style.padding = `${noPadding}px ${noPadding * 1.2}px`;
  
    if (count >= messages.length) {
    no.style.display = "none";
  }

});

yes.addEventListener("click", () => {
  gif.src = "https://i.gifer.com/4MY.gif";
  text.innerHTML = "Sabi ko na ehhh 💖😋";
  yes.innerHTML =
    `<a href="https://www.instagram.com/dezknts/" class ="message-link">Message me babe</a>`;
  no.style.display = "none";
});


