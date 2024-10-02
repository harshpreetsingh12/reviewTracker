// this table will contain reviews 
//single row determines single review with respected user id (platform)

const statsCorp=[
    // one user will contain these files
    {
        userId:'', //id of the user( user table _id)
        reviewerName:'', 
        reviewtext:'',
        isUserSubscribed:'', // for checking if user has verified purchase 
        starsGiven: 0-5 //optional
    }
]