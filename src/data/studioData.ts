export interface ClassCategory {
  id: string;
  title: string;
  englishTitle: string;
  tagline: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'All Levels';
  calories: string;
  image: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  englishName: string;
  specialization: string;
  experience: string;
  bioBengali: string;
  image: string;
  certifications: string[];
}

export interface ScheduleItem {
  id: string;
  dayBengali: string;
  dayEnglish: string;
  time: string;
  period: 'Morning' | 'Evening';
  classTitle: string;
  trainer: string;
  level: string;
  spotsLeft: number;
}

export interface Testimonial {
  id: string;
  quoteBengali: string;
  name: string;
  role: string;
  duration: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CLASS_CATEGORIES: ClassCategory[] = [
  {
    id: 'zumba-fitness',
    title: 'ZUMBA FITNESS',
    englishTitle: 'Zumba Fitness Master',
    tagline: 'মিউজিক + cardio + dance',
    duration: '৬০ মিনিট',
    intensity: 'High',
    calories: '৫০০-৭০০ ক্যালরি',
    image: '/images/hero.jpg',
    description: 'লাতিন ও আন্তর্জাতিক রিদমে ভরপুর ফুল-বডি কার্ডিও ওয়ার্কআউট। ক্যালরি বার্ন করার সবচেয়ে মজাদার উপায়।'
  },
  {
    id: 'beginner-zumba',
    title: 'BEGINNER ZUMBA',
    englishTitle: 'Beginner Friendly Steps',
    tagline: 'একদম শুরু থেকে',
    duration: '৪৫ মিনিট',
    intensity: 'All Levels',
    calories: '৩৫০-৪৫০ ক্যালরি',
    image: '/images/zumba-01.jpg',
    description: 'কোনো ডান্স ব্যাকগ্রাউন্ড নেই? কোনো চিন্তা নেই! সহজ স্টেপ এবং ধীরগতির নির্দেশনায় প্রথম দিন থেকেই আত্মবিশ্বাসী হয়ে উঠুন।'
  },
  {
    id: 'dance-fitness',
    title: 'DANCE FITNESS',
    englishTitle: 'Rhythmic Dance Conditioning',
    tagline: 'Dance-এর সাথে fitness',
    duration: '৫০ মিনিট',
    intensity: 'Medium',
    calories: '৪০০-৬০০ ক্যালরি',
    image: '/images/class-01.jpg',
    description: 'বলিউড, কন্টেম্পোরারি এবং ফাঙ্ক বিটের সাথে অ্যারোবিক ফিটনেস। শরীর টোন করুন হাসিমুখে।'
  },
  {
    id: 'weekend-zumba',
    title: 'WEEKEND ZUMBA',
    englishTitle: 'Weekend Recharge Session',
    tagline: 'শনিবার-রবিবার energetic session',
    duration: '৭৫ মিনিট',
    intensity: 'High',
    calories: '৬০০-৮০০ ক্যালরি',
    image: '/images/class-02.jpg',
    description: 'সপ্তাহান্তের হাই-এনার্জি বুস্টার সেশন। সারা সপ্তাহের ক্লান্তি দূর করে শরীরকে নতুন শক্তিতে উজ্জীবিত করুন।'
  },
  {
    id: 'group-workout',
    title: 'GROUP WORKOUT',
    englishTitle: 'Social Dance Community',
    tagline: 'বন্ধুদের সাথে workout',
    duration: '৫৫ মিনিট',
    intensity: 'All Levels',
    calories: '৪৫০-৬৫০ ক্যালরি',
    image: '/images/gallery-01.jpg',
    description: 'একসাথে নাচার অনাবিল আনন্দ! গ্রুপ চ্যালেঞ্জ, টিম স্পিরিট এবং নতুন বন্ধু তৈরির অপূর্ব সুযোগ।'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'ananya-sengupta',
    name: 'অনন্যা সেনগুপ্ত',
    englishName: 'Ananya Sengupta',
    specialization: 'Master Zumba Specialist & Cardio Lead',
    experience: '৭+ বছর অভিজ্ঞতা',
    bioBengali: 'অনন্যার উদ্যমী ব্যক্তিত্ব আর সহজ কোরিওগ্রাফি প্রতিটি ক্লাসকে উৎসবে পরিণত করে। শত শত নারীকে ফিটনেসের প্রতি আকৃষ্ট করেছেন।',
    image: '/images/trainer-01.jpg',
    certifications: ['ZIN™ Certified', 'AFAA Aerobics Lead', 'First Aid Certified']
  },
  {
    id: 'priya-bhowmick',
    name: 'প্রিয়া ভৌমিক',
    englishName: 'Priya Bhowmick',
    specialization: 'Bolly-Zumba & Beginner Instructor',
    experience: '৫+ বছর অভিজ্ঞতা',
    bioBengali: 'নতুন যারা জু্ম্বা শুরু করছেন, তাদের জন্য প্রিয়া আদর্শ ট্রেনার। অত্যন্ত যত্ন সহকারে শরীরের মুভমেন্ট আর পোশ্চার শেখান।',
    image: '/images/trainer-02.jpg',
    certifications: ['Zumba Pro Skills', 'Pilates Floor Lead', 'Kolkata Fitness Award']
  },
  {
    id: 'rohit-roy',
    name: 'রোহিত রায়',
    englishName: 'Rohit Roy',
    specialization: 'High-Energy Dance Conditioning & HIIT',
    experience: '৬+ বছর অভিজ্ঞতা',
    bioBengali: 'অ্যাথলেটিক পাওয়ার আর রিদমিক ডান্সের মেলবন্ধনে রোহিতের ক্লাস সবসময় হাউসফুল। হাই-ইনটেনসিটি বিটে ক্যালরি দ্রুত বার্ন হয়।',
    image: '/images/trainer-03.jpg',
    certifications: ['ACE Fitness Coach', 'Zumba Toning Certified', 'HIIT Specialist']
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-1',
    dayBengali: 'সোমবার (MONDAY)',
    dayEnglish: 'Monday',
    time: 'সকাল ৭:০০ - ৮:০০',
    period: 'Morning',
    classTitle: 'Morning Zumba — 7:00 AM',
    trainer: 'অনন্যা সেনগুপ্ত',
    level: 'All Levels',
    spotsLeft: 4
  },
  {
    id: 'sch-2',
    dayBengali: 'বুধবার (WEDNESDAY)',
    dayEnglish: 'Wednesday',
    time: 'সন্ধ্যা ৬:৩০ - ৭:৩০',
    period: 'Evening',
    classTitle: 'Dance Fitness — 6:30 PM',
    trainer: 'প্রিয়া ভৌমিক',
    level: 'Medium Intensity',
    spotsLeft: 6
  },
  {
    id: 'sch-3',
    dayBengali: 'শুক্রবার (FRIDAY)',
    dayEnglish: 'Friday',
    time: 'সন্ধ্যা ৭:০০ - ৮:০০',
    period: 'Evening',
    classTitle: 'Zumba Cardio — 7:00 PM',
    trainer: 'রোহিত রায়',
    level: 'High Cardio',
    spotsLeft: 3
  },
  {
    id: 'sch-4',
    dayBengali: 'শনিবার (SATURDAY)',
    dayEnglish: 'Saturday',
    time: 'সকাল ৮:০০ - ৯:১৫',
    period: 'Morning',
    classTitle: 'Weekend Dance Workout — 8:00 AM',
    trainer: 'অনন্যা সেনগুপ্ত',
    level: 'Super Energy',
    spotsLeft: 5
  },
  {
    id: 'sch-5',
    dayBengali: 'রবিবার (SUNDAY)',
    dayEnglish: 'Sunday',
    time: 'সকাল ৯:০০ - ১০:১৫',
    period: 'Morning',
    classTitle: 'Group Zumba — 9:00 AM',
    trainer: 'প্রিয়া ও রোহিত (Duo)',
    level: 'Community Dance',
    spotsLeft: 2
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'স্টুডিও এনার্জি',
    subtitle: 'রোদঝলমলে ডান্স ফ্লোরে রিদমিক মুভমেন্ট',
    image: '/images/hero.jpg',
    span: 'col-span-12 md:col-span-7'
  },
  {
    id: 'gal-2',
    title: 'গ্রুপ টিমওয়ার্ক',
    subtitle: 'একসাথে স্টেপ মিলিয়ে নাচার প্রেরণা',
    image: '/images/zumba-01.jpg',
    span: 'col-span-12 md:col-span-5'
  },
  {
    id: 'gal-3',
    title: 'ক্লাস শেষের উজ্জ্বল হাসি',
    subtitle: 'ঘাম ঝরিয়ে অনাবিল পরিতৃপ্তি',
    image: '/images/gallery-01.jpg',
    span: 'col-span-12 md:col-span-5'
  },
  {
    id: 'gal-4',
    title: 'লাইভ মাস্টারক্লাস',
    subtitle: 'আন্তর্জাতিক বিটের সাথে জুম্বা সেশন',
    image: '/images/video-01.jpg',
    span: 'col-span-12 md:col-span-7'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quoteBengali: '“প্রথম দিন থেকেই খুব comfortable লেগেছে। ট্রেনারদের ব্যবহার আর বাকিদের ফ্রেন্ডলি এটিটিউড আমাকে নিয়মিত করেছে।”',
    name: 'শর্মিষ্ঠা ব্যানার্জী',
    role: 'স্কুল শিক্ষিকা ও নিয়মিত মেম্বার',
    duration: '৮ মাস ধরে যুক্ত',
    rating: 5
  },
  {
    id: 'test-2',
    quoteBengali: '“Workout যে এতটা enjoyable হতে পারে ভাবিনি! জিমের একঘেয়েমি ছেড়ে এখানে এসে মনে হয় প্রতিদিন একটা ডান্স পার্টি হচ্ছে।”',
    name: 'রিম্পা মজুমদার',
    role: 'আইটি প্রফেশনাল ও ডান্স লাভার',
    duration: '১ বছর ধরে যুক্ত',
    rating: 5
  },
  {
    id: 'test-3',
    quoteBengali: '“বন্ধুদের সাথে Zumba করার experience দারুণ। আমার ব্যাক পেইন কমেছে এবং এনার্জি লেভেল দ্বিগুণ হয়েছে।”',
    name: 'দেবলীনা মুখার্জি',
    role: 'হোমমেকার ও ফিটনেস উৎসাহী',
    duration: '৫ মাস ধরে যুক্ত',
    rating: 5
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Zumba শুরু করতে আগে dance জানা দরকার?',
    answer: 'একদমই না! জুম্বা কোনো ক্লাসিক্যাল বা পারফরম্যান্স ডান্স নয়। এটি একটি সহজ, রিদমিক ফিটনেস ক্লাস যেখানে ট্রেনারদের খুব সহজ স্টেপ দেখে দেখে সবাই নাচতে পারেন। কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই।'
  },
  {
    id: 'faq-2',
    question: 'Beginner কি join করতে পারবে?',
    answer: 'হ্যাঁ, অবশ্যই! আমাদের ক্লাসের প্রায় ৬০% মেম্বারই আগে কোনোদিন নাচেননি। আমাদের ট্রেনাররা একদম সহজ স্টেপ দিয়ে শুরু করেন এবং প্রত্যেকে নিজের স্বাচ্ছন্দ্য অনুযায়ী পেস বজায় রাখতে পারেন।'
  },
  {
    id: 'faq-3',
    question: 'একটি class কতক্ষণ?',
    answer: 'সাধারণ ক্লাসগুলি ৪৫ থেকে ৬০ মিনিটের হয়ে থাকে। এর মধ্যে ওয়ার্ম-আপ (১০ মিনিট), মূল জুম্বা কার্ডিও সেশন (৩৫-৪০ মিনিট) এবং কুল-ডাউন ও স্ট্রেচিং (১০ মিনিট) অন্তর্ভুক্ত থাকে।'
  },
  {
    id: 'faq-4',
    question: 'কী ধরনের পোশাক পরব?',
    answer: 'আরামদায়ক সুতির বা ড্রাই-ফিট টি-শার্ট, লেগিংস বা ট্র্যাক প্যান্ট এবং অবশ্যই ভালো গ্রিপযুক্ত স্পোর্টস স্নিকার্স (Sneakers)। সাথে একটি ছোট তোয়ালে ও ওয়াটার বটল নিয়ে আসবেন।'
  },
  {
    id: 'faq-5',
    question: 'Class booking কীভাবে করব?',
    answer: 'আমাদের ওয়েবসাইটের “JOIN A CLASS” বা শিডিউলের “CLASS BOOKING” বাটনে ক্লিক করে আপনার পছন্দের ডে ও স্লট বেছে নিয়ে বুক করতে পারেন। কোনো অগ্রিম ফি ছাড়া প্রথম ট্রায়াল ক্লাস সম্পূর্ণ ফ্রি!'
  }
];
