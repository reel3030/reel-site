let broken = true;

// ぐにゃぐにゃ揺れる
const interval = setInterval(() => {
  if (!broken) return;

  const x = Math.random() * 10 - 5;
  const y = Math.random() * 10 - 5;
  const r = Math.random() * 4 - 2;

  document.body.style.transform =
    `translate(${x}px, ${y}px) rotate(${r}deg)`;
}, 200);

// クリックで修復
document.addEventListener("click", () => {
  if (!broken) return;

  broken = false;
  clearInterval(interval);

  document.body.style.transform = "none";

  // 修復メッセージ
  const msg = document.createElement("div");
  msg.textContent = "修復完了 (エイプリルフールでした)";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.padding = "10px 20px";
  msg.style.background = "black";
  msg.style.color = "white";
  msg.style.borderRadius = "10px";

  document.body.appendChild(msg);
});
