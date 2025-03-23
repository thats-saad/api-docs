import { Controller, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AuthController {}
