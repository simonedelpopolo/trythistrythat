import { OftypesError, resolvers, undefined_ } from 'oftypes'

/**
 * - add type check
 *
 * @param {string} arg - value
 * @yields
 * @returns {AsyncGenerator<OftypesError|boolean, void, OftypesError|boolean>}
 */
export async function * tttt_add_command( arg ){

  const truthy = () => undefined
  const falsy = () => new OftypesError( 'add doesn\'t accept any argument' )
  yield await ( await undefined_( arg, await resolvers( truthy, falsy ) ) )()

}
