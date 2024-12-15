import Form from "./form";
import Link from "next/link";

export default function AddVehicle() {
  return (
    <main className="container mx-auto">
      <div className="p-10 shadow-[0px_2px_30px_10px_rgba(0,0,0,0.03)] w-fit mx-auto">
        <Link href="/" className="text-2xl">
          {'< Kembali'}
        </Link>
        <h1 className="text-5xl font-bold mb-8 mt-2">
          Tambah Data
        </h1>
        <Form />
      </div>
    </main>
  )
}