# Our Love Story ♡

A romantic, mobile-first surprise website for mah bae_stie, made by her Gee for Life.

## Run it
1. Unzip this folder.
2. Add your photos to `assets/photos/` using the exact names `memory-01.jpg` through `memory-12.jpg`.
3. Add your song as `assets/music/our-song.mp3` (optional).
4. Open `index.html` in a browser.

For local development, use VS Code with the Live Server extension, or deploy the folder to a static host such as GitHub Pages or Vercel.

## Personalize it
- Edit the love letter in `index.html`.
- Edit memory titles and captions in `script.js`.
- Change colors and styling in `style.css`.
- Music playback requires a real MP3 and user interaction.

## Add more photos later (100 slots are ready)
Easiest way: save pictures as `memory-80.jpg`, `memory-81.jpg` ... up to `memory-100.jpg` in `assets/photos/`. They show up by themselves, empty slots stay hidden.
Titles and captions are already written for every slot. (Optional: override one in `photoNotes` in `script.js`.)

## Videos page (30 slots are ready)
Save clips as `video-01.mp4`, `video-02.mp4` ... up to `video-30.mp4` in `assets/videos/` (MP4 with H.264, under 15 MB each works best).
The "Our moving memories" page appears after the photos only when at least one video exists. Captions are already written. (Optional: override one in `videoNotes` in `script.js`.)

## Old way (still works)
1. Put the picture in `assets/photos/` (any file name, .jpg is best, around 1400px on the long side).
2. In `script.js`, add one line to the `memories` list: `["Title", "Caption", "your-file.jpg"],`
3. Done. Landscape photos get a full-width card automatically.
