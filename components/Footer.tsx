import { Typography, Space } from "antd";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © {y} <Link href="/">CryptoWorld Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link href="/">Home</Link>
        <Link href="/exchanges">Exchanges</Link>
        <Link href="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
