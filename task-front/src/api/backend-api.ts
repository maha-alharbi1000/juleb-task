import { MedicineDto } from "../dto/medicine-dto";

//this is the interface between the back-end and the front-end
export class BackendApi{
    public static async getAll(): Promise<MedicineDto[]> {
        const resp = await fetch("http://localhost:3000/",{
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }
}