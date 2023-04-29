import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }
  async singIn(username: string, password: string): Promise<string> {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };

    return await this.jwtService.signAsync(payload);
  }

  async signUp(username: string, password: string) {
    // checks for existing username
    const existingUser = await this.usersService.findOneByUsername(username);
    if (existingUser) {
      throw new UnauthorizedException();
    }
    // creates user
    const protectedPassword = await this.hashPassword(password);
    const user = await this.usersService.create({ username: username, password: protectedPassword });
    return { message: 'User created successfully' }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
