import { OftypesError, resolvers, undefined_ } from 'oftypes'

/**
 * - --exclude type check
 *
 * @param {string} arg - value
 * @yields
 * @returns {AsyncGenerator<OftypesError|string, void, OftypesError|string>}
 */
export async function * tttt_exclude_flag( arg ){

  const truthy = () => new OftypesError( '--exclude must be provided an argument' )
  const falsy = () => arg
  yield await ( await undefined_( arg, await resolvers( truthy, falsy ) ) )()

}
