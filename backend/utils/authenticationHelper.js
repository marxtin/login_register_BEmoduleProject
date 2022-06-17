import jwt from 'jsonwebtoken';

/**
 * Generates the token based on a user.
 * @param {*} user 
 */
export const generateToken = (user) => {
    const payload = {sub: user._id};

    return new Promise((resolve, reject) => {
        jwt.sign(payload, 
            process.env.JWT_SECRET,
            {expiresIn:"1h"},
            (err, token) => {
            if(err){
                reject(err);
                return;
            }

            resolve(token);
        })
    });
}

