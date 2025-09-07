// --- Carrossel ---
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
let interval = setInterval(run, 5000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx < 0) {
    idx = img.length - 1;
  } else if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Botões carrossel
document.getElementById("next").addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

document.getElementById("prev").addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}

// --- Sidebar ---
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.style.width = "250px";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
});

// --- Formulário ---
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Por favor, insira um endereço de email válido.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}
// --- Botão de voltar ao topo ---
const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  }
  else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// --- Botão de desejo ---
function expressarDesejo() {
  alert("Obrigado por expressar seu desejo! Entraremos em contato em breve.");
}
document.getElementById("botaoDesejo").addEventListener("click", expressarDesejo);

// --- Fim do código ---