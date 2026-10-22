interface Configuracao {
  tema: string;
}

const config1: Configuracao = {
  tema: "escuro",
};

const config2 = {
  tema: "escuro",
} satisfies Configuracao;

config1.tema
config2.tema