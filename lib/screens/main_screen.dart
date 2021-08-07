import 'package:flutter/material.dart';
import 'package:web_portfolio/responsive.dart';

import '../constants.dart';
import 'components/side_bar.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key, required this.children}) : super(key: key);

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Responsive.isDesktop(context)
          ? null
          : AppBar(
              backgroundColor: bgColor,
              leading: Builder(
                builder: (context) => IconButton(
                  onPressed: () {
                    Scaffold.of(context).openDrawer();
                  },
                  icon: Icon(Icons.menu),
                ),
              ),
            ),
      drawer: SideBar(),
      body: Center(
        child: Container(
          constraints: BoxConstraints(maxWidth: maxWidth, maxHeight: maxHeight),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              if (Responsive.isDesktop(context))
                Expanded(
                  flex: 2,
                  child: SideBar(),
                ),
              SizedBox(width: defaultPadding),
              Expanded(
                flex: 7,
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      ...children,
                      // Place footer here
                    ],
                  ),
                ),
                // Padding(
                //   padding: const EdgeInsets.only(left: defaultPadding),
                //   child: Responsive(
                //     mobile: ProjectsGridView(
                //         crossAxisCount: 1, childAspectRatio: 1.7),
                //     mobileLarge: ProjectsGridView(crossAxisCount: 2),
                //     tablet: ProjectsGridView(childAspectRatio: 1.1),
                //     desktop: ProjectsGridView(),
                //   ),
                // ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
