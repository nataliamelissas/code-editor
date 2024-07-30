define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.language = exports.conf = void 0;
    var bounded = function (text) { return "\\b".concat(text, "\\b"); };
    var notBefore = function (regex) { return "(?!".concat(regex, ")"); };
    var identifierStart = '[_a-zA-Z]';
    var identifierContinue = '[_a-zA-Z0-9]';
    var identifier = bounded("".concat(identifierStart).concat(identifierContinue, "*"));
    var directive = bounded("[_a-zA-Z-0-9]+");
    var keywords = [
        'import',
        'model',
        'scalar',
        'namespace',
        'op',
        'interface',
        'union',
        'using',
        'is',
        'extends',
        'enum',
        'alias',
        'return',
        'void',
        'if',
        'else',
        'projection',
        'dec',
        'extern',
        'fn'
    ];
    var namedLiterals = ['true', 'false', 'null', 'unknown', 'never'];
    var nonCommentWs = "[ \\t\\r\\n]";
    var numericLiteral = "[0-9]+";
    exports.conf = {
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/']
        },
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: '/**', close: ' */', notIn: ['string'] }
        ],
        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' }
        ],
        indentationRules: {
            decreaseIndentPattern: new RegExp('^((?!.*?/\\*).*\\*/)?\\s*[\\}\\]].*$'),
            increaseIndentPattern: new RegExp('^((?!//).)*(\\{([^}"\'`/]*|(\\t|[ ])*//.*)|\\([^)"\'`/]*|\\[[^\\]"\'`/]*)$'),
            // e.g.  * ...| or */| or *-----*/|
            unIndentedLinePattern: new RegExp('^(\\t|[ ])*[ ]\\*[^/]*\\*/\\s*$|^(\\t|[ ])*[ ]\\*/\\s*$|^(\\t|[ ])*[ ]\\*([ ]([^\\*]|\\*(?!/))*)?$')
        }
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.tsp',
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' }
        ],
        symbols: /[=:;<>]+/,
        keywords: keywords,
        namedLiterals: namedLiterals,
        escapes: "\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|\"|\\${)",
        tokenizer: {
            root: [{ include: '@expression' }, { include: '@whitespace' }],
            stringVerbatim: [
                { regex: "(|\"|\"\")[^\"]", action: { token: 'string' } },
                { regex: "\"\"\"".concat(notBefore("\"")), action: { token: 'string', next: '@pop' } }
            ],
            stringLiteral: [
                { regex: "\\${", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },
                { regex: "[^\\\\\"$]+", action: { token: 'string' } },
                { regex: '@escapes', action: { token: 'string.escape' } },
                { regex: "\\\\.", action: { token: 'string.escape.invalid' } },
                { regex: "\"", action: { token: 'string', next: '@pop' } }
            ],
            bracketCounting: [
                { regex: "{", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },
                { regex: "}", action: { token: 'delimiter.bracket', next: '@pop' } },
                { include: '@expression' }
            ],
            comment: [
                { regex: "[^\\*]+", action: { token: 'comment' } },
                { regex: "\\*\\/", action: { token: 'comment', next: '@pop' } },
                { regex: "[\\/*]", action: { token: 'comment' } }
            ],
            whitespace: [
                { regex: nonCommentWs },
                { regex: "\\/\\*", action: { token: 'comment', next: '@comment' } },
                { regex: "\\/\\/.*$", action: { token: 'comment' } }
            ],
            expression: [
                { regex: "\"\"\"", action: { token: 'string', next: '@stringVerbatim' } },
                { regex: "\"".concat(notBefore("\"\"")), action: { token: 'string', next: '@stringLiteral' } },
                { regex: numericLiteral, action: { token: 'number' } },
                {
                    regex: identifier,
                    action: {
                        cases: {
                            '@keywords': { token: 'keyword' },
                            '@namedLiterals': { token: 'keyword' },
                            '@default': { token: 'identifier' }
                        }
                    }
                },
                { regex: "@".concat(identifier), action: { token: 'tag' } },
                { regex: "#".concat(directive), action: { token: 'directive' } }
            ]
        }
    };
});
//# sourceMappingURL=typespec.js.map