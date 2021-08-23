import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() reqBody: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(reqBody);
  }

  @Post('/signin')
  signIn(
    @Body() reqBody: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(reqBody);
  }
}
