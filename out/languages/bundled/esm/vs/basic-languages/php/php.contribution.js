/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/php/php.contribution.ts
import { registerLanguage } from "../_.contribution";
registerLanguage({
  id: "php",
  extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
  aliases: ["PHP", "php"],
  mimetypes: ["application/x-php"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/php/php"], resolve, reject);
      });
    } else {
      return import("./php");
    }
  }
});
