import * as tttt from '../public.js'

export default async( id ) => {

    await tttt.describe( 'later coming test' )

    /**
     * Simulating log-running test.
     */
    function later (){
        tttt.end_test( id )
        tttt.describe( 'later-test' )
    }
    setTimeout( later, 1000 )
}
