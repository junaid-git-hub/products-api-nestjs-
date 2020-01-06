import { Controller, Get, UsePipes, Param, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
//demo//
import { UpperCasePipe  } from './product/pipes/demo-uppercase.pipe';
import { AuthGuard } from './product/guards/demo-guard.guard';
import { Roles } from './product/decorators/demo.decorators';
import {DemoInterceptor} from './product/interceptors/demo.interceptor'
//
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles('admin')
  @UseGuards(AuthGuard)
  @UseInterceptors(DemoInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id1/:id2')
  @Roles('admin')
  @UseGuards(AuthGuard)
  @UsePipes(new UpperCasePipe())
  demonstaratePipe(@Param('id1') id1, @Param('id2') id2 ): any{
    return {param1: id1, param2: id2};
  }
}
