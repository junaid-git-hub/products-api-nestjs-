import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common'
@Injectable()
export class UpperCasePipe implements PipeTransform{
    transform(value:any, metadata: ArgumentMetadata){
        console.log(value);
        console.log(metadata);
        return value.toUpperCase();
    }
}