import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
import { onStart } from "./src/onStart.js";
import { onCourses } from "./src/onCourses.js";
import { onRegister } from "./src/onRegister.js"

config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
if (text == "/start" || text == "Boshlash 🔥") {
  onStart(chatId, firstName);
 } else if (text == "📚 Kurslar" || text == "⬅️ Orqaga") {
   onCourses(chatId);
 }else if (text == "ℹ️ Markaz haqida") {
  const latitude = 41.3781989;
  bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, latitude, longitude);
  } else if (text == "✍️ Ro‘yxatdan o‘tish") {
  onRegister(chatId);
    } else {
    bot.sendMessage(
      chatId,
)}});
console.log("Bot ishga tushdi...");



export { bot };


