import jwt from 'jsonwebtoken'

const auth = async (req,res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if(token){
            decodedData = jwt.verify(token, 'secretTest'); //same 'test' secret used when created jwt        
            req.userId = decodedData?.id;
            console.log(decodedData)
        }
       

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;