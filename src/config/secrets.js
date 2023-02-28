const config = {
    "development":{
        "backendBaseURL":"development"
    },
    "production":{
        "backendBaseURL":"production"
    }
}

const getConfig = (env)=>{
    return config[env]
}
module.exports = getConfig