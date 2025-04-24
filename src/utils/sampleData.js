const sampleData = [
  {
    id: 'btc', name: 'Bitcoin', symbol: 'BTC', logo: '₿',
    price: 93759.48, percentChange1h: 0.43, percentChange24h: 0.93, percentChange7d: 11.11,
    marketCap: 1861618902186, volume24h: 43874950947, circulatingSupply: 19.85, maxSupply: 21,
    chartData7d: [90000, 92000, 94000, 95000, 94000, 93000, 95000]  // Varied 7D chart data
  },
  {
    id: 'eth', name: 'Ethereum', symbol: 'ETH', logo: 'Ξ',
    price: 1802.46, percentChange1h: 0.60, percentChange24h: 3.21, percentChange7d: 13.68,
    marketCap: 217581279327, volume24h: 23547469307, circulatingSupply: 120.71, maxSupply: null,
    chartData7d: [1800, 1820, 1840, 1850, 1870, 1830, 1880]  // Varied 7D chart data
  },
  {
    id: 'xrp', name: 'XRP', symbol: 'XRP', logo: '✖️',
    price: 0.93, percentChange1h: 0.23, percentChange24h: 1.04, percentChange7d: 6.21,
    marketCap: 47324562330, volume24h: 10374503921, circulatingSupply: 50.08, maxSupply: 100,
    chartData7d: [0.85, 0.86, 0.87, 0.90, 0.92, 0.94, 0.93]  // Varied 7D chart data
  },
  {
    id: 'ada', name: 'Cardano', symbol: 'ADA', logo: '🔵',
    price: 1.25, percentChange1h: 0.12, percentChange24h: 2.58, percentChange7d: 9.45,
    marketCap: 40523817845, volume24h: 2112035293, circulatingSupply: 32.45, maxSupply: 45,
    chartData7d: [1.10, 1.12, 1.15, 1.18, 1.20, 1.22, 1.25]  // Varied 7D chart data
  },
  {
    id: 'doge', name: 'Dogecoin', symbol: 'DOGE', logo: '🐕',
    price: 0.072, percentChange1h: 0.15, percentChange24h: 0.45, percentChange7d: 2.88,
    marketCap: 9572767498, volume24h: 1987395650, circulatingSupply: 137.9, maxSupply: null,
    chartData7d: [0.065, 0.067, 0.070, 0.073, 0.075, 0.078, 0.080]  // Varied 7D chart data
  },
  {
    id: 'ltc', name: 'Litecoin', symbol: 'LTC', logo: 'Ł',
    price: 215.47, percentChange1h: 0.58, percentChange24h: 1.56, percentChange7d: 8.23,
    marketCap: 14973699831, volume24h: 2791457380, circulatingSupply: 69.12, maxSupply: 84,
    chartData7d: [210, 212, 214, 216, 217, 220, 225]  // Varied 7D chart data
  }
];

export default sampleData;
