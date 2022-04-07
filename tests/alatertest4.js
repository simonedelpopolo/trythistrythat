import * as tttt from '../public.js'
export default async( id ) => {

    await tttt.describe( 'later coming test 4' )

    /**
     * Simulating log-running test.
     */
    function later (){
        tttt.end_test( id )
        tttt.describe( 'later-test 4' )
    }
    setTimeout( later, 400 )
}
