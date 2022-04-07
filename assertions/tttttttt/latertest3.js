import * as tttt from '../../public.js'
export default async( id ) => {

    await tttt.describe( 'later coming test 3' )

    /**
     *
     */
    function later (){
        tttt.end_test( id )
        tttt.describe( 'later-test 3' )
    }
    setTimeout( later, 3000 )
}
