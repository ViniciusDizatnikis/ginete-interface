const artists = [
  {
    id: "67f5ba46d0a38d90a7f043f6",
    name: " Gaúcho Da Fronteira",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1744156991/É_Disso_Que_O_Velho_Gosta_-_1280x720_1_klonew.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1744157131/e1b53490-27d1-45b2-93f2-4a9e309d00da.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b92118ff82a5f736efed16",
    name: "Baitaca",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740185765/imagem_2025-02-21_215528529_admeem.png",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740185918/baed7714-15fc-462a-a01a-5943267b4adb.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67ba316af6ac0f6cbc6d65cb",
    name: "Chiquito e Bordoneio",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740255527/Roda_Morena_-_1280x720_1_rczrum.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740255590/3ccfac79-4ec1-4971-86ab-86a2176c1f13.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b92407ff82a5f736efed1b",
    name: "Conjunto Fogo de Chão",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740186606/Compadre_Chico_-_1280x720_1_i8pfz3.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740186610/78960BB9-84D2-470F-B436-7863AE8E018D_dybdau.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67be414d0fae9d976480933e",
    name: "Crioulo Batista",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740521765/imagem_2025-02-25_191421045_hn6hvo.png",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740521777/20510b3b-bc7f-4c17-9868-59baa02f92b5.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b7adc7fa3ce8a3fb6c68c0",
    name: "Eco do Minuano e Bonitinho",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740090573/Vem_Dançar_-_1280x720_1_hpcfjj.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740090795/19a93a04-8734-4786-b301-20328072b4a0.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b7b2f6fa3ce8a3fb6c68c9",
    name: "Garotos de Ouro",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740092092/Os_Garotos_de_Ouro_1992_Álbum_Completo_-_1280x720_1_ei18pc.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740092292/33af039b-2af0-43af-8c22-781e76d0b6d9.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b791f83eec1ce90bb7e9d8",
    name: "Grupo Bailanta",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740083593/Lambada_Macanuda_-_1280x720_1_j8hpzm.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740083689/5a7855e3-c68c-4681-9a44-8a932de790c3.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b7b12dfa3ce8a3fb6c68c7",
    name: "Grupo Candeeiro",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740091667/Alambrador_-_1280x720_1_sece71.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740091853/2ac32576-c080-447e-9665-9dca50fbeee4.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b7a1a93eec1ce90bb7e9e1",
    name: "Grupo Cordeona",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740087564/5bc4675b-f31a-46ab-9e55-f455e2b07f38.png",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740087679/dc8e8853-b69a-4995-9a60-1a9b7fdb8897.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b7b018fa3ce8a3fb6c68c5",
    name: "Grupo Minuano",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740091360/Rever_a_Castelhana_-_1280x720_1_njmbzz.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740091402/9716655b-e2d5-4caf-9eb3-ba11ed0c6c92.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b9dba4ca7d2afe40094359",
    name: "Grupo Renascença",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740233557/Toca_Toca_Seu_Gaiteiro_-_1280x720_1_hlqqd3.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740233603/d24bbaf8-d6d8-40b3-bfc2-10d44952b12a.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67bfad10dac31b76a792e8b7",
    name: "Grupo Reponte",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740614760/Chega_de_Lida_-_1280x720_1_kbje9a.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740614906/e916d438-94d9-4bed-b74d-06a2b359b75d.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b92a94ff82a5f736efed2b",
    name: "Grupo Rodeio",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740188213/Sina_de_Andejo_-_1280x720_1_fhhcz1.jpg",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740188302/fe292311-99bd-4bc7-b43a-0361c19c5ed9.png",
    createdAt: "27/09/2026 21:31",
  },
  {
    id: "67b92c4fff82a5f736efed2e",
    name: "João Luiz Correia",
    image:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740188673/imagem_2025-02-21_224430273_pyugvs.png",
    banner:
      "https://res.cloudinary.com/dlxsvqxnj/image/upload/v1740188745/2198549c-dc79-4503-8f60-32c8976f40c3.png",
    createdAt: "27/09/2026 21:31",
  },
];

export default artists;
