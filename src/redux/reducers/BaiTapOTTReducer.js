const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh: './img/oantuti/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh: './img/oantuti/bua.png',datCuoc:true},
        {ma:'bao',hinhAnh: './img/oantuti/bao.png',datCuoc:false},
    ],
    ketQua: 'You Win !!!',
    soBanThang: 0,
    soBanChoi:0,
    computer: {ma:'bao',hinhAnh: './img/oantuti/bao.png'}
}

const BaiTapOTTReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangUpdate = [...state.mangDatCuoc];
            mangUpdate = mangUpdate.map((item,index) => {
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            state.mangDatCuoc = mangUpdate;
            return {...state}
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            
            state.computer = quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'HÒA !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'THUA !!!'
                    }else {
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    };
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'HÒA !!!'
                    }else {
                        state.ketQua = 'THUA !!!'
                    };
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'THUA !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    }else {
                        state.ketQua = 'HÒA !!!'
                    };
                    break;
                default : 
                state.soBanThang += 1;
                state.ketQua = 'You Win !!!';

            };
            state.soBanChoi += 1;
            return {...state}
        }
        default: return {...state}
    }
}

export default BaiTapOTTReducer;