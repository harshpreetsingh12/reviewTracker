// this table will contain months usage earnings  
//In future this can maybe change 
//for now one row will represnt one month stats for single compony

const platformUsageperMo=[
    // one user will contain these files
    {
        userId:'', //id of the user( user table _id)
        forMonth:'',  // eg June, March ...
        totalHoursUsed:0,
        mainUserRegion:[// array of top country where app is used
            {
                country:"india",
                usage:'50%'
            }
        ], 
        totalProfitInMonth: 1000 //in user currency
    }
]