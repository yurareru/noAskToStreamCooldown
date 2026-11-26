import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoAskToStreamCooldown",
    description: "Remove Ask to Stream cooldown and keep its window open.",
    authors: [{ name: "yurareru", id: 384653287544193024n }],

    patches: [
        {
            find: '"STREAM_REQUEST_COOLDOWN_END"',
            replacement: {
                match: /(?<="STREAM_REQUEST_COOLDOWN_END",userId:\i\}\)\},)\i\.\i(?=\))/,
                replace: "0"
            }
        },
        {
            find: '"2026-10-request-to-stream-non-games"',
            replacement: {
                match: /(?<="2026-10-request-to-stream-non-games".{0,40}defaultConfig:\{enabled:)!1/,
                replace: "!0"
            }
        },
        {
            find: 'location:"useRequestToStreamData"',
            replacement: {
                match: /(?<=\i=\i!==\i)&&\(null!=\i\|\|\i\)&&\(null!=\i\|\|\i\)(&&\i)&&!\i(?=;)/,
                replace: "$1"
            }
        },
        {
            find: '"UserActivityActions: currentUser cannot be undefined"',
            replacement: {
                match: /(?<=return \i\?\(0,(\i)\.jsxs\)\(\i\.Fragment,\{children:\[)(?=\(0,\i\.jsx\)\(\i,\{isCurrentUser:\i\.id===(\i)\.id,applicationStream:\i,onAction:(\i)\}\).{0,300}?\i&&\(0,\i\.jsx\)\((\i)\.B,\{userId:\i\.id,channel:(\i),)/,
                replace: "null!=$5&&(0,$1.jsx)($4.B,{userId:$2.id,channel:$5,onAction:$3}),"
            }
        },
        {
            find: '"request to stream button"',
            replacement: {
                match: /(?<="request to stream button"\}\)),\i\?\.\(\)/,
                replace: ""
            }
        }
    ]
});
