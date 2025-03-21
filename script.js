document.addEventListener("DOMContentLoaded", function() {
    const textSaved = localStorage.getItem("textUser");
    if (textSaved) {
        document.getElementById("textInput").value = textSaved;
        document.getElementById("output").textContent = textSaved;
    }
});

function saveText() {
    const texto = document.getElementById("textInput").value;
    localStorage.setItem("textUser", texto);
    document.getElementById("output").textContent = texto;
}

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "62edac38529041b8ad0b40737b416dd2";
    const categories = ["technology", "sports", "science", "general"];
    const elements = {
        technology: document.getElementById("tech-news"),
        sports: document.getElementById("sport-news"),
        science: document.getElementById("science-news"),
        general: document.getElementById("general-news")
    };

    async function fetchNews(category) {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
            const data = await response.json();
            return data.articles.length ? data.articles[0] : null;
        } catch (error) {
            console.error("Error al obtener noticias:", error);
            return null;
        }
    }

    async function loadNews() {
        for (const category of categories) {
            const news = await fetchNews(category);
            if (news) {
                elements[category].innerHTML = `<h3>${news.title}</h3><p>${news.description}</p><a href="${news.url}" target="_blank">Leer más</a>`;
            }
        }
    }

    loadNews();

    document.querySelectorAll(".accordion-button").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('PRESS EVERY SMILEY FACE', 'danger')
  })
}