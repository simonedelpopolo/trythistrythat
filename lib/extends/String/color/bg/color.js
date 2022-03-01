/**
 * 256 background color. not all the shells are compatible.
 *
 * @param {number=}code - range from 0-255.
 * @returns {string }
 */
export default String.prototype.bg_color = function( code ){
    const _code = typeof code === 'undefined' ? 0 : code
    
    return `\u001b[48;5;${_code}m${ this }\x1b[0m`
}
