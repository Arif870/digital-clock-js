let h1 = document.querySelector("h1");

function clock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  let h;
  if (hour > 12) {
    h = hour - 12;
  }
  return `${h} : ${minute} : ${seconds}`;
}
clock();

setInterval(() => {
  h1.innerText = clock();
});
