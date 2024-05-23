function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
    if (idade >= 17) {
      if (idade >= 14) {
        return "Simplesmente Acontece";
      } else {
        if (idade >= 12) {
          if(gostaDeFantasia || gostaDeAventura) {
            return "Harry Potter";          
          } else{
           return "Continência ao Amor";
          }
        } else {
          if (gostaDeFantasia) {
            return " Avatar ";
          } else {
            return "Sol da Meia-noite";
          }
        }
      }
    } else {
      if (gostaDeFantasia) {
        return "Como Eu Era Antes de Você";
      } else {
        return "Planeta dos Macacos: A Guerra";
      }
    }
  }