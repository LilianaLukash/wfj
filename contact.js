(function () {
  var WHATSAPP_NUMBER = "351919272201";

  var TEMPLATES = {
    en: "Hello, my name is {name}.\n\n{message}",
    pt: "Olá, chamo-me {name}.\n\n{message}",
    uk: "Вітаю, мене звати {name}.\n\n{message}"
  };

  function currentLang() {
    var lang = document.documentElement.dataset.lang || document.documentElement.lang;
    if (lang === "pt" || lang === "uk") return lang;
    return "en";
  }

  function buildMessage(name, message) {
    var template = TEMPLATES[currentLang()] || TEMPLATES.en;
    return template
      .replace("{name}", name)
      .replace("{message}", message);
  }

  function init() {
    var form = document.getElementById("whatsapp-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var nameField = form.elements.namedItem("name");
      var messageField = form.elements.namedItem("message");
      var name = (nameField && nameField.value || "").trim();
      var message = (messageField && messageField.value || "").trim();

      if (!name || !message) {
        form.reportValidity();
        return;
      }

      var text = buildMessage(name, message);
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
