/* ═══════════════════════════════════════════════════════════════════
   PREMIUM INTERACTIVE BIRTHDAY SURPRISE
   Pure Vanilla JavaScript (ES6+) — no frameworks, no libraries.

   ★★★  HOW TO CUSTOMIZE  ★★★
   Everything personal lives in the CONFIG object below:
   change the name, messages, letter, timeline, photos, coupons,
   reasons and ending — the whole site adapts automatically.
   Photos: drop your own files into  assets/photos/  (same file names,
   or update the paths in CONFIG). Music: replace the mp3 in
   assets/music/  (or update CONFIG.music).
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ────────────────────────────────────────────────────────────────────
   CONFIG — edit me ❤
   ──────────────────────────────────────────────────────────────────── */
const CONFIG = {

  /* recipient */
  name: 'My Love Amrita',
  tagline: '“I made something special just for you.”',

  /* background music */
  music: 'assets/music/birthday-melody.mp3',
  musicVolume: 0.65,

  /* hero */
  heroPhoto: 'assets/photos/hero.webp',
  heroHeading: 'मेरो जीवनको सबैभन्दा अनमोल व्यक्तिलाई... 💖',
  heroText: 'यो पानाको हरेक कुनामा तिम्रै माया बसेको छ। ❤️🌹',

  /* birthday wish cards */
  wishes: [
    { icon: '🌟', title: 'Shine On',        text: 'तिम्रो हरेक दिन खुशी, सफलता र मायाले चम्किरहोस्। सधैं यसरी नै उज्यालो बनिरहनू, मेरी तारा।' },
    { icon: '💖', title: 'So Loved',        text: 'आज का यह ख़ास दिन उस सबसे खूबसूरत दिल के नाम, जिसने मेरी ज़िंदगी को और भी ख़ास बना दिया। 🎂' },
    { icon: '🌈', title: 'Dream Big',       text: 'आज राति तिमीले मनमनै देखेका हरेक सपना यो वर्ष अवश्य पूरा होऊन्। 🌙' },
    { icon: '🎂', title: 'Sweet Days',      text: 'तिम्रो हरेक दिन मिठासले भरियोस् र हरेक रात मायाले न्यानो बनोस्। 🍰' },
    { icon: '🦋', title: 'Grow & Glow',     text: 'समयसँगै तिमी झन् सुन्दर, झन् प्यारी र झन् विशेष बन्दै गइरहेकी छौ। 🥰' },
    { icon: '🥂', title: 'Cheers to You',   text: 'अनन्त हाँसो, कहिल्यै नघट्ने माया, अनि सधैं मिठो केक—यही हो मेरो कामना। 😄' },
  ],

  /* romantic letter (envelope) */
  letter: {
    heading: 'My Dearest,',
    text: '❤️ जन्मदिनको धेरै धेरै शुभकामना, मेरी माया अमृता! 🎂🌹 आज तिम्रो जन्मदिन हो। सबैले आज तिम्रो जन्म भएको दिन मनाइरहेका छन्, तर म त हरेक दिन तिमीलाई मनाउँछु। तिमीसँग बिताएका हरेक हाँसो, रातिसम्म चलेका कुराकानी, र सँगै बिताएका साना–साना पलहरू मेरो जीवनका सबैभन्दा सुन्दर सम्झना बनेका छन्। तिमी मेरो जीवनमा आएको सबैभन्दा सुन्दर उपहार हौ, र तिमीले मेरो जीवनलाई माया, खुशी र अर्थले भरिदिएकी छौ। तिम्रो मुस्कानले मेरो हरेक दिन सुन्दर बनाइदिन्छ, र तिम्रो साथ नै मेरो सबैभन्दा ठूलो खुसी हो। यो नयाँ वर्षले तिम्रा सबै सपना पूरा गराओस्, तिम्रो जीवन सधैं खुशी, सफलता र मायाले भरिरहोस्। धन्यवाद, मेरो साथमा रहनुभएकोमा, मलाई बुझिदिनुभएकोमा, र सधैं माया गरिरहनुभएकोमा। **म तिमीलाई शब्दले व्यक्त गर्न सकिनेभन्दा पनि धेरै माया गर्छु, आज, भोलि र सधैंभरि। ❤️🌹',
    sign: '— forever yours ❤',
  },

  /* memory timeline */
  timeline: [
    { photo: 'assets/photos/timeline-1.webp', date: 'The Beginning',  title: 'First Meeting',  text: 'The day fate quietly introduced us — and nothing was ever ordinary again.' },
    { photo: 'assets/photos/timeline-2.webp', date: 'Hello, You',     title: 'First Chat',     text: 'One message turned into hours, and hours turned into everything.' },
    { photo: 'assets/photos/timeline-3.webp', date: 'Two Smiles',     title: 'First Selfie',   text: 'Proof that we look our best when we are next to each other.' },
    { photo: 'assets/photos/timeline-4.webp', date: 'Golden',         title: 'Our Favorite Day', text: 'Sun, laughter, and you — if I could relive one day forever, it would be this one.' },
    { photo: 'assets/photos/timeline-5.webp', date: 'Treasured',      title: 'Best Memory',    text: 'The moment I realized home was never a place — it has always been you.' },
    { photo: 'assets/photos/timeline-6.webp', date: 'Giggles',        title: 'Fun Moments',    text: 'Inside jokes, silly dances, and laughing until neither of us could breathe.' },
    { photo: 'assets/photos/timeline-7.webp', date: 'Wanderlust',     title: 'Special Trips',  text: 'Every map looks better when we are drawing the route together.' },
    { photo: 'assets/photos/timeline-8.webp', date: 'Someday Soon',   title: 'Future Dreams',  text: 'Every dream I have for tomorrow has you in it. All of them. Always.' },
  ],

  /* photo gallery */
  gallery: [
    { photo: 'assets/photos/gallery-1.webp', caption: 'Us' },
    { photo: 'assets/photos/gallery-2.webp', caption: 'Smile' },
    { photo: 'assets/photos/gallery-3.webp', caption: 'Golden Hour' },
    { photo: 'assets/photos/gallery-4.webp', caption: 'Together' },
    { photo: 'assets/photos/gallery-5.webp', caption: 'Sweet Days' },
    { photo: 'assets/photos/gallery-6.webp', caption: 'Little Things' },
    { photo: 'assets/photos/gallery-7.webp', caption: 'My Person' },
    { photo: 'assets/photos/gallery-8.webp', caption: 'Forever' },
  ],

  /* gift box secret message */
  giftSecret: 'No gift could ever match what you give me every single day — your smile, your warmth, your love. You are my greatest present. Always. 💝',

  /* love letter (handwritten paper) */
  loveLetter: [
    'If I had one wish, I would not waste it — because I already found you.',
    'You are the quiet in my chaos, the color in my grayest days,',
    'and the reason my heart learned new ways to beat.',
    'Thank you for choosing us, again and again.',
    'Happy birthday, my love. Here is to you — today and always.',
  ],

  /* love coupons */
 coupons: [
  {
    icon: '🤗',
    title: 'Free Hug',
    text: 'न्यानो अँगालो, जसले तिम्रो हरेक थकान र चिन्ता एकैछिनमा बिर्साइदिनेछ। जब मन लाग्छ, त्यही बेला प्रयोग गर्न मिल्ने। 🤍'
  },
  {
    icon: '🎬',
    title: 'Movie Night',
    text: 'चलचित्र तिम्रै रोजाइको हुनेछ। पपकर्न पनि तिमीसँगै बाँडेर खानेछु... सायद। 🍿❤️'
  },
  {
    icon: '🍽️',
    title: 'Dinner Date',
    text: 'मैनबत्तीको उज्यालो, तिम्रो मनपर्ने परिकार, अनि त्यो साँझभरि मेरो पूरा समय तिम्रै लागि। 🕯️❤️'
  },
  {
    icon: '🫂',
    title: 'Unlimited Cuddles',
    text: 'न कुनै समयको सीमा, न कुनै सर्त। मन लागे जति अँगालो, सधैं तिम्रै लागि। 🤗💕'
  },
  {
    icon: '🍦',
    title: 'Ice Cream Date',
    text: 'दुई स्कुप आइसक्रिम, एउटा चम्चा, अनि सँगै बिताएका मिठा पलहरू। 🍦🥰'
  },
  {
    icon: '☕',
    title: 'Coffee Together',
    text: 'तातो कफीको चुस्की, मीठा कुराकानी, अनि समय नै रोकिएझैँ लाग्ने पल। ☕🤎'
  },
  {
    icon: '🎁',
    title: 'Special Gift',
    text: 'तिम्रै लागि रोजिएको एउटा विशेष सरप्राइज। खोल्नुअघि एउटा मिठो चुम्बन चाहिन्छ। 🎁😘'
  },
  {
    icon: '🧭',
    title: 'Adventure Day',
    text: 'जहाँ जान मन लाग्छ, त्यहीँ जानेछौँ। योजना मेरो, साथ तिम्रो, अनि खाजाको जिम्मा पनि मेरो। 🌄❤️'
  },
],

  /* 100 reasons I love you */
 reasons: [
  'तिम्रो मुस्कानले मेरो सबैभन्दा अँध्यारा दिनहरू पनि उज्यालो बनाइदिन्छ। ✨❤️',
  'आफ्नै जोक पूरा भन्नुअघि नै तिमी हाँस्न थाल्ने बानी। 😂💕',
  'तिमीले साधारण पलहरूलाई पनि जादुमय बनाइदिन्छौ। ✨🥹',
  'तिमीले सबैसँग गर्ने माया र सम्मान। 🤍🌸',
  'तिमीलाई मनपर्ने कुरा गर्दा तिम्रा आँखामा देखिने चमक। ✨👀❤️',
  'म आफूमाथि विश्वास गर्नुभन्दा धेरै तिमीले ममाथि विश्वास गर्छौ। 🥹💖',
  'तिम्रो अँगालोमा घरजस्तो न्यानोपन महसुस हुन्छ। 🤗🏡❤️',
  'मलाई हँसाउन तिमीले बनाउने ती रमाइला अनुहारहरू। 😂🥰',
  'मैले एकपटक मात्र भनेका साना कुराहरू पनि तिमीले सम्झिरहन्छौ। 📝💖',
  'यो संसारमा मेरो सबैभन्दा मनपर्ने आवाज तिम्रो हो। 🎶❤️',
  'कसैले नहेरेको सम्झेर तिमी नाच्ने तरिका। 💃✨',
  'तिम्रो एउटा सन्देशले मेरो खराब दिन पनि राम्रो बनाइदिन्छ। 📱💝',
  'आफ्ना सपनाका लागि तिमीले गर्ने मेहनत र साहस। 🌟💪',
  'हाँस्दा तिमी नाक खुम्च्याउने त्यो प्यारा बानी। 😊💕',
  'मलाई चाहिएको बेला तिमीले सधैं सही शब्द भेट्छौ। 🥹❤️',
  'मैले चिनेको सबैभन्दा सफा र सुन्दर मन तिम्रो हो। 🤍🌹',
  'हरेक गीतसँगै तिमी गुनगुनाउने बानी। 🎵🥰',
  'तिमीले मलाई अझ राम्रो मान्छे बन्न प्रेरणा दिन्छौ। ❤️✨',
  'बिहानको तिम्रो निद्राले भरिएको मिठो आवाज। 🌅💖',
  'सानो कुरामा पनि बच्चाजस्तै खुशी हुने तिमी। 🌸🥹',
  'तिमीले माया गर्ने मानिसहरूलाई कहिल्यै हार मान्दैनौ। ❤️🤝',
  'तिम्रा खाना बनाउने रमाइला प्रयोगहरू... बिग्रिए पनि प्यारा लाग्छन्। 🍳😂',
  'भीडमा मेरो हात अझ बलियोसँग समात्ने तिम्रो बानी। 🤝❤️',
  'मेरो मौनता पनि तिमीले बुझ्छौ। 🤍🥹',
  'मप्रतिको तिम्रो अथाह धैर्यता। 🌼❤️',
  'जनावरहरूसँग पनि साथीझैँ कुरा गर्ने तिमी। 🐶💕',
  'तिमीसँग हुँदा जहाँ गए पनि यात्रा विशेष लाग्छ। 🌍✨',
  'मध्यरातका तिम्रा अनौठा तर रमाइला सोचहरू। 🌙💭❤️',
  'मेरा फ्रेन्च फ्राइज चोर्ने तिमी... अनि मैले खुशीसँग दिनु। 🍟😂💕',
  'हरेक कठिनाइमा पनि राम्रो पक्ष देख्ने तिमी। 🌈❤️',
  'एउटा लक्ष्य बनाएपछि पूरा गरेरै छोड्ने तिम्रो अठोट। 💪🌟',
  'त्यो मुस्कानसहित "मैले भनेकै थिएँ नि" भन्ने तिम्रो शैली। 😏💕',
  'तिमीसँगको मौनता पनि धेरै सुन्दर लाग्छ। 🤍✨',
  'तिम्रो सिर्जनात्मक सोच र संसारलाई हेर्ने दृष्टिकोण। 🎨❤️',
  'आफूभन्दा पहिले अरूको ख्याल गर्ने तिम्रो बानी। 🌸🤍',
  'मन खोलेर हाँस्ने तिमी। 😂💖',
  'बिहान आउने तिम्रा शुभप्रभात सन्देशहरू। 🌅📱❤️',
  'रिसाउँदा ओठ फुलाउने तिम्रो त्यो प्यारा अनुहार। 🥺💕',
  'म जस्तो छु, त्यस्तै स्वीकार्ने तिमी। 🤍❤️',
  'तिम्रो न्यानोपन सबैले महसुस गर्न सक्छन्। ☀️💖',
  'किताब र कथामा हराउने तिमी। 📚✨',
  'हाम्रो भविष्यका योजना बनाउँदा देखिने तिम्रो विश्वास। 🏡❤️',
  'तिम्रा नराम्रा जोकहरू पनि मलाई मन पर्छन्। 😂💕',
  'मलाई थाहा नभएको बेला चुपचाप हेर्ने तिम्रो नजर। 👀❤️',
  'मेरो सफलतालाई आफ्नै सफलता झैँ मनाउने तिमी। 🎉💖',
  'गाह्रो भए पनि सधैं सत्य बोल्ने तिमी। 🤍✨',
  'काम गर्दै गर्दा गुनगुनाउने तिम्रो बानी। 🎶💕',
  'किनमेललाई पनि रमाइलो डेट बनाइदिने तिमी। 🛒❤️',
  'कठिन समयमा पनि बलियो भएर उभिने तिमी। 💪🥹',
  'तिमीले मेरो नाम बोलाउने तरिका। ❤️🎶',
  'मेरो परिवारले पनि तिमीलाई धेरै माया गर्नु। 👨‍👩‍👧💖',
  'जहाँ गए पनि सजिलै साथी बनाउने तिमी। 🤝🌸',
  'म बिरामी हुँदा तिमीले गर्ने हेरचाह। 🤒❤️',
  'रिसाएर सुत्न कहिल्यै नदिने तिमी। 🌙🤍',
  'आफ्नो विश्वासका लागि सधैं उभिने तिमी। 🌟❤️',
  'साना-सााना सरप्राइजले खुशी बनाइदिने तिमी। 🎁🥰',
  'दूरीलाई पनि नजिक महसुस गराइदिने तिमी। 🌍❤️',
  'तिम्रा अनौठा खानाका संयोजनहरू पनि स्वादिला लाग्छन्। 🍕😂',
  'आफ्ना मानिसहरूको लागि सधैं उभिने तिमी। 🛡️❤️',
  'तिमीले मलाई हरेक दिन प्रेरणा दिन्छौ। 🌟💖',
  'यो कोलाहलमय संसारमा तिम्रो कोमल मन। 🤍🌸',
  'मैले बिर्सेका विशेष दिनहरू पनि सम्झिरहने तिमी। 📅💕',
  'तिमीले मेरा समस्याहरू हलुका बनाइदिन्छौ। 🥹❤️',
  'कहिल्यै नसकिने तिम्रो सकारात्मक सोच। ☀️💖',
  'तिम्रो अँगालोमा म बिल्कुलै फिट हुन्छु। 🤗❤️',
  'तिमीले घरलाई साँच्चिकै घर बनाइदिन्छौ। 🏡💕',
  'मेरो आवाज सुन्न मात्रै गर्ने तिम्रा रातिका फोनहरू। 📞🌙❤️',
  'साना खेलहरूमा पनि जित्न खोज्ने तिमी। 🎮😂',
  'मेरो नराम्रो समयमा पनि माया गर्ने, राम्रो समयमा साथ दिने तिमी। ❤️🤍',
  'हाम्रो सम्बन्धप्रतिको तिम्रो अटल विश्वास। ♾️💖',
  'अपरिचितलाई पनि मुस्कुराउन बाध्य बनाउने तिमी। 😊🌸',
  'तिमीले गरेको हरेक वाचा निभाउँछौ। 🤝❤️',
  'हरेक कुरा जान्न खोज्ने तिम्रो जिज्ञासा। 🌍✨',
  'अन्तिम टुक्रा पनि मेरो लागि बचाइदिने तिमी। 🍰💕',
  'तिमीले भविष्यलाई अझ सुन्दर बनाइदिन्छौ। 🌅❤️',
  'मसँग आफ्ना कमजोरीहरू पनि खुलेर बाँड्ने तिमी। 🥹🤍',
  'पानी पर्दा बच्चाजस्तै खुशी हुने तिमी। 🌧️❤️',
  'मेरा मनपर्ने कुराहरू मभन्दा धेरै सम्झिने तिमी। 💖✨',
  'तिम्रो सुन्दर सोच र संसार हेर्ने तरिका। 🌸🧠',
  'तिमीले पर्खाइलाई पनि अर्थपूर्ण बनाइदिन्छौ। ⏳❤️',
  'तिमीले मलाई रोज्यौ... अनि आज पनि हरेक दिन रोजिरहेकी छौ। 💍❤️',
  'तिम्रा प्लेलिस्टहरू सधैं मेरो मनसँग मेल खान्छन्। 🎧💕',
  'गल्ती मेरो भए पनि पहिले माफी माग्ने तिमी। 🥹🤍',
  'यति समयपछि पनि तिमीले मेरो मुटुको धड्कन बढाइदिन्छौ। ❤️💓',
  'आफ्ना सपना सबैभन्दा पहिले मसँग बाँड्ने तिमी। 🌠💕',
  'तिमी भएको हरेक फोटो अझ सुन्दर लाग्छ। 📸❤️',
  'मेरा सपनाहरू बुझेर अघि बढ्न हौसला दिने तिमी। 🌟🤍',
  'तिम्रो क्षमाले सबै घाउ निको पारिदिन्छ। 🕊️❤️',
  'साना पलहरूलाई पनि परम्परा बनाइदिने तिमी। ✨🏡',
  'हरेक आँधीमा तिमी नै मेरो शान्ति हौ। 🌧️❤️',
  'तिम्रो हाँसो सुन्न म संसार पार गर्न पनि तयार छु। 😂🌍💕',
  'आफ्ना मानिसहरूलाई पुरै मनले माया गर्ने तिमी। ❤️🤗',
  'तिमीसँग हुँदा "सधैं" पनि छोटो लाग्छ। ♾️💖',
  'तिम्रो हात सधैं मेरो हात खोजिरहन्छ। 🤝❤️',
  'गाला दुख्ने गरी हँसाइदिने तिमी। 😂🥹',
  'तिमी बाहिरबाट मात्र होइन, मनदेखि पनि सुन्दर छौ। 🌹🤍',
  'तिमीले मलाई संसारकै सबैभन्दा भाग्यमानी महसुस गराउँछौ। 🍀❤️',
  'तिमी मेरी सबैभन्दा मिल्ने साथी र मेरो सबैभन्दा ठूलो माया हौ। 👩‍❤️‍👨💖',
  '“म” होइन, “हामी” भन्ने तिम्रो बानी। 🤍✨',
  'बस... तिमी, तिमी भएकै कारण। ❤️🥹'
],

  /* finale */
  finaleLines: [
    'You are the most beautiful chapter of my life.',
    'May your smile always shine brighter than the stars.',
    'Thank you for every beautiful memory.',
  ],
  finaleLove: 'I Love You Forever ❤️',

  /* easter eggs */
 secretMessage: 'यदि तिमीले यो पढिरहेकी छौ भने, तिमीले फेरि एकपटक प्रमाणित गर्यौ कि तिमी साना–साना कुराहरू पनि ध्यान दिन्छौ। यही त तिमीलाई माया गर्ने लाखौँ कारणहरूमध्ये एउटा हो। ❤️🥹',

tapSecrets: [
  '✨ गोप्य कुरा: मेरो जीवनमा भएको सबैभन्दा सुन्दर उपहार तिमी नै हौ। ❤️🌹',
  '💌 लुकेको सन्देश: हरेक दिन बित्दै जाँदा म तिमीलाई अझ धेरै माया गर्न थाल्छु। 🥹💕',
  '🌹 एउटा सानो रहस्य… म तिमीलाई केकभन्दा पनि धेरै माया गर्छु। अनि त्यो भनेको धेरै नै हो। 🎂❤️😂',
  '⭐ बधाई छ! तिमीले एउटा काल्पनिक चुम्बन जितेकी छौ। साँचोमा आएर साट्न सकिन्छ। 😘💋💕',
],

  loveNotes: [
    'thinking of you 💭', 'you + me, always 💞', 'my favorite person 🌷',
    'cutest human alive 🥰', 'forever looks good on us 💍', 'you make my heart sing 🎶',
  ],
  miniGiftMessage: '🎁 Surprise! This one is good for one real-life present. Claim it with a hug!',
  finaleSecret: 'You found my final secret! Seven taps, one truth: I love you endlessly. ❤️',
};

/* ────────────────────────────────────────────────────────────────────
   Tiny helpers
   ──────────────────────────────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const rand  = (min, max) => min + Math.random() * (max - min);
const randI = (min, max) => Math.floor(rand(min, max + 1));
const pick  = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const DPR = Math.min(window.devicePixelRatio || 1, 2);

/* ────────────────────────────────────────────────────────────────────
   AUDIO ENGINE
   • Background music (mp3) with autoplay-attempt + first-tap fallback
   • All sound effects synthesized live with the Web Audio API
   ──────────────────────────────────────────────────────────────────── */
const AudioEngine = (() => {
  let ctx = null;
  let master = null;

  const bgm = $('#bgm');
  bgm.src = CONFIG.music;
  bgm.loop = true;
  bgm.volume = 0;
  let bgmStarted = false;
  let fadeTimer = null;

  /* lazily create/resume the WebAudio context (needs a user gesture) */
  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  /* ── background music ── */
  function fadeMusicTo(target, ms = 1500, done) {
    clearInterval(fadeTimer);
    const start = bgm.volume;
    const t0 = performance.now();
    fadeTimer = setInterval(() => {
      const p = clamp((performance.now() - t0) / ms, 0, 1);
      bgm.volume = start + (target - start) * p;
      if (p >= 1) { clearInterval(fadeTimer); done && done(); }
    }, 50);
  }

  function playMusic() {
    if (bgmStarted) { if (bgm.paused) bgm.play().catch(() => {}); return; }
    bgm.volume = 0;
    bgm.play().then(() => {
      bgmStarted = true;
      fadeMusicTo(CONFIG.musicVolume, 2600);
    }).catch(() => { /* still blocked — will retry on next gesture */ });
  }

  function stopMusicFade(ms = 4000) { fadeMusicTo(0, ms); }

  /* try autoplay immediately; otherwise unlock on first interaction */
  function initAutoplay() {
    bgm.play().then(() => {
      bgmStarted = true;
      fadeMusicTo(CONFIG.musicVolume, 2600);
    }).catch(() => {
      const unlock = () => { playMusic(); };
      document.addEventListener('pointerdown', unlock, { once: true });
      document.addEventListener('keydown', unlock, { once: true });
    });
  }

  /* ── tiny synth helpers ── */
  function tone({ type = 'sine', f0 = 440, f1 = null, dur = 0.2, vol = 0.2, delay = 0 }) {
    if (!ensureCtx()) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t0);
    if (f1) osc.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t0 + dur);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(master);
    osc.start(t0); osc.stop(t0 + dur + 0.05);
  }

  function noise({ dur = 0.3, vol = 0.2, delay = 0, fType = 'lowpass', f0 = 1000, f1 = null, q = 1 }) {
    if (!ensureCtx()) return;
    const t0 = ctx.currentTime + delay;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const flt = ctx.createBiquadFilter();
    flt.type = fType; flt.Q.value = q;
    flt.frequency.setValueAtTime(f0, t0);
    if (f1) flt.frequency.exponentialRampToValueAtTime(Math.max(f1, 10), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(flt).connect(g).connect(master);
    src.start(t0); src.stop(t0 + dur + 0.05);
  }

  /* ── named sound effects ── */
  const SFX = {
    click()   { tone({ type: 'triangle', f0: 720, f1: 940, dur: 0.09, vol: 0.14 }); },
    pop()     { tone({ type: 'sine', f0: 520, f1: 140, dur: 0.16, vol: 0.24 });
                noise({ dur: 0.06, vol: 0.1, fType: 'highpass', f0: 1800 }); },
    sparkle() { const base = pick([1320, 1568, 1760, 2093]);
                tone({ type: 'sine', f0: base, dur: 0.5, vol: 0.07 });
                tone({ type: 'sine', f0: base * 1.5, dur: 0.6, vol: 0.05, delay: 0.05 }); },
    chime()   { [523, 659, 784, 1047].forEach((f, i) =>
                  tone({ type: 'sine', f0: f, dur: 0.7, vol: 0.1, delay: i * 0.07 })); },
    magic()   { [880, 1109, 1319, 1760, 2217].forEach((f, i) =>
                  tone({ type: 'triangle', f0: f, dur: 0.4, vol: 0.06, delay: i * 0.045 })); },
    whoosh()  { noise({ dur: 0.45, vol: 0.16, fType: 'bandpass', f0: 300, f1: 2400, q: 1.4 }); },
    paper()   { noise({ dur: 0.28, vol: 0.12, fType: 'bandpass', f0: 1200, f1: 3200, q: 0.8 });
                noise({ dur: 0.2, vol: 0.08, fType: 'highpass', f0: 2600, delay: 0.14 }); },
    boom()    { noise({ dur: 0.7, vol: 0.22, fType: 'lowpass', f0: 900, f1: 90 });
                tone({ type: 'sine', f0: 130, f1: 38, dur: 0.55, vol: 0.2 });
                noise({ dur: 0.25, vol: 0.06, fType: 'highpass', f0: 3000, delay: 0.12 }); },
    blow()    { noise({ dur: 0.8, vol: 0.2, fType: 'bandpass', f0: 500, f1: 1600, q: 0.7 }); },
    sting()   { [523, 659, 784, 1047, 1319].forEach((f, i) =>
                  tone({ type: 'triangle', f0: f, dur: 1.1, vol: 0.1, delay: i * 0.09 }));
                noise({ dur: 0.5, vol: 0.05, fType: 'highpass', f0: 5000, delay: 0.2 }); },
  };

  return { initAutoplay, playMusic, stopMusicFade, fadeMusicTo, SFX, ensureCtx };
})();

const SFX = AudioEngine.SFX;

/* ────────────────────────────────────────────────────────────────────
   FX ENGINE — one canvas overlay for every burst:
   heart explosions, sparkle trails, fireworks, confetti, roses, petals
   ──────────────────────────────────────────────────────────────────── */
const FX = (() => {
  const canvas = $('#fx-canvas');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;

  const hearts = [], sparks = [], rockets = [], fwParts = [], confetti = [], floaters = [];
  let running = false, rafId = null;

  const HEARTS = ['❤️', '🩷', '💖', '💗', '💕'];
  const PETALS = ['🌸', '💮', '🏵️'];
  const CONF_COLORS = ['#ff9ebb', '#f5c97b', '#c9b6f2', '#ffffff', '#e8b4b8', '#9a6fd0'];

  function resize() {
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  resize();
  addEventListener('resize', resize);

  function loop() {
    if (document.hidden) { rafId = requestAnimationFrame(loop); return; }
    ctx.clearRect(0, 0, W, H);

    /* hearts & floaters (emoji) */
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (let i = floaters.length - 1; i >= 0; i--) {
      const p = floaters[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.rot += p.vr; p.life--;
      if (p.life <= 0 || p.y < -60 * DPR) { floaters.splice(i, 1); continue; }
      const a = clamp(p.life / p.fade, 0, 1);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.font = `${p.size * DPR}px serif`;
      ctx.fillText(p.ch, 0, 0);
      ctx.restore();
    }

    /* sparkles (glowing dots, additive) */
    ctx.globalCompositeOperation = 'lighter';
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx; p.y += p.vy; p.vy += 0.02 * DPR; p.life--;
      if (p.life <= 0) { sparks.splice(i, 1); continue; }
      const a = clamp(p.life / p.max, 0, 1);
      const r = p.size * a * DPR;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
      grad.addColorStop(0, `rgba(255,255,255,${a})`);
      grad.addColorStop(0.35, p.color.replace('A', String(a * 0.8)));
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2); ctx.fill();
    }

    /* firework rockets */
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.x += r.vx; r.y += r.vy; r.vy += 0.045 * DPR;
      ctx.strokeStyle = `rgba(255,220,150,0.85)`;
      ctx.lineWidth = 2 * DPR;
      ctx.beginPath(); ctx.moveTo(r.x, r.y);
      ctx.lineTo(r.x - r.vx * 3, r.y - r.vy * 3); ctx.stroke();
      if (r.vy >= -1.2 * DPR) { rockets.splice(i, 1); explode(r.x, r.y, r.hue); }
    }

    /* firework particles */
    for (let i = fwParts.length - 1; i >= 0; i--) {
      const p = fwParts[i];
      p.px = p.x; p.py = p.y;
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.985; p.vy *= 0.985; p.vy += 0.035 * DPR;
      p.life--;
      if (p.life <= 0) { fwParts.splice(i, 1); continue; }
      const a = clamp(p.life / p.max, 0, 1);
      ctx.strokeStyle = `hsla(${p.hue}, 95%, ${60 + a * 20}%, ${a})`;
      ctx.lineWidth = (p.size * a + 0.4) * DPR;
      ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';

    /* confetti */
    for (let i = confetti.length - 1; i >= 0; i--) {
      const c = confetti[i];
      c.x += c.vx; c.y += c.vy; c.vy += 0.09 * DPR;
      c.rot += c.vr; c.life--;
      if (c.life <= 0 || c.y > H + 40) { confetti.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = clamp(c.life / 40, 0, 1);
      ctx.translate(c.x, c.y); ctx.rotate(c.rot);
      ctx.fillStyle = c.color;
      if (c.shape === 0) ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      else { ctx.beginPath(); ctx.arc(0, 0, c.w / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    }

    rafId = requestAnimationFrame(loop);
  }

  function ensure() {
    if (!running) { running = true; rafId = requestAnimationFrame(loop); }
  }

  /* ── public effects ── */
  function burstHearts(x, y, n = 12) {
    if (REDUCED) n = 4;
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2), sp = rand(1.5, 5.5) * DPR;
      floaters.push({
        ch: pick(HEARTS), x: x * DPR, y: y * DPR,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2 * DPR,
        g: 0.07 * DPR, rot: rand(-0.4, 0.4), vr: rand(-0.06, 0.06),
        size: rand(13, 26), life: randI(55, 95), fade: 40,
      });
    }
    ensure();
  }

  function sparkle(x, y, n = 3) {
    const cols = ['rgba(255,158,187,A)', 'rgba(245,201,123,A)', 'rgba(201,182,242,A)', 'rgba(255,255,255,A)'];
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2), sp = rand(0.3, 1.6) * DPR;
      sparks.push({
        x: x * DPR, y: y * DPR,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 0.4 * DPR,
        size: rand(1.6, 3.4), life: randI(22, 44), max: 44, color: pick(cols),
      });
    }
    ensure();
  }

  function sparkleBurst(x, y, n = 26) {
    for (let i = 0; i < n; i++) sparkle(x + rand(-30, 30), y + rand(-30, 30), 1);
  }

  function explode(x, y, hue) {
    if (!REDUCED) SFX.boom();
    const n = REDUCED ? 26 : randI(60, 90);
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2), sp = rand(1, 7) * DPR;
      fwParts.push({
        x, y, px: x, py: y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        hue: hue + rand(-18, 18), size: rand(1.2, 2.6),
        life: randI(46, 90), max: 90,
      });
    }
    /* a few hearts mixed in for romance */
    for (let i = 0; i < 5; i++) {
      floaters.push({
        ch: pick(HEARTS), x, y,
        vx: rand(-2.4, 2.4) * DPR, vy: rand(-4, -1) * DPR,
        g: 0.05 * DPR, rot: 0, vr: rand(-0.05, 0.05),
        size: rand(12, 20), life: 90, fade: 45,
      });
    }
  }

  function firework(x = rand(innerWidth * 0.15, innerWidth * 0.85),
                  y = rand(innerHeight * 0.12, innerHeight * 0.45)) {
    rockets.push({
      x: x * DPR, y: innerHeight * DPR,
      vx: rand(-0.6, 0.6) * DPR,
      vy: -Math.sqrt(2 * 0.045 * (innerHeight - y)) * DPR * rand(1.0, 1.12),
      hue: pick([335, 350, 45, 280, 310, 200]),
      tx: x * DPR, ty: y * DPR,
    });
    ensure();
  }

  let showTimer = null;
  function fireworksShow(ms = 5000) {
    clearInterval(showTimer);
    const t0 = performance.now();
    firework();
    showTimer = setInterval(() => {
      if (performance.now() - t0 > ms) { clearInterval(showTimer); showTimer = null; return; }
      firework();
      if (Math.random() < 0.35) firework();
    }, 620);
  }

  function confettiBurst(x, y, n = 70) {
    if (REDUCED) n = 18;
    for (let i = 0; i < n; i++) {
      const a = rand(-Math.PI / 2 - 0.9, -Math.PI / 2 + 0.9);
      const sp = rand(3, 10) * DPR;
      confetti.push({
        x: x * DPR, y: y * DPR,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        w: rand(5, 10) * DPR, h: rand(8, 14) * DPR,
        rot: rand(0, Math.PI), vr: rand(-0.25, 0.25),
        color: pick(CONF_COLORS), shape: randI(0, 1),
        life: randI(110, 190),
      });
    }
    ensure();
  }

  function roses(x, y, n = 8) {
    for (let i = 0; i < n; i++) {
      floaters.push({
        ch: pick(['🌹', '🥀', '🌷']), x: (x + rand(-40, 40)) * DPR, y: (y + rand(-16, 16)) * DPR,
        vx: rand(-0.5, 0.5) * DPR, vy: rand(-2.6, -1.2) * DPR,
        g: -0.004 * DPR, rot: rand(-0.3, 0.3), vr: rand(-0.03, 0.03),
        size: rand(20, 34), life: randI(90, 150), fade: 55,
      });
    }
    ensure();
  }

  function petals(n = 24) {
    for (let i = 0; i < n; i++) {
      floaters.push({
        ch: pick(PETALS), x: rand(0, innerWidth) * DPR, y: rand(-innerHeight * 0.4, -20) * DPR,
        vx: rand(-0.7, 0.7) * DPR, vy: rand(0.8, 2) * DPR,
        g: 0.008 * DPR, rot: rand(0, Math.PI), vr: rand(-0.05, 0.05),
        size: rand(14, 26), life: randI(240, 420), fade: 80,
      });
    }
    ensure();
  }

  /* balloons are DOM elements (crisp emoji, cheap CSS animation) */
  function balloons(n = 10) {
    if (REDUCED) n = 4;
    const B = ['🎈', '🎈', '💖', '🩷', '💜', '🎈'];
    for (let i = 0; i < n; i++) {
      const b = document.createElement('span');
      b.className = 'dom-balloon';
      b.textContent = pick(B);
      b.style.left = rand(4, 92) + 'vw';
      b.style.setProperty('--size', rand(34, 62) + 'px');
      b.style.setProperty('--dur', rand(5.5, 9) + 's');
      b.style.setProperty('--sway', rand(-90, 90) + 'px');
      b.style.animationDelay = rand(0, 1.6) + 's';
      document.body.appendChild(b);
      b.addEventListener('animationend', () => b.remove());
    }
  }

  return { burstHearts, sparkle, sparkleBurst, firework, fireworksShow, confettiBurst, roses, petals, balloons };
})();

/* ────────────────────────────────────────────────────────────────────
   AMBIENT BACKGROUND — hearts, petals, stars, butterflies, fireflies
   drifting forever behind the content
   ──────────────────────────────────────────────────────────────────── */
const BG = (() => {
  const canvas = $('#bg-canvas');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, items = [], flies = [];
  let density = 1;               // boosted at the finale

  const KINDS = [
    { ch: '❤️', w: 3 }, { ch: '🩷', w: 3 }, { ch: '🌸', w: 3 },
    { ch: '✨', w: 3 }, { ch: '⭐', w: 2 }, { ch: '🦋', w: 1.4 },
    { ch: '💜', w: 1.6 }, { ch: '🌷', w: 1.4 }, { ch: '🎈', w: 0.5 },
  ];
  const bag = KINDS.flatMap(k => Array(Math.round(k.w * 10)).fill(k.ch));

  function resize() {
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    seed();
  }

  function spawn(anywhere = false) {
    const ch = pick(bag);
    return {
      ch,
      x: rand(0, W),
      y: anywhere ? rand(0, H) : H + rand(20, 120) * DPR,
      size: rand(12, 26),
      vy: rand(0.14, 0.5) * DPR,
      swayA: rand(14, 46) * DPR,
      swayF: rand(0.0006, 0.0016),
      phase: rand(0, Math.PI * 2),
      rot: rand(-0.25, 0.25),
      alpha: rand(0.16, 0.5),
      spin: rand(-0.001, 0.001),
    };
  }

  function seed() {
    const target = REDUCED ? 0 : clamp(Math.round(innerWidth / 34), 16, 34);
    items = Array.from({ length: target }, () => spawn(true));
    flies = Array.from({ length: REDUCED ? 0 : clamp(Math.round(innerWidth / 90), 6, 14) }, () => ({
      x: rand(0, W), y: rand(0, H),
      r: rand(1.2, 2.6), phase: rand(0, Math.PI * 2),
      speed: rand(0.0004, 0.001),
      hue: pick([45, 330, 280]),
    }));
  }

  function loop(t) {
    if (!document.hidden) {
      ctx.clearRect(0, 0, W, H);

      /* glowing fireflies */
      ctx.globalCompositeOperation = 'lighter';
      for (const f of flies) {
        f.phase += f.speed * 16;
        const x = f.x + Math.cos(f.phase * 1.7) * 60 * DPR;
        const y = f.y + Math.sin(f.phase * 2.3) * 44 * DPR;
        const a = 0.25 + Math.sin(f.phase * 5) * 0.2;
        const g = ctx.createRadialGradient(x, y, 0, x, y, f.r * 7 * DPR);
        g.addColorStop(0, `hsla(${f.hue}, 90%, 75%, ${a})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, f.r * 7 * DPR, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      /* drifting emoji */
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (const it of items) {
        it.y -= it.vy * density;
        it.rot += it.spin;
        if (it.y < -50 * DPR) Object.assign(it, spawn(false));
        const x = it.x + Math.sin(t * it.swayF + it.phase) * it.swayA;
        ctx.save();
        ctx.globalAlpha = it.alpha;
        ctx.translate(x, it.y);
        ctx.rotate(it.rot + Math.sin(t * it.swayF * 2 + it.phase) * 0.18);
        ctx.font = `${it.size * DPR}px serif`;
        ctx.fillText(it.ch, 0, 0);
        ctx.restore();
      }
    }
    requestAnimationFrame(loop);
  }

  resize();
  addEventListener('resize', resize);
  requestAnimationFrame(loop);

  return {
    boost(f) { density = f; for (let i = 0; i < 10; i++) items.push(spawn(true)); },
  };
})();

/* ────────────────────────────────────────────────────────────────────
   LOADER — “Preparing Something Beautiful…”
   ──────────────────────────────────────────────────────────────────── */
const Loader = (() => {
  const el = $('#loader');
  const fill = $('#loaderFill');
  const pct = $('#loaderPercent');
  let progress = 0, loaded = false;

  addEventListener('load', () => { loaded = true; });
  /* safety: never wait longer than 4s for window load */
  setTimeout(() => { loaded = true; }, 4000);

  const tick = setInterval(() => {
    const cap = loaded ? 100 : 88;
    progress = Math.min(cap, progress + rand(2, 7));
    fill.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
    if (progress >= 100) {
      clearInterval(tick);
      setTimeout(() => el.classList.add('done'), 450);
      setTimeout(() => el.remove(), 1600);
    }
  }, 120);
})();

/* ────────────────────────────────────────────────────────────────────
   WELCOME SCREEN
   ──────────────────────────────────────────────────────────────────── */
const Welcome = (() => {
  const el = $('#welcome');
  const floatLayer = $('#welcomeFloaters');
  const title = $('#welcomeTitle');
  let floaterTimer = null;

  $('#welcomeName').textContent = CONFIG.name;
  $('.welcome-tagline').textContent = CONFIG.tagline;

  /* split the heading into floating letters */
  const text = title.textContent;
  title.textContent = '';
  [...text].forEach((ch, i) => {
    const s = document.createElement('span');
    s.className = 'w-letter';
    s.textContent = ch === ' ' ? ' ' : ch;
    s.style.animationDelay = (i * 0.07) + 's';
    title.appendChild(s);
  });

  /* floating hearts / balloons / petals / stars / fireflies */
  const FLOAT_EMOJI = ['❤️', '🩷', '💜', '🎈', '🌸', '✨', '⭐', '💖', '🦋', '💗'];
  function spawnFloater() {
    if (REDUCED || document.hidden) return;
    const f = document.createElement('span');
    f.className = 'floater';
    f.textContent = pick(FLOAT_EMOJI);
    f.style.left = rand(2, 95) + 'vw';
    f.style.fontSize = rand(16, 44) + 'px';
    f.style.setProperty('--drift', rand(-120, 120) + 'px');
    f.style.setProperty('--fo', rand(0.35, 0.95));
    f.style.animationDuration = rand(7, 13) + 's';
    floatLayer.appendChild(f);
    f.addEventListener('animationend', () => f.remove());
  }
  floaterTimer = setInterval(spawnFloater, 340);
  for (let i = 0; i < 12; i++) setTimeout(spawnFloater, i * 130);

  /* the big button */
  const btn = $('#openSurprise');
  btn.addEventListener('click', (e) => {
    /* ripple */
    const ripple = btn.querySelector('.btn-ripple');
    const rect = btn.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = d + 'px';
    ripple.style.left = (e.clientX - rect.left - d / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - d / 2) + 'px';
    ripple.classList.remove('go'); void ripple.offsetWidth; ripple.classList.add('go');

    SFX.click(); SFX.magic();
    AudioEngine.playMusic();

    setTimeout(() => {
      clearInterval(floaterTimer);
      el.classList.add('leaving');
      App.enter();
      setTimeout(() => el.remove(), 1300);
    }, 320);
  });
})();

/* ────────────────────────────────────────────────────────────────────
   SCROLL REVEAL — elements fade/rise in as they enter the viewport
   ──────────────────────────────────────────────────────────────────── */
const Reveal = (() => {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }
  }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });

  return { watch: (el) => io.observe(el) };
})();

/* ────────────────────────────────────────────────────────────────────
   BUILDERS — wishes, envelope letter, timeline, gallery, lightbox
   ──────────────────────────────────────────────────────────────────── */
function imgFallback(img) {
  img.addEventListener('error', () => {
    img.style.opacity = '0';
    img.parentElement.style.background =
      'linear-gradient(160deg, #f3b7cd, #b39ddb)';
  }, { once: true });
}

function buildWishes() {
  const grid = $('#wishGrid');
  CONFIG.wishes.forEach((w, i) => {
    const card = document.createElement('article');
    card.className = 'wish-card reveal';
    card.dataset.delay = String(i % 3);
    card.innerHTML = `
      <span class="wish-sticker" aria-hidden="true">${w.icon}</span>
      <h3>${w.title}</h3>
      <p>${w.text}</p>`;
    grid.appendChild(card);
    Reveal.watch(card);
  });
}

/* envelope + typewriter letter */
const Letter = (() => {
  let typed = false;

  function typewriter() {
    if (typed) return;
    typed = true;
    const target = $('#typewriter');
    const caret = $('#twCaret');
    const text = CONFIG.letter.text;
    if (REDUCED) { target.textContent = text; return; }
    let i = 0;
    (function step() {
      if (i <= text.length) {
        target.textContent = text.slice(0, i);
        const ch = text[i - 1] || '';
        const pause = /[.!?—]/.test(ch) ? 300 : /[,;:]/.test(ch) ? 150 : 26;
        i++;
        setTimeout(step, pause);
      } else {
        caret.style.display = 'none';
      }
    })();
  }

  function init() {
    $('#letterHeading').textContent = CONFIG.letter.heading;
    $('#letterSign').textContent = CONFIG.letter.sign;
    const envelope = $('#envelope');
    const paper = $('#letterPaper');

    $('#sealBtn').addEventListener('click', () => {
      if (envelope.classList.contains('open')) return;
      SFX.paper();
      envelope.classList.add('open');
      $('#envHint').style.opacity = '0';
      setTimeout(() => {
        paper.hidden = false;
        paper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        SFX.whoosh();
        setTimeout(typewriter, 900);
      }, 1250);
    });
  }
  return { init };
})();

function buildTimeline() {
  const list = $('#timelineList');
  CONFIG.timeline.forEach((t) => {
    const item = document.createElement('div');
    item.className = 'tl-item reveal';
    item.innerHTML = `
      <span class="tl-dot" aria-hidden="true"></span>
      <article class="tl-card">
        <img loading="lazy" src="${t.photo}" alt="${t.title}" />
        <div class="tl-body">
          <span class="tl-date">${t.date}</span>
          <h3>${t.title}</h3>
          <p>${t.text}</p>
        </div>
      </article>`;
    imgFallback(item.querySelector('img'));
    list.appendChild(item);
    Reveal.watch(item);
  });
}

/* gallery + lightbox */
const Gallery = (() => {
  let idx = 0;
  const lb = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCaption');

  function open(i) {
    idx = (i + CONFIG.gallery.length) % CONFIG.gallery.length;
    const g = CONFIG.gallery[idx];
    lbImg.src = g.photo;
    lbImg.alt = g.caption;
    lbCap.textContent = g.caption;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    SFX.sparkle();
  }
  function close() {
    lb.hidden = true;
    document.body.style.overflow = '';
    SFX.click();
  }
  const next = () => open(idx + 1);
  const prev = () => open(idx - 1);

  function init() {
    const grid = $('#galleryGrid');
    CONFIG.gallery.forEach((g, i) => {
      const fig = document.createElement('button');
      fig.type = 'button';
      fig.className = 'polaroid reveal';
      fig.dataset.delay = String(i % 3);
      fig.setAttribute('aria-label', `Open photo: ${g.caption}`);
      fig.innerHTML = `
        <img loading="lazy" src="${g.photo}" alt="" />
        <span class="polaroid-caption">${g.caption}</span>`;
      imgFallback(fig.querySelector('img'));
      fig.addEventListener('click', () => open(i));
      grid.appendChild(fig);
      Reveal.watch(fig);
    });

    $('#lbClose').addEventListener('click', close);
    $('#lbBackdrop').addEventListener('click', close);
    $('#lbNext').addEventListener('click', next);
    $('#lbPrev').addEventListener('click', prev);
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    /* swipe inside the lightbox */
    let sx = null;
    lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
      sx = null;
    }, { passive: true });
  }
  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   BIRTHDAY CAKE — blow the candles
   ──────────────────────────────────────────────────────────────────── */
const Cake = (() => {
  function init() {
    const cake = $('#cakeEl');
    const btn = $('#blowBtn');
    const msg = $('#cakeMessage');

    btn.addEventListener('click', () => {
      if (cake.classList.contains('out')) return;
      cake.classList.add('out');
      SFX.blow();
      btn.style.pointerEvents = 'none';
      btn.querySelector('.btn-text').textContent = 'Your wish is on its way…';
      btn.querySelector('.btn-emoji').textContent = '🌠';

      const r = cake.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.3;

      setTimeout(() => {
        SFX.sting();
        FX.confettiBurst(cx, cy, 120);
        FX.burstHearts(cx, cy, 16);
        FX.fireworksShow(4200);
        FX.balloons(10);
        msg.classList.add('show');
      }, 650);
    });
  }
  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   GIFT BOX
   ──────────────────────────────────────────────────────────────────── */
const Gift = (() => {
  function init() {
    const gift = $('#giftBox');
    const msg = $('#giftMessage');
    $('#giftSecretText').textContent = CONFIG.giftSecret;

    gift.addEventListener('click', () => {
      if (gift.classList.contains('open')) return;
      gift.classList.add('open');
      SFX.whoosh();
      $('#giftHint').style.display = 'none';
      const r = gift.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      setTimeout(() => {
        SFX.pop(); SFX.magic();
        FX.burstHearts(cx, cy, 22);
        FX.sparkleBurst(cx, cy, 30);
        msg.hidden = false;
      }, 420);
    });
  }
  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   LOVE LETTER PAPER — lines bloom in as you arrive
   ──────────────────────────────────────────────────────────────────── */
function buildLoveLetter() {
  const wrap = $('#loveLetterLines');
  CONFIG.loveLetter.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    wrap.appendChild(p);
  });
  Reveal.watch($('#lovePaper'));
}

/* ────────────────────────────────────────────────────────────────────
   100 REASONS — swipeable, flippable card deck
   ──────────────────────────────────────────────────────────────────── */
const Reasons = (() => {
  const DOODLES = ['🌹', '💌', '🧸', '🌟', '🍓', '🦋', '🌙', '🎀', '💎', '🌻', '🍰', '🕊️'];
  let idx = 0, flipping = false;

  function render() {
    $('#reasonNum').textContent = `Reason #${idx + 1}`;
    $('#reasonText').textContent = CONFIG.reasons[idx];
    $('#reasonDoodle').textContent = DOODLES[idx % DOODLES.length];
    $('#reasonCounter').textContent = `${idx + 1} / ${CONFIG.reasons.length}`;
  }

  function flip(dir) {
    if (flipping) return;
    flipping = true;
    const card = $('#reasonCard');
    card.classList.remove('flip-next', 'flip-prev');
    void card.offsetWidth;
    card.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    SFX.pop();
    setTimeout(() => {
      idx = (idx + dir + CONFIG.reasons.length) % CONFIG.reasons.length;
      render();
    }, 240);
    setTimeout(() => { flipping = false; }, 560);
  }

  function init() {
    render();
    $('#reasonNext').addEventListener('click', () => flip(1));
    $('#reasonPrev').addEventListener('click', () => flip(-1));

    /* swipe support */
    const card = $('#reasonCard');
    let sx = null, sy = null;
    card.addEventListener('pointerdown', (e) => { sx = e.clientX; sy = e.clientY; });
    card.addEventListener('pointerup', (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) flip(dx < 0 ? 1 : -1);
      else if (Math.abs(dx) < 8 && Math.abs(dy) < 8) flip(1);   /* tap = next */
      sx = sy = null;
    });
    card.addEventListener('pointercancel', () => { sx = sy = null; });
  }
  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   LOVE COUPONS
   ──────────────────────────────────────────────────────────────────── */
function buildCoupons() {
  const grid = $('#couponGrid');
  CONFIG.coupons.forEach((c, i) => {
    const el = document.createElement('article');
    el.className = 'coupon reveal';
    el.dataset.delay = String(i % 3);
    el.innerHTML = `
      <div class="coupon-inner">
        <span class="coupon-icon" aria-hidden="true">${c.icon}</span>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
        <button class="coupon-redeem" type="button">Redeem</button>
      </div>
      <div class="coupon-stamp" aria-hidden="true"><span>Redeemed ❤</span></div>`;
    el.querySelector('.coupon-redeem').addEventListener('click', (e) => {
      if (el.classList.contains('redeemed')) return;
      el.classList.add('redeemed');
      SFX.chime();
      const r = el.getBoundingClientRect();
      FX.burstHearts(r.left + r.width / 2, r.top + r.height / 2, 10);
      e.target.textContent = 'Yours ❤';
    });
    grid.appendChild(el);
    Reveal.watch(el);
  });
}

/* ────────────────────────────────────────────────────────────────────
   FINALE — fireworks, falling petals, glowing heart
   ──────────────────────────────────────────────────────────────────── */
const Finale = (() => {
  let celebrated = false;

  function init() {
    $('#finaleName').textContent = CONFIG.name;
    const lines = $('#finaleLines');
    CONFIG.finaleLines.forEach(l => {
      const p = document.createElement('p');
      p.textContent = l;
      lines.appendChild(p);
    });
    $('.finale-love').textContent = CONFIG.finaleLove;
    $$('.finale-content .reveal').forEach(Reveal.watch);

    /* start the celebration when the finale scrolls into view */
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !celebrated) {
        celebrated = true;
        celebrate();
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe($('#finale'));

    /* easter egg: tap the big heart 7 times */
    let taps = 0, tapTimer = null, unlocked = false;
    $('#finaleHeart').addEventListener('click', (e) => {
      SFX.pop();
      FX.burstHearts(e.clientX, e.clientY, 10);
      if (unlocked) return;
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { taps = 0; }, 1400);
      if (taps >= 7) {
        unlocked = true;
        $('#finaleHint').textContent = '❤ secret unlocked ❤';
        Toast.show(CONFIG.finaleSecret, 5200);
        SFX.sting();
        FX.fireworksShow(5000);
        FX.confettiBurst(innerWidth / 2, innerHeight * 0.4, 120);
        FX.roses(innerWidth / 2, innerHeight * 0.5, 12);
      }
    });
  }

  function celebrate() {
    SFX.sting();
    FX.fireworksShow(6500);
    FX.confettiBurst(innerWidth * 0.2, innerHeight * 0.3, 60);
    FX.confettiBurst(innerWidth * 0.8, innerHeight * 0.3, 60);
    FX.petals(30);
    FX.balloons(8);
    BG.boost(1.8);
    AudioEngine.stopMusicFade(6000);          // music gently fades out at the end
    /* keep a soft celebratory sprinkle going */
    setInterval(() => { if (!document.hidden && Math.random() < 0.6) FX.firework(); }, 2600);
    setInterval(() => { if (!document.hidden) FX.petals(3); }, 9000);
  }

  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   TOAST
   ──────────────────────────────────────────────────────────────────── */
const Toast = (() => {
  const el = $('#toast');
  let timer = null;
  return {
    show(msg, ms = 3600) {
      el.textContent = msg;
      el.classList.add('show');
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('show'), ms);
    },
  };
})();

/* ────────────────────────────────────────────────────────────────────
   GLOBAL GESTURES — tap hearts, swipe sparkles, long-press fireworks,
   double-tap roses, triple-tap secret, shake confetti
   ──────────────────────────────────────────────────────────────────── */
const Gestures = (() => {
  const IGNORE = 'button, a, input, textarea, .reason-card, .coupon, .polaroid, .envelope, .gift, .lightbox, .secret-modal, .love-note, .mini-gift, .hidden-heart';
  let active = false;

  let pDown = null, moved = false, longDone = false, lpTimer = null;
  let taps = 0, tapTimer = null, lastSpark = 0;

  function onDown(e) {
    if (!active || e.target.closest(IGNORE)) return;
    pDown = { x: e.clientX, y: e.clientY, t: performance.now() };
    moved = false; longDone = false;
    clearTimeout(lpTimer);
    lpTimer = setTimeout(() => {
      if (pDown && !moved) {
        longDone = true;
        SFX.boom();
        FX.firework(pDown.x, pDown.y);
        FX.firework(pDown.x + rand(-120, 120), pDown.y - rand(40, 160));
        pDown = null;
      }
    }, 620);
  }

  function onMove(e) {
    if (!active || !pDown) return;
    const dx = e.clientX - pDown.x, dy = e.clientY - pDown.y;
    if (Math.hypot(dx, dy) > 14) { moved = true; clearTimeout(lpTimer); }
    const now = performance.now();
    if (moved && now - lastSpark > 46) {
      lastSpark = now;
      FX.sparkle(e.clientX, e.clientY, 2);
    }
  }

  function onUp(e) {
    if (!active) return;
    clearTimeout(lpTimer);
    if (!pDown || longDone) { pDown = null; return; }
    const dt = performance.now() - pDown.t;
    const wasTap = !moved && dt < 400 && !e.target.closest(IGNORE);
    const x = pDown.x, y = pDown.y;
    pDown = null;
    if (!wasTap) return;

    /* count multi-taps */
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => {
      if (taps === 1) {
        SFX.pop();
        FX.burstHearts(x, y, 10);
      } else if (taps === 2) {
        SFX.magic();
        FX.burstHearts(x, y, 8);
        FX.roses(x, y, 9);
      } else {
        SFX.chime();
        Toast.show(pick(CONFIG.tapSecrets), 3800);
        FX.sparkleBurst(x, y, 34);
      }
      taps = 0;
    }, 340);
  }

  /* shake → confetti (with iOS permission flow) */
  let lastShake = 0, motionAsked = false;
  function onMotion(e) {
    if (!active) return;
    const a = e.accelerationIncludingGravity;
    if (!a) return;
    const mag = Math.hypot(a.x || 0, a.y || 0, a.z || 0);
    const now = performance.now();
    if (mag > 30 && now - lastShake > 2000) {
      lastShake = now;
      SFX.sting();
      FX.confettiBurst(innerWidth / 2, innerHeight * 0.35, 90);
      Toast.show('🎉 Shake-shake! Confetti for the birthday star!', 2600);
    }
  }
  function askMotionPermission() {
    if (motionAsked) return;
    motionAsked = true;
    try {
      if (typeof DeviceMotionEvent !== 'undefined' &&
          typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().catch(() => {});
      }
    } catch (_) { /* not supported */ }
  }

  return {
    enable() {
      if (active) return;
      active = true;
      document.addEventListener('pointerdown', onDown, { passive: true });
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerup', onUp, { passive: true });
      document.addEventListener('pointerdown', askMotionPermission, { once: true, passive: true });
      addEventListener('devicemotion', onMotion);
    },
  };
})();

/* ────────────────────────────────────────────────────────────────────
   EASTER EGGS — hidden heart, floating love notes, mini gifts
   ──────────────────────────────────────────────────────────────────── */
const Eggs = (() => {
  function init() {
    /* hidden heart → secret modal */
    const modal = $('#secretModal');
    $('#secretText').textContent = CONFIG.secretMessage;
    $('#hiddenHeart').addEventListener('click', () => {
      SFX.magic();
      modal.hidden = false;
      FX.sparkleBurst(innerWidth / 2, innerHeight / 2, 30);
    });
    const close = () => { modal.hidden = true; SFX.click(); };
    $('#secretClose').addEventListener('click', close);
    $('#secretBackdrop').addEventListener('click', close);

    /* random floating love notes */
    const note = $('#loveNote');
    function launchNote() {
      if (!document.hidden) {
        note.hidden = false;
        note.style.top = rand(18, 62) + 'vh';
        note.style.left = '0';
        note.style.setProperty('--dur', rand(11, 16) + 's');
        note.style.animation = 'none'; void note.offsetWidth;
        note.style.animation = '';
        note.dataset.alive = '1';
        setTimeout(() => { if (note.dataset.alive === '1') note.hidden = true; }, 17000);
      }
      setTimeout(launchNote, rand(45000, 85000));
    }
    note.addEventListener('click', () => {
      note.dataset.alive = '0';
      note.hidden = true;
      SFX.chime();
      Toast.show('💌 ' + pick(CONFIG.loveNotes), 3200);
      FX.burstHearts(innerWidth / 2, innerHeight / 2, 12);
    });
    setTimeout(launchNote, rand(18000, 30000));

    /* mini surprise gift */
    const mini = $('#miniGift');
    function launchMini() {
      if (!document.hidden) {
        mini.hidden = false;
        mini.style.right = rand(4, 22) + 'vw';
        mini.style.bottom = rand(12, 30) + 'vh';
        mini.dataset.alive = '1';
        setTimeout(() => { if (mini.dataset.alive === '1') mini.hidden = true; }, 9000);
      }
      setTimeout(launchMini, rand(60000, 110000));
    }
    mini.addEventListener('click', (e) => {
      mini.dataset.alive = '0';
      mini.hidden = true;
      SFX.sting();
      FX.confettiBurst(e.clientX, e.clientY, 50);
      Toast.show(CONFIG.miniGiftMessage, 4200);
    });
    setTimeout(launchMini, rand(35000, 60000));
  }
  return { init };
})();

/* ────────────────────────────────────────────────────────────────────
   APP ORCHESTRATION
   ──────────────────────────────────────────────────────────────────── */
const App = (() => {
  let entered = false;

  function build() {
    /* hero copy */
    $('#heroPhoto').src = CONFIG.heroPhoto;
    imgFallback($('#heroPhoto'));
    $('.hero-caption h2').textContent = CONFIG.heroHeading;
    $('.hero-caption p').textContent = CONFIG.heroText;

    buildWishes();
    Letter.init();
    buildTimeline();
    Gallery.init();
    Cake.init();
    Gift.init();
    buildLoveLetter();
    Reasons.init();
    buildCoupons();
    Finale.init();
    Eggs.init();

    /* watch every static .reveal */
    $$('.reveal').forEach(Reveal.watch);
  }

  function enter() {
    if (entered) return;
    entered = true;
    const main = $('#main');
    main.hidden = false;
    window.scrollTo(0, 0);
    Gestures.enable();
    /* welcome-to-main celebration */
    setTimeout(() => {
      FX.confettiBurst(innerWidth / 2, innerHeight * 0.3, 80);
      FX.burstHearts(innerWidth / 2, innerHeight * 0.45, 14);
      SFX.chime();
    }, 700);
  }

  function init() {
    build();
    AudioEngine.initAutoplay();
  }

  return { init, enter };
})();

document.addEventListener('DOMContentLoaded', App.init);
