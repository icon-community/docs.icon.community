import { HoverEffect } from "../components/ui/card-hover-effect";

export function AuditCards() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={audits} />
    </div>
  );
}

export const audits = [
  {
    title: "Movebit",
    year: "2024",
    logo: '/audits/movebit.png',
    description:
      "MoveBit is a security audit company for the Move ecosystem (Aptos/Sui), with a vision to make the Move ecosystem the most secure Web3.",
    link: "https://www.movebit.xyz/",
  },
  
  {
    title: "Hashlock",
    year: '2024',
    logo: '/audits/hashlock.png',
    description:
      "The Industry leading blockchain cyber security and web3 security auditing firm. Trusted smart contract audits and blockchain security services.",
    link: "https://www.hashlock.com.au/",
  },
  {
    title: "Informal Systems",
    year: "2023",
    logo: '/audits/informal-systems.png',
    description:
      "A multi-layered, automated approach to our security audits for the blockchain ecosystem. We leverage our formal verification tools including Apalache and Model-Based Testing, to make distributed systems secure and resilient.",
    link: "https://informal.systems/",
  },
  {
    title: "SlowMist",
    year: "2021",
    logo: '/audits/slowmist.png',
    description:
      "SlowMist offers a variety of services that include but are not limited to security audits, threat information, defense deployment, security consultants, and other security-related services.",
    link: "https://www.slowmist.com/",
  },
  {
    title: "Certik",
    year: "2020",
    logo: '/audits/certik.png',
    description:
      "Web3's leading smart contract auditor and provides a comprehensive suite of tools to secure the industry at scale.",
    link: "https://www.certik.com/",
  },
];
