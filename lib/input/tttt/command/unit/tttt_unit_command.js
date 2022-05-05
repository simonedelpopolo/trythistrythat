import { OftypesError, resolvers, undefined_ } from 'oftypes'

/**
 * - unit type check
 *
 * @param {string} arg - value
 * @yields
 * @returns {AsyncGenerator<OftypesError|boolean, void, OftypesError|boolean>}
 */
export async function * tttt_unit_command( arg ){

  const truthy = () => undefined
  const falsy = () => new OftypesError( 'unit doesn\'t accept any argument' )
  yield await ( await undefined_( arg, await resolvers( truthy, falsy ) ) )()

}
