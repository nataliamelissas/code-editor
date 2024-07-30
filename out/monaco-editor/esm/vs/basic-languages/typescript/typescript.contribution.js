/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/typescript/typescript.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "typescript",
  extensions: [".ts", ".tsx", ".cts", ".mts"],
  aliases: ["TypeScript", "ts", "typescript"],
  mimetypes: ["text/typescript"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/typescript/typescript"], resolve, reject);
      });
    } else {
      return import("./typescript.js");
    }
  }
});
