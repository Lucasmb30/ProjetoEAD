import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const usuarioAtualizado = await prisma.user.update({
    where: { id: 1 }, // ID do usuário que você quer atualizar
    data: { name: "Maria Souza" }, // Dados que serão atualizados
  });

  console.log(usuarioAtualizado);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
