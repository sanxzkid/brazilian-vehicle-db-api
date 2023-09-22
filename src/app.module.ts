import { Module } from '@nestjs/common';
import { ReferenceModule } from './reference/reference.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ReferenceModule, UserModule],
})
export class AppModule {}
