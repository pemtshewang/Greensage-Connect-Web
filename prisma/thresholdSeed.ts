import { db } from "@/lib/db";

async function main() {
  const data = await db.environmentParameterThreshold.createMany({
    data: [
      {
        name: "Tomato",
        type: "temperature",
        maxThreshold: 34,
        minThreshold: 32,
      },
      {
        name: "Cucumber",
        type: "soilMoisture",
        maxThreshold: 70,
        minThreshold: 50,
      },
      {
        name: "Lettuce",
        type: "humidity",
        maxThreshold: 80,
        minThreshold: 60,
      },
      {
        name: "Pepper",
        type: "temperature",
        maxThreshold: 30,
        minThreshold: 25,
      },
      {
        name: "Carrot",
        type: "soilMoisture",
        maxThreshold: 75,
        minThreshold: 55,
      },
      {
        name: "Spinach",
        type: "humidity",
        maxThreshold: 75,
        minThreshold: 65,
      },
      {
        name: "Corn",
        type: "temperature",
        maxThreshold: 35,
        minThreshold: 28,
      },
      {
        name: "Potato",
        type: "soilMoisture",
        maxThreshold: 80,
        minThreshold: 60,
      },
      {
        name: "Broccoli",
        type: "humidity",
        maxThreshold: 85,
        minThreshold: 70,
      },
      {
        name: "Strawberry",
        type: "temperature",
        maxThreshold: 28,
        minThreshold: 22,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
