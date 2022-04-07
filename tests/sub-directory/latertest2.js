import * as tttt from '../../public.js'
export default async( id ) => {

    await tttt.describe( 'later coming test 2' )

    /**
     * Simulating log-running test.
     */
    function later (){
        tttt.end_test( id )
        tttt.describe( 'later-test 2' )
    }
    setTimeout( later, 500 )
}
