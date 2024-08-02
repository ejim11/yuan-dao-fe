import { StaticImageData } from "next/image";
import metamaskImg from "../../assets/metamask-icon.svg";
import trustWalletImg from "../../assets/Trust_Stacked Logo_Blue.svg";
import ledgerImg from "../../assets/ledger-horizontal.svg";
import coinbaseImg from "../../assets/coinbase-v2-svgrepo-com.svg";

export interface WalletData {
  name: string;
  icon: StaticImageData;
  alt: string;
}

const walletsData: WalletData[] = [
  {
    name: "MetaMask",
    icon: metamaskImg,
    alt: "metamask image",
  },
  {
    name: "Trust Wallet",
    icon: trustWalletImg,
    alt: "trust wallet image",
  },
  {
    name: "Ledger",
    icon: ledgerImg,
    alt: "ledger image",
  },
  {
    name: "Coinbase",
    icon: coinbaseImg,
    alt: "coinbase image",
  },
];

export default walletsData;
