export const WHATSAPP_NUMBER = '923001234567';

export const products = [
  {
    id: 1,
    category: 'pure',
    name: 'Royal Super Negin',
    nameUr: 'رائل سپر نگین',
    weight: '1g Premium Thread',
    price: 3800,
    priceUSD: 13.7,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    desc: 'The pinnacle of saffron excellence. Hand-selected stigmas averaging 3cm in length — the longest and most potent threads from our premium Ghaenat harvest.',
    specs: {
      Grade: 'ISO Super Negin',
      Crocin: '260+',
      Origin: 'Kashmir Valley',
      Harvest: 'Dawn Protocol 2024',
      Net: '1 gram',
      Storage: 'Dark, cool, dry'
    },
    reviews: [
      { stars: 5, text: "Absolutely premium. The color it gives to biryani is extraordinary — golden like nothing I've seen in Pakistan.", author: 'Ayesha Siddiqui', loc: 'Lahore', date: 'Jan 2026' },
      { stars: 5, text: "I've tried many brands. This is genuinely different. The fragrance alone tells you it's authentic.", author: 'Tariq Mahmood', loc: 'Karachi', date: 'Dec 2025' }
    ],
    accordion: [
      { title: 'Certificate of Authenticity', content: 'Every batch of Royal Super Negin carries an ISO 3632 Grade I certificate verifiable by batch number. Scan the QR code on packaging for the full lab report.' },
      { title: 'Storage Instructions', content: 'Store in the airtight jar provided, away from direct sunlight and moisture. Shelf life: 3 years when stored correctly. Keep at room temperature — refrigeration is not required but acceptable.' },
      { title: 'Delivery & Returns', content: 'Free delivery across Pakistan on orders above Rs. 2,000. If you receive an adulterated product (verifiable by our test method), we provide a 100% refund within 7 days of delivery.' }
    ]
  },
  {
    id: 2,
    category: 'pure',
    name: 'Sargol Premium',
    nameUr: 'سرگول پریمیم',
    weight: '3g Sargol Grade',
    price: 8500,
    priceUSD: 30.5,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=800&q=80'],
    desc: 'Authentic Sargol — the "top of flower" grade — with deep crimson tips and extraordinary colouring power. One gram colors 25 servings of rice perfectly.',
    specs: {
      Grade: 'ISO Sargol Grade I',
      Crocin: '240+',
      Origin: 'Kashmir Valley',
      Harvest: 'Dawn 2024',
      Net: '3 grams',
      Colouring: 'Excellent'
    },
    reviews: [
      { stars: 5, text: "Best value saffron I've found in Pakistan. The 3g lasts our family months.", author: 'Nadia Rahman', loc: 'Islamabad', date: 'Feb 2026' }
    ],
    accordion: [
      { title: 'What is Sargol?', content: 'Sargol means "top of flower" in Farsi. It consists of the pure red stigma tips, with less yellow style included. This grade offers excellent colouring power and is preferred for culinary use.' },
      { title: 'Delivery', content: 'Free delivery on orders above Rs. 2,000. Dispatched within 24 hours, delivered in 1–3 working days across Pakistan.' }
    ]
  },
  {
    id: 3,
    category: 'honey',
    name: 'Kesar Sidr Honey',
    nameUr: 'کیسر سدر شہد',
    weight: '250g Infused Honey',
    price: 5800,
    priceUSD: 20.9,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800&q=80'],
    desc: "Wild Sidr honey from the Thal Desert, cold-infused with premium Super Negin saffron for 21 days. An extraordinary fusion of two of nature's most potent healers.",
    specs: {
      Base: 'Wild Sidr Honey',
      Saffron: '0.5g/250ml',
      Method: '21-day cold infusion',
      Origin: 'Thal Desert + Kashmir',
      Net: '250 grams',
      Shelf: '2 years'
    },
    reviews: [],
    accordion: [
      { title: 'Health Benefits', content: "This combination creates a powerhouse of antioxidants. Sidr honey is among the world's most medicinal honeys, while saffron adds crocin, crocetin and safranal — proven anti-inflammatory and mood-boosting compounds." },
      { title: 'How to Use', content: 'Take one teaspoon daily on an empty stomach with warm water, or mix into warm milk. Also excellent on toast, in smoothies, or as a face mask (mix with rose water).' }
    ]
  },
  {
    id: 4,
    category: 'tea',
    name: 'Royal Kesar Tea',
    nameUr: 'رائل کیسر چائے',
    weight: '50g Blend',
    price: 2800,
    priceUSD: 10.1,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'],
    desc: 'Artisan blend of Darjeeling green tea, Kashmir saffron, cardamom, and dried rose petals. A daily ritual for mood, clarity, and peace.',
    specs: {
      Base: 'Darjeeling Green Tea',
      Saffron: 'Super Negin Threads',
      Spices: 'Cardamom, Rose, Ginger',
      Net: '50 grams',
      Servings: '~40 cups',
      Caffeine: 'Low-Moderate'
    },
    reviews: [
      { stars: 5, text: 'I drink this every morning. It genuinely lifts my mood. The fragrance is like no other tea.', author: 'Sana Malik', loc: 'Faisalabad', date: 'Jan 2026' }
    ],
    accordion: [
      { title: 'Brewing Instructions', content: 'Use one teaspoon per cup. Brew in water at 80°C (not boiling) for 3 minutes. Add honey to taste. Can be enjoyed hot or cold-brewed overnight in the fridge.' },
      { title: 'Ingredients', content: 'Darjeeling green tea leaves, Naksh Zafran Super Negin saffron, green cardamom, dried rose petals, dried ginger. No artificial flavors, colors, or preservatives.' }
    ]
  },
  {
    id: 5,
    category: 'gift',
    name: 'Imperial Gift Set',
    nameUr: 'امپیریل گفٹ سیٹ',
    weight: 'Complete Collection',
    price: 14500,
    priceUSD: 52.2,
    badge: 'Gift Ready',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80'],
    desc: 'The ultimate Naksh Zafran experience. Our signature black-and-gold presentation box containing 1g Super Negin, Kesar Honey, Royal Tea, and a hand-calligraphed certificate.',
    specs: {
      Contents: '1g Super Negin + 100g Honey + 25g Tea',
      Packaging: 'Signature black & gold box',
      Certificate: 'Hand-calligraphed',
      Ribbon: 'Gold satin',
      Occasion: 'Wedding, Eid, Corporate',
      Delivery: 'Gift-wrapped, no invoice'
    },
    reviews: [
      { stars: 5, text: "Gifted this at my sister's wedding. Everyone asked where it was from. The packaging alone is worth it.", author: 'Farrukh Ali', loc: 'Lahore', date: 'Dec 2025' }
    ],
    accordion: [
      { title: 'Gift Customization', content: "We offer complimentary personalization: add a handwritten message card, custom ribbon color (gold, silver, or crimson), and have the recipient's name calligraphed on the certificate. Contact us on WhatsApp to arrange." },
      { title: 'Corporate Orders', content: 'We accommodate bulk corporate gift orders with volume discounts starting from 10 sets. Custom branding (with your logo on the box) available for orders of 50+ units. Minimum lead time: 5 business days.' }
    ]
  },
  {
    id: 6,
    category: 'pure',
    name: 'Pushali Classic',
    nameUr: 'پوشالی کلاسک',
    weight: '5g Everyday Grade',
    price: 11500,
    priceUSD: 41.4,
    badge: null,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80'],
    desc: 'The perfect everyday saffron for the discerning Pakistani kitchen. Pushali grade offers excellent color and aroma at a more accessible price point.',
    specs: {
      Grade: 'ISO Grade I Pushali',
      Crocin: '220+',
      Origin: 'Kashmir Valley',
      Net: '5 grams',
      Use: 'Culinary, Medicinal',
      Value: 'Best per-gram value'
    },
    reviews: [],
    accordion: [
      { title: 'What is Pushali?', content: 'Pushali (or Bunch Saffron) includes the full thread — both the red stigma and some yellow style. It has slightly less colouring power per gram than Sargol but offers excellent value and still authentic flavor and health benefits.' }
    ]
  }
];

export const reviews = [
  { stars: 5, text: 'میں نے کئی برانڈز آزمائے لیکن Naksh Zafran بالکل مختلف ہے۔ خالص اور سچا زعفران۔', author: 'Fatima Raza', loc: 'Lahore', img: 'https://i.pravatar.cc/150?img=47' },
  { stars: 5, text: 'The biryani color from just 10 threads was extraordinary. My guests demanded to know my secret ingredient.', author: 'Ahmed Butt', loc: 'Karachi', img: 'https://i.pravatar.cc/150?img=52' },
  { stars: 5, text: "I ordered the gift set for my mother's birthday. The packaging is stunning and she loved every product inside.", author: 'Zainab Malik', loc: 'Islamabad', img: 'https://i.pravatar.cc/150?img=36' },
  { stars: 5, text: 'بہترین زعفران۔ WhatsApp پر آرڈر کرنا بہت آسان تھا اور ڈلیوری ٢٤ گھنٹے میں ہوئی۔', author: 'Imran Shah', loc: 'Faisalabad', img: 'https://i.pravatar.cc/150?img=68' },
  { stars: 5, text: 'Drinking saffron milk every night has genuinely improved my sleep and skin. The quality is unmatched.', author: 'Dr. Sara Qureshi', loc: 'Peshawar', img: 'https://i.pravatar.cc/150?img=25' },
  { stars: 5, text: 'Wholesale order of 50 gift sets for our company Eid gifting. Professional, on time, and impeccable quality.', author: 'Asif Khan', loc: 'Rawalpindi', img: 'https://i.pravatar.cc/150?img=57' }
];

export const blogPosts = [
  {
    id: 1,
    category: 'Health & Wellness',
    title: '10 Proven Health Benefits of Saffron (Backed by Science)',
    excerpt: 'Modern clinical research confirms what traditional hakims knew for centuries — saffron is among the most potent natural medicines available.',
    image: 'https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=1200&q=80',
    date: 'March 15, 2026',
    readTime: '8 min read',
    content: `<h3>1. Powerful Antidepressant Properties</h3>
<p>Multiple randomized controlled trials have found saffron extract (30mg daily) to be as effective as fluoxetine (Prozac) and imipramine for treating mild-to-moderate depression — with significantly fewer side effects.</p>
<h3>2. Rich in Antioxidants</h3>
<p>Saffron contains crocin, crocetin, safranal, and kaempferol — powerful antioxidants that neutralize free radicals.</p>
<h3>3. Heart Health Support</h3>
<p>Studies show saffron reduces LDL ("bad") cholesterol and triglycerides while increasing HDL ("good") cholesterol.</p>
<h3>4. Memory & Alzheimer's Protection</h3>
<p>Iranian clinical trials found 30mg of saffron daily significantly improved cognitive function in early Alzheimer's patients.</p>
<h3>5. Anti-Cancer Properties</h3>
<p>Crocin has demonstrated selective toxicity to cancer cells in laboratory studies while sparing healthy cells.</p>`
  },
  {
    id: 2,
    category: 'Recipes',
    title: 'The Perfect Pakistani Biryani: A Saffron Master Class',
    excerpt: 'The secret to restaurant-quality biryani at home lies in one ingredient most people use incorrectly.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80',
    date: 'February 28, 2026',
    readTime: '6 min read',
    content: `<h3>The Golden Secret: Saffron Water</h3>
<p>The most common mistake in Pakistani biryani is adding saffron threads directly to the pot. This wastes 80% of the saffron's potential.</p>
<h3>The Blooming Technique</h3>
<p>Take 20–25 threads of saffron. Gently crush between your fingertips. Place in 3 tablespoons of warm water (60-70°C) and let steep for 20–30 minutes.</p>`
  },
  {
    id: 3,
    category: 'Culture & Heritage',
    title: 'زعفران کی تاریخ: کشمیر سے پاکستانی گھروں تک',
    excerpt: 'زعفران کی ڈھائی ہزار سال پرانی تاریخ اور یہ کیسے پاکستانی کھانوں کا لازمی حصہ بنا۔',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    date: 'February 10, 2026',
    readTime: '5 min read',
    content: `<h3>قدیم دور میں زعفران</h3>
<p>زعفران کی کاشت تقریباً ٣٥٠٠ سال پہلے ایران میں شروع ہوئی۔ یونانی، رومی، اور عرب تاجر اسے "سونے سے بھی قیمتی" کہتے تھے۔</p>`
  },
  {
    id: 4,
    category: 'How-To Guide',
    title: "How to Identify Real vs Fake Saffron: A Consumer's Guide",
    excerpt: "Pakistan's saffron market has a significant adulteration problem. Here's how to protect yourself.",
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80',
    date: 'January 22, 2026',
    readTime: '7 min read',
    content: `<h3>The Water Test (Most Reliable)</h3>
<p>Place 5–6 threads in a glass of cold water. Real saffron releases color slowly over 5–15 minutes. Fake saffron releases artificial dye almost instantly.</p>`
  }
];

export const healthBenefits = [
  { title: 'Antidepressant & Mood Elevator', desc: 'Clinical trials show 30mg saffron daily reduces depression symptoms as effectively as low-dose antidepressants.', icon: '🧠' },
  { title: 'Powerful Antioxidant Protection', desc: 'Saffron contains crocin, crocetin, and kaempferol — among the most potent natural antioxidants.', icon: '🛡️' },
  { title: 'Heart Health & Cholesterol', desc: 'Regular saffron consumption reduces LDL cholesterol and triglycerides while increasing HDL levels.', icon: '❤️' },
  { title: 'Memory & Cognitive Function', desc: "Iranian studies found saffron significantly improved memory in early Alzheimer's patients.", icon: '💡' },
  { title: 'Blood Sugar Regulation', desc: 'Saffron improves insulin sensitivity and helps reduce post-meal blood sugar spikes.', icon: '⚖️' },
  { title: 'Anti-Cancer Properties', desc: 'Crocin demonstrates selective toxicity to multiple cancer cell types in laboratory studies.', icon: '🔬' },
  { title: 'Eye Health & Vision', desc: 'Clinical trials show saffron supplementation improves visual acuity in age-related macular degeneration.', icon: '👁️' },
  { title: "PMS & Women's Health", desc: 'Randomized trials show 30mg saffron daily significantly reduces PMS symptoms.', icon: '🌸' },
  { title: 'Anti-Inflammatory Action', desc: 'Safranal exhibits anti-inflammatory properties comparable to aspirin for certain conditions.', icon: '🌿' },
  { title: 'Skin & Complexion', desc: 'Crocin inhibits melanin production while antioxidants reduce acne inflammation.', icon: '✨' },
  { title: 'Sleep Quality', desc: 'Safranal acts as a mild sedative, increasing slow-wave sleep duration.', icon: '🌙' },
  { title: 'Libido & Reproductive Health', desc: 'Studies show saffron improves erectile function and increases sexual desire.', icon: '💫' }
];

export const faqs = [
  { q: 'How do I know your saffron is genuine?', a: 'Every batch of Naksh Zafran carries an ISO 3632 Grade I certificate. We publish full lab reports on our website by batch number.' },
  { q: 'How do I place an order?', a: "Two ways: (1) WhatsApp us at 0300-1234567. (2) Fill the purchase form on our website and we'll call you within 2 hours." },
  { q: 'کیا آپ پورے پاکستان میں ڈلیوری کرتے ہیں؟', a: 'جی ہاں! ہم پاکستان کے ہر کونے میں ڈلیوری کرتے ہیں۔ Rs. 2000 سے زیادہ آرڈر پر فری ڈلیوری۔' },
  { q: 'What is the difference between Super Negin and Sargol?', a: 'Super Negin is the premium grade: extra-long threads (3cm+) with maximum crocin levels (260+). Sargol consists of the top portion of the thread only.' },
  { q: 'How much saffron should I use daily?', a: 'For health benefits: 10–15 threads per day. For cooking: 20–25 threads per kilogram of rice.' },
  { q: 'How should I store saffron?', a: 'Store in an airtight jar away from direct sunlight, moisture, and heat. Properly stored, it retains potency for 3 years.' },
  { q: 'Is your saffron halal certified?', a: 'Yes, all Naksh Zafran products are halal certified by a recognized Pakistani certification body.' },
  { q: 'Can I return or exchange my order?', a: 'If you believe your product is adulterated, contact us within 7 days. We will either reship or refund in full.' },
  { q: 'Do you offer bulk or wholesale pricing?', a: 'Yes. We offer volume discounts starting from 100g purchases. Contact us on WhatsApp for wholesale pricing.' },
  { q: 'کیا سفرون بچوں کے لیے محفوظ ہے؟', a: 'چھوٹی مقدار میں (١-٢ دھاگے) ٢ سال سے زیادہ عمر کے بچوں کے کھانے میں ڈالنا محفوظ ہے۔' }
];

export const timeline = [
  { year: '1850', title: 'The First Harvest', desc: 'Hakim Abdul Rehman Mirzaei discovers the "dawn protocol" — harvesting before sunrise dramatically improves saffron potency.' },
  { year: '1920', title: 'The First Lab Test', desc: 'Third-generation Mirzaei sends saffron samples to a Lahore laboratory. Results confirm unprecedented crocin levels.' },
  { year: '1947', title: 'Partition & Perseverance', desc: 'As borders shift, the Mirzaei family continues its work across both sides of the new frontier.' },
  { year: '1985', title: 'Pakistan-Wide Distribution', desc: 'Fifth-generation Mirzaei establishes distribution across all provinces.' },
  { year: '2026', title: 'Naksh Zafran Launches Online', desc: "The sixth generation brings the family's 170-year legacy to the digital age." }
];
