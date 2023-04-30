export const GetUserId = (): string => {
    const userId = localStorage.getItem("user_id")
    
    if (userId === null) {
        return "0"
    }

    return userId
}

export const GetToken = (): string => {
    const token = localStorage.getItem("access_token")
    
    if (token === null) {
        return ""
    }

    return token
}
