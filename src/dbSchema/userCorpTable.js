// this table will contain our users info basic (1 user will represent an SAAS product)

const users=[
    // one user will contain these files
    {
        _id:'', //Obj id provieded by mongo ( this id will be refrenced in other tables (eg stats Table) )
        name:'',
        hashedEmail:'',  // we can use something like crypto to hash (in BACKEND OR FRONTEND)
        corporateName:'',
        profilePic:'', //we can use something to save the pictures and show case it here
        city:'', //basic region information for stats
        country:'',

        //and some more info based on future needs

    }
]