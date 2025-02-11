import User from "./../models/auth.models.js";
import {asyncHandler} from "./../utils/asyncHandler.js";
import {AppError} from "./../utils/AppError.js";
import {ApiResponse} from "./../utils/ApiResponse.js";
import logger from "./../logger/winston.logger.js";
import {
    UserRolesEnum
} from "./../constants.js";

const generateAccessAndRefreshTokens = async (userId) => {
    try{
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        // await user.save({ validateBefore: false });
        return { accessToken , refreshToken };
    } catch (error) {
        throw new AppError(
            500,
            "Something went wrong while generating the access token"
        );
    }
};


export const signup = asyncHandler(async  (req , res , next) =>{
    const { name, email, password , passwordConfirm , role } = req.body;

    const existingUser = await User.findOne({
        $or: [{name} , {email}],
    });

    if (existingUser) {

    }

    const user = await User.create({
        name,
        email,
        password,
        passwordConfirm,
        isEmailVerified: false,
        role: role || UserRolesEnum.USER,
    })

    const {accessToken, refreshToken} = generateAccessAndRefreshTokens(user._id);
    user.refreshToken = refreshToken;
    console.log(accessToken,refreshToken);
    return res
        .status(201)
        .json(
            new ApiResponse(
                200 ,
                {user : user , accessToken , refreshToken},
                "Users registered successfully and verification email has been sent on your email.",
            )
        )
});


export const signin = asyncHandler( async (req , res , next) =>{
    res.send("Sign In");
});

export const forgotPassword = asyncHandler( async  (req , res , next) =>{
    res.send("Forgot Password");
});