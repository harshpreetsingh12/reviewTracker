
export const getFormattedDate =_=>{
    const currentDate = new Date();

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric', 
    month: 'short',   
    year: 'numeric', 
    }).format(currentDate);

    return formattedDate
}