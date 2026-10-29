const screens = [...document.querySelectorAll(".screen")];
const ambient = document.querySelector(".ambient-hearts");
const music = document.getElementById("ourSong");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");
const playground = document.getElementById("buttonPlayground");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noMessage = document.getElementById("noMessage");

const memories = [
  ["The beginning ♡", "That first little chapter of us.", "memory-01.jpg"],
  ["Your smile 🥹", "One of my favorite things in the world.", "memory-02.jpg"],
  ["Our little adventures", "Everywhere feels better with you.", "memory-03.jpg"],
  ["Just us 💕", "The moments I wish I could replay.", "memory-04.jpg"],
  ["A silly moment 😂", "Because we never run out of reasons to laugh.", "memory-05.jpg"],
  ["My favorite person", "You make ordinary days feel special.", "memory-06.jpg"],
  ["A day to remember", "Another memory tucked safely in my heart.", "memory-07.jpg"],
  ["Little things", "It's the small moments that mean the most.", "memory-08.jpg"],
  ["More smiles 🌷", "I love seeing you happy.", "memory-09.jpg"],
  ["Our story", "Still one of my favorite stories.", "memory-10.jpg"],
  ["A precious moment", "Thank you for being part of my life.", "memory-11.jpg"],
  ["And many more…", "Here's to all the memories still waiting for us.", "memory-12.jpg"]
];

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------------------------------------------------------------------------
// PHOTOS: 100 ready-made slots.
// Drop a picture into assets/photos/ named memory-13.jpg ... memory-100.jpg and it
// appears by itself. Empty slots stay hidden, so she never sees blank cards.
// Titles and captions are already written for every slot, so you only add files.
// ---------------------------------------------------------------------------
const PHOTO_SLOTS = 100;
const photoPool = [
  ["Golden hour ✨", "Everything glows a little brighter when you're next to me."],
  ["Walking with you", "My favorite kind of road is any road with you on it."],
  ["That look 😌", "You know exactly what that look does to me."],
  ["Us being us", "No poses, no plans, just the two of us."],
  ["Cloudy skies, sunny mood ☁️", "Even grey days feel warm with you."],
  ["Small moments", "The ordinary days I'd happily live again."],
  ["You, laughing 🥹", "The sound I'd pick over any song."],
  ["Side by side", "Exactly where I want to be."],
  ["A little mischief 😏", "We never behave for long."],
  ["Soft day 🌷", "Slow, easy, and perfect because you were there."],
  ["Caught in the moment", "I love the pictures we never planned."],
  ["Our kind of adventure", "No map, just you and me."],
  ["Heart on my sleeve ♡", "You make it easy to be completely myself."],
  ["Sunshine and you ☀️", "Two squinting faces, one very happy me."],
  ["Silly faces 😂", "My favorite pictures are always the funny ones."],
  ["Just a Tuesday", "And somehow it became a memory I keep."],
  ["Quiet and close", "Some moments don't need words."],
  ["Look at us", "I still smile every time I find this one."],
  ["Remember this day?", "I do. Every little bit of it."],
  ["Together again", "Wherever we go, it feels like home."],
  ["Made for pictures 📸", "Or maybe the pictures were made for us."],
  ["Your smile again 🥹", "I never get tired of it."],
  ["Best company", "You turn every walk into a story."],
  ["Heartbeat moment", "This is the kind of day I'd save in a jar."],
  ["Still choosing you", "Yesterday, today, and tomorrow."],
  ["A day with bae", "Simple, sweet, and all ours."],
  ["Laughing till it hurts", "Thank you for every one of these."],
  ["Always you", "In every photo, you're my favorite part."],
  ["Hand in hand ♡", "Even when the camera can't show it."],
  ["Picture perfect (almost)", "Perfect because we're in it together."],
  ["Late smiles", "Tired, happy, and still next to you."],
  ["Our little world 🌍", "Smaller than the map, bigger than anything else."],
  ["Pure joy", "The kind you can't fake."],
  ["Take two 😄", "We took a hundred, and loved every one."],
  ["Right here, right now", "I'd freeze this moment if I could."],
  ["My calm", "You're the quiet in my loud days."],
  ["Us, unfiltered", "Real, warm, and a little messy. Just how I like it."],
  ["One more for the album", "There's always room for another."],
  ["Proof of a good day", "Evidence that we had the best time."],
  ["You and me, again", "Never gets old."],
  ["Warm memories 🧡", "I keep these close."],
  ["Beautiful chaos", "And I wouldn't swap it."],
  ["The way you look at me", "Like I'm someone worth looking at."],
  ["Wherever, whenever", "As long as it's with you."],
  ["Candid and cute 🙈", "Caught you smiling, and I'm keeping it."],
  ["Little victories", "Every day with you feels like winning."],
  ["Sweet and simple", "That's us."],
  ["Under the open sky", "Big sky, bigger feelings."],
  ["Us against boredom 😂", "We always find something to laugh about."],
  ["My favorite view", "It's you. It's always you."],
  ["A memory in the making", "And there are so many more coming."],
  ["Gentle moments", "The soft ones count the most."],
  ["Together is the best place", "I say it every time, and I mean it."],
  ["You make it easy", "Loving you, I mean."],
  ["Eyes that say it all", "No caption needed, but here's one anyway."],
  ["Sun-kissed ✨", "You, glowing. Me, grinning."],
  ["Just us two", "Everything else is background."],
  ["Forever favorites", "I'd pick this one again and again."],
  ["More to come ♡", "This story is nowhere near finished."]
];
// Optional: override any slot with your own words. Example: 13: ["Our first trip", "Got lost, laughed all the way."],
const photoNotes = {
  13: ["Golden braids ✨", "That calm, quiet look I love."],
  14: ["That smile 🥹", "The one that makes my whole day."],
  15: ["Pout alert 😂", "You, being cute and knowing it."],
  16: ["Caught mid-turn", "Even in motion, you steal the frame."],
  17: ["Peace, bae ✌️", "Your playful side is my favorite."],
  18: ["Thumbs up 👍", "You approve, and I'm proud of you."],
  19: ["Mood: confident", "Hands up, heart full."],
  20: ["Dreamy mood", "Lost in the moment and looking beautiful."],
  21: ["That side glance", "Sweet, shy, and a little bit sly."],
  22: ["Look at you", "That stare gets me every time."],
  23: ["Big hair, bigger smile", "Hair day goals, bae."],
  24: ["Up close", "Every detail of you is my favorite."],
  25: ["Fresh-faced", "Natural, glowing, you."],
  26: ["Cuddle weather", "Quiet moments, close together."],
  27: ["Lazy day with you", "Doing nothing never felt so good."],
  28: ["Garden day 🌿", "Soft light, softer smile."],
  29: ["Park mood", "Calm, still, and all you."],
  30: ["Four faces of you 😄", "Serious, smiling, silly. I love them all."],
  31: ["Pure sunshine ☀️", "That smile lights up the whole garden."],
  32: ["Mid-laugh 😄", "Caught you in the happiest second."],
  33: ["Pout mode 😗", "Cute, and you know it."],
  34: ["Sunbeam", "Even the light can't stay away from you."],
  35: ["On the grass", "Sitting around, saying nothing, perfect."],
  36: ["Photobomb 😂", "You can't escape my frame."],
  37: ["Your laugh, my view", "I look serious, you steal the shot."],
  38: ["Happy together", "You're laughing, I'm smiling at you."],
  39: ["Stolen kiss 💋", "One of my favorite little moments."],
  40: ["Lazy mornings", "Waking up next to you, always."],
  41: ["Red earth, pink hoodie", "Looking back at me like you own the path."],
  42: ["Love in red 🌹", "Even your pants say it."],
  43: ["Campus corner", "Me, my beanie, and my favorite person."],
  44: ["Peace sign again ✌️", "You never skip the pose."],
  45: ["Walk with me", "Down our dusty little road."],
  46: ["Laughing on the trail", "Your smile beats the whole view."],
  47: ["Giggles on the path", "I'm happier when you are."],
  48: ["Side eye 😏", "Caught me looking at you."],
  49: ["Hand on head", "Trying to look cool. Failed. Cute."],
  50: ["Same pose, new angle", "Because one wasn't enough."],
  51: ["Looking up at us", "Two faces, one very good day."],
  52: ["Beanie boy 🧢", "And you, right next to me."],
  53: ["Eyes on you", "Resting my head and just looking."],
  54: ["Quiet gaze", "You, at your softest."],
  55: ["Four little moods", "Same spot, four different faces."],
  56: ["Tongue out 😛", "Cheeky as ever."],
  57: ["Number 88 and you", "Standing tall, smiling bright."],
  58: ["Four takes", "We couldn't stop posing."],
  59: ["Curls and peace", "Soft hair, soft smile, all you."],
  60: ["Waiting for you 😎", "Red hoodie, phone in hand, thinking of you."],
  61: ["Ink on my hand ✍️", "Little things I keep close."],
  62: ["Written on my palm", "Something I carry with me."],
  63: ["Twist-out day", "Soft curls, soft you."],
  64: ["Peace and smiles ✌️", "Four little takes of you."],
  65: ["Pajama day 🛌", "Cozy and carefree."],
  66: ["Scrolling in bed", "Probably looking at us."],
  67: ["Four takes in bed", "We never stop posing."],
  68: ["Hand up, hearts up", "You can't hide from the camera."],
  69: ["Heads together", "Resting right next to you."],
  70: ["Close as it gets", "My favorite place to be."],
  71: ["Black and white us", "Some moments are timeless."],
  72: ["Timeless", "Us, in any color."],
  73: ["Happy even half asleep 😴", "That smile gets me every time."],
  74: ["Soft smile", "Quiet, calm, and beautiful."],
  75: ["Grumpy face 😤", "Still the cutest."],
  76: ["Blur of laughter 😂", "Too happy to hold still."],
  77: ["Tongue out 😛", "Silly, and all mine."],
  78: ["Hair flip", "Effortless, as always."],
  79: ["A little kiss for you 😘", "Sent with all my love."]
};
const curatedPhotos = memories.length;
for (let n = curatedPhotos + 1; n <= PHOTO_SLOTS; n++) {
  const note = photoNotes[n] || photoPool[(n + photoPool.length * 2 - curatedPhotos - 29) % photoPool.length];
  memories.push([note[0], note[1], `memory-${String(n).padStart(2, "0")}.jpg`]);
}

// ---------------------------------------------------------------------------
// VIDEOS: 30 ready-made slots.
// Drop clips into assets/videos/ named video-01.mp4 ... video-30.mp4 (MP4/H.264).
// Titles and captions are already written for every slot, so you only add files.
// ---------------------------------------------------------------------------
const VIDEO_SLOTS = 30;
const videoPool = [
  ["Press play ▶️", "Just a little moment of us."],
  ["Hear that laugh?", "My favorite sound in the whole world."],
  ["Caught on camera 😂", "We didn't plan this one."],
  ["Walking and talking", "Because we never run out of things to say."],
  ["A little dance 💃", "Nobody was watching. Except me."],
  ["Silly us", "I'd watch this on repeat."],
  ["Say hi 👋", "You, being you."],
  ["That voice 🥹", "I could listen all day."],
  ["The funny bit", "Wait for it..."],
  ["Our song moment 🎶", "Every song is better when it's you singing along."],
  ["A day out", "A few seconds of a very good day."],
  ["Behind the scenes", "The real us, no filter."],
  ["Giggle fit", "Once it starts, it never stops."],
  ["Just a quick clip", "But it means a lot to me."],
  ["Look at you", "Yes, you. Look how happy."],
  ["Moving memories", "Photos can't catch this."],
  ["We were here", "And it was lovely."],
  ["Say it again 😏", "I recorded it on purpose."],
  ["Playful mood", "Trouble, but the good kind."],
  ["Loud and happy", "Just how I like us."],
  ["Soft and slow", "A calm little moment."],
  ["Another one for the collection", "I keep every single one."],
  ["Teasing time 😂", "You started it."],
  ["Just breathing it in", "A moment I wanted to keep."],
  ["Hold on, watch this", "You'll love it."],
  ["Us on the move", "Going somewhere, together."],
  ["A tiny piece of our day", "And my favorite piece."],
  ["Play it twice", "It only gets better."],
  ["Still smiling", "Every time I watch it."],
  ["The last one, for now", "There'll be many more."]
];
// Optional: override any slot with your own words. Example: 1: ["Our first video", "Still makes me smile."],
const videoNotes = {};
const videos = [];
for (let n = 1; n <= VIDEO_SLOTS; n++) {
  const note = videoNotes[n] || videoPool[(n - 1) % videoPool.length];
  videos.push([note[0], note[1], `video-${String(n).padStart(2, "0")}.mp4`]);
}

let videosFound = 0;

// Loads every slot, keeps the ones that exist, then adds them in order.
function buildGallery(gridId, items, makeMedia, onDone) {
  const grid = document.getElementById(gridId);
  const results = new Array(items.length).fill(null);
  let pending = items.length;
  const settle = () => {
    if (--pending > 0) return;
    results.forEach(card => card && grid.appendChild(card));
    balanceGrid(grid);
    if (onDone) onDone(results.filter(Boolean).length);
  };

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.style.setProperty("--tilt", `${index % 2 ? 1.2 : -1.1}deg`);

    const photo = document.createElement("div");
    photo.className = "memory-photo";
    makeMedia(item, photo, card, {
      ok: () => { results[index] = card; settle(); },
      fail: () => settle()
    });

    const caption = document.createElement("div");
    caption.className = "memory-caption";
    const title = document.createElement("strong");
    title.textContent = item[0];
    const description = document.createElement("small");
    description.textContent = item[1];
    caption.append(title, description);
    card.append(photo, caption);
  });
}

function makePhoto(item, photo, card, done) {
  const img = document.createElement("img");
  img.alt = item[0];
  img.onload = () => {
    const ratio = img.naturalWidth / img.naturalHeight;
    if (ratio > 1.2) {
      card.classList.add("wide");
      photo.style.aspectRatio = String(Math.min(ratio, 2.25));
    }
    done.ok();
  };
  img.onerror = done.fail;
  img.src = `assets/photos/${item[2]}`;
  photo.appendChild(img);
}

function makeVideo(item, photo, card, done) {
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.setAttribute("aria-label", item[0]);
  video.onloadedmetadata = () => {
    if (video.videoWidth > video.videoHeight * 1.2) card.classList.add("wide");
    done.ok();
  };
  video.onerror = done.fail;
  // Only the first frame is fetched until she presses play.
  video.src = `assets/videos/${item[2]}#t=0.1`;
  video.addEventListener("play", () => {
    // Pause every other video, and pause the song while a video plays.
    document.querySelectorAll("#videoGrid video").forEach(v => { if (v !== video) v.pause(); });
    if (!music.paused) { music.pause(); video.dataset.resumeSong = "1"; }
  });
  const resume = () => {
    if (video.dataset.resumeSong === "1") { video.dataset.resumeSong = ""; music.play().catch(() => {}); }
  };
  video.addEventListener("pause", resume);
  video.addEventListener("ended", resume);
  photo.appendChild(video);
}

function makeMemoryCards() {
  buildGallery("memoryGrid", memories, makePhoto);
  buildGallery("videoGrid", videos, makeVideo, count => { videosFound = count; });
}

// On phones the grid has two columns. If a run of portrait cards is odd,
// center the last one so it does not sit alone on the left.
function balanceGrid(grid) {
  let run = [];
  const flush = () => {
    if (run.length % 2 === 1) run[run.length - 1].classList.add("solo");
    run = [];
  };
  [...grid.children].forEach(card => card.classList.contains("wide") ? flush() : run.push(card));
  flush();
}

function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "✧", "💕"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  ambient.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}
setInterval(createFloatingHeart, 900);
for (let i = 0; i < 12; i++) setTimeout(createFloatingHeart, i * 250);

document.getElementById("startBtn").addEventListener("click", () => {
  showScreen("memories");
  // Browsers require a user gesture before audio can start.
  music.play().then(updateMusicButton).catch(updateMusicButton);
});
document.getElementById("letterBtn").addEventListener("click", () => showScreen(videosFound > 0 ? "videos" : "letter"));
document.getElementById("videosLetterBtn").addEventListener("click", () => showScreen("letter"));
document.getElementById("proposalBtn").addEventListener("click", () => showScreen("proposal"));
document.getElementById("yesBtn").addEventListener("click", () => {
  showScreen("celebration");
  launchConfetti();
});
document.getElementById("replayBtn").addEventListener("click", () => {
  resetProposal();
  showScreen("welcome");
  document.querySelectorAll("#videoGrid video").forEach(v => v.pause());
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); } catch (error) { /* song file may not be added yet */ }
  } else {
    music.pause();
  }
  updateMusicButton();
});
music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);

function updateMusicButton() {
  const playing = !music.paused;
  musicIcon.textContent = playing ? "♫" : "♪";
  musicLabel.textContent = playing ? "Pause song" : "Our song";
  musicToggle.setAttribute("aria-label", playing ? "Pause our song" : "Play our song");
}

// Playful No button: it dodges within the proposal card and never blocks the Yes button.
let noAttempts = 0;
const playfulMessages = [
  "Ehh? Are you sure, bae? 🥺",
  "Try again 😂💕",
  "That button is a little shy 🙈",
  "Bae_stie, think about it 😭",
  "The YES button is right there 👀❤️",
  "Okay okay… one more chance? 😂"
];

function dodgeNoButton() {
  noAttempts++;
  noMessage.textContent = playfulMessages[Math.min(noAttempts - 1, playfulMessages.length - 1)];

  const card = document.querySelector(".proposal-card");
  const cardRect = card.getBoundingClientRect();
  const playRect = playground.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  const w = noBtn.offsetWidth;
  const h = noBtn.offsetHeight;
  const pad = 16;

  // The playground is the positioning parent, so convert card bounds into its coordinate space.
  const minX = cardRect.left - playRect.left + pad;
  const maxX = cardRect.right - playRect.left - w - pad;
  const minY = cardRect.top - playRect.top + pad;
  const maxY = cardRect.bottom - playRect.top - h - pad;

  // Pick a random spot inside the card that does not cover the YES button.
  let x = minX, y = minY;
  for (let i = 0; i < 25; i++) {
    x = minX + Math.random() * Math.max(0, maxX - minX);
    y = minY + Math.random() * Math.max(0, maxY - minY);
    const absLeft = playRect.left + x, absTop = playRect.top + y;
    const overlapsYes = absLeft < yesRect.right + 10 && absLeft + w > yesRect.left - 10 &&
                        absTop < yesRect.bottom + 10 && absTop + h > yesRect.top - 10;
    if (!overlapsYes) break;
  }

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.zIndex = "3";

  yesBtn.style.transform = `scale(${Math.min(1 + noAttempts * 0.035, 1.22)})`;
  if (noAttempts >= 7) {
    noBtn.textContent = "Nope 🙈";
    noMessage.textContent = "The No button has gone on a little adventure 😂 Just tap YES when you're ready ❤️";
  }
}
noBtn.addEventListener("pointerenter", (event) => {
  // Dodge on desktop hover; on touch, it dodges after a tap.
  if (event.pointerType === "mouse" && noAttempts < 7) dodgeNoButton();
});
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dodgeNoButton();
});

function resetProposal() {
  noAttempts = 0;
  noBtn.textContent = "No 🙈";
  noBtn.style.position = "";
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.zIndex = "";
  yesBtn.style.transform = "";
  noMessage.textContent = "Choose wisely, bae 😂💕";
}

function launchConfetti() {
  const shapes = ["💖", "💕", "♡", "✨", "🌸", "🎉"];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.fontSize = `${12 + Math.random() * 20}px`;
    piece.style.animationDuration = `${2.2 + Math.random() * 2.2}s`;
    piece.style.animationDelay = `${Math.random() * .6}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

makeMemoryCards();
