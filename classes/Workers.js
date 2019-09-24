class Workers{
    constructor(firstname,lastname,phoneno){
        this.firstname=firstname
        this.lastname=lastname
        this.phoneno=phoneno
        this.status=false
    }
    getName=()=>{
        return `${this.firstname,' ',this.lastname}`
    }
    getPhoneNo=()=>{
        return this.phoneno
    }
    getStatus=()=>{
        return this.status
    }
} 
export default Workers