import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    kullanici: {},
  },
  reducers: {
    olusturKullanici: (state, action) => {
      state.kullanici = action.payload;
    },
    kullaniciSil: (state) =>{
        state.kullanici=""
    }
  },
});

export const {olusturKullanici, kullaniciSil} = yetkiSlice.actions;
// fonksiyonlari actionstan üstteki gibi export ediyoruz, tüm sayfayi alttaki gibi export ediyoruz. 
export default yetkiSlice.reducer;
