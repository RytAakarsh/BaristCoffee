const coffeeResponses = {
  en: {
    greetings: [
      "I'd love to help you with your coffee journey!",
      "Great question about coffee! Let me share my expertise.",
      "Ah, coffee—my favorite subject! Here's what you should know:"
    ],
    brewing: "There are many ways to brew coffee, each with unique characteristics:\n\n☕ Espresso: High pressure extraction (9 bars), 25-30 seconds, creates crema and concentrated flavor.\n\n☕ Pour Over: Manual precision brewing, takes 3-4 minutes. Popular methods include V60, Chemex, and Melitta.\n\n☕ French Press: Immersion brewing for 4 minutes, produces full-bodied coffee with oils and sediment.\n\n☕ AeroPress: Combines immersion and pressure for clean, smooth coffee in just 1-3 minutes.\n\n☕ Moka Pot: Stovetop brewing that creates rich, concentrated coffee similar to espresso.\n\n☕ Turkish: Fine grounds simmered with water and spices, served in traditional cups.\n\nEach method requires different grind sizes and temperatures. Would you like details on any specific method?",
    
    origins: "Coffee grows in the 'Bean Belt' between the Tropics of Cancer and Capricorn. Major origins include:\n\n🌍 Ethiopia: Birthplace of coffee, known for fruity and floral notes. Varieties like Yirgacheffe are exceptional.\n\n🌍 Colombia: Balanced, smooth coffees with mild acidity. Perfect for specialty single-origins.\n\n🌍 Kenya: Bright, wine-like characteristics with berry notes. AA and AB grades are premium selections.\n\n🌍 Brazil: Largest producer, smooth, low-acidity, nutty profiles. Great for espresso blends.\n\n🌍 Indonesia: Earthy, full-bodied, low acidity. Sumatra is renowned for bold flavors.\n\n🌍 Costa Rica: Complex, well-balanced with chocolate and citrus notes.\n\n🌍 Guatemala: Rich, full-bodied with spicy notes and volcanic terroir influence.\n\nEach region's altitude, climate, and processing methods create distinct flavor profiles!",
    
    grind: "Grind size is crucial to extraction! Here's the breakdown:\n\n🔨 Extra Coarse: Used for cowboy coffee (boil and settle method).\n\n🔨 Coarse: French press, cupping. Prevents over-extraction in immersion brewing.\n\n🔨 Medium-Coarse: Chemex, cold brew. Balanced extraction timing.\n\n🔨 Medium: Pour-over drip machines. Standard for most automatic drip makers.\n\n🔨 Medium-Fine: Moka pot, AeroPress. Faster extraction required.\n\n🔨 Fine: Espresso, Turkish. Maximum surface area for pressure brewing.\n\n🔨 Extra Fine: Turkish coffee. Powder-like consistency.\n\n⚡ Rule: Coarser = longer extraction time needed. Finer = faster extraction.\n\nUsing the wrong grind size causes bitter (over-extracted) or sour (under-extracted) coffee!",
    
    temperature: "Water temperature dramatically affects extraction!\n\n🌡️ Optimal Range: 195-205°F (90-96°C)\n\n🌡️ Too Hot (>205°C): Over-extraction = bitter, harsh, burnt flavors\n\n🌡️ Too Cold (<185°C): Under-extraction = sour, weak, acidic taste\n\n🌡️ Fresh Boil Cooling: Boil water, wait 30-45 seconds before brewing\n\n🌡️ Method Specifics:\n- Espresso: 200-205°F\n- Pour Over: 195-205°F  \n- French Press: 200-204°F\n- Cold Brew: Room temperature (extracts over 12-24 hours)\n\n⚡ Pro Tip: Use a gooseneck kettle with temperature control for precision. This is one of the biggest improvements you can make to your home brewing!",
    
    ratio: "Coffee-to-water ratio determines strength and flavor balance:\n\n📊 Standard: 1:16 (1g coffee : 16g water)\n- This is the most common recommendation for balanced brewing\n\n📊 Stronger: 1:15 or 1:14\n- Richer, bolder taste\n\n📊 Weaker: 1:17 or 1:18\n- More subtle flavors, less caffeine\n\n📊 Espresso: 1:2 or 1:3\n- Highly concentrated extraction\n\n📊 French Press: 1:15 to 1:17\n\n📊 Pour Over: 1:15 to 1:17\n\n⚖️ How to calculate:\nDesired coffee (grams) × 16 = water needed (grams)\nExample: 20g coffee × 16 = 320g water\n\nUse a kitchen scale for consistency—it's the single best investment for home brewing after a grinder!",
    
    espresso: "Espresso is a concentrated coffee extraction using pressure (9+ bars). Key points:\n\n✨ Recipe: 1:2 ratio (18g coffee → 36g espresso output)\n\n✨ Time: 25-30 seconds from water flow start to finish\n\n✨ Grind: Fine, consistent. Slight resistance when tamping.\n\n✨ Tamping: 30-40lbs of pressure, level application\n\n✨ Extraction Signs:\n- First drops appear in 8-10 seconds (\"tiger striping\")\n- Consistent flow in middle\n- Slight slowing near end\n- Blonde crema indicates under-extraction\n- Dark, thin streams indicate over-extraction\n\n✨ Common Issues:\n- Sour (underextracted): Use finer grind, tamp harder\n- Bitter (overextracted): Use coarser grind, reduce time\n- Slow pour: Grind too fine or tamp too hard\n\nEspresso is the foundation for lattes, cappuccinos, Americanos, and macchiatos!",
    
    default: "That's a great coffee question! While I specialize in coffee expertise, I'd recommend exploring this topic further. Some key coffee fundamentals include:\n\n• Grind size and consistency\n• Water temperature (195-205°F)\n• Coffee-to-water ratio (1:16 standard)\n• Brewing method selection\n• Bean freshness and origin\n• Extraction timing\n• Equipment quality\n\nWould you like me to dive deeper into any of these coffee fundamentals?"
  },
  
  pt: {
    greetings: [
      "Adoraria ajudar você em sua jornada pelo café!",
      "Ótima pergunta sobre café! Deixe-me compartilhar minha experiência.",
      "Ah, café—meu assunto favorito! Aqui está o que você deve saber:"
    ],
    brewing: "Existem muitas maneiras de preparar café, cada uma com características únicas:\n\n☕ Espresso: Extração sob alta pressão (9 bars), 25-30 segundos, cria crema e sabor concentrado.\n\n☕ Coador: Preparo manual de precisão, leva 3-4 minutos. Métodos populares incluem V60, Chemex e Melitta.\n\n☕ Prensa Francesa: Preparo por imersão por 4 minutos, produz café encorpado com óleos.\n\n☕ AeroPress: Combina imersão e pressão para café limpo em 1-3 minutos.\n\n☕ Moka: Preparo em fogão que cria café rico e concentrado semelhante ao espresso.\n\n☕ Turco: Pó fino simado em água quente com especiarias, servido em xícaras tradicionais.\n\nCada método requer tamanhos de moagem e temperaturas diferentes. Gostaria de detalhes sobre algum método específico?",
    
    origins: "O café cresce na 'Cintura do Café' entre os Trópicos de Câncer e Capricórnio. Origens principais incluem:\n\n🌍 Etiópia: Berço do café, conhecido por notas frutadas e florais. Variedades como Yirgacheffe são excepcionais.\n\n🌍 Colômbia: Cafés equilibrados e suaves com acidez leve. Perfeito para single-origins especializados.\n\n🌍 Quênia: Características brilhantes, semelhantes a vinho, com notas de frutas vermelhas.\n\n🌍 Brasil: Maior produtor, suave, baixa acidez, perfis avelados. Ótimo para blends de espresso.\n\n🌍 Indonésia: Terroso, encorpado, baixa acidez. Sumatra é renomado por sabores ousados.\n\n🌍 Costa Rica: Complexo, equilibrado com notas de chocolate e citros.\n\n🌍 Guatemala: Encorpado, rico com notas especiadas e influência vulcânica.\n\nCada região cria perfis de sabor distintos através da altitude, clima e métodos de processamento!",
    
    grind: "O tamanho da moagem é crucial para a extração! Aqui está o detalhamento:\n\n🔨 Extra Grossa: Usada para café cowboy (método de fervura).\n\n🔨 Grossa: Prensa francesa, cupping. Previne sobre-extração em preparo por imersão.\n\n🔨 Média-Grossa: Chemex, cold brew. Tempo de extração equilibrado.\n\n🔨 Média: Coadores de derramamento, máquinas de café. Padrão para a maioria dos fabricadores.\n\n🔨 Média-Fina: Moka pot, AeroPress. Extração rápida necessária.\n\n🔨 Fina: Espresso, café turco. Máxima área de superfície para preparo com pressão.\n\n🔨 Extra Fina: Café turco. Consistência de pó.\n\n⚡ Regra: Mais grossa = tempo de extração mais longo. Mais fina = extração mais rápida.\n\nUsar o tamanho de moagem errado causa café amargo (sobre-extraído) ou azedo (sub-extraído)!",
    
    temperature: "A temperatura da água afeta dramaticamente a extração!\n\n🌡️ Intervalo Ótimo: 90-96°C\n\n🌡️ Muito Quente (>96°C): Sobre-extração = amargo, áspero, sabor queimado\n\n🌡️ Muito Frio (<85°C): Sub-extração = azedo, fraco, sabor ácido\n\n🌡️ Esfriamento Pós-Fervura: Ferva água, aguarde 30-45 segundos antes de preparar\n\n🌡️ Especificidades do Método:\n- Espresso: 93-96°C\n- Coador: 90-96°C\n- Prensa Francesa: 93-96°C\n- Cold Brew: Temperatura ambiente (extrai em 12-24 horas)\n\n⚡ Dica Profissional: Use uma chaleira gooseneck com controle de temperatura para precisão!",
    
    ratio: "A proporção café-água determina força e equilíbrio de sabor:\n\n📊 Padrão: 1:16 (1g café : 16g água)\n- Esta é a recomendação mais comum para preparo equilibrado\n\n📊 Mais Forte: 1:15 ou 1:14\n- Sabor mais rico e ousado\n\n📊 Mais Fraco: 1:17 ou 1:18\n- Sabores mais sutis, menos cafeína\n\n📊 Espresso: 1:2 ou 1:3\n- Extração altamente concentrada\n\n📊 Prensa Francesa: 1:15 a 1:17\n\n📊 Coador: 1:15 a 1:17\n\n⚖️ Como calcular:\nCafé desejado (gramas) × 16 = água necessária (gramas)\nExemplo: 20g café × 16 = 320g água\n\nUse uma balança de cozinha para consistência!",
    
    espresso: "Espresso é uma extração de café concentrada usando pressão (9+ bars). Pontos-chave:\n\n✨ Receita: Proporção 1:2 (18g café → 36g espresso de saída)\n\n✨ Tempo: 25-30 segundos do início ao fim do fluxo de água\n\n✨ Moagem: Fina, consistente. Leve resistência ao tampar.\n\n✨ Tampar: 30-40lbs de pressão, aplicação nivelada\n\n✨ Sinais de Extração:\n- Primeiras gotas aparecem em 8-10 segundos\n- Fluxo consistente no meio\n- Desaceleração leve no final\n- Crema loira indica sub-extração\n- Fluxos escuros e finos indicam sobre-extração\n\n✨ Problemas Comuns:\n- Azedo (sub-extraído): Use moagem mais fina, tampe mais forte\n- Amargo (sobre-extraído): Use moagem mais grossa, reduza o tempo\n\nEspresso é a base para lattes, cappuccinos, Americanos e macchiatos!",
    
    default: "Essa é uma ótima pergunta sobre café! Embora eu seja especialista em café, recomendo explorar este tópico mais. Alguns fundamentos-chave do café incluem:\n\n• Tamanho e consistência da moagem\n• Temperatura da água (90-96°C)\n• Proporção café-água (padrão 1:16)\n• Seleção de método de preparo\n• Frescor e origem dos grãos\n• Tempo de extração\n• Qualidade do equipamento\n\nGostaria que eu aprofundasse em algum desses fundamentos?"
  }
}

export function getCoffeeResponse(question: string, language: string): string {
  const lang = language === 'pt' ? 'pt' : 'en'
  const responses = coffeeResponses[lang]
  const lowerQuestion = question.toLowerCase()

  // Match keywords to specific responses
  if (lowerQuestion.includes('brew') || lowerQuestion.includes('preparo') || lowerQuestion.includes('method') || lowerQuestion.includes('método')) {
    return responses.brewing
  }
  if (lowerQuestion.includes('origin') || lowerQuestion.includes('origem') || lowerQuestion.includes('country') || lowerQuestion.includes('país') || lowerQuestion.includes('region')) {
    return responses.origins
  }
  if (lowerQuestion.includes('grind') || lowerQuestion.includes('moagem') || lowerQuestion.includes('size') || lowerQuestion.includes('tamanho')) {
    return responses.grind
  }
  if (lowerQuestion.includes('temperature') || lowerQuestion.includes('temperatura') || lowerQuestion.includes('heat') || lowerQuestion.includes('calor')) {
    return responses.temperature
  }
  if (lowerQuestion.includes('ratio') || lowerQuestion.includes('proporção') || lowerQuestion.includes('water') || lowerQuestion.includes('água')) {
    return responses.ratio
  }
  if (lowerQuestion.includes('espresso') || lowerQuestion.includes('shot')) {
    return responses.espresso
  }

  // Default response
  return responses.default
}
