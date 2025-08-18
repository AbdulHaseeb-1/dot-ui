#!/usr/bin/env node
import { Command } from "commander";

let program = new Command();

program.option("-v, --version","version number");

program.parse()

const options = program.opts();

if (options.v || options.version) console.log("version is 0.1");