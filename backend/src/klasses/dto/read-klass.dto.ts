import { PartialType } from "@nestjs/mapped-types";
import { CreateKlassDto } from "./create-klass.dto";

export class ReadKlassDto extends PartialType(CreateKlassDto) {
  // link: {
  //   rel: "self";
  //   href: string;
  // };
}
