#!/usr/bin/env node
import { Command } from "commander";
import packageJson from "../package.json";
import { defaults } from "@/src/config.js";
import { init } from "@/src/commands/init";


let program = new Command() 
  .name(defaults.name) // dot-ui
  .version(
    packageJson.version || defaults.defaultVersion,
    "-v, --version",
    "display the version number"
  );

program.addCommand(init);

program.parse();

const options = program.opts();

if (options.v || options.version) console.log("version is 0.1");
