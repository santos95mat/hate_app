import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  @ApiOperation({
    summary: 'Para saber os status da API',
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }

  @ApiExcludeEndpoint()
  @Get()
  getAppHome(@Res() res) {
    res.redirect('docs');
  }
}