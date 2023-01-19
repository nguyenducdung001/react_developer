import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import ProductList from "./ProductList";
import Slider from "./Slider";

export default class ExComponents extends Component {
  state = {
    productModal: {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700,
      hinhAnh: "./img/vivoz.jpg",
    },
  };

  product = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700,
      hinhAnh: "./img/vivoz.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      giaBan: 7600,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      giaBan: 2700,
      hinhAnh: "./img/galaxynote10.jpg",
    },
    {
      maSP: 4,
      tenSP: "Samsung Galaxy Note 10",
      giaBan: 1900,
      hinhAnh: "./img/samsungx.jpg",
    },
  ];

  watchDetail = (sp) => {
    this.setState({
      productModal: sp,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList product={this.product} watchDetail={this.watchDetail} />
        <Footer />
        <Modal productModal={this.state.productModal} />
      </div>
    );
  }
}
