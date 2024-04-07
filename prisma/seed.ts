import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "037f53be-81ca-4a8d-89db-bc783d97821d",
      title: "Unite summit",
      slug: "unite-summit",
      details: "um evento p/ devs apaixonados",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
});
