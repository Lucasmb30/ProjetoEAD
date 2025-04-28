import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const novoUsuario = await prisma.user.create({
    data: {
      email: "maria@exemplo.com",
      name: "Maria Silva",
    },
  });

  console.log(novoUsuario);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
