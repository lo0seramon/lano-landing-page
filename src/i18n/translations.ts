// Definição do tipo para as traduções
export type TranslationKeys = 
  // Header/Navigation
  'earlyAccess' | 'brandName' | 'mainHeading' | 'subHeading' | 'scrollDown' |
  'home' | 'about' | 'services' | 'contact' | 'login' | 'signup' | 'reasonTitle' |
  
  // Footer
  'copyright' | 'privacyPolicy' | 'termsOfService' |
  
  // Common buttons
  'submit' | 'cancel' | 'save' | 'continue' | 'back' |
  
  // Form labels
  'name' | 'email' | 'password' | 'confirmPassword' | 'phoneNumber' |
  
  // Messages
  'successMessage' | 'errorMessage' | 'loadingMessage' |
  
  // Pain Points
  'painPoint1Title' | 'painPoint1Desc' | 'painPoint2Title' | 'painPoint2Desc' |
  'painPoint3Title' | 'painPoint3Desc' | 'painPoint4Title' | 'painPoint4Desc' |
  'painPoint5Title' | 'painPoint5Desc' | 'notAloneTitle' | 'notAloneDesc' |
  
  // Product Description
  'meetLanoTitle' | 'meetLanoTitle1' | 'meetLanoDesc1' | 'meetLanoDesc2' | 'meetLanoDesc3' | 'meetLanoDesc4' |
  
  // How It Works
  'howItWorksTitle' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' |
  
  // Pricing
  'pricingTitle' | 'pricingDesc' |
  
  // Security
  'securityFeature1' | 'securityFeature2' | 'securityFeature3' | 'securityFeature4' | 'securityDesc' |
  'joinWaitlist' |
  
  // FAQ
  'faqTitle' | 'faq1Question' | 'faq1Answer' | 'faq2Question' | 'faq2Answer' |
  'faq3Question' | 'faq3Answer' | 'faq4Question' | 'faq4Answer' |
  'faq5Question' | 'faq5Answer' | 'faq6Question' | 'faq6Answer' | 'faq7Question' | 'faq7Answer';
export type LanguageCode = 'EN' | 'ES' | 'PT';
export type TranslationsType = Record<LanguageCode, Record<TranslationKeys, string>>;

// Objeto de traduções expandido para incluir todos os textos
export const translations: TranslationsType = {
  EN: {
    // Header/Navigation
    earlyAccess: "Get early access ↗",
    brandName: "lano",
    mainHeading: "SPEND → SAVE",
    subHeading: "Love spending, hate saving? Let Lano flip the script.",
    scrollDown: "Scroll down",
    reasonTitle: "Does this hit home?",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    login: "Log in",
    signup: "Sign up",
    
    // Footer
    copyright: "© 2023 Lano. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    
    // Common buttons
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    continue: "Continue",
    back: "Back",
    
    // Form labels
    name: "Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    phoneNumber: "Phone Number",
    
    // Messages
    successMessage: "Operation completed successfully",
    errorMessage: "An error occurred. Please try again.",
    loadingMessage: "Loading...",

    // Pain Points
    painPoint1Title: "Bills just catch me by surprise.",
    painPoint1Desc: "It's stressful to plan out my money and get ready for unexpected expenses that come out of the wild blue.",
    painPoint2Title: "Cash sits idle, everywhere.",
    painPoint2Desc: "I have no idea what to do with my money; it's hard to know where to put and make the most out of it.",
    painPoint3Title: "Balance? Honestly no clue.",
    painPoint3Desc: "Honestly, I don't even know how much I have; my money is everywhere and I have no head to sort it out.",
    painPoint4Title: "Spend first, pray later.",
    painPoint4Desc: "My money is out of control. I spend first and save what is left, hoping the best will come.",
    painPoint5Title: "Money choices overwhelm me.",
    painPoint5Desc: "I neglect any money decisions. Everything seems too complex, too risky, and too demanding.",
    notAloneTitle: "You are not alone.",
    notAloneDesc: "Around half (47 percent) of U.S. adults say money has a negative impact on their mental health, at least occasionally, causing anxiety, stress, worrisome thoughts, loss of sleep, depression or other effects. About two‑thirds of Americans (64 percent) do not have a formal financial plan. Only a small portion (18 percent) of people feel they are on top of their finances. More than half (56 percent) of Latinos do not have any emergency or buffer fund, reporting less than $400 in their savings account. Today, an average consumer has around $105,056 in mortgage, medical or credit‑card debt.",

    // Product Description
    meetLanoTitle: "Meet Lano,",
    meetLanoTitle1: " your trusted money pilot.",
    meetLanoDesc1: "We turn everyday spending into automatic savings — ",
    meetLanoDesc2: "faster, easier, stress‑free.",
    meetLanoDesc3: "Pay with Lano and we save a bit for you. Little by little. As simple as that. Lano is built for people, not spreadsheets: more care, less jargon.",
    meetLanoDesc4: "Simple. Inclusive. Transparent. Uncompromised.",

    // How It Works
    howItWorksTitle: "How does it work?",
    step1: "Connect your bank accounts",
    step2: "Set a saving goal",
    step3: "Define your rules",
    step4: "Spend and save, automatically",
    step5: "See your money grow faster",

    // Pricing
    pricingTitle: "Free — Forever.",
    pricingDesc: "That is it: there is no fine print, no hidden fees, no magic tricks. We're here to",

    // Security
    securityFeature1: "End‑to‑End Encryption",
    securityFeature2: "Open‑Source Code",
    securityFeature3: "Zero‑Knowledge Security",
    securityFeature4: "Trustless System Design",
    securityDesc: "It is not for debate: we do not take any chances when it comes to your money. What does it mean? You control the keys. Our code is auditable. We cannot read your data. Security relies on math and open scrutiny, not any corporate promise.",
    joinWaitlist: "Join",

    // FAQ
    faqTitle: "FAQ",
    faq1Question: "What is Lano?",
    faq1Answer: "A bilingual money app that automates saving, spending and investing effortlessly during your day-to-day transactions — built especially for Latinos in the U.S..",
    faq2Question: "How was Lano born?",
    faq2Answer: "Lano was invented out of frustration with solutions like Apple Pay and Nubank, solutions that could be truly useful in our day-to-day lives but turned out to fail to add genuíno value.",
    faq3Question: "What can I do with Lano?",
    faq3Answer: "Grow your savings, such as your emergency fund. Get detailed insights on your spendings and investments. Answer financial questions in your daily life. Plan and replan any money moves with curated know-how. (Coming soon) Set investments automatically and receive personalized money advices.",
    faq4Question: "Is Lano already available?",
    faq4Answer: "Currently in closed alpha; join the wait‑list at to be first in line for the public beta coming out around July of 2025.",
    faq5Question: "Why should I use Lano?",
    faq5Answer: "Effortless saving, stress-free spending. Lay back and relax: we've got your finances handled so you can live life worry-free.",
    faq6Question: "What makes Lano different?",
    faq6Answer: "Transparent codes, systems and protocols, and a Latino‑led team obsessed with behavioral change — not just dashboards.",
    faq7Question: "How is my money protected?",
    faq7Answer: "Funds sit in FDIC‑insured partner banks (up to $250,000 per user) and all data is end‑to‑end encrypted."
  },
  ES: {
    // Header/Navigation
    earlyAccess: "Lista de espera ↗",
    brandName: "lano",
    mainHeading: "SPEND → SAVE",
    subHeading: "¿Amás gastar y odiás ahorrar? Dejá que Lano cambie las reglas.",
    scrollDown: "Deslizá hacia abajo",
    reasonTitle: "¿Te suena?",
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    contact: "Contacto",
    login: "Iniciar sesión",
    signup: "Registrarse",
    
    // Footer
    copyright: "© 2023 Lano. Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    
    // Common buttons
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Guardar",
    continue: "Continuar",
    back: "Volver",
    
    // Form labels
    name: "Nombre",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    phoneNumber: "Número de Teléfono",
    
    // Messages
    successMessage: "Operación completada con éxito",
    errorMessage: "Ocurrió un error. Por favor, inténtalo de nuevo.",
    loadingMessage: "Cargando...",

    // Pain Points
    painPoint1Title: "Las cuentas me agarran desprevenido.",
    painPoint1Desc: "Es estresante planear mi plata y prepararme para gastos inesperados que caen de la nada.",
    painPoint2Title: "La guita queda quieta, por todos lados.",
    painPoint2Desc: "No tengo idea qué hacer con mi plata; es difícil saber dónde ponerla y sacarle jugo.",
    painPoint3Title: "¿Saldo? Ni idea.",
    painPoint3Desc: "La verdad, no sé cuánto tengo; mi plata está por todas partes y no tengo cabeza para ordenarla.",
    painPoint4Title: "Gasto primero, rezo después.",
    painPoint4Desc: "Mi plata está fuera de control. Gasto primero y ahorro lo que sobra, rogando que todo salga bien.",
    painPoint5Title: "Las decisiones de plata me superan.",
    painPoint5Desc: "Pateo cualquier decisión financiera. Todo parece demasiado complejo, riesgoso y demandante.",
    notAloneTitle: "No estás solo.",
    notAloneDesc: "El 47 % de los adultos en EE. UU. afirma que el dinero impacta negativamente su salud mental: ansiedad, estrés, insomnio, depresión. Un 64 % no tiene plan financiero formal y solo el 18 % siente controlar sus finanzas. Más del 56 % de los latinos no posee fondo de emergencia (menos de US$ 400 ahorrados). Hoy, el consumidor medio carga unos US$ 105 056 en deudas hipotecarias, médicas o de tarjeta.",

    // Product Description
    meetLanoTitle: "Conocé Lano, tu piloto de confianza",
    meetLanoDesc1: "Convertimos cada gasto cotidiano en ahorro automático —",
    meetLanoDesc2: "rápido, fácil y sin estrés.",
    meetLanoDesc3: "Pagá con Lano y ahorramos un poquito por vos. De a poco. Así de simple. Hecho para personas, no planillas: más cuidado, menos jerga.",
    meetLanoDesc4: "Simple. Inclusiva. Transparente. Sin compromisos.",

    // How It Works
    howItWorksTitle: "¿Cómo funciona?",
    step1: "Conectá tus cuentas bancarias",
    step2: "Fijá tu meta de ahorro",
    step3: "Definí tus reglas",
    step4: "Gastá y ahorrá",
    step5: "Mirá crecer tu plata",

    // Pricing
    pricingTitle: "Gratis — para siempre.",
    pricingDesc: "Sin letra chica, cargos ocultos ni trucos. Queremos que construir riqueza sea accesible para todxs.",

    // Security
    securityFeature1: "Encriptado de extremo a extremo",
    securityFeature2: "Código abierto",
    securityFeature3: "Seguridad zero‑knowledge",
    securityFeature4: "Arquitectura trustless",
    securityDesc: "Vos tenés las llaves. El código se puede auditar. No leemos tus datos. Seguridad basada en matemática y revisión abierta.",
    joinWaitlist: "Quiero unirme",

    // FAQ
    faqTitle: "Preguntas frecuentes",
    faq1Question: "¿Qué es Lano?",
    faq1Answer: "Una app bilingüe que automatiza ahorro, gasto e inversión en tus transacciones diarias — creada para latinos en EE. UU.",
    faq2Question: "¿Cómo nació Lano?",
    faq2Answer: "De la frustración con Apple Pay y Nubank: prometían utilidad diaria pero no sumaron valor real.",
    faq3Question: "¿Qué puedo hacer con Lano?",
    faq3Answer: "• Hacer crecer tus ahorros (fondo de emergencia).\n • Obtener insights detallados de gastos e inversiones.\n • Resolver dudas financieras cotidianas.\n • (Próximamente) Invertir de forma automática y recibir asesoramiento personalizado.",
    faq4Question: "¿Lano ya está disponible?",
    faq4Answer: "Alfa cerrada. Sumate a la lista de espera para la beta pública prevista para julio de 2025.",
    faq5Question: "¿Por qué usar Lano?",
    faq5Answer: "Ahorro sin esfuerzo, gastos sin estrés: relajate mientras cuidamos tus finanzas.",
    faq6Question: "¿Qué hace diferente a Lano?",
    faq6Answer: "Código, sistemas y protocolos transparentes, y un equipo latino obsesionado con el cambio de comportamiento — no solo dashboards.",
    faq7Question: "¿Cómo se protege mi plata?",
    faq7Answer: "Fondos en bancos asociados asegurados por el FDIC (hasta US$ 250 000 por usuario) y datos encriptados de extremo a extremo."
  },
  PT: {
    // Header/Navigation
    earlyAccess: "Lista de espera ↗",
    brandName: "lano",
    mainHeading: "SPEND → SAVE",
    subHeading: "Ama gastar, odeia poupar? Deixe a Lano virar o jogo.",
    scrollDown: "Role para baixo",
    reasonTitle: "Isso soa familiar?",
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    contact: "Contato",
    login: "Entrar",
    signup: "Cadastrar",
    
    // Footer
    copyright: "© 2023 Lano. Todos os direitos reservados.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    
    // Common buttons
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Salvar",
    continue: "Continuar",
    back: "Voltar",
    
    // Form labels
    name: "Nome",
    email: "E-mail",
    password: "Senha",
    confirmPassword: "Confirmar Senha",
    phoneNumber: "Número de Telefone",
    
    // Messages
    successMessage: "Operação concluída com sucesso",
    errorMessage: "Ocorreu um erro. Por favor, tente novamente.",
    loadingMessage: "Carregando...",

    // Pain Points
    painPoint1Title: "Contas aparecem do nada.",
    painPoint1Desc: "É estressante planejar meu dinheiro e me preparar para despesas inesperadas que surgem do nada.",
    painPoint2Title: "Dinheiro parado, em todo canto.",
    painPoint2Desc: "Não faço ideia do que fazer com meu dinheiro; é difícil saber onde colocar e fazer render.",
    painPoint3Title: "Saldo? Sinceramente sem noção.",
    painPoint3Desc: "Sinceramente, nem sei quanto tenho; meu dinheiro está espalhado e não tenho cabeça para organizá‑lo.",
    painPoint4Title: "Gasto primeiro, rezo depois.",
    painPoint4Desc: "Meu dinheiro está fora de controle. Eu gasto primeiro e poupo o que sobra, torcendo pelo melhor.",
    painPoint5Title: "Escolhas financeiras me sobrecarregam.",
    painPoint5Desc: "Eu adio decisões sobre dinheiro. Tudo parece complexo, arriscado e exigente demais.",
    notAloneTitle: "Você não está sozinho.",
    notAloneDesc: "Metade dos adultos nos EUA (47 %) diz que o dinheiro afeta negativamente a saúde mental — ansiedade, estresse, insônia, depressão. Quase 64 % não possui um plano financeiro formal e só 18 % sente estar no controle das finanças. Mais de 56 % dos latinos não têm fundo de emergência (menos de US$ 400 guardados). O consumidor médio carrega cerca de US$ 105 056 em dívidas de hipoteca, saúde ou cartão.",

    // Product Description
    meetLanoTitle: "Conheça a Lano, seu copiloto financeiro",
    meetLanoDesc1: "Transformamos gastos do dia a dia em poupança automática — ",
    meetLanoDesc2: "rápido, fácil, sem estresse.",
    meetLanoDesc3: "Pague com Lano e guardamos um pouquinho pra você. De grão em grão. Simples assim. Lano é feita para pessoas, não planilhas: mais cuidado, menos jargão.",
    meetLanoDesc4: "Simples. Inclusiva. Transparente. Sem concessões.",

    // How It Works
    howItWorksTitle: "Como funciona?",
    step1: "Conecte suas contas bancárias",
    step2: "Defina uma meta de poupança",
    step3: "Escolha suas regras",
    step4: "Gaste e poupe",
    step5: "Veja seu dinheiro crescer",

    // Pricing
    pricingTitle: "Grátis — para sempre.",
    pricingDesc: "Sem letras miúdas, taxas escondidas ou truques. Queremos tornar a construção de patrimônio acessível a todos.",

    // Security
    securityFeature1: "Criptografia ponta a ponta",
    securityFeature2: "Código aberto",
    securityFeature3: "Segurança zero‑knowledge",
    securityFeature4: "Arquitetura trustless",
    securityDesc: "Você controla as chaves. Nosso código é auditável. Não lemos seus dados. Segurança que depende de matemática, não de promessas corporativas.",
    joinWaitlist: "Quero entrar",

    // FAQ
    faqTitle: "FAQ",
    faq1Question: "O que é a Lano?",
    faq1Answer: "Um app bilíngue que automatiza poupar, gastar e investir no dia a dia — feito para latinos nos EUA.",
    faq2Question: "Como nasceu a Lano?",
    faq2Answer: "Frustração com serviços como Apple Pay e Nubank, úteis na teoria, mas que falharam em agregar valor real.",
    faq3Question: "O que posso fazer com a Lano?",
    faq3Answer: "• Crescer sua poupança (fundo de emergência).\n • Receber insights de gastos e investimentos.\n • Tirar dúvidas financeiras no cotidiano.\n • (Em breve) Investir automaticamente e ter conselhos personalizados.",
    faq4Question: "A Lano já está disponível?",
    faq4Answer: "Alfa fechada. Entre na lista de espera para a beta pública prevista para julho de 2025.",
    faq5Question: "Por que usar a Lano?",
    faq5Answer: "Poupança sem esforço, gastos sem estresse — viva tranquilo enquanto cuidamos das suas finanças.",
    faq6Question: "O que torna a Lano diferente?",
    faq6Answer: "Código e protocolos transparentes e uma equipe latina focada em mudança comportamental, não só dashboards.",
    faq7Question: "Como meu dinheiro é protegido?",
    faq7Answer: "Fundos em bancos parceiros segurados pelo FDIC (até US$ 250 000 por usuário) e dados criptografados de ponta a ponta."
  }
};