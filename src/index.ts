import { Client } from "discord.js";
import { IntentOptions } from "./config/intentOptions"

(async () => {
  const BOT = new Client({intents: IntentOptions});

  await BOT.login(process.env.BOT_TOKEN);
})();