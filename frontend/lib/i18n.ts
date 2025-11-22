export type Language = 'en' | 'pt';

export const translations = {
  en: {
    appName: 'Barist.Ai',
    appDesc: 'Your AI coffee expert. Ask about brewing, beans, origins, and roasting techniques.',
    welcome: 'Welcome to Barist.Ai',
    heroMessage: "Hi! I'm Barist.Ai, your coffee expert. Ask me anything about brewing methods, bean origins, extraction techniques, flavor profiles, or coffee equipment. Let's talk coffee!",
    login: 'Login',
    signup: 'Sign up',
    logout: 'Logout',
    continueWithGoogle: 'Continue with Google',
    recentSearches: 'Recent Searches',
    noHistory: 'Your search history will appear here',
    loggedIn: 'Logged in',
    signInToSave: 'Sign in to save history',
    typeMessage: 'Type your message...',
    send: 'Send',
    endSession: 'End session & give feedback',
    coffeeOnly: 'I answer questions about coffee, brewing techniques, bean origins, flavor profiles, and coffee equipment. Please ask me a coffee-related question!',
    thinking: 'Thinking...',
    language: 'Language',
    theme: 'Theme',
  },
  pt: {
    appName: 'Barist.Ai',
    appDesc: 'Seu especialista em café com IA. Pergunte sobre métodos de preparo, origens dos grãos e técnicas de torrefação.',
    welcome: 'Bem-vindo ao Barist.Ai',
    heroMessage: 'Olá! Eu sou o Barist.Ai, seu especialista em café. Pergunte-me sobre métodos de preparo, origens dos grãos, técnicas de extração, perfis de sabor ou equipamentos de café. Vamos falar sobre café!',
    login: 'Entrar',
    signup: 'Cadastro',
    logout: 'Sair',
    continueWithGoogle: 'Continuar com Google',
    recentSearches: 'Pesquisas Recentes',
    noHistory: 'Seu histórico de pesquisa aparecerá aqui',
    loggedIn: 'Conectado',
    signInToSave: 'Faça login para salvar histórico',
    typeMessage: 'Digite sua mensagem...',
    send: 'Enviar',
    endSession: 'Finalizar sessão e dar feedback',
    coffeeOnly: 'Respondo perguntas sobre café, técnicas de preparo, origens dos grãos, perfis de sabor e equipamentos de café. Por favor, faça uma pergunta relacionada a café!',
    thinking: 'Pensando...',
    language: 'Idioma',
    theme: 'Tema',
  }
};

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key] || key;
}
