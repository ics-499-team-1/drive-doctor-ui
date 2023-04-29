export const GetUserId = (): string => {
    const userId = localStorage.getItem("user_id")
    
    if (userId === null) {
        return "0"
    }

    return userId
}

export const GetToken = (): string | null => {
    return localStorage.getItem("access_token")
}
