import path from "path";
import { Command } from "commander";
import { serve } from "local-api";
import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "notes.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir);
    } catch (err) {
      if (err.code === "EADDRINUSE") {
        console.error("Port is in use. Try running on a diffrent port.");
      } else {
        console.log("Heres the problem -> ", err.message);
      }
    }
  });
