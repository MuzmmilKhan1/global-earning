import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'

class Helper{
    
    static toast = (type, message) => {
        const notyf = new Notyf();
        notyf.open({
            message: message,
            type:type,
            position:{x:'right', y:'top'},
            ripple:true,
            duration:2000,
        });
    }

}

export default Helper;