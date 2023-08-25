export interface LoginRequest {
  username: string;
  password: string;
}

export interface LogoutRequest {
  token: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}
