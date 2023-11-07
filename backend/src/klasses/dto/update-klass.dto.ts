import { PartialType } from "@nestjs/mapped-types";
import { CreateKlassDto } from "./create-klass.dto";

export class UpdateKlassDto extends PartialType(CreateKlassDto) {
  klassId: number;
  userNames: string[];
}
