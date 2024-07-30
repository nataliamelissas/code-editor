/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/rust/rust.contribution.ts
import { registerLanguage } from "../_.contribution";
registerLanguage({
  id: "rust",
  extensions: [".rs", ".rlib"],
  aliases: ["Rust", "rust"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/rust/rust"], resolve, reject);
      });
    } else {
      return import("./rust");
    }
  }
});
