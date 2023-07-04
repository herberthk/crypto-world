"use client";
import React, { FC, useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import Image from "next/image";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { Cryptos } from "@/types";
import Link from "next/link";
import ErrorComponent from "./Error";

type Props = {
  simplified?: boolean;
};

const Cryptocurrencies: FC<Props> = ({ simplified = false }) => {
  const count = simplified ? 10 : 100;
  const {
    data: cryptosList,
    isFetching,
    isLoading,
    isError,
  } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<Cryptos["data"]["coins"]>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching || isLoading) return <Loader />;

  if (isError) return <ErrorComponent />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} href={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <div className="crypto-image">
                    <Image fill alt="" src={currency.iconUrl} />
                  </div>
                }
                hoverable
              >
                <p>Price: {millify(+currency?.price)}</p>
                <p>Market Cap: {millify(+currency?.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
