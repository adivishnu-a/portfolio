import type { Photo } from "./types";

export const site = {
  name: "Adi Vishnu Avula",
  title: "Software Engineer",
  tagline: "Software engineer. Backend systems and applied machine learning.",
  status: "Hyderabad, India. Open to opportunities.",
  location: { city: "Hyderabad", country: "IN" },
  email: "adivishnu311@gmail.com",
  url: "https://adiavula.vercel.app",
  description:
    "Adi Vishnu Avula is a software engineer in Hyderabad, India, working on backend systems and applied machine learning. Formerly SDE-1 at Darwinbox. Co-author of a Springer chapter on predicting optical scattering in heart tissue with machine learning.",
  links: {
    github: "https://github.com/adivishnu-a",
    linkedin: "https://www.linkedin.com/in/adi-vishnu-avula/",
    resume: "/resume.pdf",
    source: "https://github.com/adivishnu-a/portfolio",
  },
  photo: {
    src: "/photo.jpg",
    alt: "Adi Vishnu Avula",
    width: 1254,
    height: 1254,
  } as Photo,
};
