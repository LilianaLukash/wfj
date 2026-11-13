(function () {
  const STORAGE_KEY = "wfj-lang";

  const I18N = {
    en: {
      meta: {
        homeTitle: "WFJ — Digital Products & Intelligent Automation",
        homeDescription: "WFJ designs and builds digital products, mobile applications, MVPs and intelligent automation solutions.",
        appTitle: "Bilingual Reader — WFJ",
        appDescription: "Improve your language without extra time. Bilingual Reader puts original text, translation and audio in one loop — on a walk, on the road, during sport or at home.",
        privacyTitle: "Privacy Policy — WFJ",
        privacyDescription: "Privacy Policy for WFJ websites, digital products and mobile applications."
      },
      a11y: {
        home: "WFJ home",
        nav: "Primary",
        language: "Language",
        menu: "Open menu",
        menuClose: "Close menu",
        focus: "Areas of focus",
        heroAlt: "A quiet workspace with a laptop and phone showing a bilingual reading experience.",
        appHeroAlt: "Two phones showing a book library and a bilingual listening screen, next to a person listening with headphones.",
        where: "Where you can listen"
      },
      nav: {
        services: "Services",
        work: "Pricing & examples",
        building: "Our products",
        app: "App",
        contact: "Contact"
      },
      hero: {
        eyebrow: "Digital Products & Intelligent Automation",
        title: "We turn ideas into working digital products.",
        lead: "From early concepts and MVPs to mobile applications and intelligent automation, WFJ builds practical technology designed to solve real problems.",
        cta: "Get in touch",
        secondary: "Pricing & examples"
      },
      work: {
        eyebrow: "Pricing & examples",
        title: "Clear prices and real projects.",
        lead: "Prices shown are starting points. The final cost depends on scope. Below are examples of work we’ve already delivered.",
        webKicker: "Website",
        webPrice: "From €280",
        webText: "A clear, responsive site for menus, offers and customer information — ready for desktop and mobile.",
        corpKicker: "Corporate platform",
        corpPrice: "From €940",
        appKicker: "Mobile app · Android MVP",
        appPrice: "From €1,340",
        appText: "An Android MVP of your product — enough to validate the idea with real users and publish to the store.",
        appExampleName: "Bilingual Reader",
        juliosName: "Julio’s",
        juliosText: "Restaurant website with menus, promotions and everything guests need. Works on desktop and mobile.",
        juliosAlt: "Homepage screenshot of Julio’s restaurant website.",
        arvetisName: "ARVETIS",
        arvetisText: "Corporate web platform with responsive interfaces, backend, database, contact forms, email and production deployment.",
        arvetisAlt: "Homepage screenshot of the ARVETIS corporate platform.",
        foodiesKicker: "Web app",
        foodiesName: "Foodies",
        foodiesText: "Recipe app with search, filters, authentication, profiles and favorites — React, Node.js and PostgreSQL.",
        foodiesAlt: "Homepage screenshot of the Foodies web application."
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
        eyebrow: "Our products",
        title: "Building useful products, step by step.",
        lead: "From concept to launch — products for education, productivity and practical digital tools.",
        education: "Education",
        productivity: "Productivity",
        tools: "Digital tools",
        productKicker: "Education · Language learning",
        productName: "Bilingual Reader",
        productText: "Improve your language without extra study time: read and listen to books in the original with translation — on a walk, on the road or at home.",
        productCta: "See the product"
      },
      app: {
        eyebrow: "Read. Listen. Understand.",
        title: "Bilingual Reader",
        claim: "Improve your language without extra time.",
        lead: "Learn naturally by reading and listening to books in the original. Text, audio and translation sit in one loop, so a walk, a commute, a workout or an evening at home already counts as practice.",
        storeCta: "Get it on Google Play",
        download: "Download for Android",
        contact: "Ask about the app",
        howEyebrow: "How it works",
        howTitle: "Original, translation and audio in one uninterrupted process.",
        how1Title: "Hear the original",
        how1Text: "A short fragment in the language of the book — text and voice together.",
        how2Title: "Hear the translation",
        how2Text: "The same passage in the language you already think in.",
        how3Title: "Hear it again",
        how3Text: "The original returns, now with the meaning already in mind.",
        whereEyebrow: "No extra hour in the day",
        whereTitle: "Practice in time you already spend.",
        whereLead: "The screen can stay off. The book keeps going while you move through an ordinary day.",
        whereWalk: "On a walk",
        whereCommute: "On the road",
        whereSport: "During sport",
        whereHome: "At home",
        featuresEyebrow: "In one place",
        featuresTitle: "Text, audio and translation, without switching apps.",
        featTextTitle: "Original and translation",
        featTextText: "See and hear the same fragment in the language of the book, then in the language you already know.",
        featVoiceTitle: "Natural spoken voice",
        featVoiceText: "The book is read aloud in a clear voice, so you train your ear on real sentences, not isolated words.",
        featSettingsTitle: "Flexible listening",
        featSettingsText: "Choose the voice, the translation language and how often you hear the original again. Speed changes without rebuilding the book.",
        featOfflineTitle: "Listen offline",
        featOfflineText: "Download the next chapters to the phone and keep going without a signal — on a plane or a long walk.",
        featLibraryTitle: "A ready library",
        featLibraryText: "Public-domain books to start with, or your own EPUB.",
        factsEyebrow: "What you get",
        factsTitle: "A library you can start today, in the languages you actually read.",
        factFreeTitle: "Free to start",
        factFreeText: "No extra lesson. Open a book and begin.",
        factLevelTitle: "For A2–B2",
        factLevelText: "Real books, not a course of invented phrases.",
        factLoopTitle: "Text + audio + translation",
        factLoopText: "Original → translation → original, in one listening.",
        factOrigTitle: "19 original languages",
        factOrigText: "English, Portuguese, Spanish, French, German, Italian, Polish and more.",
        factTrTitle: "Translation into 3 languages",
        factTrText: "Ukrainian, English or Russian — whichever you think in.",
        getEyebrow: "Android",
        getTitle: "Download the app today",
        getLead: "Bilingual Reader is on Google Play. Open the listing on your phone and install it from the store.",
        installHint: "Google Play is the recommended way, with updates. You can still download the Android file below if you need a direct install.",
        packageLabel: "Android package",
        privacyNote: "A WFJ mobile application. Analytics are described in the Privacy Policy."
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about your project.",
        lead: "Have an idea, a task or a process you’d like to simplify? Get in touch.",
        nameLabel: "Name",
        namePlaceholder: "How should we address you",
        messageLabel: "Message",
        messagePlaceholder: "Briefly describe what you need",
        whatsappCta: "Message on WhatsApp",
        whatsappNote: "Opens WhatsApp with your message ready to send.",
        orEmail: "Or email",
        whatsappTemplate: "Hello! My name is {name}.\n\n{message}"
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
        appsProduct: "This includes Bilingual Reader, our bilingual listening application for learning languages while you walk.",
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
        appTitle: "Bilingual Reader — WFJ",
        appDescription: "Melhore a língua sem tempo extra. O Bilingual Reader junta texto original, tradução e áudio num só ciclo — a caminhar, na estrada, no desporto ou em casa.",
        privacyTitle: "Política de Privacidade — WFJ",
        privacyDescription: "Política de Privacidade dos websites, produtos digitais e aplicações móveis da WFJ."
      },
      a11y: {
        home: "Início WFJ",
        nav: "Principal",
        language: "Idioma",
        menu: "Abrir menu",
        menuClose: "Fechar menu",
        focus: "Áreas de foco",
        heroAlt: "Um espaço de trabalho calmo com um portátil e um telemóvel a mostrar uma experiência de leitura bilingue.",
        appHeroAlt: "Dois telemóveis com a biblioteca e o ecrã de escuta bilingue, ao lado de uma pessoa a ouvir com auscultadores.",
        where: "Onde pode ouvir"
      },
      nav: {
        services: "Serviços",
        work: "Preços e exemplos",
        building: "Os nossos produtos",
        app: "Aplicação",
        contact: "Contacto"
      },
      hero: {
        eyebrow: "Produtos Digitais e Automação Inteligente",
        title: "Transformamos ideias em produtos digitais reais.",
        lead: "Desde conceitos iniciais e MVPs até aplicações móveis e automação inteligente, a WFJ cria tecnologia prática pensada para resolver problemas reais.",
        cta: "Fale connosco",
        secondary: "Preços e exemplos"
      },
      work: {
        eyebrow: "Preços e exemplos",
        title: "Preços claros e projetos reais.",
        lead: "Os valores são preços de partida. O custo final depende do âmbito do projeto. Abaixo estão exemplos do trabalho que já entregámos.",
        webKicker: "Website",
        webPrice: "A partir de €280",
        webText: "Um site responsivo e claro para menus, ofertas e informação ao cliente — pronto para computador e telemóvel.",
        corpKicker: "Plataforma corporativa",
        corpPrice: "A partir de €940",
        appKicker: "Aplicação móvel · MVP Android",
        appPrice: "A partir de €1.340",
        appText: "Um MVP Android do seu produto — para validar a ideia com utilizadores reais e publicar na loja.",
        appExampleName: "Bilingual Reader",
        juliosName: "Julio’s",
        juliosText: "Website de restaurante com menus, promoções e informação para clientes. Funciona no computador e no telemóvel.",
        juliosAlt: "Captura da homepage do website do restaurante Julio’s.",
        arvetisName: "ARVETIS",
        arvetisText: "Plataforma web corporativa com interfaces responsivas, backend, base de dados, formulários de contacto, e-mail e publicação em produção.",
        arvetisAlt: "Captura da homepage da plataforma corporativa ARVETIS.",
        foodiesKicker: "Aplicação web",
        foodiesName: "Foodies",
        foodiesText: "Aplicação de receitas com pesquisa, filtros, autenticação, perfis e favoritos — React, Node.js e PostgreSQL.",
        foodiesAlt: "Captura da homepage da aplicação Foodies."
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
        eyebrow: "Os nossos produtos",
        title: "Criamos produtos úteis, passo a passo.",
        lead: "Da ideia ao lançamento — produtos para educação, produtividade e serviços digitais práticos.",
        education: "Educação",
        productivity: "Produtividade",
        tools: "Ferramentas digitais",
        productKicker: "Educação · Aprendizagem de línguas",
        productName: "Bilingual Reader",
        productText: "Melhore a língua sem tempo extra: leia e ouça livros no original, com tradução, a caminhar, no caminho ou em casa.",
        productCta: "Ver o produto"
      },
      app: {
        eyebrow: "Ler. Ouvir. Compreender.",
        title: "Bilingual Reader",
        claim: "Melhore a língua sem tempo extra.",
        lead: "Aprenda de forma natural a ler e a ouvir livros no original. Texto, áudio e tradução ficam no mesmo ciclo, para um passeio, o caminho, o desporto ou a noite em casa já contarem como prática.",
        storeCta: "Obter no Google Play",
        download: "Descarregar para Android",
        contact: "Pergunte sobre a aplicação",
        howEyebrow: "Como funciona",
        howTitle: "Original, tradução e áudio num processo contínuo.",
        how1Title: "Ouça o original",
        how1Text: "Um fragmento curto na língua do livro — texto e voz juntos.",
        how2Title: "Ouça a tradução",
        how2Text: "A mesma passagem na língua em que já pensa.",
        how3Title: "Ouça outra vez",
        how3Text: "O original regressa, agora com o sentido já presente.",
        whereEyebrow: "Sem uma hora a mais no dia",
        whereTitle: "Pratique no tempo que já gasta.",
        whereLead: "O ecrã pode ficar desligado. O livro continua enquanto o dia segue o seu curso.",
        whereWalk: "A caminhar",
        whereCommute: "Na estrada",
        whereSport: "No desporto",
        whereHome: "Em casa",
        featuresEyebrow: "Num só sítio",
        featuresTitle: "Texto, áudio e tradução, sem mudar de aplicação.",
        featTextTitle: "Original e tradução",
        featTextText: "Veja e ouça o mesmo fragmento na língua do livro e depois na língua que já conhece.",
        featVoiceTitle: "Voz natural",
        featVoiceText: "O livro é lido em voz clara, para treinar o ouvido em frases reais, não em palavras soltas.",
        featSettingsTitle: "Escuta flexível",
        featSettingsText: "Escolha a voz, a língua da tradução e com que frequência ouve o original outra vez. A velocidade muda sem reconstruir o livro.",
        featOfflineTitle: "Ouça sem rede",
        featOfflineText: "Descarregue os próximos capítulos para o telemóvel e continue sem sinal — no avião ou num passeio longo.",
        featLibraryTitle: "Uma biblioteca pronta",
        featLibraryText: "Livros de domínio público para começar, ou o seu próprio EPUB.",
        factsEyebrow: "O que inclui",
        factsTitle: "Uma biblioteca para começar hoje, nas línguas que realmente lê.",
        factFreeTitle: "Gratuito para começar",
        factFreeText: "Sem aula extra. Abra um livro e comece.",
        factLevelTitle: "Para A2–B2",
        factLevelText: "Livros reais, não um curso de frases inventadas.",
        factLoopTitle: "Texto + áudio + tradução",
        factLoopText: "Original → tradução → original, numa só escuta.",
        factOrigTitle: "19 línguas originais",
        factOrigText: "Inglês, português, espanhol, francês, alemão, italiano, polaco e outras.",
        factTrTitle: "Tradução em 3 línguas",
        factTrText: "Ucraniano, inglês ou russo — a língua em que pensa.",
        getEyebrow: "Android",
        getTitle: "Descarregue a aplicação hoje",
        getLead: "O Bilingual Reader está no Google Play. Abra a ficha no telemóvel e instale a partir da loja.",
        installHint: "O Google Play é a forma recomendada, com atualizações. Também pode descarregar o ficheiro Android abaixo se precisar de uma instalação direta.",
        packageLabel: "Pacote Android",
        privacyNote: "Uma aplicação móvel da WFJ. A análise está descrita na Política de Privacidade."
      },
      contact: {
        eyebrow: "Contacto",
        title: "Vamos falar do seu projeto.",
        lead: "Tem uma ideia, uma tarefa ou um processo que quer simplificar? Fale connosco.",
        nameLabel: "Nome",
        namePlaceholder: "Como devemos tratar-lhe",
        messageLabel: "Mensagem",
        messagePlaceholder: "Descreva brevemente o que precisa",
        whatsappCta: "Enviar no WhatsApp",
        whatsappNote: "Abre o WhatsApp com a mensagem já preenchida.",
        orEmail: "Ou e-mail",
        whatsappTemplate: "Olá! Chamo-me {name}.\n\n{message}"
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
        appsProduct: "Isto inclui o Bilingual Reader, a nossa aplicação de escuta bilingue para aprender línguas enquanto caminha.",
        changesTitle: "Alterações",
        changes: "Podemos atualizar esta Política de Privacidade periodicamente. A data de «Última atualização» no topo será alterada quando o fizermos. A versão atual estará sempre disponível nesta página.",
        contactTitle: "Contacto",
        contactHtml: "WFJ<br>30 N Gould St Ste R<br>Sheridan, WY, US<br>E-mail: <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>"
      }
    },
    uk: {
      meta: {
        homeTitle: "WFJ — цифрові продукти та інтелектуальна автоматизація",
        homeDescription: "WFJ розробляє цифрові продукти, мобільні застосунки, MVP та рішення інтелектуальної автоматизації.",
        appTitle: "Bilingual Reader — WFJ",
        appDescription: "Покращуйте мову без додаткового часу. Bilingual Reader зводить оригінал, переклад і аудіо в один цикл — на прогулянці, в дорозі, на спорті чи вдома.",
        privacyTitle: "Політика конфіденційності — WFJ",
        privacyDescription: "Політика конфіденційності сайтів, цифрових продуктів і мобільних застосунків WFJ."
      },
      a11y: {
        home: "Головна WFJ",
        nav: "Основна навігація",
        language: "Мова",
        menu: "Відкрити меню",
        menuClose: "Закрити меню",
        focus: "Напрями",
        heroAlt: "Спокійне робоче місце з ноутбуком і телефоном, на яких двомовне читання.",
        appHeroAlt: "Два телефони з бібліотекою та екраном двомовного слухання поруч із людиною в навушниках.",
        where: "Де можна слухати"
      },
      nav: {
        services: "Послуги",
        work: "Ціни та приклади",
        building: "Наші продукти",
        app: "Застосунок",
        contact: "Контакти"
      },
      hero: {
        eyebrow: "Цифрові продукти та розумна автоматизація",
        title: "Перетворюємо ідеї на робочі цифрові продукти.",
        lead: "Від перших прототипів і MVP до мобільних застосунків та автоматизації процесів — WFJ робить технології, які вирішують конкретні задачі бізнесу.",
        cta: "Написати нам",
        secondary: "Ціни та приклади"
      },
      work: {
        eyebrow: "Ціни та приклади",
        title: "Зрозумілі ціни та реальні проєкти.",
        lead: "Вказано стартові ціни. Підсумкова вартість залежить від обсягу задачі. Нижче — приклади того, що ми вже робили.",
        webKicker: "Сайт",
        webPrice: "від €280",
        webText: "Охайний адаптивний сайт: меню, акції та інформація для клієнтів — зручно і на комп’ютері, і на телефоні.",
        corpKicker: "Корпоративна платформа",
        corpPrice: "від €940",
        appKicker: "Мобільний застосунок · MVP на Android",
        appPrice: "від €1 340",
        appText: "MVP вашого продукту на Android: можна перевірити ідею на реальних користувачах і викласти збірку в магазин.",
        appExampleName: "Bilingual Reader",
        juliosName: "Julio’s",
        juliosText: "Сайт ресторану: меню, акції та все потрібне для гостей. Працює на комп’ютері й на телефоні.",
        juliosAlt: "Скріншот головної сторінки сайту ресторану Julio’s.",
        arvetisName: "ARVETIS",
        arvetisText: "Корпоративний сайт з адаптивною версткою, серверною частиною, базою даних, формами зворотного зв’язку, поштою та публікацією на сервері.",
        arvetisAlt: "Скріншот головної сторінки платформи ARVETIS.",
        foodiesKicker: "Вебзастосунок",
        foodiesName: "Foodies",
        foodiesText: "Застосунок із рецептами: пошук, фільтри, вхід в акаунт, профілі й обране. Стек — React, Node.js і PostgreSQL.",
        foodiesAlt: "Скріншот головної сторінки застосунку Foodies."
      },
      services: {
        eyebrow: "Чим ми займаємося",
        title: "Робимо сайти, мобільні застосунки, MVP і рішення для автоматизації.",
        productsTitle: "Цифрові продукти",
        productsText: "Веб- і мобільні сервіси, заточені під реальні задачі користувачів.",
        mvpTitle: "Розробка MVP",
        mvpText: "Швидко збираємо мінімальну робочу версію, щоб перевірити ідею до великих вкладень.",
        aiTitle: "ШІ та автоматизація",
        aiText: "Автоматизуємо рутину й налаштовуємо розумні процеси — щоб бізнес витрачав менше часу на одне й те саме."
      },
      building: {
        eyebrow: "Наші продукти",
        title: "Створюємо корисні продукти крок за кроком.",
        lead: "Від задуму до запуску — продукти для освіти, продуктивності та зручних цифрових сервісів.",
        education: "Освіта",
        productivity: "Продуктивність",
        tools: "Цифрові інструменти",
        productKicker: "Освіта · Іноземні мови",
        productName: "Bilingual Reader",
        productText: "Підтягуйте мову без окремого часу на навчання: читайте й слухайте книги в оригіналі з перекладом — на прогулянці, в дорозі чи вдома.",
        productCta: "Дивитися продукт"
      },
      app: {
        eyebrow: "Читайте. Слухайте. Розумійте.",
        title: "Bilingual Reader",
        claim: "Покращуйте мову без додаткового часу.",
        lead: "Вчіть мову природно: читайте й слухайте книги в оригіналі. Текст, аудіо й переклад в одному циклі — тож прогулянка, дорога, спорт чи вечір удома вже є практикою.",
        storeCta: "Завантажити в Google Play",
        download: "Завантажити для Android",
        contact: "Запитати про застосунок",
        howEyebrow: "Як це працює",
        howTitle: "Оригінал, переклад і аудіо в одному безперервному процесі.",
        how1Title: "Чуєте оригінал",
        how1Text: "Короткий фрагмент мовою книги — текст і голос разом.",
        how2Title: "Чуєте переклад",
        how2Text: "Той самий уривок мовою, якою ви вже думаєте.",
        how3Title: "Чуєте знову",
        how3Text: "Оригінал повертається, коли зміст уже зрозумілий.",
        whereEyebrow: "Без зайвої години в дні",
        whereTitle: "Практика в часі, який уже є.",
        whereLead: "Екран може бути вимкнений. Книга йде далі, поки триває звичайний день.",
        whereWalk: "На прогулянці",
        whereCommute: "У дорозі",
        whereSport: "На спорті",
        whereHome: "Вдома",
        featuresEyebrow: "В одному місці",
        featuresTitle: "Текст, аудіо й переклад — без перемикання застосунків.",
        featTextTitle: "Оригінал і переклад",
        featTextText: "Бачите й чуєте той самий фрагмент мовою книги, потім мовою, яку вже знаєте.",
        featVoiceTitle: "Природний голос",
        featVoiceText: "Книгу читають чітким голосом, тож вухо тренується на справжніх реченнях, а не на окремих словах.",
        featSettingsTitle: "Гнучке слухання",
        featSettingsText: "Обираєте голос, мову перекладу і як часто знову звучить оригінал. Швидкість змінюється без перезбирання книги.",
        featOfflineTitle: "Слухайте офлайн",
        featOfflineText: "Завантажте наступні розділи на телефон і продовжуйте без мережі — у літаку чи на довгій прогулянці.",
        featLibraryTitle: "Готова бібліотека",
        featLibraryText: "Книги суспільного надбання, щоб почати, або власний EPUB.",
        factsEyebrow: "Що всередині",
        factsTitle: "Бібліотека, яку можна відкрити сьогодні, мовами, якими ви справді читаєте.",
        factFreeTitle: "Безкоштовно почати",
        factFreeText: "Без окремого уроку. Відкрийте книгу й почніть.",
        factLevelTitle: "Для A2–B2",
        factLevelText: "Справжні книги, а не курс вигаданих фраз.",
        factLoopTitle: "Текст + аудіо + переклад",
        factLoopText: "Оригінал → переклад → оригінал в одному прослуховуванні.",
        factOrigTitle: "19 мов оригіналу",
        factOrigText: "Англійська, португальська, іспанська, французька, німецька, італійська, польська та інші.",
        factTrTitle: "Переклад трьома мовами",
        factTrText: "Українська, англійська або російська — мова, якою ви думаєте.",
        getEyebrow: "Android",
        getTitle: "Завантажте застосунок сьогодні",
        getLead: "Bilingual Reader уже в Google Play. Відкрийте картку на телефоні й установіть застосунок із магазину.",
        installHint: "Google Play — рекомендований спосіб, з оновленнями. Файл Android нижче — якщо потрібне пряме встановлення.",
        packageLabel: "Пакет Android",
        privacyNote: "Мобільний застосунок WFJ. Аналітику описано в Політиці конфіденційності."
      },
      contact: {
        eyebrow: "Контакти",
        title: "Давайте обговоримо ваш проєкт.",
        lead: "Є ідея, задача чи процес, який хочеться спростити? Напишіть нам.",
        nameLabel: "Ім’я",
        namePlaceholder: "Як до вас звертатися",
        messageLabel: "Повідомлення",
        messagePlaceholder: "Коротко опишіть задачу",
        whatsappCta: "Написати в WhatsApp",
        whatsappNote: "Відкриється WhatsApp із уже заповненим текстом.",
        orEmail: "Або email",
        whatsappTemplate: "Вітаю! Мене звати {name}.\n\n{message}"
      },
      footer: {
        copy: "© 2026 WFJ. Усі права захищено.",
        privacy: "Політика конфіденційності"
      },
      privacy: {
        eyebrow: "Правове",
        title: "Політика конфіденційності",
        updated: "Останнє оновлення: 26 вересня 2026",
        intro1: "WFJ («ми», «нас», «наш») — корпорація Сполучених Штатів, яка проєктує й будує цифрові продукти, мобільні застосунки та рішення інтелектуальної автоматизації. Ця Політика конфіденційності пояснює, як ми обробляємо інформацію, коли ви відвідуєте наш сайт, пишете нам або користуєтеся цифровим продуктом чи мобільним застосунком WFJ.",
        intro2: "Ми обмежуємо збір даних, не продаємо персональну інформацію і не використовуємо її для сторонньої реклами.",
        whoTitle: "Хто ми",
        whoHtml: "WFJ — корпорація США. Адреса: 30 N Gould St Ste R, Sheridan, WY, US. З питань конфіденційності, запитів чи скарг пишіть на <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectTitle: "Яку інформацію ми збираємо",
        collectIntro: "Залежно від того, як ви з нами взаємодієте, ми можемо обробляти:",
        collectContactHtml: "<strong>Контактну інформацію</strong>, яку ви самі надсилаєте: ім’я, електронну адресу та зміст листа на <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>.",
        collectProductHtml: "<strong>Інформацію продукту</strong>, яку ви створюєте або вводите в застосунку WFJ: налаштування, прогрес чи доданий вміст. Де можливо, це лишається на вашому пристрої.",
        collectAnalyticsHtml: "<strong>Аналітичну інформацію</strong> про користування застосунком: відкриті екрани чи функції, дії, мова, країна чи регіон, тип пристрою, операційна система, версія застосунку та діагностичні дані чи збої.",
        collectPurchaseHtml: "<strong>Інформацію про покупки</strong>, якщо в продукті з’являться платні функції: що куплено, дата, стан облікового запису магазину та чи активний доступ. Повні номери платіжних карток ми не збираємо і не зберігаємо.",
        collectWebHtml: "<strong>Технічні дані сайту</strong>, які хостинг може записувати автоматично: IP-адреса, тип браузера та запитувані сторінки — щоб тримати сайт безпечним і доступним.",
        collectNote: "Щоб переглядати цей сайт, обліковий запис не потрібен. Дані платіжних карток на цьому сайті ми не збираємо.",
        analyticsTitle: "Аналітика",
        analytics1: "Наші мобільні застосунки використовують Google Firebase Analytics, щоб розуміти, якими функціями користуються, знаходити проблеми й покращувати продукт. Firebase може збирати дані пристрою та застосунку, події використання, мову, країну чи регіон і діагностику. Цю інформацію обробляє Google від нашого імені.",
        analytics2Html: "Ми використовуємо Firebase, щоб підтримувати й покращувати продукти WFJ. Ми не показуємо сторонню рекламу за аналітикою і не продаємо ці дані. Політика конфіденційності Google: <a href=\"https://policies.google.com/privacy\" rel=\"noopener noreferrer\">policies.google.com/privacy</a>.",
        paymentsTitle: "Платежі",
        payments: "Деякі застосунки WFJ зараз безкоштовні й пізніше можуть мати платні функції, разові покупки або підписки. Коли покупка з’явиться, оплату обробляє відповідний магазин, наприклад Google Play. Магазин обробляє ваш спосіб оплати. WFJ отримує лише те, що потрібно, щоб відкрити й підтримати покупку, а не повний номер картки.",
        useTitle: "Як ми використовуємо інформацію",
        useIntro: "Інформацію використовуємо лише щоб:",
        use1: "відповідати на звернення й надавати підтримку;",
        use2: "працювати, підтримувати й покращувати сайти, продукти та застосунки;",
        use3: "розуміти користування продуктом через аналітику;",
        use4: "відкривати, відновлювати й підтримувати платні функції, коли вони з’являться;",
        use5: "розуміти й виправляти технічні проблеми;",
        use6: "виконувати юридичні обов’язки.",
        useNote: "Ми не продаємо персональну інформацію. Не використовуємо її для сторонньої реклами і не передаємо брокерам даних.",
        legalTitle: "Правові підстави",
        legal: "Там, де застосовується GDPR, ми обробляємо персональну інформацію на одній або кількох підставах: ваша згода; виконання договору або кроки перед договором, зокрема платні функції; наші законні інтереси в роботі, захисті й покращенні сервісів, збалансовані з вашими правами; або юридичний обов’язок.",
        sharingTitle: "Передача",
        sharing1: "Ми можемо передавати інформацію надійним підрядникам, які допомагають розміщувати сайт, надсилати чи отримувати пошту, вести аналітику, обробляти покупки в магазинах застосунків або працювати застосунку. Це зокрема Google, яка надає Firebase Analytics. Вони можуть обробляти інформацію лише для цих послуг.",
        sharing2: "Ми також можемо розкрити інформацію, якщо цього вимагає закон, щоб захистити права чи безпеку WFJ або інших осіб, або у зв’язку з реорганізацією бізнесу, за умови відповідного захисту.",
        transfersTitle: "Міжнародна передача",
        transfers: "WFJ базується в Сполучених Штатах. Інформацію можуть обробляти в США та в інших країнах, де працюють наші підрядники. Де потрібно, ми застосовуємо відповідні гарантії, зокрема стандартні договірні положення.",
        retentionTitle: "Зберігання",
        retention: "Персональну інформацію зберігаємо лише стільки, скільки потрібно для зазначених цілей. Листи зберігаємо, поки треба опрацювати розмову та подальші кроки. Аналітику й технічні журнали — обмежений час, щоб розуміти користування й підтримувати продукт. Записи покупок — стільки, скільки потрібно для доступу та бухгалтерських чи юридичних вимог. Дані лише на вашому пристрої лишаються під вашим контролем і зникають, коли ви видаляєте застосунок або відповідні дані.",
        securityTitle: "Безпека",
        security: "Ми вживаємо розумних технічних і організаційних заходів проти несанкціонованого доступу, втрати чи зловживання. Жоден спосіб передачі чи зберігання не є повністю безпечним, тож абсолютної безпеки гарантувати не можемо.",
        childrenTitle: "Діти",
        children1: "Деякі продукти WFJ можуть використовувати в навчанні чи в родині. Ми свідомо не збираємо від дітей більше персональної інформації, ніж потрібно для продукту. Не продаємо інформацію дітей і не використовуємо її для реклами. Аналітика в цих продуктах потрібна лише щоб їх підтримувати й покращувати.",
        children2Html: "Якщо ви батько, мати чи опікун і вважаєте, що дитина передала нам персональну інформацію, напишіть на <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. Ми розглянемо запит і видалимо дані, коли це потрібно.",
        rightsTitle: "Ваші права",
        rights1: "Залежно від місця проживання ви можете мати право на доступ до персональної інформації, виправлення, видалення, обмеження чи заперечення проти обробки, а також на перенесення даних. Також можна відкликати згоду, якщо обробка ґрунтується на згоді.",
        rights2: "Якщо ви мешкаєте в Каліфорнії, також можуть діяти права CCPA/CPRA: знати, видаляти й виправляти персональну інформацію та відмовитися від продажу чи поширення. WFJ не продає персональну інформацію і не передає її для міжконтекстної поведінкової реклами.",
        rights3Html: "Щоб скористатися цими правами, напишіть на <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>. Також можна подати скаргу до місцевого органу захисту даних.",
        appsTitle: "Мобільні застосунки",
        apps1: "Ця політика стосується мобільних застосунків WFJ, зокрема тих, що поширюються через Google Play та інші магазини. Зараз вони збирають аналітику через Google Firebase. Деякі пізніше можуть мати платні функції, які обробляє магазин застосунків.",
        apps2: "Якщо застосунок просить необов’язкові дозволи пристрою, наприклад сховище чи сповіщення, ми запитуємо їх лише для функції, яку ви самі вмикаєте. Дозвіл можна відхилити або пізніше змінити в налаштуваннях пристрою.",
        appsProduct: "Це зокрема Bilingual Reader — наш двомовний аудіозастосунок, щоб вивчати мови на прогулянці.",
        changesTitle: "Зміни",
        changes: "Ми можемо час від часу оновлювати цю Політику конфіденційності. Дата «Останнє оновлення» вгорі зміниться. Актуальна версія завжди буде на цій сторінці.",
        contactTitle: "Контакт",
        contactHtml: "WFJ<br>30 N Gould St Ste R<br>Sheridan, WY, US<br>Електронна пошта: <a href=\"mailto:admin@wfj.pt\">admin@wfj.pt</a>"
      }
    },
    ru: {
      meta: {
        homeTitle: "WFJ — цифровые продукты и умная автоматизация",
        homeDescription: "WFJ проектирует и разрабатывает сайты, мобильные приложения, MVP и решения для автоматизации бизнеса.",
        appTitle: "Bilingual Reader — WFJ",
        appDescription: "Подтягивайте язык без отдельного времени на учёбу. Bilingual Reader совмещает оригинал, перевод и озвучку — на прогулке, в дороге, на тренировке или дома.",
        privacyTitle: "Privacy Policy — WFJ",
        privacyDescription: "Privacy Policy for WFJ websites, digital products and mobile applications."
      },
      a11y: {
        home: "На главную WFJ",
        nav: "Главное меню",
        language: "Язык",
        menu: "Открыть меню",
        menuClose: "Закрыть меню",
        focus: "Направления",
        heroAlt: "Рабочее место с ноутбуком и телефоном: на экране — приложение для двуязычного чтения.",
        appHeroAlt: "Два телефона с библиотекой книг и экраном двуязычного прослушивания рядом с человеком в наушниках.",
        where: "Где можно слушать"
      },
      nav: {
        services: "Услуги",
        work: "Цены и примеры",
        building: "Наши продукты",
        app: "Приложение",
        contact: "Контакты"
      },
      hero: {
        eyebrow: "Цифровые продукты и умная автоматизация",
        title: "Превращаем идеи в работающие цифровые продукты.",
        lead: "От первых прототипов и MVP до мобильных приложений и автоматизации процессов — WFJ делает технологии, которые решают конкретные задачи бизнеса.",
        cta: "Написать нам",
        secondary: "Цены и примеры"
      },
      work: {
        eyebrow: "Цены и примеры",
        title: "Понятные цены и реальные проекты.",
        lead: "Указаны стартовые цены. Итоговая стоимость зависит от объёма задачи. Ниже — примеры того, что мы уже делали.",
        webKicker: "Сайт",
        webPrice: "от €280",
        webText: "Аккуратный адаптивный сайт: меню, акции и информация для клиентов — удобно и на компьютере, и на телефоне.",
        corpKicker: "Корпоративная платформа",
        corpPrice: "от €940",
        appKicker: "Мобильное приложение · MVP на Android",
        appPrice: "от €1 340",
        appText: "MVP вашего продукта на Android: можно проверить идею на реальных пользователях и выложить сборку в магазин.",
        appExampleName: "Bilingual Reader",
        juliosName: "Julio’s",
        juliosText: "Сайт ресторана: меню, акции и всё нужное для гостей. Работает на компьютере и на телефоне.",
        juliosAlt: "Скриншот главной страницы сайта ресторана Julio’s.",
        arvetisName: "ARVETIS",
        arvetisText: "Корпоративный сайт с адаптивной вёрсткой, серверной частью, базой данных, формами обратной связи, почтой и публикацией на сервере.",
        arvetisAlt: "Скриншот главной страницы платформы ARVETIS.",
        foodiesKicker: "Веб-приложение",
        foodiesName: "Foodies",
        foodiesText: "Приложение с рецептами: поиск, фильтры, вход в аккаунт, профили и избранное. Стек — React, Node.js и PostgreSQL.",
        foodiesAlt: "Скриншот главной страницы приложения Foodies."
      },
      services: {
        eyebrow: "Чем мы занимаемся",
        title: "Делаем сайты, мобильные приложения, MVP и решения для автоматизации.",
        productsTitle: "Цифровые продукты",
        productsText: "Веб- и мобильные сервисы, заточенные под реальные задачи пользователей.",
        mvpTitle: "Разработка MVP",
        mvpText: "Быстро собираем минимальную рабочую версию, чтобы проверить идею до больших вложений.",
        aiTitle: "ИИ и автоматизация",
        aiText: "Автоматизируем рутину и настраиваем умные процессы — чтобы бизнес тратил меньше времени на одно и то же."
      },
      building: {
        eyebrow: "Наши продукты",
        title: "Создаём полезные продукты шаг за шагом.",
        lead: "От замысла до запуска — продукты для образования, продуктивности и удобных цифровых сервисов.",
        education: "Образование",
        productivity: "Продуктивность",
        tools: "Цифровые инструменты",
        productKicker: "Образование · Иностранные языки",
        productName: "Bilingual Reader",
        productText: "Подтягивайте язык без отдельного времени на учёбу: читайте и слушайте книги в оригинале с переводом — на прогулке, в дороге или дома.",
        productCta: "Смотреть продукт"
      },
      app: {
        eyebrow: "Читать. Слушать. Понимать.",
        title: "Bilingual Reader",
        claim: "Подтягивайте язык без отдельного времени на учёбу.",
        lead: "Учите язык естественно — через книги в оригинале. Текст, озвучка и перевод идут вместе: прогулка, дорога, тренировка или вечер дома уже становятся практикой.",
        storeCta: "Скачать в Google Play",
        download: "Скачать для Android",
        contact: "Спросить про приложение",
        howEyebrow: "Как это работает",
        howTitle: "Оригинал, перевод и озвучка — в одном непрерывном цикле.",
        how1Title: "Слушаете оригинал",
        how1Text: "Короткий фрагмент на языке книги: и текст, и голос.",
        how2Title: "Слушаете перевод",
        how2Text: "Тот же отрывок на языке, на котором вы уже думаете.",
        how3Title: "Слушаете снова",
        how3Text: "Оригинал возвращается — смысл уже понятен.",
        whereEyebrow: "Без лишнего часа в расписании",
        whereTitle: "Практика в то время, которое у вас уже есть.",
        whereLead: "Экран можно выключить. Книга идёт дальше, пока вы просто живёте свой день.",
        whereWalk: "На прогулке",
        whereCommute: "В дороге",
        whereSport: "На тренировке",
        whereHome: "Дома",
        featuresEyebrow: "Всё в одном месте",
        featuresTitle: "Текст, озвучка и перевод — без прыжков между приложениями.",
        featTextTitle: "Оригинал и перевод",
        featTextText: "Сначала видите и слышите фрагмент на языке книги, потом — на языке, который уже знаете.",
        featVoiceTitle: "Живой голос",
        featVoiceText: "Книгу читают внятно: слух тренируется на настоящих предложениях, а не на отдельных словах.",
        featSettingsTitle: "Гибкая настройка",
        featSettingsText: "Можно выбрать голос, язык перевода и как часто снова звучит оригинал. Скорость меняется без пересборки книги.",
        featOfflineTitle: "Офлайн",
        featOfflineText: "Скачайте следующие главы на телефон и слушайте без интернета — в самолёте или на длинной прогулке.",
        featLibraryTitle: "Готовая библиотека",
        featLibraryText: "Книги из общественного достояния, чтобы сразу начать, или свой файл EPUB.",
        factsEyebrow: "Что внутри",
        factsTitle: "Библиотека, с которой можно начать сегодня, на языках, которые вы реально читаете.",
        factFreeTitle: "Бесплатный старт",
        factFreeText: "Без отдельного урока. Откройте книгу и начните.",
        factLevelTitle: "Для уровня A2–B2",
        factLevelText: "Настоящие книги, а не курс из выдуманных фраз.",
        factLoopTitle: "Текст + аудио + перевод",
        factLoopText: "Оригинал → перевод → оригинал — за одно прослушивание.",
        factOrigTitle: "19 языков оригинала",
        factOrigText: "Английский, португальский, испанский, французский, немецкий, итальянский, польский и другие.",
        factTrTitle: "Перевод на 3 языка",
        factTrText: "Украинский, английский или русский — на том, на котором думаете.",
        getEyebrow: "Android",
        getTitle: "Скачайте приложение",
        getLead: "Bilingual Reader уже в Google Play. Откройте карточку на телефоне и установите из магазина.",
        installHint: "Через Google Play удобнее: будут обновления. APK ниже — если нужна прямая установка.",
        packageLabel: "Файл Android (APK)",
        privacyNote: "Мобильное приложение WFJ. Как мы обрабатываем данные — в Privacy Policy."
      },
      contact: {
        eyebrow: "Контакты",
        title: "Давайте обсудим ваш проект.",
        lead: "Есть идея, задача или процесс, который хочется упростить? Напишите нам.",
        nameLabel: "Имя",
        namePlaceholder: "Как к вам обращаться",
        messageLabel: "Сообщение",
        messagePlaceholder: "Кратко опишите задачу",
        whatsappCta: "Написать в WhatsApp",
        whatsappNote: "Откроется WhatsApp с уже заполненным текстом.",
        orEmail: "Или по email",
        whatsappTemplate: "Здравствуйте! Меня зовут {name}.\n\n{message}"
      },
      footer: {
        copy: "© 2026 WFJ. Все права защищены.",
        privacy: "Privacy Policy"
      }
    }
  };

  function lookup(lang, path) {
    var value = path.split(".").reduce(function (node, key) {
      return node && node[key];
    }, I18N[lang]);
    if ((typeof value !== "string") && lang === "ru") {
      value = path.split(".").reduce(function (node, key) {
        return node && node[key];
      }, I18N.en);
    }
    return value;
  }

  function isSupportedLang(lang) {
    return lang === "en" || lang === "pt" || lang === "uk" || lang === "ru";
  }

  function detectLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isSupportedLang(fromUrl)) return fromUrl;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (isSupportedLang(saved)) return saved;
    } catch (err) {}
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("uk") === 0) return "uk";
    if (nav.indexOf("ru") === 0) return "ru";
    if (nav.indexOf("pt") === 0) return "pt";
    return "en";
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = lookup(lang, el.getAttribute("data-i18n-placeholder"));
      if (typeof value === "string") el.setAttribute("placeholder", value);
    });

    var page = document.documentElement.getAttribute("data-page") || "home";
    var title = lookup(lang, "meta." + page + "Title") || lookup(lang, "meta.homeTitle");
    var description = lookup(lang, "meta." + page + "Description") || lookup(lang, "meta.homeDescription");
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

    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    document.querySelectorAll("[data-lang-switch]").forEach(function (el) {
      el.classList.remove("is-open");
      var trigger = el.querySelector("[data-lang-trigger]");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {}
  }

  function closeLangSwitchers() {
    document.querySelectorAll("[data-lang-switch]").forEach(function (el) {
      el.classList.remove("is-open");
      var trigger = el.querySelector("[data-lang-trigger]");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  }

  function initLangSwitch() {
    document.querySelectorAll("[data-lang-switch]").forEach(function (switcher) {
      var trigger = switcher.querySelector("[data-lang-trigger]");
      if (!trigger) return;

      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var willOpen = !switcher.classList.contains("is-open");
        closeLangSwitchers();
        if (willOpen) {
          switcher.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });

      switcher.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });

    document.addEventListener("click", closeLangSwitchers);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLangSwitchers();
    });
  }

  function init() {
    apply(detectLang());
    initLangSwitch();
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
