export const sacredUnionContent = {
  eyebrow: 'SACRED KINSHIP & TOGETHERNESS',
  description:
    'Two loving families, joined in warmth and timeless heritage, come together with joyous hearts to celebrate this blessed beginning. With the grace of the Almighty and the heartfelt blessings of our elders, a new journey of love, mutual respect, and lifelong companionship unfolds.',
  groomFamily: {
    title: 'वर पक्ष परिवार',
    englishTitle: "Groom's Family",
    groomName: 'Shivam',
    groomMarathi: 'चि. शिवम',
    role: 'वर (Groom)',
    image: '/couple-images/groom.jpeg',
    father: 'Umeshbhai Pawar',
    mother: 'Beenaben Pawar',
  },
  brideFamily: {
    title: 'वधू पक्ष परिवार',
    englishTitle: "Bride's Family",
    brideName: 'Upasana',
    brideMarathi: 'चि. सौ. का. उपासना',
    role: 'वधू (Bride)',
    image: '/couple-images/bride.jpeg',
    father: 'Umeshbhai Salunke',
    mother: 'Chayaben Salunke',
  },
} as const;


export const invitation = {
  couple: {
    groom: 'Shivam',
    bride: 'Upasana',
  },

  coupleImages: [
    '/couple-images/groom.jpeg',
    '/couple-images/bride.jpeg',
    '/couple-images/couple1.jpeg',
  ],

  event: {
    title: 'Engagement Ceremony',
    date: '20 October 2026',
    day: 'Tuesday',
    time: '9:30 AM',
    muhuratMarathi: 'सकाळी ९:३० वा.',
    dateShort: { day: '20', month: '10', year: '2026' },
    venue: 'Police Community Hall',
    address: 'Near Circuit House, Koti Road, Amreli',
    mapUrl: 'https://maps.google.com/?q=Police+Community+Hall+Amreli',
  },

  invitedBy: 'Pawar Family',
  invitedByMarathi: 'पवार परिवार',

  contact: {
    heading: 'FOR HELP & INFORMATION',
    headingMarathi: '॥ मदतीसाठी संपर्क ॥',
    phone: '9033581304',
    whatsapp: '9033581304',
    whatsappMessage:
      'Hello, I am contacting you regarding the engagement ceremony of Shivam & Upasana on 20 October 2026. I need some help/information regarding the event.',
  },
} as const;

export type CoupleImage = (typeof invitation.coupleImages)[number];


