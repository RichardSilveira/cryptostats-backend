import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { CurrentUser } from '../auth/current-user.decorator';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';

@Controller('users')
export class UsersController {

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    return {
      _id: 'b11bd76f-e436-4689-82c6-5b3dba6a5b78',
      email: 'user@gmail.com',
      isCoinbaseAuthorized: true,
    };
  }

  @Get()
  async getUser(user: UserResponse): Promise<UserResponse> {
    return {
      _id: 'b11bd76f-e436-4689-82c6-5b3dba6a5b78',
      email: 'user@gmail.com',
      isCoinbaseAuthorized: true,
    };
  }

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // async getUser(@CurrentUser() user: UserResponse): Promise<UserResponse> {
  //   return user;
  // }
}
