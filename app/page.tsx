import Button from "@/components/button";
import Wallet from "@/public/icons/wallet.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black py-24">
      <Button variant="primary" styles={"uppercase"}>
        <span className="flex gap-2">
          <Image src={Wallet} alt="" />
          Connect
        </span>
      </Button>
    </main>
  );
}
