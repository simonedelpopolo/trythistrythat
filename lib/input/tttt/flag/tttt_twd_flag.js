import { number_, OftypesError, resolvers, undefined_ } from 'oftypes'

/**
 * Object [ input.tttt_twd_flag ].
 *
 * - twd_flag type check.
 *
 * @param {string} options - the value from the shell.
 * @throws { Error }
 * @returns {Promise<string|OftypesError|undefined>|string|OftypesError|undefined}
 */
export async function tttt_twd_flag( options ){

    /**
     * Type checking for twd flag.
     *
     * @param {any} check - value from flag.
     * @yields
     * @returns {AsyncGenerator<Promise<OftypesError|string>, Promise<string>, void>}
     */
    async function* type( check ){

        const truthy = () => Promise.reject( `${ 'given option -> '.green() }'${check.toString().red()}' - ${ process.title } flags-error` )
        const falsy = () => Promise.resolve( check )
        yield await ( await number_( check, await resolvers( truthy, falsy ) ) )()
    }

    let flag

    const truthy = () => undefined
    const falsy = async () => {
        const twd_check = type( options )

        const done = await twd_check.next()
            .then( resolve => resolve.value )
            .catch( error => new OftypesError( error ) )

        return twd_check.return( done ).then( check => check.value )
    }

    flag = await  ( await undefined_( options, await resolvers( truthy, falsy ) ) )()

    return new Promise( ( resolve, reject ) => {

        if( flag instanceof Error )
            reject( flag )

        resolve( flag )
    } )
}

