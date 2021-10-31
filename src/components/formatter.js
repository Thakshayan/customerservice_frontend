export const ArrayFormater = (object)=>{

    if (!object){
        return [0,0,0,0,0]
    }
   
    var rating =[]
    var count = 0;

    for(var count=0;count<5;count++){
        rating[count]=object[count].Count
    }
    
    return rating
}

export const dateFormatter = (date) => {
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];

    const date_ob = new Date(date);

    const dateFormat = date_ob.getDate()+" "+monthNames[date_ob.getMonth()]+" "+date_ob.getFullYear();
    
    return dateFormat
}