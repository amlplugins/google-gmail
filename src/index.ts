/**
 * @amlplugins/google-gmail
 *
 * Thin namespaced re-export of the native @googleapis/gmail SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Gmail (gmail_v1).
 */

import * as _sdk from "@googleapis/gmail";
export * from "@googleapis/gmail";
export { _sdk as sdk };
export default _sdk;
