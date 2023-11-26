import { rest } from "msw";

const baseURL = 'https://drf-api-exercise-b02895a92ceb.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({ "pk": 2, 
            "username": "harry", 
            "email": "", 
            "first_name": "", 
            "last_name": "", 
            "profile_id": 2, 
            "profile_image": "https://res.cloudinary.com/dhn8fyhbc/image/upload/v1/media/../default_profile_gttp2y" })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];