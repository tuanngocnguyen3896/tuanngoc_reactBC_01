const stateDefaut = {
    gioHang: [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg",
            "soLuong": 1
                  },
    ]
}
export const gioHangReducer = (state = stateDefaut,action) => {
    switch (type.action) {
        case 'THEM_GIO_HANG':{
            // console.log(action)
            // B1: xử lý thay đổi state.gioHang trên redux
            // sao chép  gioHang ra array mới 
            const gioHangUpdate = [...state.gioHang];
            // console.log(gioHangUpdate);
            // B2: Kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangUpdate[index].soLuong += 1;
            }else{
                gioHangUpdate.push(action.spGioHang);
            }
            // B3: Gán lại giá trị sau khi xử lý
            state.gioHang = gioHangUpdate;
            return {...state}
        }break;
        case 'XOA_GIO_HANG':{
            // console.log(action);
            // // B1: xử lý thay đổi state.gioHang trên redux
            // // sao chép  gioHang ra array mới 
            const gioHangUpdate = [...state.gioHang];
            // console.log(gioHangUpdate);
            // // B2: Kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            if(index){
                gioHangUpdate.splice(index,1);
            }
            // // B3: Gán lại giá trị sau khi xử lý
            state.gioHang = gioHangUpdate;
            return {...state}
        }break;
        case 'THAY_DOI_SL':{
            // console.log(action);
            // B1: xử lý thay đổi state.gioHang trên redux
            // sao chép  gioHang ra array mới 
            const gioHangUpdate = [...state.gioHang];
            // console.log(gioHangUpdate);
            // B2: Kiểm tra sp gửi lên từ component có trong state.gioHang chưa?
            // console.log(action.maSP)
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            // console.log(index);
            if(index !== -1) {
                gioHangUpdate[index].soLuong += action.soLuong;
                console.log( gioHangUpdate[index].soLuong)
            }
            // B3: Gán lại giá trị sau khi xử lý
            state.gioHang = gioHangUpdate;
            return {...state}
        }break;

    }
    return {...state}
}