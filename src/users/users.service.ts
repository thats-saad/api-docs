import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    async createUser(dto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        return this.prisma.user.create({
            data: { ...dto, password: hashedPassword },
        });
    }
}
