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
  final List<String>? imagesURLs;

  Gallery({String? title, this.imagesURLs}) : super(title: title);
}

List<Project> projects = [
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
        imagesURLs: [
          "images/pom-vcity/lyon_1er_hdv_terreaux_musee_beaux_arts.png",
          "images/pom-vcity/lyon_1er_opera.png",
          "images/pom-vcity/lyon_3eme_desgenettes.png",
          "images/pom-vcity/lyon_5eme_fourviere_02.png",
          "images/pom-vcity/villeurbanne.png",
          "images/pom-vcity/mont_d_or.png",
          "images/pom-vcity/lyon_3eme.png",
        ],
      ),
    ],
  ),
  Project(
    title: "Pac-Man",
    shortDescription: "Replica of the famous Pac-Man game with a level editor.",
    bannerURL: "images/pac-man/pac-man-banner.PNG",
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
        imagesURLs: [
          "images/pac-man/pac-man-01.PNG",
          "images/pac-man/pac-man-02.PNG",
          "images/pac-man/pac-man-03.PNG",
          "images/pac-man/pac-man-04.PNG",
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
        imagesURLs: [
          "images/cryptotrack/cryptotrack-home-page-top.jpg",
          "images/cryptotrack/cryptotrack-home-page-bottom.jpg",
          "images/cryptotrack/cryptotrack-fav-page.jpg",
          "images/cryptotrack/cryptotrack-fav-page-drag.jpg",
          "images/cryptotrack/cryptotrack-converter.jpg",
          "images/cryptotrack/cryptotrack-converter-crypto.jpg",
          "images/cryptotrack/cryptotrack-converter-fiat.jpg",
          "images/cryptotrack/cryptotrack-details-page-1D.jpg",
          "images/cryptotrack/cryptotrack-details-page-6M.jpg",
          "images/cryptotrack/cryptotrack-search-page.jpg",
          "images/cryptotrack/cryptotrack-search-page-searching.jpg",
          "images/cryptotrack/cryptotrack-search-page-sort-modal.jpg",
        ],
      ),
    ],
  ),
  Project(
    title: "Background subtraction & Region Growing",
    shortDescription: "Description project 004",
    bannerURL: "/assets/images/unknown.jpg",
    sections: [
      TextProjectSection(title: "About", text: "A loooooooong description"),
    ],
  ),
  Project(
    title: "Orbital Defense",
    shortDescription: "Description project 005",
    bannerURL: "/assets/images/unknown.jpg",
    sections: [
      TextProjectSection(title: "About", text: "A loooooooong description"),
    ],
  ),
];
