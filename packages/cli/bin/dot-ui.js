#!/usr/bin/env node
import("../dist/index.js").catch(err => {
  console.error("Dot UI CLI failed to start:", err);
  process.exit(1);
});
