const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const allUsers = await prisma.usuario.findMany();
  console.log(allUsers);
}
main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
