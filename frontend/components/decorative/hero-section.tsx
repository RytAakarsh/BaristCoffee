"use client"

import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const { language } = useLanguage()

  const heroContent = {
    en: {
      greeting: "Hi! I'm Barist.Ai",
      description:
        "I can help you with types of beans, brewing methods, regions and where to buy the best specialty coffees.",
      question: "What's your coffee question today?",
    },
    pt: {
      greeting: "Olá! Sou o Barist.Ai",
      description:
        "Posso ajudar você com tipos de torra, métodos de extração, regiões produtoras e onde comprar os melhores cafés especiais.",
      question: "Qual sua dúvida sobre café hoje?",
    },
  }

  const content = heroContent[language as keyof typeof heroContent]

  return (
    <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between 

       gap-8 lg:gap-12 bg-white">
      
      {/* Right Content */}
      <div className="flex-1  flex flex-col justify-center space-y-6
      p-6
      ">
        <div>
          <h1 className="text-3xl lg:text-5xl    text-foreground mb-4 leading-tight">
            {content.greeting}
          </h1>

          <p className="text-base   lg:text-lg text-foreground leading-relaxed font-light max-w-lg">
            {content.description}
          </p>
        </div>

        <p className="text-base   lg:text-lg font-medium text-foreground pt-4">
          {content.question}
        </p>
      </div>

      {/* Left Image */}
      <div className="flex-1 flex items-center justify-center lg:justify-start min-h-[240px] sm:min-h-[300px]">
        <img
          src="/images/image.png"
          alt="Barist.Ai Expert Barista"
          className=" w-[295px]    -mt-3           
                      sm:w-[360px]              
                      md:w-[320px]        
                      lg:w-[300px] lg:pt-4 lg:mt-0   
                      xl:w-[420px]            
                      object-contain"
          loading="lazy"
        />
      </div>
    </div>
  )
}


// p-6 lg:p-12

// "use client"

// import { useLanguage } from "@/lib/language-context"

// export default function HeroSection() {
//   const { language } = useLanguage()

//   const heroContent = {
//     en: {
//       greeting: "Hi! I'm Barist.Ai",
//       description:
//         "I can help you with types of beans, brewing methods, regions and where to buy the best specialty coffees.",
//       question: "What's your coffee question today?",
//     },
//     pt: {
//       greeting: "Olá! Sou o Barist.Ai",
//       description:
//         "Posso ajudar você com tipos de torra, métodos de extração, regiões produtoras e onde comprar os melhores cafés especiais.",
//       question: "Qual sua dúvida sobre café hoje?",
//     },
//   }

//   const content = heroContent[language as keyof typeof heroContent]

//   return (
//     <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between 
//       p-6 lg:p-12 gap-8 lg:gap-16 bg-white min-h-[480px]">
      
//       {/* Right Content */}
//       <div className="flex-1 flex flex-col justify-center space-y-6">
//         <div>
//           <h1 className="text-3xl lg:text-5xl text-foreground mb-4 leading-tight">
//             {content.greeting}
//           </h1>

//           <p className="text-base lg:text-lg text-foreground leading-relaxed font-light max-w-lg">
//             {content.description}
//           </p>
//         </div>

//         <p className="text-base lg:text-lg font-medium text-foreground pt-4">
//           {content.question}
//         </p>
//       </div>

//       {/* Left Image */}
//       <div className="flex-1 flex items-center justify-center lg:justify-start">
//         <img
//           src="/images/image.png"
//           alt="Barist.Ai Expert Barista"
//           className="object-contain w-[220px] sm:w-[280px] md:w-[350px] lg:w-[320px] xl:w-[597px]"
//           loading="lazy"
//         />
//       </div>
//     </div>
//   )
// }
