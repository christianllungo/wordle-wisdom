import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from 'decorators/roles.decorator';
import { Role } from 'src/users/roles/roles.enum';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  async singIn(@Body() signInDto: SignInDto) {
    const token = await this.authService.singIn(signInDto.username, signInDto.password);
    return { access_token: token };
  }

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
