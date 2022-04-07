/**
 * RegExpression to filter .dot files.
 *
 * @type {RegExp}
 */
export const no_dot_regExp = new RegExp( /(^|\/)\.[^/.]/g )
