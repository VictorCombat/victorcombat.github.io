import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_portfolio/models/SelectedProjectModel.dart';
import 'package:web_portfolio/responsive.dart';
import 'package:web_portfolio/screens/home/components/project_details.dart';

import '../constants.dart';
import 'components/side_bar.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({Key? key, required this.children}) : super(key: key);

  final List<Widget> children;

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
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
                  child: ChangeNotifierProvider(
                    create: (context) => SelectedProjectModel(),
                    child: Consumer<SelectedProjectModel>(
                      builder: (context, selectedProject, child) {
                        if (selectedProject.getSelectedProject() != null) {
                          return ProjectDetailsScreen(
                              selectedProject: selectedProject);
                        } else {
                          return Column(
                            children: [
                              ...widget.children,
                              // Place footer here
                            ],
                          );
                        }
                      },
                    ),
                  ),
                ),
              ),
              SizedBox(width: defaultPadding),
            ],
          ),
        ),
      ),
    );
  }
}
