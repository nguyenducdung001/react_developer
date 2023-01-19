const initialState = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone X",
      hinhAnh: "./img/applephone.jpg",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (sp) => sp.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(action.index, 1);
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      const { index, tangGiam } = action;

      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
