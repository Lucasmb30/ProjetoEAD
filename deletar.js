import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const usuarioRemovido = await prisma.user.delete({
    where: { id: 1 },
  });

  console.log(usuarioRemovido);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
