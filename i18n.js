(function () {
  const STORAGE_KEY = "wfj-lang";

  const I18N = {
    en: {
      meta: {
        homeTitle: "WFJ — Digital Products & Intelligent Automation",
        homeDescription: "WFJ designs and builds digital products, mobile applications, MVPs and intelligent automation solutions.",
        privacyTitle: "Privacy Policy — WFJ",
        privacyDescription: "Privacy Policy for WFJ websites, digital products and mobile applications."
      },
      a11y: {
        home: "WFJ home",
        nav: "Primary",
        language: "Language",
        focus: "Areas of focus",
        heroAlt: "A quiet workspace with a laptop and phone showing a bilingual reading experience."
      },
      nav: {
        services: "Services",
        building: "What we're building",
        contact: "Contact"
      },
      hero: {
        eyebrow: "Digital Products & Intelligent Automation",
        title: "We turn ideas into working digital products.",
        lead: "From early concepts and MVPs to mobile applications and intelligent automation, WFJ builds practical technology designed to solve real problems.",
        cta: "Get in touch",
        secondary: "What we do"
      },
      services: {
        eyebrow: "What we do",
        title: "We design and build digital products, mobile applications, MVPs and intelligent automation solutions.",
        productsTitle: "Digital Products",
        productsText: "Web and mobile products designed around real user needs.",
        mvpTitle: "MVP Development",
        mvpText: "Fast validation of ideas through focused, functional minimum viable products.",
        aiTitle: "AI & Automation",
        aiText: "Intelligent workflows and automation that simplify repetitive processes and help businesses operate more efficiently."
      },
      building: {
        eyebrow: "What we're building",
        title: "Building useful technology, one product at a time.",
        lead: "We explore ideas in education, productivity and intelligent digital tools — from concept and validation to launch.",
        education: "Education",
        productivity: "Productivity",
        tools: "Intelligent digital tools"
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s make ideas happen.",
        lead: "Have an idea, a project or a process that could work better? Get in touch."
      },
      footer: {
        copy: "© 2026 WFJ. All rights reserved.",
        privacy: "Privacy Policy"
      },
      privacy: {
        eyebrow: "Legal",
        title: "Privacy Policy",
        updated: "Last updated: 26 September 2026",
        intro1: "WFJ (“we”, “us”, “our”) is a United States corporation that designs and builds digital products, mobile applications and intelligent automation solutions. This Privacy Policy explains how we handle information when you visit our website, contact us, or use a WFJ digital product or mobile application.",
        intro2: "We keep data collection limited, do not sell personal information, and do not use personal information for third-party advertising.",
        whoTitle: "Who we are",
        whoHtml: "WFJ is a US corporation. Our address is 30 N Gould St Ste R, Sheridan, WY, US. For privacy questions, requests or complaints, contact us at <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectTitle: "Information we collect",
        collectIntro: "Depending on how you interact with us, we may process:",
        collectContactHtml: "<strong>Contact information</strong> you choose to send us, such as your name, email address and the contents of a message to <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectProductHtml: "<strong>Product information</strong> you create or enter inside a WFJ application, such as preferences, progress or content you add. Where possible, this stays on your device.",
        collectAnalyticsHtml: "<strong>Analytics information</strong> about how an application is used, such as screens or features opened, actions taken, language, country or region, device type, operating system, app version, and diagnostic or crash data.",
        collectPurchaseHtml: "<strong>Purchase information</strong> if a product later includes paid features, such as the item or subscription purchased, date, store account status and whether access is active. We do not collect or store full payment card numbers.",
        collectWebHtml: "<strong>Website technical data</strong> that a hosting provider may log automatically, such as IP address, browser type and the pages requested, to keep the site secure and available.",
        collectNote: "We do not require an account to browse this website. We do not collect payment card details on this website.",
        analyticsTitle: "Analytics",
        analytics1: "Our mobile applications use Google Firebase Analytics to understand which features are used, find problems and improve the product. Firebase may collect device and app information, usage events, language, country or region, and diagnostic data. This information is processed by Google on our behalf.",
        analytics2Html: "We use Firebase to operate and improve WFJ products. We do not use analytics to show third-party advertising, and we do not sell analytics data. Google’s privacy policy is available at <a href=\"https://policies.google.com/privacy\" rel=\"noopener noreferrer\">policies.google.com/privacy</a>.",
        paymentsTitle: "Payments",
        payments: "Some WFJ applications are free today and may later include paid features, one-time purchases or subscriptions. When a purchase is offered, payment is handled by the relevant app store, such as Google Play. The store processes your payment method. WFJ receives only what is needed to unlock and support the purchase, not your full card number.",
        useTitle: "How we use information",
        useIntro: "We use information only to:",
        use1: "respond to enquiries and provide support;",
        use2: "operate, maintain and improve our websites, products and applications;",
        use3: "understand product usage through analytics;",
        use4: "unlock, restore and support paid features when they become available;",
        use5: "understand and fix technical issues;",
        use6: "comply with legal obligations.",
        useNote: "We do not sell personal information. We do not use personal information to show third-party advertising, and we do not share it with data brokers.",
        legalTitle: "Legal bases",
        legal: "Where the GDPR applies, we process personal information on one or more of these bases: your consent; performance of a contract or steps requested before a contract, including paid features; our legitimate interests in running, securing and improving our services, balanced against your rights; or a legal obligation.",
        sharingTitle: "Sharing",
        sharing1: "We may share information with trusted service providers who help us host this website, send or receive email, provide analytics, process app-store purchases, or operate an application. This includes Google, which provides Firebase Analytics. They may process information only to provide those services.",
        sharing2: "We may also disclose information if required by law, to protect the rights or safety of WFJ or others, or in connection with a reorganisation of the business, provided appropriate protections remain in place.",
        transfersTitle: "International transfers",
        transfers: "WFJ is based in the United States. Information may be processed in the United States and in other countries where our service providers operate. Where required, we use appropriate safeguards, such as standard contractual clauses.",
        retentionTitle: "Retention",
        retention: "We keep personal information only for as long as needed for the purposes above. Contact emails are kept for as long as needed to handle the conversation and any follow-up. Analytics and technical logs are kept for a limited period needed to understand usage and operate the product. Purchase records are kept as long as needed to provide access and meet accounting or legal requirements. Information stored only on your device remains under your control and is removed when you delete the application or the relevant data.",
        securityTitle: "Security",
        security: "We take reasonable technical and organisational measures to protect information against unauthorised access, loss or misuse. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
        childrenTitle: "Children",
        children1: "Some WFJ products may be used in educational or family settings. We do not knowingly collect more personal information from children than is needed to provide the product. We do not sell children’s information, and we do not use it for advertising. Analytics in these products is used only to operate and improve the product.",
        children2Html: "If you are a parent or guardian and believe a child has provided personal information to us, please contact <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. We will review the request and delete the information where required.",
        rightsTitle: "Your rights",
        rights1: "Depending on your location, you may have the right to request access to your personal information, correction, deletion, restriction or objection to processing, and data portability. You may also withdraw consent where processing is based on consent.",
        rights2: "If you are a California resident, you may also have rights under the CCPA/CPRA, including the right to know, delete and correct personal information and to opt out of the sale or sharing of personal information. WFJ does not sell personal information and does not share it for cross-context behavioural advertising.",
        rights3Html: "To exercise these rights, email <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. You may also lodge a complaint with your local data protection authority.",
        appsTitle: "Mobile applications",
        apps1: "This policy applies to mobile applications published by WFJ, including applications distributed through Google Play and other app stores. Those applications currently collect analytics through Google Firebase. Some may later include paid features processed through the app store.",
        apps2: "If an application uses optional device permissions, such as storage or notifications, we request them only to provide a feature you choose to use. You can deny or later change permissions in your device settings.",
        changesTitle: "Changes",
        changes: "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. The current version will always be available on this page.",
        contactTitle: "Contact",
        contactHtml: "WFJ<br>30 N Gould St Ste R<br>Sheridan, WY, US<br>Email: <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>"
      }
    },
    pt: {
      meta: {
        homeTitle: "WFJ — Produtos Digitais e Automação Inteligente",
        homeDescription: "A WFJ concebe e desenvolve produtos digitais, aplicações móveis, MVPs e soluções de automação inteligente.",
        privacyTitle: "Política de Privacidade — WFJ",
        privacyDescription: "Política de Privacidade dos websites, produtos digitais e aplicações móveis da WFJ."
      },
      a11y: {
        home: "Início WFJ",
        nav: "Principal",
        language: "Idioma",
        focus: "Áreas de foco",
        heroAlt: "Um espaço de trabalho calmo com um portátil e um telemóvel a mostrar uma experiência de leitura bilingue."
      },
      nav: {
        services: "Serviços",
        building: "O que estamos a construir",
        contact: "Contacto"
      },
      hero: {
        eyebrow: "Produtos Digitais e Automação Inteligente",
        title: "Transformamos ideias em produtos digitais reais.",
        lead: "Desde conceitos iniciais e MVPs até aplicações móveis e automação inteligente, a WFJ cria tecnologia prática pensada para resolver problemas reais.",
        cta: "Fale connosco",
        secondary: "O que fazemos"
      },
      services: {
        eyebrow: "O que fazemos",
        title: "Concebemos e desenvolvemos produtos digitais, aplicações móveis, MVPs e soluções de automação inteligente.",
        productsTitle: "Produtos Digitais",
        productsText: "Produtos web e móveis desenhados em torno das necessidades reais dos utilizadores.",
        mvpTitle: "Desenvolvimento de MVP",
        mvpText: "Validação rápida de ideias através de produtos mínimos viáveis, focados e funcionais.",
        aiTitle: "IA e Automação",
        aiText: "Fluxos de trabalho inteligentes e automação que simplificam processos repetitivos e ajudam as empresas a operar com mais eficiência."
      },
      building: {
        eyebrow: "O que estamos a construir",
        title: "Construímos tecnologia útil, um produto de cada vez.",
        lead: "Exploramos ideias em educação, produtividade e ferramentas digitais inteligentes — do conceito e validação até ao lançamento.",
        education: "Educação",
        productivity: "Produtividade",
        tools: "Ferramentas digitais inteligentes"
      },
      contact: {
        eyebrow: "Contacto",
        title: "Vamos fazer as ideias acontecer.",
        lead: "Tem uma ideia, um projeto ou um processo que podia funcionar melhor? Fale connosco."
      },
      footer: {
        copy: "© 2026 WFJ. Todos os direitos reservados.",
        privacy: "Política de Privacidade"
      },
      privacy: {
        eyebrow: "Legal",
        title: "Política de Privacidade",
        updated: "Última atualização: 26 de setembro de 2026",
        intro1: "A WFJ («nós», «nos», «nosso») é uma sociedade dos Estados Unidos que concebe e desenvolve produtos digitais, aplicações móveis e soluções de automação inteligente. Esta Política de Privacidade explica como tratamos a informação quando visita o nosso website, nos contacta ou utiliza um produto digital ou uma aplicação móvel da WFJ.",
        intro2: "Limitamos a recolha de dados, não vendemos informação pessoal e não utilizamos informação pessoal para publicidade de terceiros.",
        whoTitle: "Quem somos",
        whoHtml: "A WFJ é uma sociedade dos EUA. A nossa morada é 30 N Gould St Ste R, Sheridan, WY, US. Para questões, pedidos ou reclamações de privacidade, contacte-nos em <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectTitle: "Informação que recolhemos",
        collectIntro: "Consoante a forma como interage connosco, podemos tratar:",
        collectContactHtml: "<strong>Informação de contacto</strong> que nos envia por escolha própria, como o nome, o endereço de e-mail e o conteúdo de uma mensagem para <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectProductHtml: "<strong>Informação do produto</strong> que cria ou introduz numa aplicação da WFJ, como preferências, progresso ou conteúdos que adiciona. Sempre que possível, esta informação permanece no seu dispositivo.",
        collectAnalyticsHtml: "<strong>Informação de análise</strong> sobre a utilização de uma aplicação, como ecrãs ou funcionalidades abertos, ações realizadas, idioma, país ou região, tipo de dispositivo, sistema operativo, versão da aplicação e dados de diagnóstico ou falhas.",
        collectPurchaseHtml: "<strong>Informação de compras</strong> se um produto vier a incluir funcionalidades pagas, como o artigo ou a subscrição adquiridos, a data, o estado da conta da loja e se o acesso está ativo. Não recolhemos nem armazenamos números completos de cartões de pagamento.",
        collectWebHtml: "<strong>Dados técnicos do website</strong> que um prestador de alojamento pode registar automaticamente, como o endereço IP, o tipo de navegador e as páginas pedidas, para manter o site seguro e disponível.",
        collectNote: "Não é necessária uma conta para navegar neste website. Não recolhemos dados de cartões de pagamento neste website.",
        analyticsTitle: "Análise",
        analytics1: "As nossas aplicações móveis utilizam o Google Firebase Analytics para perceber quais as funcionalidades usadas, detetar problemas e melhorar o produto. O Firebase pode recolher informação do dispositivo e da aplicação, eventos de utilização, idioma, país ou região e dados de diagnóstico. Esta informação é tratada pela Google em nosso nome.",
        analytics2Html: "Utilizamos o Firebase para operar e melhorar os produtos da WFJ. Não usamos dados de análise para mostrar publicidade de terceiros nem vendemos esses dados. A política de privacidade da Google está disponível em <a href=\"https://policies.google.com/privacy\" rel=\"noopener noreferrer\">policies.google.com/privacy</a>.",
        paymentsTitle: "Pagamentos",
        payments: "Algumas aplicações da WFJ são gratuitas hoje e poderão mais tarde incluir funcionalidades pagas, compras únicas ou subscrições. Quando existir uma compra, o pagamento é tratado pela loja de aplicações correspondente, como o Google Play. A loja processa o seu método de pagamento. A WFJ recebe apenas o necessário para desbloquear e apoiar a compra, não o número completo do cartão.",
        useTitle: "Como utilizamos a informação",
        useIntro: "Utilizamos a informação apenas para:",
        use1: "responder a pedidos e prestar apoio;",
        use2: "operar, manter e melhorar os nossos websites, produtos e aplicações;",
        use3: "perceber a utilização do produto através de análise;",
        use4: "desbloquear, restaurar e apoiar funcionalidades pagas quando estiverem disponíveis;",
        use5: "compreender e corrigir problemas técnicos;",
        use6: "cumprir obrigações legais.",
        useNote: "Não vendemos informação pessoal. Não utilizamos informação pessoal para mostrar publicidade de terceiros e não a partilhamos com intermediários de dados.",
        legalTitle: "Fundamentos legais",
        legal: "Quando o RGPD se aplica, tratamos informação pessoal com um ou mais destes fundamentos: o seu consentimento; a execução de um contrato ou diligências pré-contratuais, incluindo funcionalidades pagas; os nossos interesses legítimos em operar, proteger e melhorar os serviços, ponderados face aos seus direitos; ou uma obrigação legal.",
        sharingTitle: "Partilha",
        sharing1: "Podemos partilhar informação com prestadores de confiança que nos ajudam a alojar este website, enviar ou receber e-mail, prestar análise, processar compras nas lojas de aplicações ou operar uma aplicação. Isto inclui a Google, que disponibiliza o Firebase Analytics. Estes prestadores só podem tratar a informação para prestar esses serviços.",
        sharing2: "Também podemos divulgar informação se a lei o exigir, para proteger os direitos ou a segurança da WFJ ou de terceiros, ou no contexto de uma reorganização do negócio, desde que se mantenham as proteções adequadas.",
        transfersTitle: "Transferências internacionais",
        transfers: "A WFJ tem sede nos Estados Unidos. A informação pode ser tratada nos Estados Unidos e noutros países onde operam os nossos prestadores. Quando for exigido, utilizamos salvaguardas adequadas, como as cláusulas contratuais-tipo.",
        retentionTitle: "Conservação",
        retention: "Conservamos informação pessoal apenas durante o tempo necessário para as finalidades acima. Os e-mails de contacto são guardados enquanto for necessário para tratar a conversa e qualquer seguimento. Os dados de análise e os registos técnicos são conservados durante um período limitado, necessário para perceber a utilização e operar o produto. Os registos de compras são conservados o tempo necessário para dar acesso e cumprir requisitos contabilísticos ou legais. A informação armazenada apenas no seu dispositivo permanece sob o seu controlo e é removida quando apaga a aplicação ou os dados correspondentes.",
        securityTitle: "Segurança",
        security: "Adotamos medidas técnicas e organizativas razoáveis para proteger a informação contra acesso não autorizado, perda ou utilização indevida. Nenhum método de transmissão ou armazenamento é completamente seguro, pelo que não podemos garantir segurança absoluta.",
        childrenTitle: "Crianças",
        children1: "Alguns produtos da WFJ podem ser usados em contextos educativos ou familiares. Não recolhemos intencionalmente mais informação pessoal de crianças do que a necessária para prestar o produto. Não vendemos informação de crianças nem a utilizamos para publicidade. A análise nestes produtos serve apenas para os operar e melhorar.",
        children2Html: "Se for progenitor ou tutor e considerar que uma criança nos forneceu informação pessoal, contacte <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. Analisaremos o pedido e apagaremos a informação quando for exigido.",
        rightsTitle: "Os seus direitos",
        rights1: "Consoante a sua localização, pode ter o direito de pedir acesso à sua informação pessoal, retificação, apagamento, limitação ou oposição ao tratamento, bem como a portabilidade dos dados. Também pode retirar o consentimento quando o tratamento se baseie no consentimento.",
        rights2: "Se for residente na Califórnia, também pode ter direitos ao abrigo da CCPA/CPRA, incluindo o direito de conhecer, apagar e corrigir informação pessoal e de recusar a venda ou a partilha de informação pessoal. A WFJ não vende informação pessoal nem a partilha para publicidade comportamental entre contextos.",
        rights3Html: "Para exercer estes direitos, envie um e-mail para <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. Também pode apresentar uma reclamação à autoridade de proteção de dados do seu país.",
        appsTitle: "Aplicações móveis",
        apps1: "Esta política aplica-se às aplicações móveis publicadas pela WFJ, incluindo aplicações distribuídas através do Google Play e de outras lojas. Essas aplicações recolhem atualmente dados de análise através do Google Firebase. Algumas poderão mais tarde incluir funcionalidades pagas processadas pela loja de aplicações.",
        apps2: "Se uma aplicação utilizar permissões opcionais do dispositivo, como armazenamento ou notificações, pedimo-las apenas para uma funcionalidade que escolheu usar. Pode recusar ou alterar as permissões mais tarde nas definições do dispositivo.",
        changesTitle: "Alterações",
        changes: "Podemos atualizar esta Política de Privacidade periodicamente. A data de «Última atualização» no topo será alterada quando o fizermos. A versão atual estará sempre disponível nesta página.",
        contactTitle: "Contacto",
        contactHtml: "WFJ<br>30 N Gould St Ste R<br>Sheridan, WY, US<br>E-mail: <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>"
      }
    }
  };

  function lookup(lang, path) {
    return path.split(".").reduce(function (node, key) {
      return node && node[key];
    }, I18N[lang]);
  }

  function detectLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "pt") return fromUrl;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "pt") return saved;
    } catch (err) {}
    return (navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = lookup(lang, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = lookup(lang, el.getAttribute("data-i18n-html"));
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = lookup(lang, el.getAttribute("data-i18n-aria"));
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = lookup(lang, el.getAttribute("data-i18n-alt"));
      if (typeof value === "string") el.setAttribute("alt", value);
    });

    var page = document.documentElement.getAttribute("data-page") || "home";
    var title = lookup(lang, page === "privacy" ? "meta.privacyTitle" : "meta.homeTitle");
    var description = lookup(lang, page === "privacy" ? "meta.privacyDescription" : "meta.homeDescription");
    if (title) document.title = title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute("content", description);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute("content", description);

    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {}
  }

  function init() {
    apply(detectLang());
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.getAttribute("data-set-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
