/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0(277ad905e2fd5989253e838d310cb4d78b3a71f9)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/typespec/typespec.contribution.ts
import { registerLanguage } from "../_.contribution";
registerLanguage({
  id: "typespec",
  extensions: [".tsp"],
  aliases: ["TypeSpec"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/typespec/typespec"], resolve, reject);
      });
    } else {
      return import("./typespec");
    }
  }
});
