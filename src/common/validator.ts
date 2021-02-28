

export default function validate(type:string) {
    switch (type) {
        case "required": {
            return "You must enter your name"
        }
        case "minLength":{
            return "Your name must be at least 1 characters"
        }
        case "maxLength":{
            return "Your name must be no more 80 characters"
        }
        default:{
            return null
        }
    }

}
