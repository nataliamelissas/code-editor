/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/shell/shell.contribution.ts
import { registerLanguage } from "../_.contribution";
registerLanguage({
  id: "shell",
  extensions: [".sh", ".bash"],
  aliases: ["Shell", "sh"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/shell/shell"], resolve, reject);
      });
    } else {
      return import("./shell");
    }
  }
});
