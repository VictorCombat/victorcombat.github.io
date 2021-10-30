class Project {
  final String? title, shortDescription, bannerURL;
  final List<ProjectSection>? sections;

  Project(
      {required this.title,
      required this.shortDescription,
      required this.bannerURL,
      required this.sections});
}

class ProjectSection {
  final String? title;

  ProjectSection({required this.title});
}

class TextProjectSection extends ProjectSection {
  final String? text;

  TextProjectSection({String? title, this.text}) : super(title: title);
}

class Gallery extends ProjectSection {
  double? viewportFraction = 0.8;
  final List<String>? imagesURLs;

  Gallery({String? title, this.viewportFraction = 0.8, this.imagesURLs})
      : super(title: title);
}

List<Project> projects = [
  Project(
    title: "3D Mesh Modeling & Deformation",
    shortDescription:
        "3D mesh modeling with Bezier surface and by revolution, mesh deformation, UI made with QT",
    bannerURL: "images/3d-modeling/img_glass_shear.jpg",
    sections: [
      TextProjectSection(
          title: "About",
          text:
              "This is a small project during my first semester of my last year of studies in computer graphics. The goal was to implement Bezier surface modeling, surface of revolution and mesh deformation using Barr's space transformation. The UI is made with Qt5."),
      TextProjectSection(
          title: "Work Done",
          text: "The following features has been implemented :\n" +
              "   -- Generate Bezier Surface with control points\n" +
              "   -- Generate a model by revolution using a Bezier Curve\n" +
              "   -- Global Deformation : Twist, Taper, Bend, Shear\n" +
              "   -- Local Deformation : Bump"),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.8,
        imagesURLs: [
          "assets/images/3d-modeling/img_bezier_surface_4x4.jpg",
          "assets/images/3d-modeling/img_bezier_surface_6x6.jpg",
          "assets/images/3d-modeling/img_sphere_bump.jpg",
          "assets/images/3d-modeling/img_tube_twist.jpg",
          "assets/images/3d-modeling/img_sof_glass.jpg",
          "assets/images/3d-modeling/img_glass_shear.jpg",
          "assets/images/3d-modeling/img_sof_vase.jpg",
          "assets/images/3d-modeling/img_vase_bend.jpg",
          "assets/images/3d-modeling/img_vase_multiple_deform.jpg",
          "assets/images/3d-modeling/img_object_deform.jpg",
        ],
      ),
    ],
  ),
  Project(
    title: "Representation of the virtual city in Unity",
    shortDescription:
        "3D modeling in the Unity game engine of the city of Lyon from data in CityGML format",
    bannerURL: "images/pom-vcity/lyon_3eme.png",
    sections: [
      TextProjectSection(
          title: "About",
          text:
              "During the second semester of Master 1 Computer Science at the University Claude Bernard Lyon 1, a colleague and I worked on a 4 months project whose objective is to represent the city of Lyon in the game engine Unity."),
      TextProjectSection(
          title: "Work Methodology",
          text: "The work methodology used during this project is an agile methodology, with weekly meetings, « weekly minutes ». The purpose of these meetings was to summarize the work done during the current week and to plan the week coming next.\n" +
              "In addition, to ensure the sustainability of our work, the different researches, technologies and algorithms used have been carefully documented."),
      TextProjectSection(
          title: "Work Done",
          text: "The work done has been organized in a modular way, so that it can be easily modified and reused.\n" +
              "We first had to reuse and isolate a CityGML parser from an already developed software and then develop a module to convert CityGML into OBJ, which is a format supported by Unity.\n" +
              "Moreover, the data being very large, we also had to reuse, isolate and improve CityGML data cutting and splitting modules."),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.8,
        imagesURLs: [
          "assets/images/pom-vcity/lyon_1er_hdv_terreaux_musee_beaux_arts.png",
          "assets/images/pom-vcity/lyon_1er_opera.png",
          "assets/images/pom-vcity/lyon_3eme_desgenettes.png",
          "assets/images/pom-vcity/lyon_5eme_fourviere_02.png",
          "assets/images/pom-vcity/villeurbanne.png",
          "assets/images/pom-vcity/mont_d_or.png",
          "assets/images/pom-vcity/lyon_3eme.png",
        ],
      ),
    ],
  ),
  Project(
    title: "Pac-Man",
    shortDescription: "Replica of the famous Pac-Man game with a level editor.",
    bannerURL: "images/pac-man/pac-man-banner.png",
    sections: [
      TextProjectSection(
          title: "About",
          text:
              "As part of my university training, in the 3rd year of a Computer Science license, this 3-week project aimed to learn to develop/recreate the famous game Pac-Man using the Java programming language, the JavaFX graphic library, with object-oriented programming and MVC architecture.\n\nHead over to https://github.com/VictorCombat/pac-man for more details."),
      TextProjectSection(
          title: "Main Features",
          text: "The main features of the game are :\n" +
              "   -- move Pac-Man through the grid\n" +
              "   -- colliding with enemy ghosts\n" +
              "   -- earn points by collecting white dots\n" +
              "   -- create/edit/delete levels"),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.8,
        imagesURLs: [
          "assets/images/pac-man/pac-man-01.png",
          "assets/images/pac-man/pac-man-02.png",
          "assets/images/pac-man/pac-man-03.png",
          "assets/images/pac-man/pac-man-04.png",
        ],
      ),
    ],
  ),
  Project(
    title: "CryptoTrack",
    shortDescription:
        "CryptoTrack is a cryptocurrency prices tracking application, like Bitcoin, Ethereum & more !",
    bannerURL: "images/cryptotrack/cryptotrack-banner.jpg",
    sections: [
      TextProjectSection(
          title: "About",
          text:
              "CryptoTrack is a cryptocurrency prices tracking application, like Bitcoin, Ethereum & more ! The purpose of this personal project is to learn how to develop a mobile application with a cross-platform framework, Flutter."),
      TextProjectSection(
          title: "Main Features",
          text: "The main features of the mobile-app are :\n" +
              "   -- Fetch data from API\n" +
              "   -- Managing application state\n" +
              "   -- Navigation\n" +
              "   -- 'Pull to refresh'\n" +
              "   -- Automatic fetch data update\n" +
              "   -- Persisting favorites\n" +
              "   -- Reorder favorites (Drag List)\n" +
              "   -- Cryptocurrency details page\n" +
              "   -- Cryptocurrency widget converter\n" +
              "   -- Cryptocurrency search\n" +
              "   -- Cryptocurrencies sorting"),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.35,
        imagesURLs: [
          "assets/images/cryptotrack/cryptotrack-home-page-top.jpg",
          "assets/images/cryptotrack/cryptotrack-home-page-bottom.jpg",
          "assets/images/cryptotrack/cryptotrack-fav-page.jpg",
          "assets/images/cryptotrack/cryptotrack-fav-page-drag.jpg",
          "assets/images/cryptotrack/cryptotrack-converter.jpg",
          "assets/images/cryptotrack/cryptotrack-converter-crypto.jpg",
          "assets/images/cryptotrack/cryptotrack-converter-fiat.jpg",
          "assets/images/cryptotrack/cryptotrack-details-page-1D.jpg",
          "assets/images/cryptotrack/cryptotrack-details-page-6M.jpg",
          "assets/images/cryptotrack/cryptotrack-search-page.jpg",
          "assets/images/cryptotrack/cryptotrack-search-page-searching.jpg",
          "assets/images/cryptotrack/cryptotrack-search-page-sort-modal.jpg",
        ],
      ),
    ],
  ),
  Project(
    title: "Background subtraction & Region Growing",
    shortDescription:
        "Introduction to OpenCV, background subtraction & region growing algorithm.",
    bannerURL: "images/bg-subtraction-region-growing/rg-auto-02.jpg",
    sections: [
      TextProjectSection(
          title: "About",
          text: "As part of the Image analysis course of the Master 1 Computer Science at the University Claude Bernard Lyon 1, we had a project whose objective is to put into practice methods and algorithms of analysis and image processing seen in course." +
              "This project has been realized with the Python version of the OpenCV graphic library specialized in real time image processing.\n" +
              "This report contains the three-part structure of the project." +
              "In the first part, we had to get to know OpenCV with basic processing on images, the second part consisted in extracting the silhouette of a person on a video, and finally we had to implement the region growing algorithm in a third part."),
      TextProjectSection(
          title: "Main Features",
          text: "The main features of the project are :\n" +
              "   -- Step 1 : Getting Started with OpenCV using some common filters\n" +
              "   -- Step 2 : Background Subtraction\n" +
              "   -- Step 3 : Implementing Region Growing algorithm on image\n" +
              "   -- Step 3 bis : Implementing Region Growing algorithm on a video frame using an envelope to reduce the search area and using a grid to place seeds"),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.7,
        imagesURLs: [
          "assets/images/bg-subtraction-region-growing/bg-subtraction-01.png",
          "assets/images/bg-subtraction-region-growing/bg-subtraction-02.png",
          "assets/images/bg-subtraction-region-growing/rg-01.jpg",
          "assets/images/bg-subtraction-region-growing/rg-02.jpg",
          "assets/images/bg-subtraction-region-growing/rg-auto-01.jpg",
          "assets/images/bg-subtraction-region-growing/rg-auto-02.jpg",
        ],
      ),
    ],
  ),
  Project(
    title: "Orbital Defense",
    shortDescription: "Infinite-shooter arcade style game made with Unity.",
    bannerURL: "images/orbital-defense/orbital-defense-banner.jpg",
    sections: [
      TextProjectSection(
          title: "About",
          text: "As I was learning Unity by my own, I wanted to challenge myself to make a game in a week to see what I could do.\n" +
              "The design and development of Orbital Defense was born from this challenge."),
      TextProjectSection(
          title: "Main Features",
          text: "The main features of the game are :\n" +
              "   -- Shoot & destroy enemies to score\n" +
              "   -- Pick up some power-ups\n" +
              "   -- Different enemies archetypes\n" +
              "   -- Bloom effect\n" +
              "   -- Camera shaking effect & particles spawning when destroying enemies"),
      Gallery(
        title: "Gallery",
        viewportFraction: 0.45,
        imagesURLs: [
          "assets/images/orbital-defense/orbital-defense-home-screen.jpg",
          "assets/images/orbital-defense/orbital-defense-ingame-01.jpg",
          "assets/images/orbital-defense/orbital-defense-ingame-02.jpg",
          "assets/images/orbital-defense/orbital-defense-gameover-screen.jpg",
        ],
      ),
    ],
  ),
];
