import { PairDto } from "../dto/pairsDto";
import prismaClient from "./prismaClient";

// Fully update pairs
export const updatePairs = async (res: Response) => {
  const result = await res.json();
  const pairs: PairDto[] = result.data.pairs;

  const data = pairs.map((e) => ({
    ...e,
    token0: e.token0.id,
    token1: e.token1.id,
  }));

  const prisma = prismaClient.instance;
  await prisma.pair.deleteMany({});
  await prisma.pair.createMany({ data });
};

// Add only new pairs, don't delete old ones
export const updatePairs0 = async (res: Response) => {
  const result = await res.json();
  const pairs: PairDto[] = result.data.pairs;

  const data = pairs.map((e) => ({
    ...e,
    token0: e.token0.id,
    token1: e.token1.id,
  }));

  const prisma = prismaClient.instance;
  for (const pair of data) {
    await prisma.pair.upsert({
      where: { id: pair.id },
      update: {},
      create: { ...pair },
    });
  }
};
