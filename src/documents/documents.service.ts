import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsService {
    prisma: any;
    async create(dto: CreateDocumentDto, ownerId: number) {
        return this.prisma.document.create({
            data: { ...dto, ownerId },
        });
    }

    async findAll() {
        return this.prisma.document.findMany();
    }

    async findOne(id: number) {
        return this.prisma.document.findUnique({ where: { id } });
    }

    async update(id: number, dto: UpdateDocumentDto) {
        return this.prisma.document.update({ where: { id }, data: dto });
    }

    async remove(id: number) {
        return this.prisma.document.delete({ where: { id } });
    }


}
