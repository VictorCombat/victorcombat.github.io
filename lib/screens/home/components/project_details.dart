import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_portfolio/constants.dart';
import 'package:web_portfolio/models/Project.dart';
import 'package:web_portfolio/models/SelectedProjectModel.dart';
import 'package:web_portfolio/responsive.dart';

class ProjectDetailsScreen extends StatelessWidget {
  const ProjectDetailsScreen({
    Key? key,
    required this.selectedProject,
  }) : super(key: key);

  final SelectedProjectModel selectedProject;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        AppBar(
          backgroundColor: secondaryColor,
          leadingWidth: 100,
          leading: Padding(
            padding: const EdgeInsets.all(defaultPadding / 2),
            child: TextButton(
              onPressed: () {
                Provider.of<SelectedProjectModel>(context, listen: false)
                    .setNullProject();
              },
              child: Text(
                "<< Back",
                style: TextStyle(
                  color: primaryColor,
                ),
              ),
            ),
          ),
        ),
        AspectRatio(
          aspectRatio: Responsive.isMobile(context) ? 4 : 4.5,
          child: Stack(
            fit: StackFit.expand,
            children: [
              Image.asset(
                selectedProject.selectedProject!.bannerURL!,
                fit: BoxFit.cover,
              ),
              Container(color: darkColor.withOpacity(0.55)),
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: defaultPadding,
                  vertical: defaultPadding,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      selectedProject.getSelectedProject()!.title!,
                      style: Responsive.isDesktop(context)
                          ? Theme.of(context).textTheme.headline3!.copyWith(
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              )
                          : Theme.of(context).textTheme.headline5!.copyWith(
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        Container(
          color: secondaryColor,
          child: Padding(
            padding: EdgeInsets.symmetric(
              horizontal: Responsive.isMobileLarge(context)
                  ? defaultPadding * 2
                  : defaultPadding * 4,
              vertical: defaultPadding * 2,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children:
                  selectedProject.selectedProject!.sections!.map((element) {
                if (element is TextProjectSection) {
                  TextProjectSection textProjectSection = element;
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        textProjectSection.title!,
                        style: Theme.of(context).textTheme.headline4!.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      SizedBox(height: defaultPadding / 4),
                      Divider(),
                      SizedBox(height: defaultPadding / 2),
                      Text(
                        textProjectSection.text!,
                        textAlign: TextAlign.justify,
                        style: TextStyle(
                          color: Colors.grey,
                          fontSize: 18.0,
                          height: 1.5,
                          letterSpacing: 1.0,
                        ),
                      ),
                      SizedBox(height: defaultPadding * 1.5),
                    ],
                  );
                } else if (element is Gallery) {
                  Gallery gallery = element;
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        gallery.title!,
                        style: Theme.of(context).textTheme.headline4!.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      SizedBox(height: defaultPadding / 4),
                      Divider(),
                      SizedBox(height: defaultPadding / 2),
                      Container(
                        child: CarouselSlider(
                          items: gallery.imagesURLs!.map((i) {
                            return Builder(
                              builder: (BuildContext context) {
                                return Image.asset(
                                  i,
                                  fit: BoxFit.contain,
                                );
                              },
                            );
                          }).toList(),
                          options: CarouselOptions(
                            viewportFraction: gallery.viewportFraction!,
                            enableInfiniteScroll: true,
                            enlargeCenterPage: true,
                          ),
                        ),
                      ),
                      SizedBox(height: defaultPadding),
                    ],
                  );
                } else {
                  return SizedBox();
                }
              }).toList(),
            ),
          ),
        ),
      ],
    );
  }
}
