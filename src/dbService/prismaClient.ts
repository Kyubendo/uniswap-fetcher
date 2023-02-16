import { PrismaClient } from "@prisma/client";

const prismaClient = {
  instance: new PrismaClient(),
};
Object.freeze(prismaClient);
export default prismaClient;
