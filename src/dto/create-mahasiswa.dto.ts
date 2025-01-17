import { ApiProperty } from "@nestjs/swagger";
import { Jenis_Kelamin } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMahasiswaDTO {

    @ApiProperty({ description : "NIM", type : String, example : "105841107922" })
    @IsString({message : "NIM Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 12, {message : "Hanya bisa sampai 12 karakter"})
    nim : string;

    @ApiProperty({description :"Nama", type : String, example : "AHMAD YANI"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 50, {message : "Hanya bisa sampai 12 karakter"})
    nama : string;

    @ApiProperty({description :"Nama", type : String, example : "5C"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 2, {message : "Hanya bisa sampai 12 karakter"})
    kelas : string;

    @ApiProperty({description :"Nama", type : String, example : "informatika"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 20, {message : "Hanya bisa sampai 12 karakter"})
    jurusan : string;

    @ApiProperty({
        enum : Jenis_Kelamin,
        description : "jenis kelamin",
        example : "L"
    })
    @IsEnum(Jenis_Kelamin, {
        message : "jenis kelamin hanya bernilai L atau P"
    })
    jenis_kelamin : Jenis_Kelamin
}