import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    prisma: any;
    jwtService: any;

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { sub: user.id, role: user.role };
        const token = this.jwtService.sign(payload);
        return { access_token: token };
    }

}
