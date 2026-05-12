import cryptoJs from 'crypto-js';

export default class CommonUtils{

    private secretKey : string;
    /**
     * Initilizing secretKey
     */
    constructor(){
        // this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY
        } else {
            throw new Error("Please provide Secret Key while starting execution.");
        }
    }    

    /**
     * Provide Encrypted Data from String
     * @param data 
     * @returns encryptedData
     */
    public encryptData(data : string){
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }

    /**
     * Provide Encrypted Data from String
     * @param encData 
     * @returns descryptedData
     */
    public decryptData(encData : string){
        const descryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return descryptedData;
    }
}