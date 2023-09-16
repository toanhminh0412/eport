const oneDay = 24 * 60 * 60 * 1000;
const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: Date.now() + oneDay    // Set expires in 1 day
}
export default cookieOptions;