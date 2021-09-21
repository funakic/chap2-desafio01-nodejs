import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        const user = this.showUserProfileUseCase.execute({ user_id });
        let returnCode = 200;
        let message = {};

        if (!user) {
            returnCode = 404;
            message = { error: "User not found!" };
        } else {
            message = user;
        }

        return response.status(returnCode).json(message);
    }
}

export { ShowUserProfileController };
