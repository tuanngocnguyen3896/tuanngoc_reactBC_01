const stateDefault = {
    taiXiu: false, // true: tài  false: xỉu
    mangXucXac: [
        {ma:1,hinhAnh:'./img/1.png'},
        {ma:2,hinhAnh:'./img/2.png'},
        {ma:3,hinhAnh:'./img/3.png'}
    ],
    soBanThang:0,
    tongSoBanChoi:0
}

export const BaiTapGameXucXacReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return {...state};
        case 'PLAY_GAME':
            //B1: random xúc xắc 
            let arrRandom = [];
            for (let i =0; i<3;i++) {
                // mỗi lần lặp random ra ngẫu nhiên 1-6
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                // Tạo ra 1 đối tượng xx từ số ngẫu nhiên
                let randomXX = {ma:randomNumber , hinhAnh: `./img/${randomNumber}.png` };
                // push vào arr 3 con xx
                arrRandom.push(randomXX);
            } 
            state.mangXucXac =  arrRandom;
            // B2: xử lí số bàn chơi
            state.tongSoBanChoi += 1;
            // B3: xử lí số bàn thắng
            let tongSoDiem = arrRandom.reduce((tong,xucXac,index) => {
                return tong += xucXac.ma
            },0);
            if((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }
        default: return {...state}
    }
}

