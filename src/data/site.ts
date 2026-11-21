export const contact = {
  phone: "+91 63690 93482",
  phoneRaw: "916369093482",
  email: "optikahealthcaredop001@gmail.com",
  founder: "Thangavimmandhan R",
  founderPhone: "+91 99436 45174",
  address: "D No. 510/1, Bathalapalli, Bathalapalli Village, Hosur, Krishnagiri 635109",
};

export const services = [
  {
    number: "01",
    category: "health-camps",
    title: "Corporate Health Check-ups",
    description: "On-site comprehensive health screening camps designed to monitor key employee vitals with zero workplace downtime.",
    iconColor: "teal",
    details: ["Blood pressure & SpO₂ monitoring", "Random blood sugar testing", "Body weight, height & BMI analysis", "Physician health review"],
  },
  {
    number: "02",
    category: "eye-care",
    title: "Comprehensive Eye Check-ups",
    description: "Advanced refractive assessments utilizing computerised auto refractometers combined with manual clinical optometrist examinations.",
    iconColor: "purple",
    details: ["Auto refractometer eye scan", "Visual acuity & clarity test", "Color vision & alignment", "Prescription & specialist consultation"],
  },
  {
    number: "03",
    category: "diagnostics",
    title: "Laboratory Diagnostics",
    description: "Certified diagnostic testing packages, sample collections, and quick turnaround reports for corporate staff and individuals.",
    iconColor: "green",
    details: ["Complete Blood Count (CBC)", "Lipid, Liver & Kidney profiles", "Thyroid (TSH) & HbA1c testing", "Cardio ECG & Pulmonary (PFT) scans"],
  },
  {
    number: "04",
    category: "eyewear",
    title: "Eyewear & Optical Solutions",
    description: "Ergonomic frames and high-definition anti-glare, blue light filtering lenses tailored for desk and computer workers.",
    iconColor: "amber",
    details: ["Single vision & blue-cut lenses", "Bifocal & progressive optics", "Photochromatic UV protection", "Trial frames & personalized fitting"],
  },
  {
    number: "05",
    category: "diagnostics",
    title: "Audiometry & Hearing Screening",
    description: "Pure-tone industrial audiometric testing to detect occupational noise-induced hearing loss in corporate and manufacturing environments.",
    iconColor: "teal",
    details: ["Air conduction hearing test", "Decibel frequency threshold scan", "Occupational fitness certification", "ENT specialist referral support"],
  },
  {
    number: "06",
    category: "health-camps",
    title: "Digital X-Ray & PFT Screening",
    description: "On-site and networked chest imaging and pulmonary function testing to safeguard respiratory health and workplace compliance.",
    iconColor: "purple",
    details: ["Digital chest X-Ray analysis", "Spirometry lung capacity check", "Asthma & bronchitis screening", "Instant digital diagnostic reports"],
  },
];

export const packages = {
  // These are the rates printed in the brochure named "UNPAID".
  // Note: this brochure also prints prices; it does not provide a zero-price diagnostic package list.
  unpaidBrochure: [
    { name: "Bronze", parameters: 29, mrp: 1000, price: 299, tests: ["Complete Blood Count", "Thyroid Stimulating Hormone", "Random Blood Sugar", "Total Cholesterol"] },
    { name: "Silver", parameters: 49, mrp: 2500, price: 499, tests: ["Complete Blood Count", "Random Blood Sugar", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Kidney Function Test"] },
    { name: "Gold", parameters: 69, mrp: 5000, price: 999, tests: ["Complete Blood Count", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus"] },
    { name: "Platinum", parameters: 79, mrp: 7500, price: 1499, tests: ["Complete Blood Count", "Random Blood Sugar", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus", "Erythrocyte Sedimentation Rate", "Complete Urine Examination"] },
    { name: "Diamond", parameters: 99, mrp: 10000, price: 1999, tests: ["Complete Blood Picture", "Random Blood Sugar", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus", "Erythrocyte Sedimentation Rate", "Vitamin D", "Vitamin B12", "ESR", "Complete Urine Examination"] },
  ],
  // These are the rates printed in the brochure named "PAID".
  paidBrochure: [
    { name: "Bronze", parameters: 29, mrp: 1000, price: 299, tests: ["Complete Blood Count", "Thyroid Stimulating Hormone", "Random Blood Sugar", "Total Cholesterol"] },
    { name: "Silver", parameters: 49, mrp: 2500, price: 499, tests: ["Complete Blood Count", "Random Blood Sugar", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Kidney Function Test"] },
    { name: "Gold", parameters: 69, mrp: 5000, price: 799, tests: ["Complete Blood Count", "Random Blood Sugar", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus"] },
    { name: "Platinum", parameters: 79, mrp: 7500, price: 999, tests: ["Complete Blood Count", "Random Blood Sugar", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus", "Erythrocyte Sedimentation Rate", "Complete Urine Examination"] },
    { name: "Diamond", parameters: 99, mrp: 10000, price: 1499, tests: ["Complete Blood Picture", "Random Blood Sugar", "Kidney Function Test", "Liver Function Test", "Thyroid Stimulating Hormone", "Lipid Profile", "Iron Test", "HbA1c", "Calcium", "Phosphorus", "Erythrocyte Sedimentation Rate", "Vitamin D", "Vitamin B12", "ESR", "Complete Urine Examination"] },
  ],
};

export const diagnosticServices = [
  { name: "Eye Check-up", price: 49 },
  { name: "ECG", price: 149 },
  { name: "PFT", price: 149 },
  { name: "Audiometry", price: 149 },
  { name: "X-Ray", price: 249, note: "Negotiable as printed in the brochure" },
];

export const eyewearPrices = [
  { name: "Spectacles starting price", price: "₹499" },
  { name: "Single vision – Anti-reflection", price: "₹999" },
  { name: "Single vision – Blue light filtering", price: "₹1,199" },
  { name: "Bifocal – Anti-reflection", price: "₹1,399" },
  { name: "Progressive – Anti-reflection", price: "₹1,799" },
  { name: "Progressive – Blue light filtering", price: "₹1,999" },
  { name: "Rx power lenses add-on", price: "₹199" },
  { name: "Photochromatic lenses add-on", price: "₹499" },
];

export interface CampStep {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  position: "top" | "bottom";
  theme: "pink" | "teal" | "green" | "yellow" | "purple";
  iconName: "FileSpreadsheet" | "HeartPulse" | "TestTube2" | "Eye" | "Ear" | "Wind" | "Heart" | "Layers" | "Droplets" | "UserCheck";
}

export const campFlowSteps: CampStep[] = [
  {
    id: "registration",
    number: 1,
    title: "Registration",
    subtitle: "Quick Enrollment",
    description: "Fast and simple check-in",
    position: "top",
    theme: "pink",
    iconName: "FileSpreadsheet",
  },
  {
    id: "vitals",
    number: 2,
    title: "Vitals",
    subtitle: "Basic Health Check",
    description: "Height, weight, BMI & BP recorded",
    position: "bottom",
    theme: "teal",
    iconName: "HeartPulse",
  },
  {
    id: "blood-collection",
    number: 3,
    title: "Blood Collection",
    subtitle: "Lab Screening",
    description: "Samples taken for analysis",
    position: "top",
    theme: "green",
    iconName: "TestTube2",
  },
  {
    id: "vision-screening",
    number: 4,
    title: "Vision Screening",
    subtitle: "Eye Check",
    description: "Tests eyesight clarity",
    position: "bottom",
    theme: "yellow",
    iconName: "Eye",
  },
  {
    id: "audiometry",
    number: 5,
    title: "Audiometry",
    subtitle: "Hearing Test",
    description: "Checks hearing levels",
    position: "top",
    theme: "purple",
    iconName: "Ear",
  },
  {
    id: "pft",
    number: 6,
    title: "PFT",
    subtitle: "Lung Function Test",
    description: "Assesses breathing capacity",
    position: "top",
    theme: "pink",
    iconName: "Wind",
  },
  {
    id: "ecg",
    number: 7,
    title: "ECG",
    subtitle: "Heart Check",
    description: "Records heart activity",
    position: "bottom",
    theme: "teal",
    iconName: "Heart",
  },
  {
    id: "digital-xray",
    number: 8,
    title: "Digital X-Ray",
    subtitle: "Imaging Test",
    description: "Internal scan for diagnosis",
    position: "top",
    theme: "green",
    iconName: "Layers",
  },
  {
    id: "urine-collection",
    number: 9,
    title: "Urine Collection",
    subtitle: "Routine Analysis",
    description: "Screens overall health",
    position: "bottom",
    theme: "yellow",
    iconName: "Droplets",
  },
  {
    id: "doctor-consultation",
    number: 10,
    title: "Doctor Consultation",
    subtitle: "Medical Advice",
    description: "Expert review & guidance",
    position: "top",
    theme: "purple",
    iconName: "UserCheck",
  },
];
