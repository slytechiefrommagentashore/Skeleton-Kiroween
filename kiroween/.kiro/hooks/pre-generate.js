export default async function preGenerate(context) {
    // Array of spooky ASCII art
    const spookyArt = [
        // Ghost
        `
     .-.
    (o o)
    | O |
     \\~~/
      V
    `,
        // Pumpkin
        `
      ___
   .-'   '-.
  /  o   o  \\
 |     ^     |
  \\  \\_____/  /
   '-._____.-'
    `,
        // Bat
        `
    /\\___/\\
   (  o.o  )
    > ^ <
   /|     |\\
  (_|     |_)
    `,
        // Skull
        `
     .-.
    (o.o)
     > <
    /| |\\
   (_| |_)
    `,
        // Witch Hat
        `
       /\\
      /  \\
     /    \\
    /______\\
   |________|
    `,
        // Spider
        `
    /\\___/\\
   ( o   o )
    )  ~  (
   /|     |\\
  (_|     |_)
    `
    ];

    // Pick a random spooky character
    const randomArt = spookyArt[Math.floor(Math.random() * spookyArt.length)];

    context.log("👻 AWAKENING THE SPIRITS... 👻");
    context.log(randomArt);
    context.log("🔮 Preparing mystical environment...");
    context.log("🎃 Skeleton Crew Generation Initiated!");

    context.setEnv("DB_PATH", "dev.db");
}