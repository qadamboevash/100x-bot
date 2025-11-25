import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config();
import { onStart } from "./src/onStart.js";
import { onCourses } from "./src/onCourses.js";
import { onRegister } from "./src/onRegister.js";
import mongoose, { Mongoose } from "mongoose";


const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
mongoose.connect(process.env.MONGO_URI).then( () => {
  console.log(`Db is connected successfully!`);
  
}).catch( () => {
  console.log(`Error: db is not connected...`);
  
})
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.from.first_name;

  if (text === "/start" || text === "Boshlash 🔥") {
    onStart(chatId, firstName);

  } else if (text === "📚 Kurslar" || text === "⬅️ Orqaga") {
    onCourses(chatId);

  } else if (text === "ℹ️ Markaz haqida") {
    const latitude = 41.3781989;
    const longitude = 69.307208; // <-- Longitude ham kerak

    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, latitude, longitude);

  } else if (text === "✍️ Ro‘yxatdan o‘tish") {
    onRegister(chatId);

  } else {
    bot.sendMessage(chatId, "❗️ Noma'lum buyruq!");
  }
});

console.log("Bot ishga tushdi...");

export { bot };


