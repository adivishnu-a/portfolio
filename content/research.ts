export const publication = {
  chapter: 14,
  title:
    "Machine Learning Approach to Determine and Predict the Scattering Coefficients of Myocardium Tissue in the NIR Band for In-Vivo Communications, 6G Networks",
  book: "Edge-Enabled 6G Networking: Foundations, Technologies, and Applications",
  editors: [
    "Tamoghna Ojha",
    "Md Muzakkir Hussain",
    "Samaresh Bera",
    "Nurzaman Ahmed",
    "Sudip Misra",
  ],
  publisher: "Springer Nature Switzerland",
  /** ISO date */
  published: "2026-07-17",
  pages: "319 to 344",
  isbn: { print: "978-3-032-19041-3", ebook: "978-3-032-19042-0" },
  doi: "10.1007/978-3-032-19042-0_14",
  url: "https://doi.org/10.1007/978-3-032-19042-0_14",
  bookUrl: "https://link.springer.com/book/10.1007/978-3-032-19042-0",
  authors: [
    "Raja Manjula",
    "Adi Vishnu Avula",
    "Abdul Jawad Khan",
    "Chiranjeevi Thota",
    "Venkata Kavyanjali Munipallle",
    "Sabita Langkam",
  ],
  lab: "Nano Communication and Networking Lab, SRM University AP",
  summary:
    "Light in the near-infrared band scatters as it passes through heart muscle, and how much it scatters says something about the tissue. Measuring that directly is expensive, so we generated scattering values from an analytical tissue model and trained four regression models to predict them at wavelengths that had not been measured. A small study; the point was to test whether machine learning can stand in for the measurement.",
};

export const patent = {
  number: "202441090535",
  office: "Indian Patent Office",
  status: "Filed and published, awaiting examination",
};

export const capstone = {
  title:
    "Leveraging Deep Learning for Automatic Feature Extraction in Microarray Analysis",
  note: "B.Tech capstone, unpublished",
  year: 2025,
  institution: "SRM University AP",
  guide: "Prof. Naveen Kumar Mahamkali",
  team: [
    "Adi Vishnu Avula",
    "Krishna Varshita Borra",
    "Sai Deepika Daram",
    "Kavyanjali Munipalle",
  ],
  summary:
    "Classifying five cancer types from gene expression data, where there are far more genes than samples and deep learning overfits on its own. Selecting features first and then training a neural ensemble worked; applying image-style deep networks directly to the data did not.",
};
