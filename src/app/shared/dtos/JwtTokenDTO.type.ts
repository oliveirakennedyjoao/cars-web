import UserLoginNameDTO from "./UserLoginNameDTO.type";

export default interface JwtTokenDTO{
    token: string;        
    authType: string;
    authenticatedUserDTO: UserLoginNameDTO;
}