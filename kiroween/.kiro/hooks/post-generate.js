export default async function postGenerate(context) {
    context.log("✨ Running after-generation tasks...");
    await context.exec("npm install", {
        cwd: "backend"
    });
    await context.exec("npm install", {
        cwd: "frontend"
    });
    context.log("🎃 Your Kiroween skeleton is ready!");
}