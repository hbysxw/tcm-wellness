export interface Question {
  id: number;
  text: string;
  options: { label: string; score: Record<string, number> }[];
}

export interface ConstitutionType {
  id: string;
  name: string;
  icon: string;
  description: string;
  traits: string[];
  prone: string[];
  advice: string[];
  articleSlug: string;
}

export const constitutionTypes: ConstitutionType[] = [
  {
    id: 'balanced',
    name: 'Balanced',
    icon: '☯',
    description: 'Your body is in a harmonious state. Yin and Yang are balanced, Qi is abundant, and organ functions are coordinated.',
    traits: ['Steady energy throughout the day', 'Good appetite without overeating', 'Sound sleep, easy to fall asleep', 'Even temperament, adaptable to change', 'Healthy complexion with rosy glow'],
    prone: ['Rarely falls ill', 'Quick recovery from minor issues'],
    advice: ['Maintain your balanced lifestyle', 'Eat a varied, moderate diet', 'Exercise regularly but not excessively', 'Keep regular sleep hours'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'qi-deficient',
    name: 'Qi Deficient',
    icon: '💨',
    description: 'Your vital energy (Qi) is insufficient to power daily activities efficiently. The Spleen and Lung systems need support.',
    traits: ['Persistent fatigue, especially in the morning', 'Weak or soft voice', 'Shortness of breath on mild exertion', 'Spontaneous sweating', 'Pale complexion'],
    prone: ['Frequent colds and flu', 'Organ prolapse tendencies', 'Chronic fatigue'],
    advice: ['Eat warm, cooked foods - soups and congee', 'Avoid raw and cold foods and drinks', 'Gentle exercise like walking and Qigong', 'Get adequate rest; avoid overexertion', 'Try acupressure point Stomach 36 (Zusanli)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'yang-deficient',
    name: 'Yang Deficient',
    icon: '❄️',
    description: 'Your warming energy (Yang Qi) is insufficient, leaving you feeling cold and sluggish. The Kidney and Spleen need warmth.',
    traits: ['Cold hands and feet, even in warm weather', 'Aversion to cold and preference for warmth', 'Pale complexion with pale lips', 'Loose stools or morning diarrhea', 'Lower back and knees feel cold or weak'],
    prone: ['Cold-natured diseases', 'Digestive weakness', 'Lower back pain', 'Edema'],
    advice: ['Eat warming foods - ginger, cinnamon, lamb, leeks', 'Avoid raw salads, iced drinks, and fruit from the fridge', 'Keep your lower back and abdomen warm', 'Gentle exercise; avoid excessive sweating', 'Sun exposure in moderation', 'Try acupressure Kidney 3 (Taixi) and Ren 4 (Guanyuan)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'yin-deficient',
    name: 'Yin Deficient',
    icon: '🔥',
    description: 'Your cooling and moistening substance (Yin) is depleted, leading to internal heat and dryness. The Kidney and Liver need nourishment.',
    traits: ['Feeling hot, especially in the afternoon or evening', 'Dry mouth and throat, especially at night', 'Night sweats or hot palms and soles', 'Thin body type', 'Irritability or restlessness'],
    prone: ['Insomnia', 'Dry skin and constipation', 'Menopausal symptoms', 'Chronic low-grade inflammation'],
    advice: ['Eat moistening foods - pear, tofu, sesame, seaweed', 'Avoid spicy, fried, and drying foods', 'Reduce alcohol, coffee, and smoking', 'Go to bed early; avoid overwork', 'Practice calming activities like meditation', 'Try acupressure Kidney 6 (Zhaohai)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'phlegm-damp',
    name: 'Phlegm-Damp',
    icon: '🌧️',
    description: 'Dampness has accumulated in your body due to Spleen weakness, creating a heavy, sluggish state that affects both body and mind.',
    traits: ['Overweight tendency with soft flesh', 'Feeling of heaviness in the body', 'Foggy thinking or brain fog', 'Sticky or sweet taste in the mouth', 'Puffy face or eyelids'],
    prone: ['Metabolic syndrome', 'High cholesterol', 'Sleep apnea', 'Joint pain and stiffness'],
    advice: ['Limit sugar, dairy, fried foods, and refined carbs', 'Eat light, drying foods - radish, barley, mushroom, kelp', 'Drink warm water with a little lemon', 'Consistent aerobic exercise is essential', 'Avoid napping after meals', 'Try acupressure Stomach 40 (Fenglong)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'damp-heat',
    name: 'Damp-Heat',
    icon: '🌡️',
    description: 'Dampness combined with internal heat creates a sticky, hot condition often affecting the skin, digestion, and urinary system.',
    traits: ['Oily skin and hair', 'Acne or skin breakouts', 'Bitter taste in the mouth', 'Heavy sensation with feeling of heat', 'Yellow or greenish discharge'],
    prone: ['Skin infections and acne', 'Urinary tract issues', 'Gallbladder and liver congestion', 'Body odor'],
    advice: ['Avoid greasy, spicy, and sweet foods', 'Eat cooling and bitter foods - bitter melon, cucumber, mung bean, green tea', 'Stay hydrated with water and herbal teas', 'Moderate exercise; avoid stuffy environments', 'Try acupressure Liver 3 (Taichong) and Large Intestine 11 (Quchi)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'blood-stasis',
    name: 'Blood Stasis',
    icon: '🩸',
    description: 'Your blood circulation is sluggish, leading to stagnation patterns. Blood is not flowing smoothly through the vessels and tissues.',
    traits: ['Dark circles under the eyes', 'Purple or dusky complexion', 'Stabbing or fixed location pain', 'Easy bruising', 'Spider veins or varicose veins'],
    prone: ['Cardiovascular issues', 'Chronic pain syndromes', 'Uterine fibroids or endometriosis', 'Poor memory'],
    advice: ['Move your body every day - walking, stretching, dancing', 'Eat warming and blood-moving foods - turmeric, hawthorn, ginger, garlic', 'Avoid cold foods and sedentary lifestyle', 'Manage stress; express emotions', 'Try acupressure Blood Sea (Xuehai, SP10) and Liver 3 (Taichong)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'qi-stagnant',
    name: 'Qi Stagnant',
    icon: '😤',
    description: 'Your Qi flow is blocked, especially the Liver\'s free-flowing function. Emotional stress is the most common underlying cause.',
    traits: ['Mood swings or frequent sighing', 'Tendency toward depression or anxiety', 'PMS with breast tenderness', 'Lump-in-throat sensation', 'Alternating constipation and loose stools'],
    prone: ['Anxiety and depression', 'Thyroid disorders', 'Digestive spasms (IBS)', 'Insomnia from a busy mind'],
    advice: ['Express your emotions - journal, talk, cry, laugh', 'Exercise daily - especially yoga, running, dancing', 'Eat sour foods to gather Qi - lemon, plum, vinegar', 'Practice deep breathing', 'Reduce caffeine and stimulants', 'Try acupressure Liver 3 (Taichong) and Pericardium 6 (Neiguan)'],
    articleSlug: '/article/body/constitution-types',
  },
  {
    id: 'allergic',
    name: 'Sensitive (Te Bing)',
    icon: '🤧',
    description: 'You have a sensitive constitution with immune hypersensitivity. Your body reacts strongly to environmental triggers.',
    traits: ['Seasonal or environmental allergies', 'Food sensitivities', 'Asthma or wheezing', 'Eczema or hives', 'Strong reactions to medications'],
    prone: ['Allergic rhinitis and sinusitis', 'Asthma', 'Eczema and dermatitis', 'Autoimmune tendencies'],
    advice: ['Identify and avoid your known triggers', 'Strengthen Lung Qi with breathing exercises', 'Eat whole foods; minimize processed foods', 'Support immunity - mushrooms, astragalus, ginger', 'Acupuncture can help desensitize allergic responses'],
    articleSlug: '/article/body/constitution-types',
  },
];

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'How is your energy level on most days?',
    options: [
      { label: 'I have steady energy from morning to evening', score: { balanced: 3 } },
      { label: 'I feel tired, especially in the morning', score: { 'qi-deficient': 3 } },
      { label: 'I have bursts of energy but crash easily', score: { 'qi-deficient': 1, 'yin-deficient': 1 } },
      { label: 'I feel heavy and sluggish most of the time', score: { 'phlegm-damp': 3 } },
    ],
  },
  {
    id: 2,
    text: 'How would you describe your body temperature?',
    options: [
      { label: 'I feel comfortable in most temperatures', score: { balanced: 2 } },
      { label: 'I am often cold, especially hands and feet', score: { 'yang-deficient': 3 } },
      { label: 'I feel warm or hot most of the time', score: { 'yin-deficient': 3 } },
      { label: 'I feel hot and sticky', score: { 'damp-heat': 3 } },
    ],
  },
  {
    id: 3,
    text: 'How is your complexion?',
    options: [
      { label: 'Rosy and healthy looking', score: { balanced: 2 } },
      { label: 'Pale or dull', score: { 'qi-deficient': 1, 'yang-deficient': 1 } },
      { label: 'Oily, prone to acne', score: { 'damp-heat': 3 } },
      { label: 'Dark circles or dusky complexion', score: { 'blood-stasis': 3 } },
    ],
  },
  {
    id: 4,
    text: 'How is your appetite and digestion?',
    options: [
      { label: 'Good appetite, normal digestion', score: { balanced: 2 } },
      { label: 'Poor appetite, feel full quickly', score: { 'qi-deficient': 2 } },
      { label: 'Always hungry but not gaining weight', score: { 'yin-deficient': 1, 'damp-heat': 1 } },
      { label: 'Strong appetite with bloating', score: { 'phlegm-damp': 2 } },
    ],
  },
  {
    id: 5,
    text: 'How would you describe your bowel movements?',
    options: [
      { label: 'Regular and well-formed', score: { balanced: 2 } },
      { label: 'Loose or urgent, especially in the morning', score: { 'yang-deficient': 2 } },
      { label: 'Hard, dry, or infrequent', score: { 'yin-deficient': 2, 'blood-stasis': 1 } },
      { label: 'Alternating constipation and loose stools', score: { 'qi-stagnant': 3 } },
    ],
  },
  {
    id: 6,
    text: 'How is your sleep quality?',
    options: [
      { label: 'I fall asleep easily and sleep through the night', score: { balanced: 3 } },
      { label: 'I have trouble falling asleep or wake frequently', score: { 'yin-deficient': 2, 'qi-stagnant': 1 } },
      { label: 'I sleep deeply but need 9+ hours', score: { 'qi-deficient': 2 } },
      { label: 'I feel tired but have trouble staying asleep', score: { 'blood-stasis': 1, 'yin-deficient': 1 } },
    ],
  },
  {
    id: 7,
    text: 'How is your thirst?',
    options: [
      { label: 'Normal thirst, satisfied with regular drinking', score: { balanced: 2 } },
      { label: 'Not very thirsty; I often forget to drink', score: { 'phlegm-damp': 2 } },
      { label: 'Frequently thirsty, especially for cold drinks', score: { 'yin-deficient': 2, 'damp-heat': 1 } },
      { label: 'Dry mouth but not actually thirsty', score: { 'qi-stagnant': 1, 'blood-stasis': 1 } },
    ],
  },
  {
    id: 8,
    text: 'How would you describe your voice?',
    options: [
      { label: 'Clear and at a normal volume', score: { balanced: 2 } },
      { label: 'Soft or weak; people ask me to speak up', score: { 'qi-deficient': 3 } },
      { label: 'Loud and forceful', score: { 'damp-heat': 1 } },
      { label: 'I sigh frequently', score: { 'qi-stagnant': 3 } },
    ],
  },
  {
    id: 9,
    text: 'How often do you catch colds or get sick?',
    options: [
      { label: 'Rarely - once a year or less', score: { balanced: 2 } },
      { label: 'Frequently - several times a year', score: { 'qi-deficient': 2, 'allergic': 1 } },
      { label: 'I have allergies more than actual colds', score: { 'allergic': 3 } },
      { label: 'I dont get sick often, but recovery is slow', score: { 'qi-deficient': 1, 'blood-stasis': 1 } },
    ],
  },
  {
    id: 10,
    text: 'How is your body weight and build?',
    options: [
      { label: 'Proportional and stable', score: { balanced: 2 } },
      { label: 'Thin; I struggle to gain weight', score: { 'yin-deficient': 2 } },
      { label: 'Overweight with soft flesh', score: { 'phlegm-damp': 3 } },
      { label: 'Average but tend to bloat', score: { 'qi-deficient': 1, 'damp-heat': 1 } },
    ],
  },
  {
    id: 11,
    text: 'How sensitive are you to weather changes?',
    options: [
      { label: 'Not particularly sensitive', score: { balanced: 2 } },
      { label: 'Very sensitive to cold and wind', score: { 'yang-deficient': 2, 'qi-deficient': 1 } },
      { label: 'I feel worse in damp or humid weather', score: { 'phlegm-damp': 2 } },
      { label: 'I feel worse in hot weather', score: { 'yin-deficient': 1, 'damp-heat': 1 } },
    ],
  },
  {
    id: 12,
    text: 'How is your skin?',
    options: [
      { label: 'Normal, healthy skin', score: { balanced: 2 } },
      { label: 'Dry or flaky', score: { 'yin-deficient': 2 } },
      { label: 'Oily, prone to breakouts', score: { 'damp-heat': 3 } },
      { label: 'Easy bruising or visible veins', score: { 'blood-stasis': 2 } },
    ],
  },
  {
    id: 13,
    text: 'How do you typically feel emotionally?',
    options: [
      { label: 'Generally calm and even-tempered', score: { balanced: 3 } },
      { label: 'Anxious or prone to worry', score: { 'qi-deficient': 1, 'qi-stagnant': 2 } },
      { label: 'Irritable or easily frustrated', score: { 'qi-stagnant': 1, 'damp-heat': 1, 'yin-deficient': 1 } },
      { label: 'Tend to feel down or melancholic', score: { 'qi-stagnant': 2, 'blood-stasis': 1 } },
    ],
  },
  {
    id: 14,
    text: 'How is your mouth and taste?',
    options: [
      { label: 'Normal taste, fresh breath', score: { balanced: 2 } },
      { label: 'Sweet or sticky taste', score: { 'phlegm-damp': 3 } },
      { label: 'Bitter taste, especially in the morning', score: { 'damp-heat': 2 } },
      { label: 'No special taste but dry mouth', score: { 'yin-deficient': 1 } },
    ],
  },
  {
    id: 15,
    text: 'Do you experience any pain?',
    options: [
      { label: 'No significant pain', score: { balanced: 2 } },
      { label: 'Dull, heavy aches', score: { 'phlegm-damp': 1, 'yang-deficient': 1 } },
      { label: 'Sharp, stabbing pain in fixed locations', score: { 'blood-stasis': 3 } },
      { label: 'Distending pain that moves around', score: { 'qi-stagnant': 2 } },
    ],
  },
  {
    id: 16,
    text: 'How is your sensitivity to cold or heat in your hands and feet?',
    options: [
      { label: 'Normal temperature', score: { balanced: 2 } },
      { label: 'Hands and feet are often cold', score: { 'yang-deficient': 3 } },
      { label: 'Palms and soles feel hot', score: { 'yin-deficient': 2 } },
      { label: 'Hands and feet feel hot and sweaty', score: { 'damp-heat': 2 } },
    ],
  },
  {
    id: 17,
    text: 'How is your memory and concentration?',
    options: [
      { label: 'Good memory and clear thinking', score: { balanced: 2 } },
      { label: 'Brain fog; trouble focusing', score: { 'phlegm-damp': 2, 'qi-deficient': 1 } },
      { label: 'Poor memory, especially recent events', score: { 'blood-stasis': 1, 'yin-deficient': 1 } },
      { label: 'My mind races but I forget things', score: { 'qi-stagnant': 1, 'yin-deficient': 1 } },
    ],
  },
  {
    id: 18,
    text: 'How is your reaction to stress?',
    options: [
      { label: 'I handle stress well and recover quickly', score: { balanced: 2 } },
      { label: 'Stress exhausts me completely', score: { 'qi-deficient': 2 } },
      { label: 'Stress makes me irritable and hot', score: { 'damp-heat': 1, 'yin-deficient': 1 } },
      { label: 'Stress makes me want to withdraw', score: { 'qi-stagnant': 2 } },
    ],
  },
  {
    id: 19,
    text: 'Do you have any allergies or sensitivities?',
    options: [
      { label: 'None or very mild', score: { balanced: 2 } },
      { label: 'Seasonal allergies (pollen, hayfever)', score: { 'allergic': 3 } },
      { label: 'Food allergies or sensitivities', score: { 'allergic': 2 } },
      { label: 'Skin reacts easily to products or environment', score: { 'allergic': 2, 'damp-heat': 1 } },
    ],
  },
  {
    id: 20,
    text: 'How is your sweat pattern?',
    options: [
      { label: 'Normal sweat with exercise or heat', score: { balanced: 2 } },
      { label: 'I sweat easily, even with minimal activity', score: { 'qi-deficient': 2 } },
      { label: 'Night sweats', score: { 'yin-deficient': 3 } },
      { label: 'I rarely sweat', score: { 'blood-stasis': 1, 'yang-deficient': 1 } },
    ],
  },
  {
    id: 21,
    text: 'How are your fingernails?',
    options: [
      { label: 'Pink, strong, with healthy moons', score: { balanced: 2 } },
      { label: 'Pale or brittle', score: { 'qi-deficient': 1, 'blood-stasis': 1 } },
      { label: 'Thin, dry, or ridged', score: { 'yin-deficient': 1, 'blood-stasis': 1 } },
      { label: 'Purplish or dusky nail beds', score: { 'blood-stasis': 2 } },
    ],
  },
  {
    id: 22,
    text: 'How is your lower back and knees?',
    options: [
      { label: 'No issues', score: { balanced: 2 } },
      { label: 'Lower back feels weak or achy', score: { 'yang-deficient': 1, 'qi-deficient': 1 } },
      { label: 'Knees feel weak or cold', score: { 'yang-deficient': 2 } },
      { label: 'Lower back aches, especially after exertion', score: { 'yin-deficient': 1 } },
    ],
  },
  {
    id: 23,
    text: 'How often do you feel short of breath?',
    options: [
      { label: 'Almost never', score: { balanced: 2 } },
      { label: 'During mild exertion or climbing stairs', score: { 'qi-deficient': 3 } },
      { label: 'I sigh or yawn frequently to feel satisfied', score: { 'qi-stagnant': 2 } },
      { label: 'Feeling of oppression in the chest', score: { 'qi-stagnant': 1, 'blood-stasis': 1 } },
    ],
  },
  {
    id: 24,
    text: 'What is your typical urine color?',
    options: [
      { label: 'Clear to light yellow', score: { balanced: 2 } },
      { label: 'Clear and frequent, especially at night', score: { 'yang-deficient': 2 } },
      { label: 'Dark or scanty', score: { 'yin-deficient': 1, 'damp-heat': 2 } },
      { label: 'Cloudy or turbid', score: { 'phlegm-damp': 2 } },
    ],
  },
  {
    id: 25,
    text: 'How do you typically cope with challenges?',
    options: [
      { label: 'I face them calmly and find solutions', score: { balanced: 2 } },
      { label: 'I worry excessively', score: { 'qi-deficient': 1, 'allergic': 1 } },
      { label: 'I get frustrated or angry', score: { 'qi-stagnant': 2, 'damp-heat': 1 } },
      { label: 'I feel overwhelmed and want to give up', score: { 'qi-deficient': 1, 'qi-stagnant': 1 } },
    ],
  },
  {
    id: 26,
    text: 'How is your hair?',
    options: [
      { label: 'Healthy, normal shine', score: { balanced: 2 } },
      { label: 'Dry and lifeless', score: { 'yin-deficient': 1, 'blood-stasis': 1 } },
      { label: 'Oily, needs washing often', score: { 'damp-heat': 2 } },
      { label: 'Thinning or premature graying', score: { 'yin-deficient': 1, 'blood-stasis': 1 } },
    ],
  },
  {
    id: 27,
    text: 'Do you have any lumps, nodules, or swelling?',
    options: [
      { label: 'None', score: { balanced: 2 } },
      { label: 'A tendency to swell or puffiness', score: { 'phlegm-damp': 2 } },
      { label: 'Small lumps under the skin', score: { 'phlegm-damp': 2 } },
      { label: 'Varicose veins or visible stagnation', score: { 'blood-stasis': 2 } },
    ],
  },
  {
    id: 28,
    text: 'How sensitive are you to food?',
    options: [
      { label: 'I can eat most things without issues', score: { balanced: 2 } },
      { label: 'Cold foods upset my stomach', score: { 'yang-deficient': 2 } },
      { label: 'Greasy foods make me feel heavy', score: { 'phlegm-damp': 2 } },
      { label: 'Spicy foods cause heat symptoms', score: { 'yin-deficient': 1, 'damp-heat': 1 } },
    ],
  },
  {
    id: 29,
    text: 'How is your vision?',
    options: [
      { label: 'Normal or corrected to normal', score: { balanced: 2 } },
      { label: 'Dry eyes or blurry vision', score: { 'yin-deficient': 1, 'blood-stasis': 1 } },
      { label: 'Eyes feel tired and heavy', score: { 'qi-deficient': 1, 'phlegm-damp': 1 } },
      { label: 'Red or irritated eyes', score: { 'damp-heat': 2 } },
    ],
  },
  {
    id: 30,
    text: 'Overall, how would you rate your health?',
    options: [
      { label: 'Excellent - I rarely have complaints', score: { balanced: 3 } },
      { label: 'Good but I get tired easily', score: { 'qi-deficient': 2 } },
      { label: 'Fair - I have some ongoing health nags', score: { 'qi-stagnant': 1, 'phlegm-damp': 1 } },
      { label: 'I have multiple sensitivities', score: { 'allergic': 2 } },
    ],
  },
];