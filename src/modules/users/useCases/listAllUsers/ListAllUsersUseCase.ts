import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);
        let users;

        if (user && user.admin) {
            users = this.usersRepository.list();
        }
        return users;
    }
}

export { ListAllUsersUseCase };
