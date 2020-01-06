import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class UpperCasePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
