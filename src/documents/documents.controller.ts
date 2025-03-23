import { UseGuards, Controller, Post, Body, Req, Get, Param, Patch, Delete } from "@nestjs/common";
import { Roles } from "src/auth/roles.decorator";
import { DocumentsService } from "./documents.service";

@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentsController {
  constructor(private readonly docService: DocumentsService) {}

  @Post()
  @Roles('ADMIN', 'EDITOR')
  create(@Body() dto: CreateDocumentDto, @Req() req) {
    return this.docService.create(dto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.docService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docService.findOne(+id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'EDITOR')
  update(@Param('id') id: string, @Body() dto: UpdateDocumentDto) {
    return this.docService.update(+id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.docService.remove(+id);
  }
}
