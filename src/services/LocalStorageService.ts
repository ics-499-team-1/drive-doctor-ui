export const GetUserId = (): string | null => {
    return localStorage.getItem("user_id")
}

export const GetToken = (): string | null => {
    return localStorage.getItem("access_token")
}
