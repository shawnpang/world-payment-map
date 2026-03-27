export interface CountryPaymentData {
  country: string;
  iso: string;
  region: string;
  topPaymentMethods: string[];
  digitalAdoptionPct: number;
  notable: string;
}

export const paymentData: CountryPaymentData[] = [
  // East Asia
  { country: "China", iso: "CN", region: "East Asia", topPaymentMethods: ["Alipay", "WeChat Pay", "UnionPay"], digitalAdoptionPct: 87, notable: "World's largest mobile payments market. QR-code payments dominate even street vendors." },
  { country: "Japan", iso: "JP", region: "East Asia", topPaymentMethods: ["Credit Cards (Visa/JCB)", "PayPay", "Suica/Pasmo"], digitalAdoptionPct: 40, notable: "Historically cash-heavy. PayPay grew rapidly. Transit IC cards are uniquely popular." },
  { country: "South Korea", iso: "KR", region: "East Asia", topPaymentMethods: ["Credit Cards", "KakaoPay", "Naver Pay"], digitalAdoptionPct: 95, notable: "One of the world's most cashless societies. Credit card usage incentivized through tax deductions." },
  { country: "Taiwan", iso: "TW", region: "East Asia", topPaymentMethods: ["Credit Cards", "LINE Pay", "JKoPay"], digitalAdoptionPct: 62, notable: "LINE Pay dominates mobile payments via the dominant messaging app." },
  { country: "Hong Kong", iso: "HK", region: "East Asia", topPaymentMethods: ["Octopus Card", "AlipayHK", "Credit Cards"], digitalAdoptionPct: 78, notable: "Octopus stored-value card (1997) is one of the world's oldest contactless payment systems." },
  { country: "Mongolia", iso: "MN", region: "East Asia", topPaymentMethods: ["QPay", "SocialPay", "Bank Cards"], digitalAdoptionPct: 55, notable: "QPay became dominant during COVID. Remarkably high digital adoption for income level." },

  // Southeast Asia
  { country: "Indonesia", iso: "ID", region: "Southeast Asia", topPaymentMethods: ["GoPay (Gojek)", "OVO", "QRIS"], digitalAdoptionPct: 42, notable: "Super-app driven payments. QRIS is a central-bank mandated interoperable QR standard." },
  { country: "Thailand", iso: "TH", region: "Southeast Asia", topPaymentMethods: ["PromptPay", "TrueMoney Wallet", "Cards"], digitalAdoptionPct: 62, notable: "PromptPay is a national real-time payment system linked to phone numbers/national ID." },
  { country: "Vietnam", iso: "VN", region: "Southeast Asia", topPaymentMethods: ["MoMo", "ZaloPay", "VietQR"], digitalAdoptionPct: 40, notable: "MoMo is the dominant super-app wallet with 30M+ users. Still heavily cash-dependent." },
  { country: "Philippines", iso: "PH", region: "Southeast Asia", topPaymentMethods: ["GCash", "Maya", "Bank Transfers"], digitalAdoptionPct: 52, notable: "GCash has 80M+ registered users. Major use case is remittances." },
  { country: "Malaysia", iso: "MY", region: "Southeast Asia", topPaymentMethods: ["Touch 'n Go", "GrabPay", "DuitNow QR"], digitalAdoptionPct: 60, notable: "Touch 'n Go evolved from a transit card to the leading e-wallet." },
  { country: "Singapore", iso: "SG", region: "Southeast Asia", topPaymentMethods: ["PayNow", "Credit Cards", "GrabPay"], digitalAdoptionPct: 90, notable: "PayNow-PromptPay cross-border linkage with Thailand is a global first." },
  { country: "Myanmar", iso: "MM", region: "Southeast Asia", topPaymentMethods: ["Wave Money", "KBZ Pay", "Cash"], digitalAdoptionPct: 25, notable: "Mobile money grew despite political instability. Majority remains unbanked." },
  { country: "Cambodia", iso: "KH", region: "Southeast Asia", topPaymentMethods: ["Bakong (CBDC)", "ABA Pay", "Wing Money"], digitalAdoptionPct: 30, notable: "Bakong is one of the world's first retail CBDCs." },

  // South Asia
  { country: "India", iso: "IN", region: "South Asia", topPaymentMethods: ["UPI (PhonePe/GPay)", "RuPay Cards", "Cash"], digitalAdoptionPct: 50, notable: "UPI processes 10B+ transactions/month — world's largest real-time payment system." },
  { country: "Pakistan", iso: "PK", region: "South Asia", topPaymentMethods: ["JazzCash", "Easypaisa", "Raast"], digitalAdoptionPct: 21, notable: "Telco-led mobile money dominates. Raast is a new national instant payment system." },
  { country: "Bangladesh", iso: "BD", region: "South Asia", topPaymentMethods: ["bKash", "Nagad", "Rocket"], digitalAdoptionPct: 35, notable: "bKash is one of the world's largest mobile money services with 65M+ users." },
  { country: "Sri Lanka", iso: "LK", region: "South Asia", topPaymentMethods: ["Cards", "LankaQR", "FriMi"], digitalAdoptionPct: 30, notable: "2022 economic crisis paradoxically boosted digital payment adoption." },
  { country: "Nepal", iso: "NP", region: "South Asia", topPaymentMethods: ["eSewa", "Khalti", "Bank Transfers"], digitalAdoptionPct: 25, notable: "eSewa is the dominant digital wallet. Remittances (25%+ of GDP) drive adoption." },

  // Middle East
  { country: "United Arab Emirates", iso: "AE", region: "Middle East", topPaymentMethods: ["Cards", "Apple Pay", "Tabby (BNPL)"], digitalAdoptionPct: 80, notable: "BNPL adoption is among the highest globally. High expat population drives diverse preferences." },
  { country: "Saudi Arabia", iso: "SA", region: "Middle East", topPaymentMethods: ["mada (national debit)", "STC Pay", "Cards"], digitalAdoptionPct: 75, notable: "mada has near-universal merchant acceptance. Vision 2030 cashless target already exceeded." },
  { country: "Israel", iso: "IL", region: "Middle East", topPaymentMethods: ["Cards", "Bit (P2P)", "PayBox"], digitalAdoptionPct: 80, notable: "Bit app dominates P2P payments. One of the highest credit card usage rates globally." },
  { country: "Turkey", iso: "TR", region: "Middle East", topPaymentMethods: ["Troy (national card)", "BKM Express", "Papara"], digitalAdoptionPct: 65, notable: "Very high installment culture — even groceries paid in installments via credit card." },
  { country: "Iran", iso: "IR", region: "Middle East", topPaymentMethods: ["Shetab (domestic network)", "Mobile Banking", "QR Payments"], digitalAdoptionPct: 60, notable: "Visa/Mastercard don't operate due to sanctions. Shetab is fully domestic." },

  // Sub-Saharan Africa
  { country: "Kenya", iso: "KE", region: "Sub-Saharan Africa", topPaymentMethods: ["M-Pesa", "Airtel Money", "Bank Cards"], digitalAdoptionPct: 79, notable: "M-Pesa processes ~50% of GDP. Model replicated across Africa." },
  { country: "Nigeria", iso: "NG", region: "Sub-Saharan Africa", topPaymentMethods: ["Bank Transfers (NIP)", "OPay", "Flutterwave"], digitalAdoptionPct: 45, notable: "Africa's largest economy. eNaira CBDC launched 2021 but low adoption. Fintech booming." },
  { country: "South Africa", iso: "ZA", region: "Sub-Saharan Africa", topPaymentMethods: ["Debit Cards", "EFT/Bank Transfers", "SnapScan"], digitalAdoptionPct: 55, notable: "Most developed banking system in Africa. Cash still dominant in informal economy." },
  { country: "Ghana", iso: "GH", region: "Sub-Saharan Africa", topPaymentMethods: ["MTN MoMo", "Vodafone Cash", "Bank Transfers"], digitalAdoptionPct: 50, notable: "Mobile money interoperability launched 2018. E-levy on mobile money was controversial." },
  { country: "Tanzania", iso: "TZ", region: "Sub-Saharan Africa", topPaymentMethods: ["M-Pesa", "Tigo Pesa", "Airtel Money"], digitalAdoptionPct: 45, notable: "First country to achieve full mobile money interoperability in 2014." },
  { country: "Uganda", iso: "UG", region: "Sub-Saharan Africa", topPaymentMethods: ["MTN MoMo", "Airtel Money", "Cash"], digitalAdoptionPct: 40, notable: "Mobile money accounts exceed bank accounts by 10x." },
  { country: "Rwanda", iso: "RW", region: "Sub-Saharan Africa", topPaymentMethods: ["MTN MoMo", "Airtel Money", "Bank Transfers"], digitalAdoptionPct: 50, notable: "Strong government push for cashless economy." },
  { country: "Ethiopia", iso: "ET", region: "Sub-Saharan Africa", topPaymentMethods: ["telebirr", "CBE Birr", "M-Birr"], digitalAdoptionPct: 20, notable: "telebirr reached 40M+ users within 2 years of launch." },
  { country: "Senegal", iso: "SN", region: "Sub-Saharan Africa", topPaymentMethods: ["Orange Money", "Wave", "Free Money"], digitalAdoptionPct: 42, notable: "Wave disrupted the market with free transfers, forcing Orange Money to cut fees." },
  { country: "Côte d'Ivoire", iso: "CI", region: "Sub-Saharan Africa", topPaymentMethods: ["Orange Money", "MTN MoMo", "Wave"], digitalAdoptionPct: 38, notable: "Largest economy in Francophone West Africa. Mobile money is primary inclusion tool." },

  // North Africa
  { country: "Egypt", iso: "EG", region: "North Africa", topPaymentMethods: ["Fawry", "Vodafone Cash", "InstaPay"], digitalAdoptionPct: 30, notable: "Fawry is a ubiquitous bill payment network with 250K+ points of sale." },
  { country: "Morocco", iso: "MA", region: "North Africa", topPaymentMethods: ["CMI (interbank cards)", "M-Wallet", "Cash"], digitalAdoptionPct: 29, notable: "Cash still heavily dominant. Interoperable mobile payment system launched." },

  // Western Europe
  { country: "United Kingdom", iso: "GB", region: "Western Europe", topPaymentMethods: ["Contactless Cards", "Open Banking", "Apple/Google Pay"], digitalAdoptionPct: 93, notable: "Contactless tap-to-pay is ubiquitous. UK is a global leader in open banking." },
  { country: "Germany", iso: "DE", region: "Western Europe", topPaymentMethods: ["Girocard", "PayPal", "Cash"], digitalAdoptionPct: 70, notable: "Historically Europe's most cash-loving major economy. Shifting post-COVID." },
  { country: "France", iso: "FR", region: "Western Europe", topPaymentMethods: ["Carte Bancaire", "PayPal", "Apple Pay"], digitalAdoptionPct: 82, notable: "Carte Bancaire is the national card scheme. France was an early chip-and-PIN pioneer." },
  { country: "Netherlands", iso: "NL", region: "Western Europe", topPaymentMethods: ["iDEAL", "Debit Cards", "Tikkie (P2P)"], digitalAdoptionPct: 95, notable: "iDEAL processes 70%+ of e-commerce payments. One of Europe's most cashless countries." },
  { country: "Belgium", iso: "BE", region: "Western Europe", topPaymentMethods: ["Bancontact", "Cards", "Payconiq"], digitalAdoptionPct: 80, notable: "Bancontact is used for ~80% of in-store card payments." },
  { country: "Switzerland", iso: "CH", region: "Western Europe", topPaymentMethods: ["TWINT", "Cards", "PostFinance"], digitalAdoptionPct: 85, notable: "TWINT has 5M+ users in a country of 8.8M." },
  { country: "Ireland", iso: "IE", region: "Western Europe", topPaymentMethods: ["Contactless Cards", "Revolut", "Apple/Google Pay"], digitalAdoptionPct: 85, notable: "Revolut used by ~50% of adults. One of Europe's fastest shifts away from cash." },
  { country: "Spain", iso: "ES", region: "Western Europe", topPaymentMethods: ["Cards", "Bizum (P2P)", "Cash"], digitalAdoptionPct: 72, notable: "Bizum P2P has 25M+ users and is expanding to merchant payments." },
  { country: "Italy", iso: "IT", region: "Western Europe", topPaymentMethods: ["Cards", "Satispay", "Cash"], digitalAdoptionPct: 58, notable: "Historically very cash-heavy. Satispay is a homegrown mobile payment app." },
  { country: "Portugal", iso: "PT", region: "Western Europe", topPaymentMethods: ["MB Way", "Multibanco", "Cards"], digitalAdoptionPct: 65, notable: "MB Way is a highly successful national mobile payment solution." },

  // Nordics & Baltics
  { country: "Sweden", iso: "SE", region: "Nordics", topPaymentMethods: ["Swish", "Cards", "Klarna (BNPL)"], digitalAdoptionPct: 97, notable: "World's most cashless country. Cash <1% of transactions. Klarna was founded here." },
  { country: "Norway", iso: "NO", region: "Nordics", topPaymentMethods: ["Vipps", "BankAxept (debit)", "Cards"], digitalAdoptionPct: 96, notable: "Vipps is used by 80%+ of the population. Cash usage below 3%." },
  { country: "Denmark", iso: "DK", region: "Nordics", topPaymentMethods: ["MobilePay", "Dankort", "Cards"], digitalAdoptionPct: 96, notable: "MobilePay is used by ~90% of Danes. Dankort is one of the oldest national debit schemes." },
  { country: "Finland", iso: "FI", region: "Nordics", topPaymentMethods: ["Cards", "MobilePay", "Bank Transfers"], digitalAdoptionPct: 94, notable: "Very high card payment penetration. Online banking adoption among the world's highest." },
  { country: "Estonia", iso: "EE", region: "Nordics", topPaymentMethods: ["Bank Links", "Cards", "Mobile-ID Payments"], digitalAdoptionPct: 88, notable: "World's most advanced digital government (e-Residency). Digital ID underpins payments." },
  { country: "Lithuania", iso: "LT", region: "Nordics", topPaymentMethods: ["Bank Transfers", "Cards", "Revolut"], digitalAdoptionPct: 82, notable: "Major EU fintech hub — home to many e-money licenses." },

  // Central & Eastern Europe
  { country: "Poland", iso: "PL", region: "Central & Eastern Europe", topPaymentMethods: ["BLIK", "Cards", "Przelewy24"], digitalAdoptionPct: 80, notable: "BLIK generates one-time codes for payments. Used by 15M+ Poles. Expanding to other countries." },
  { country: "Czech Republic", iso: "CZ", region: "Central & Eastern Europe", topPaymentMethods: ["Cards", "Bank Transfers", "Apple/Google Pay"], digitalAdoptionPct: 78, notable: "High contactless card penetration." },
  { country: "Romania", iso: "RO", region: "Central & Eastern Europe", topPaymentMethods: ["Cash", "Cards", "Bank Transfers"], digitalAdoptionPct: 45, notable: "Still one of Europe's most cash-dependent economies." },
  { country: "Hungary", iso: "HU", region: "Central & Eastern Europe", topPaymentMethods: ["Cards", "Bank Transfers", "Cash"], digitalAdoptionPct: 60, notable: "AFR instant payment system launched 2020." },
  { country: "Russia", iso: "RU", region: "Central & Eastern Europe", topPaymentMethods: ["Mir (national card)", "SBP (instant)", "Bank Cards"], digitalAdoptionPct: 75, notable: "Post-2022 sanctions forced shift from Visa/MC to national Mir network." },
  { country: "Ukraine", iso: "UA", region: "Central & Eastern Europe", topPaymentMethods: ["Cards (Visa/MC)", "Privat24", "Apple Pay"], digitalAdoptionPct: 65, notable: "PrivatBank dominates with 50%+ market share. War accelerated digital adoption." },

  // North America
  { country: "United States", iso: "US", region: "North America", topPaymentMethods: ["Cards (Visa/MC/Amex)", "Apple Pay", "Zelle/Venmo/Cash App"], digitalAdoptionPct: 82, notable: "Credit card rewards culture is uniquely strong. Fragmented P2P market. Cheques still used." },
  { country: "Canada", iso: "CA", region: "North America", topPaymentMethods: ["Interac (e-Transfer)", "Cards", "Apple Pay"], digitalAdoptionPct: 85, notable: "Interac e-Transfer is universally used for P2P. Tap-to-pay adoption is very high." },
  { country: "Mexico", iso: "MX", region: "North America", topPaymentMethods: ["Cash/OXXO", "SPEI/CoDi", "Cards"], digitalAdoptionPct: 42, notable: "OXXO convenience stores serve as cash payment points for e-commerce. Very cash-heavy." },

  // Central America & Caribbean
  { country: "El Salvador", iso: "SV", region: "Central America", topPaymentMethods: ["Cash (USD)", "Bank Transfers", "Bitcoin (Chivo)"], digitalAdoptionPct: 28, notable: "First country to adopt Bitcoin as legal tender (2021). Actual Bitcoin usage remains low." },
  { country: "Jamaica", iso: "JM", region: "Central America", topPaymentMethods: ["Cash", "Lynk (mobile)", "Cards"], digitalAdoptionPct: 30, notable: "JAM-DEX is a CBDC launched via the Lynk wallet. One of few live retail CBDCs." },

  // South America
  { country: "Brazil", iso: "BR", region: "South America", topPaymentMethods: ["PIX", "Credit Cards", "Boleto Bancário"], digitalAdoptionPct: 75, notable: "PIX has 150M+ users — world's fastest-growing instant payment system." },
  { country: "Argentina", iso: "AR", region: "South America", topPaymentMethods: ["Cards", "Mercado Pago", "Bank Transfers"], digitalAdoptionPct: 55, notable: "Mercado Pago dominates. Hyperinflation drives complex payment behaviors." },
  { country: "Colombia", iso: "CO", region: "South America", topPaymentMethods: ["PSE (bank transfer)", "Nequi/Daviplata", "Cash (Efecty)"], digitalAdoptionPct: 45, notable: "Nequi and Daviplata are leading mobile wallets. Cash vouchers still important." },
  { country: "Chile", iso: "CL", region: "South America", topPaymentMethods: ["Cards", "Bank Transfers", "MACH/Tenpo"], digitalAdoptionPct: 65, notable: "Highest financial inclusion in Latin America." },
  { country: "Peru", iso: "PE", region: "South America", topPaymentMethods: ["Cash", "Yape", "Plin"], digitalAdoptionPct: 38, notable: "Yape grew explosively to 15M+ users. Yape and Plin recently became interoperable." },

  // Oceania
  { country: "Australia", iso: "AU", region: "Oceania", topPaymentMethods: ["Tap-to-Pay Cards", "PayID/NPP", "Apple/Google Pay"], digitalAdoptionPct: 92, notable: "World leader in contactless tap-to-pay (95%+ of in-person card transactions)." },
  { country: "New Zealand", iso: "NZ", region: "Oceania", topPaymentMethods: ["EFTPOS/Debit Cards", "Contactless Cards", "Internet Banking"], digitalAdoptionPct: 88, notable: "EFTPOS deeply embedded in culture since the 1980s." },

  // Central Asia
  { country: "Kazakhstan", iso: "KZ", region: "Central Asia", topPaymentMethods: ["Kaspi.kz", "Bank Cards", "Bank Transfers"], digitalAdoptionPct: 70, notable: "Kaspi.kz is one of the world's most successful fintech super-apps — used by 90%+ of adults." },
  { country: "Uzbekistan", iso: "UZ", region: "Central Asia", topPaymentMethods: ["Payme", "Click", "Uzcard"], digitalAdoptionPct: 45, notable: "Uzcard and Humo are dual national card schemes. Mobile payment apps growing rapidly." },
];

export const regions = [...new Set(paymentData.map(d => d.region))];

export const paymentDataByIso = Object.fromEntries(
  paymentData.map(d => [d.iso, d])
);
