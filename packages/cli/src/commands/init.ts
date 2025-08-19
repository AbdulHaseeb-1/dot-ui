import { Command } from "commander";

type InitOptions = {
  yes: boolean;
  silent: boolean;
  force: boolean;
};

const init = new Command()
  .name("init")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-s, --silent", "mute console logging", false)
  .option("-f, --force", "force overwrite of existing configuration.", false);

init.parse();


const init_options = init.opts<InitOptions>();

console.log(init_options);


// // Now you get proper typing:
if (init_options.yes) {
  console.log("Skipping confirmation...");
} else if (init_options.force) {
  console.log("Forcing Override");
} else if (init_options.silent) {
  console.log("Working in Silent");
} else {
  console.log("Invalid Option Provided, Please use -h for help");
}

export { init };
