class UserEntity {
    user_id: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number: string;
    role: string;

    constructor();
    constructor(
        user_id: number = -1,
        email: string = "",
        first_name: string = "",
        last_name: string = "",
        password: string = "",
        phone_number: string = "",
        role: string = "",
    ) {
        this.user_id = user_id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone_number = phone_number;
        this.role = role;
    }

}

export default UserEntity;