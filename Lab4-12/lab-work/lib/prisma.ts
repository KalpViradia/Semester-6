// import "dotenv/config";
// import { PrismaMariaDb } from '@prisma/adapter-mariadb';
// import { PrismaClient } from '../generated/prisma/client';

// const adapter = new PrismaMariaDb({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   // connectionLimit: 5
// });
// const prisma = new PrismaClient({ adapter });

// export { prisma }

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    adapter: new PrismaMariaDb({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      connectionLimit: 1, // VERY IMPORTANT
    }),
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
