const config = {
    "development":{
        "backendBaseURL":"development"
    },
    "production":{
        "backendBaseURL":"production"
    }
}

// const getConfig = (env)=>{
//     return config[env]
// }

const getConfig = (env)=>{
    return env
}
module.exports = getConfig