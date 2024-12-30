interface InputData {
    key: string;
    type: string;
    holder: string;
  }
  
  interface ShareData {
    [key: string]: {
      [input: string]: InputData;
    };
  }
  
  const shareData: ShareData = {
    maliyet: {
      input1: {
        key: "maliyet_input1",
        type: "piece",
        holder: "Alınan hisse miktarı",
      },
      input2: {
        key: "maliyet_input2",
        type: "price",
        holder: "Hisse fiyatı",
      },
      input3: {
        key: "maliyet_input3",
        type: "piece",
        holder: "İşlem ücreti (varsa)",
      },
    },
    deger: {
      input1: {
        key: "deger_input1",
        type: "piece",
        holder: "Mevcut hisse miktarı",
      },
      input2: {
        key: "deger_input2",
        type: "price",
        holder: "Günce hisse fiyatı",
      },
      input3: {
        key: "deger_input3",
        type: "own",
        holder: "Nakit",
      },
    },
    kar: {
      input1: {
        key: "kar_input1",
        type: "sales",
        holder: "Satış fiyatı",
      },
      input2: {
        key: "kar_input2",
        type: "buying",
        holder: "Alış fiyatı",
      },
      input3: {
        key: "kar_input3",
        type: "piece",
        holder: "Satılan hisse miktarı",
      },
      input4: {
        key: "kar_input4",
        type: "process",
        holder: "İşlem ücretleri (varsa)",
      },
    },
    year: {
      input1: {
        key: "year_input1",
        type: "money",
        holder: "Ana para",
      },
      input2: {
        key: "year_input2",
        type: "rate",
        holder: "Getiri oranı (r)",
      },
      input3: {
        key: "year_input3",
        type: "time",
        holder: "Yatırım süresi (Yıl)",
      },
    },
    month: {
      input1: {
        key: "month_input1",
        type: "money",
        holder: "Ana para",
      },
      input2: {
        key: "month_input2",
        type: "rate",
        holder: "Getiri oranı (r)",
      },
      input3: {
        key: "month_input3",
        type: "period",
        holder: "Dönem sayısı (d)",
      },
      input4: {
        key: "month_input4",
        type: "time",
        holder: "Yatırım süresi (t)",
      },
    },
  };
  
  export default shareData;
  