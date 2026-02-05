const envelope = document.querySelector(".envelope");

document.getElementById("open").onclick = () => {
  envelope.classList.add("open");
};

document.getElementById("close").onclick = () => {
  envelope.classList.remove("open");
};
