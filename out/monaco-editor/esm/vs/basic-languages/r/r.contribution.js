/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/r/r.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "r",
  extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
  aliases: ["R", "r"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/r/r"], resolve, reject);
      });
    } else {
      return import("./r.js");
    }
  }
});
